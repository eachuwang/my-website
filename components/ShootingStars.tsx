'use client';

import { useState, useEffect } from 'react';

interface Meteor {
  id: number;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  angle: number;
  size: number;
}

export default function ShootingStars() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const createMeteor = (): Meteor => {
      const id = Date.now() + Math.random();
      const delay = Math.random() * 5000; // 0-5s 随机延迟
      const duration = 1 + Math.random() * 0.8; // 1-1.8s 划过时间
      const startX = Math.random() * 100; // 0-100% 随机起点X
      const startY = Math.random() * 60; // 0-60% 随机起点Y（上半部分）
      const angle = 35 + Math.random() * 20; // 35-55度斜角
      const size = 1 + Math.random() * 1.5; // 1-2.5px 宽度

      return { id, delay, duration, startX, startY, angle, size };
    };

    const scheduleNextMeteor = () => {
      const interval = 3000 + Math.random() * 5000; // 3-8秒随机间隔
      const meteor = createMeteor();

      setMeteors((prev) => [...prev, meteor]);

      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
        scheduleNextMeteor();
      }, interval);
    };

    // 初始延迟后开始
    const initialTimeout = setTimeout(scheduleNextMeteor, 2000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="shooting-stars-container">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="shooting-star"
          style={{
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            animationDelay: `${meteor.delay}ms`,
            animationDuration: `${meteor.duration}s`,
            '--meteor-angle': `${meteor.angle}deg`,
            '--meteor-size': `${meteor.size}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
