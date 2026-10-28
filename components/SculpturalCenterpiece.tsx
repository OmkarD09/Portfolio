'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function SculpturalCenterpiece() {
  const prefersReducedMotion = useReducedMotion();
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({
      x: y * -10, // Max 5 deg tilt
      y: x * 10,
    });
  };

  const handlePointerLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Outer Calibration Frame Annotations */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 text-[10px] text-taupe-muted">
        <div className="flex items-center justify-between">
          <samp className="font-mono text-natural-taupe">RAD // 137.5°</samp>
          <samp className="font-mono text-natural-taupe">SYS // BIOMORPHIC</samp>
        </div>
        <div className="flex items-center justify-between">
          <samp className="font-mono text-natural-taupe">AXIS // Z-ROT</samp>
          <samp className="font-mono text-natural-taupe">RATIO // 1.618</samp>
        </div>
      </div>

      {/* Kinetic Interactive Sculptural Body */}
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          y: prefersReducedMotion ? 0 : [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          },
          rotateX: { type: 'spring', damping: 20, stiffness: 120 },
          rotateY: { type: 'spring', damping: 20, stiffness: 120 },
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Engineered organic sculptural centerpiece"
          role="img"
        >
          {/* Defs for gradients & lighting */}
          <defs>
            <radialGradient id="sculptureLighting" cx="36%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#F5E6C5" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#9F886F" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#3F422E" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#222222" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#151515" stopOpacity="1" />
            </radialGradient>

            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF8A3D" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FF8A3D" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FF8A3D" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="mantleLighting" cx="42%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#555A3E" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3F422E" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#222222" stopOpacity="1" />
            </radialGradient>
          </defs>

          {/* Background Ambient Resonance Field */}
          <circle cx="250" cy="250" r="215" fill="url(#coreGlow)" />

          {/* Architectural Coordinate Grid Rings */}
          <circle
            cx="250"
            cy="250"
            r="205"
            stroke="#2E2E2E"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="250"
            cy="250"
            r="165"
            stroke="#3F422E"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle
            cx="250"
            cy="250"
            r="125"
            stroke="#2E2E2E"
            strokeWidth="0.75"
          />

          {/* Tangent Alignment Vectors */}
          <line x1="250" y1="25" x2="250" y2="475" stroke="#2E2E2E" strokeWidth="0.75" />
          <line x1="25" y1="250" x2="475" y2="250" stroke="#2E2E2E" strokeWidth="0.75" />
          <line x1="90" y1="90" x2="410" y2="410" stroke="#2E2E2E" strokeWidth="0.5" strokeDasharray="3 6" />

          {/* Sculptural Strata 1: Foundation Geological Bedrock with Organic Lobes */}
          <path
            d="M250 72C345 70 425 135 428 230C432 328 372 418 278 426C182 434 88 372 74 278C60 182 152 74 250 72Z"
            fill="#222222"
            stroke="#2E2E2E"
            strokeWidth="2"
          />

          {/* Sculptural Strata 2: Organic Olive Mantle with Asymmetric Crevices */}
          <path
            d="M262 104C338 102 402 154 396 238C390 324 336 388 252 392C166 396 108 334 104 248C100 162 184 106 262 104Z"
            fill="url(#mantleLighting)"
            stroke="#555A3E"
            strokeWidth="1.5"
          />

          {/* Sculptural Strata 3: Biomorphic Contour Ribbons */}
          <path
            d="M242 128C314 126 368 172 362 242C356 312 304 362 232 360C162 358 126 298 128 228C130 158 172 130 242 128Z"
            fill="#3F422E"
            stroke="#9F886F"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Sculptural Strata 4: Flowing Warm Ivory Crest with Restrained Depth */}
          <path
            d="M232 148C294 138 348 182 338 248C328 314 280 344 218 338C156 332 140 274 146 218C152 162 174 158 232 148Z"
            fill="url(#sculptureLighting)"
          />

          {/* Fine Shading Ridge Highlighting Material Transition */}
          <path
            d="M228 152C282 144 326 186 320 242C314 298 274 324 222 320"
            stroke="#F5E6C5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* Sculptural Strata 5: Internal Aperture & Focal Core Recess */}
          <path
            d="M252 174C290 174 322 206 316 252C310 296 278 322 234 316C190 310 174 272 180 234C186 196 214 174 252 174Z"
            fill="#151515"
            stroke="#9F886F"
            strokeWidth="1.5"
          />

          {/* Precision Golden Spiral Curves (Engineering + Biology) */}
          <path
            d="M250 250 C265 250 275 240 275 225 C275 205 255 190 235 190 C205 190 180 215 180 245 C180 285 215 320 255 320 C305 320 345 280 345 230 C345 170 295 125 235 125"
            stroke="#F5E6C5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M250 250 C240 250 228 258 228 270 C228 284 245 298 262 298 C284 298 304 280 304 255 C304 224 274 198 240 198"
            stroke="#FF8A3D"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Central Engineered Anchor Node */}
          <circle cx="250" cy="250" r="11" fill="#151515" stroke="#FF8A3D" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="4.5" fill="#FF8A3D" />

          {/* Constellation Calibration Ticks & Nodes */}
          <circle cx="275" cy="225" r="3" fill="#F5E6C5" />
          <circle cx="235" cy="190" r="2.5" fill="#F5E6C5" />
          <circle cx="345" cy="230" r="3.2" fill="#FF8A3D" />
          <circle cx="180" cy="245" r="2.5" fill="#9F886F" />
          <circle cx="228" cy="270" r="2.5" fill="#FF8A3D" />

          {/* Exterior Vector Calibration Markings */}
          <rect x="246" y="18" width="8" height="2" fill="#FF8A3D" />
          <rect x="246" y="480" width="8" height="2" fill="#9F886F" />
          <rect x="18" y="246" width="2" height="8" fill="#9F886F" />
          <rect x="480" y="246" width="2" height="8" fill="#FF8A3D" />
        </svg>
      </motion.div>
    </div>
  );
}
