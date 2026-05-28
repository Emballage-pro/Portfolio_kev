import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  baseSpeed: number;
}

interface RedStarFieldProps {
  isDark: boolean;
}

export function RedStarField({ isDark }: RedStarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);
  const isDarkRef = useRef(isDark);
  const scrollRef = useRef(0);
  const isMobileRef = useRef(false);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  const initStars = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    isMobileRef.current = isMobile;
    const count = isMobile
      ? Math.floor((w * h) / 20000)
      : Math.floor((w * h) / 3500);
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        phase: Math.random() * Math.PI * 2,
        baseSpeed: (Math.random() - 0.5) * 0.15,
      });
    }
    starsRef.current = stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const applyResize = () => {
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio, isMobile ? 1 : 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars(w, h);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(applyResize, 200);
    };

    applyResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let tabVisible = true;
    const handleVisibility = () => {
      tabVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const nearbyPool: { x: number; y: number }[] = [];

    const animate = (time: number) => {
      frameRef.current = requestAnimationFrame(animate);

      if (!tabVisible) return;

      if (isMobileRef.current) {
        if (time - lastFrameRef.current < 33) {
          return;
        }
        lastFrameRef.current = time;
      }

      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const scroll = scrollRef.current;
      const dark = isDarkRef.current;
      const mouseActive = mx > 0;
      const repulsionRadiusSq = 14400;
      const repulsionRadius = 120;

      let nearbyCount = 0;

      for (let i = 0, len = stars.length; i < len; i++) {
        const s = stars[i];

        const parallaxY = (s.y - scroll * (0.02 + s.size * 0.01)) % h;
        const drawYBase = parallaxY < 0 ? parallaxY + h : parallaxY;

        s.x += s.baseSpeed;
        if (s.x < -5) s.x = w + 5;
        else if (s.x > w + 5) s.x = -5;

        let drawX = s.x;
        let drawY = drawYBase;

        if (mouseActive) {
          const dx = mx - s.x;
          const dy = my - drawYBase;
          const distSq = dx * dx + dy * dy;

          if (distSq < repulsionRadiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (repulsionRadius - dist) / repulsionRadius;
            const invDist = 1 / dist;
            drawX -= dx * invDist * force * 20;
            drawY -= dy * invDist * force * 20;
          }

          if (nearbyCount < 10) {
            const adx = Math.abs(dx);
            const ady = Math.abs(dy);
            if (adx < 100 && ady < 100) {
              if (nearbyCount >= nearbyPool.length) {
                nearbyPool.push({ x: 0, y: 0 });
              }
              nearbyPool[nearbyCount].x = s.x;
              nearbyPool[nearbyCount].y = drawYBase;
              nearbyCount++;
            }
          }
        }

        const twinkle = Math.sin(time * 0.0012 + s.phase) * 0.5 + 0.5;
        const alpha = s.alpha * (0.4 + 0.6 * twinkle);

        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, 6.283185);

        // Red stars
        if (dark) {
          ctx.fillStyle = s.size > 1.5
            ? `rgba(255,50,50,${alpha * 0.8})`
            : `rgba(255,150,150,${alpha * 0.75})`;
        } else {
          ctx.fillStyle = s.size > 1.5
            ? `rgba(200,30,30,${alpha * 0.4})`
            : `rgba(150,80,80,${alpha * 0.35})`;
        }
        ctx.fill();

        // Red glow
        if (s.size > 1.2 && alpha > 0.25) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, s.size * 4, 0, 6.283185);
          ctx.fillStyle = dark
            ? `rgba(255,40,40,${alpha * 0.1})`
            : `rgba(200,50,50,${alpha * 0.05})`;
          ctx.fill();
        }
      }

      // Red connection lines
      if (nearbyCount > 1) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < nearbyCount && i < 8; i++) {
          for (let j = i + 1; j < nearbyCount && j < 8; j++) {
            const ddx = nearbyPool[i].x - nearbyPool[j].x;
            const ddy = nearbyPool[i].y - nearbyPool[j].y;
            const dSq = ddx * ddx + ddy * ddy;
            if (dSq < 6400) {
              const lineAlpha = (1 - Math.sqrt(dSq) / 80) * 0.15;
              ctx.strokeStyle = dark
                ? `rgba(220,38,38,${lineAlpha})`
                : `rgba(185,28,28,${lineAlpha * 0.6})`;
              ctx.beginPath();
              ctx.moveTo(nearbyPool[i].x, nearbyPool[i].y);
              ctx.lineTo(nearbyPool[j].x, nearbyPool[j].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
