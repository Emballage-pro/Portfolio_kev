import { useEffect, useRef } from 'react';

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1.5,
  cooldownTime = 0.5,
  className = '',
  textClassName = '',
}: GooeyTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const filterIdRef = useRef(`gooey-filter-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    let textIndex = texts.length - 1;
    let lastTime = performance.now();
    let morph = 0;
    let cooldown = cooldownTime;
    let animId: number;
    let isVisible = true;
    const isMobile = window.innerWidth < 1024;
    let lastFrameTime = 0;

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible' && isInViewport;
      if (isVisible) lastTime = performance.now();
    };

    let isInViewport = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting;
        isVisible = document.visibilityState === 'visible' && isInViewport;
        if (isVisible) lastTime = performance.now();
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) io.observe(containerRef.current);
    document.addEventListener('visibilitychange', handleVisibility);

    const setMorph = (fraction: number) => {
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (t1 && t2) {
        t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        const f = 1 - fraction;
        t1.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`;
        t1.style.opacity = `${Math.pow(f, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (t1 && t2) {
        t2.style.filter = '';
        t2.style.opacity = '100%';
        t1.style.filter = '';
        t1.style.opacity = '0%';
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    function animate() {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      if (isMobile) {
        const now = performance.now();
        if (now - lastFrameTime < 33) return;
        lastFrameTime = now;
      }

      const now = performance.now();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          const t1 = text1Ref.current;
          const t2 = text2Ref.current;
          if (t1 && t2) {
            t1.textContent = texts[textIndex % texts.length];
            t2.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      io.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden' }}>
        <defs>
          <filter id={filterIdRef.current}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="flex items-center justify-center w-full h-full"
        style={{ filter: `url(#${filterIdRef.current})` }}
      >
        <span
          ref={text1Ref}
          className={`absolute inline-block select-none text-center ${textClassName}`}
        />
        <span
          ref={text2Ref}
          className={`absolute inline-block select-none text-center ${textClassName}`}
        />
      </div>
    </div>
  );
}
