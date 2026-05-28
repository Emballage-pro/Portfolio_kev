import { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_isDark;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * snoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;

    float t = u_time * 0.15;

    vec2 q = vec2(fbm(uv * 2.0 + t * 0.3), fbm(uv * 2.0 + vec2(1.7, 9.2) + t * 0.2));

    float mouseDist = length(uv - mouse);
    float mouseInfluence = smoothstep(0.4, 0.0, mouseDist) * 0.15;
    q += mouseInfluence * vec2(sin(t * 2.0), cos(t * 2.0));

    vec2 r = vec2(fbm(uv * 3.0 + q + vec2(1.7, 9.2) + t * 0.15), fbm(uv * 3.0 + q + vec2(8.3, 2.8) + t * 0.12));

    float f = fbm(uv * 2.0 + r);

    // Dark red colors for dark mode
    vec3 darkCol1 = vec3(0.08, 0.01, 0.01);
    vec3 darkCol2 = vec3(0.15, 0.02, 0.03);
    vec3 darkCol3 = vec3(0.12, 0.01, 0.02);
    vec3 darkCol4 = vec3(0.18, 0.03, 0.04);

    // Light colors for light mode
    vec3 lightCol1 = vec3(0.98, 0.95, 0.95);
    vec3 lightCol2 = vec3(0.98, 0.90, 0.90);
    vec3 lightCol3 = vec3(0.98, 0.93, 0.93);
    vec3 lightCol4 = vec3(0.98, 0.88, 0.88);

    vec3 col1 = mix(lightCol1, darkCol1, u_isDark);
    vec3 col2 = mix(lightCol2, darkCol2, u_isDark);
    vec3 col3 = mix(lightCol3, darkCol3, u_isDark);
    vec3 col4 = mix(lightCol4, darkCol4, u_isDark);

    vec3 color = mix(col1, col2, clamp(f * f * 4.0, 0.0, 1.0));
    color = mix(color, col3, clamp(length(q), 0.0, 1.0));
    color = mix(color, col4, clamp(length(r.x), 0.0, 1.0));

    // Red glow on mouse hover
    float darkGlow = smoothstep(0.4, 0.0, mouseDist) * 0.25 * u_isDark;
    float lightGlow = smoothstep(0.35, 0.0, mouseDist) * 0.08 * (1.0 - u_isDark);
    vec3 darkGlowColor = vec3(0.8, 0.1, 0.15);
    vec3 lightGlowColor = vec3(0.95, 0.3, 0.35);
    color += darkGlowColor * darkGlow;
    color -= lightGlowColor * lightGlow * 0.3;
    color += lightGlowColor * lightGlow * 0.15;

    float vig = 1.0 - smoothstep(0.5, 1.5, length(uv - 0.5) * 1.1);
    color *= mix(0.97, vig, u_isDark * 0.35 + (1.0 - u_isDark) * 0.15);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface RedShaderBackgroundProps {
  isDark: boolean;
}

export function RedShaderBackground({ isDark }: RedShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const startTimeRef = useRef(performance.now());
  const isDarkRef = useRef(isDark ? 1.0 : 0.0);
  const isMobileRef = useRef(false);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    isDarkRef.current = isDark ? 1.0 : 0.0;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, premultipliedAlpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uIsDark = gl.getUniformLocation(program, 'u_isDark');

    let currentWidth = 0;
    let currentHeight = 0;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const applyResize = () => {
      isMobileRef.current = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio, isMobileRef.current ? 0.75 : 1.5);
      currentWidth = window.innerWidth * dpr;
      currentHeight = window.innerHeight * dpr;
      canvas.width = currentWidth;
      canvas.height = currentHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, currentWidth, currentHeight);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(applyResize, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      mouseRef.current.x = e.clientX * dpr;
      mouseRef.current.y = (window.innerHeight - e.clientY) * dpr;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    applyResize();

    let tabVisible = true;
    const handleVisibility = () => {
      tabVisible = document.visibilityState === 'visible';
      if (tabVisible) startTimeRef.current = performance.now() - (performance.now() - startTimeRef.current);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      frameRef.current = requestAnimationFrame(render);

      if (!tabVisible) return;

      if (isMobileRef.current) {
        const now = performance.now();
        if (now - lastFrameTimeRef.current < 33) {
          return;
        }
        lastFrameTimeRef.current = now;
      }

      const time = (performance.now() - startTimeRef.current) / 1000;
      gl.uniform2f(uResolution, currentWidth, currentHeight);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uIsDark, isDarkRef.current);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}
