'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const depthMap = new Map<Element, number>();

    // 创建星云背景
    const createNebula = () => {
      const nebulas = [
        { x: 15, y: 20, size: 400, color: '76, 201, 240', opacity: 0.04 },
        { x: 75, y: 60, size: 500, color: '167, 139, 250', opacity: 0.03 },
        { x: 45, y: 80, size: 450, color: '52, 211, 153', opacity: 0.025 },
        { x: 85, y: 15, size: 350, color: '244, 114, 182', opacity: 0.02 },
        { x: 30, y: 55, size: 380, color: '251, 191, 36', opacity: 0.015 },
      ];

      nebulas.forEach((n) => {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        nebula.style.cssText = `
          position: absolute;
          left: ${n.x}%;
          top: ${n.y}%;
          width: ${n.size}px;
          height: ${n.size}px;
          background: radial-gradient(ellipse at center, rgba(${n.color}, ${n.opacity}) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          will-change: transform;
        `;
        depthMap.set(nebula, 0.05);
        container.appendChild(nebula);
      });
    };

    // 创建星星
    const createStars = () => {
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const rand = Math.random();
        let starClass = 'star';

        if (rand > 0.97) {
          starClass += ' supernova';
        } else if (rand > 0.9) {
          starClass += ' large';
        } else if (rand > 0.5) {
          starClass += ' medium';
        }

        star.className = starClass;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--twinkle-duration', `${1.5 + Math.random() * 4}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 4}s`);
        star.style.willChange = 'transform';

        const brightness = 0.2 + Math.random() * 0.8;
        (star as HTMLElement).style.opacity = String(brightness);

        const depth = 0.1 + Math.random() * 0.4;
        depthMap.set(star, depth);

        container.appendChild(star);
      }
    };

    // 创建恒星（类似太阳的发光星球）
    const createStars2 = () => {
      const stars2 = [
        { x: 10, y: 15, size: 8, color: '#ffcc66', glow: 'rgba(255, 200, 100, 0.6)' },
        { x: 85, y: 35, size: 6, color: '#ff9966', glow: 'rgba(255, 150, 100, 0.5)' },
        { x: 70, y: 70, size: 5, color: '#66ccff', glow: 'rgba(100, 200, 255, 0.5)' },
      ];

      stars2.forEach((s) => {
        const star2 = document.createElement('div');
        star2.className = 'star2';
        star2.style.cssText = `
          position: absolute;
          left: ${s.x}%;
          top: ${s.y}%;
          width: ${s.size}px;
          height: ${s.size}px;
          background: radial-gradient(circle at 30% 30%, ${s.color}, ${s.color}88 40%, transparent 70%);
          border-radius: 50%;
          box-shadow: 0 0 ${s.size * 2}px ${s.glow}, 0 0 ${s.size * 4}px ${s.glow};
          animation: supernova 3s ease-in-out infinite;
          will-change: transform;
        `;
        depthMap.set(star2, 0.2);
        container.appendChild(star2);
      });
    };

    // 创建行星
    const createPlanets = () => {
      const planets: Array<{
        x: number;
        y: number;
        size: number;
        baseColor: string;
        ring: boolean;
        ringTilt?: number;
        ringRotate?: number;
      }> = [
        { x: 82, y: 22, size: 35, baseColor: '80, 100, 120', ring: true, ringTilt: 25, ringRotate: 15 },
        { x: 12, y: 65, size: 22, baseColor: '100, 80, 120', ring: false },
        { x: 68, y: 78, size: 16, baseColor: '80, 120, 100', ring: false },
      ];

      planets.forEach((p) => {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.cssText = `
          position: absolute;
          left: ${p.x}%;
          top: ${p.y}%;
          width: ${p.size}px;
          height: ${p.size}px;
          background: radial-gradient(circle at 35% 35%,
            rgb(${p.baseColor}),
            rgb(${p.baseColor}) 40%,
            rgb(${p.baseColor.replace(/,\d+$/, ',40')}) 70%,
            rgb(${p.baseColor.replace(/,\d+$/, ',20')}));
          border-radius: 50%;
          box-shadow:
            inset -${p.size * 0.15}px -${p.size * 0.15}px ${p.size * 0.3}px rgba(0,0,0,0.6),
            0 0 ${p.size * 0.3}px rgba(${p.baseColor}, 0.3);
          opacity: 0.75;
          will-change: transform;
        `;

        if (p.ring) {
          const tilt = p.ringTilt ?? 25;
          const rotate = p.ringRotate ?? 0;
          const ring = document.createElement('div');
          ring.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateX(${tilt}deg) rotateZ(${rotate}deg);
            width: ${p.size * 2.2}px;
            height: ${p.size * 0.3}px;
            border: 1.5px solid rgba(${p.baseColor}, 0.35);
            border-radius: 50%;
          `;
          planet.appendChild(ring);

          // 添加第二层环，更自然
          const ring2 = document.createElement('div');
          ring2.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateX(${tilt + 8}deg) rotateZ(${rotate - 10}deg);
            width: ${p.size * 1.6}px;
            height: ${p.size * 0.2}px;
            border: 1px solid rgba(${p.baseColor}, 0.25);
            border-radius: 50%;
          `;
          planet.appendChild(ring2);
        }

        depthMap.set(planet, 0.12);
        container.appendChild(planet);
      });
    };

    // 创建尘埃粒子
    const createDust = () => {
      for (let i = 0; i < 25; i++) {
        const dust = document.createElement('div');
        dust.style.cssText = `
          position: absolute;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${1 + Math.random() * 1.5}px;
          height: ${1 + Math.random() * 1.5}px;
          background: rgba(255, 255, 255, ${0.1 + Math.random() * 0.15});
          border-radius: 50%;
          animation: dustFloat ${6 + Math.random() * 12}s ease-in-out infinite;
          animation-delay: ${Math.random() * 5}s;
          will-change: transform;
        `;
        depthMap.set(dust, 0.3);
        container.appendChild(dust);
      }
    };

    // 初始化所有元素
    createNebula();
    createStars();
    createStars2();
    createPlanets();
    createDust();

    // 平滑视差效果 - 只对鼠标位置使用 lerp
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const smoothing = 0.05;

    const animate = () => {
      // lerp 平滑过渡
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      depthMap.forEach((depth, element) => {
        const moveX = currentX * depth * 0.08;
        const moveY = currentY * depth * 0.08;
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX - window.innerWidth / 2;
      targetY = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="star-field" />;
}