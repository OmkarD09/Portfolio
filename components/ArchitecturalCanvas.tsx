'use client';

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

export function ArchitecturalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Grid configuration
    const spacing = 48;
    let points: Point[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize points
      points = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          points.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }

      if (prefersReducedMotion) {
        drawStatic();
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle architectural crosshairs
      ctx.strokeStyle = 'rgba(63, 66, 46, 0.22)'; // Organic Olive
      ctx.lineWidth = 1;

      points.forEach((pt) => {
        const size = 3;
        ctx.beginPath();
        ctx.moveTo(pt.originX - size, pt.originY);
        ctx.lineTo(pt.originX + size, pt.originY);
        ctx.moveTo(pt.originX, pt.originY - size);
        ctx.lineTo(pt.originX, pt.originY + size);
        ctx.stroke();
      });
    };

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Update and draw points
      const pointSize = 1.2;

      // Draw faint interconnecting grid lines
      ctx.strokeStyle = 'rgba(63, 66, 46, 0.14)'; // Soft Organic Olive
      ctx.lineWidth = 0.75;

      points.forEach((pt) => {
        // Ambient organic breathing motion
        const ambientOffset =
          Math.sin(time + pt.originX * 0.01 + pt.originY * 0.01) * 2.5;

        // Vector displacement from pointer
        const dx = pt.x - mouse.x;
        const dy = pt.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 18;
          const angle = Math.atan2(dy, dx);
          pt.vx += Math.cos(angle) * force * 0.25;
          pt.vy += Math.sin(angle) * force * 0.25;
        }

        // Spring restitution toward origin
        const homeDx = pt.originX - pt.x;
        const homeDy = pt.originY + ambientOffset - pt.y;

        pt.vx += homeDx * 0.045;
        pt.vy += homeDy * 0.045;

        // Friction damping
        pt.vx *= 0.84;
        pt.vy *= 0.84;

        pt.x += pt.vx;
        pt.y += pt.vy;

        // Render point vertex
        const isNearPointer = dist < mouse.radius * 0.7;
        ctx.fillStyle = isNearPointer
          ? 'rgba(255, 138, 61, 0.75)' // Electric Apricot highlight
          : 'rgba(159, 136, 111, 0.28)'; // Natural Taupe

        ctx.fillRect(
          pt.x - pointSize / 2,
          pt.y - pointSize / 2,
          pointSize,
          pointSize
        );
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseleave', handlePointerLeave);

    handleResize();

    if (!prefersReducedMotion) {
      render();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-60" />
    </div>
  );
}
