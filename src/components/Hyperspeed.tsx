import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';

/**
 * Hyperspeed Background Component
 * 
 * A high-performance Three.js based warp speed effect.
 */

export interface HyperspeedOptions {
  onSpeedUp?: () => void;
  onSlowDown?: () => void;
  distortion?: 'turbulentDistortion' | 'mountainDistortion' | 'xyDistortion' | 'LongRaceDistortion' | 'deepDistortion' | 'none';
  length?: number;
  roadWidth?: number;
  islandWidth?: number;
  lanesPerRoad?: number;
  fov?: number;
  fovSpeedUp?: number;
  speedUp?: number;
  carLightsFade?: number;
  totalSideLightSticks?: number;
  lightPairsPerRoadWay?: number;
  shoulderLinesWidthPercentage?: number;
  brokenLinesWidthPercentage?: number;
  brokenLinesLengthPercentage?: number;
  lightStickWidth?: [number, number];
  lightStickHeight?: [number, number];
  movingAwaySpeed?: [number, number];
  movingCloserSpeed?: [number, number];
  carLightsLength?: [number, number];
  carLightsRadius?: [number, number];
  carWidthPercentage?: [number, number];
  carShiftX?: [number, number];
  carFloorSeparation?: [number, number];
  colors?: {
    roadColor: number;
    islandColor: number;
    background: number;
    shoulderLines: number;
    brokenLines: number;
    leftCars: number[];
    rightCars: number[];
    sticks: number;
  };
}

export interface HyperspeedProps {
  effectOptions?: HyperspeedOptions;
  className?: string;
}

const DEFAULT_OPTIONS: HyperspeedOptions = {
  onSpeedUp: () => { },
  onSlowDown: () => { },
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xFFFFFF,
    brokenLines: 0xFFFFFF,
    leftCars: [0xB8860B, 0xFFD700, 0x8B4513], // Brand gold theme colors
    rightCars: [0x131318, 0x1A1A1B, 0x242426],
    sticks: 0xB8860B,
  }
};

export const Hyperspeed = forwardRef<HTMLDivElement, HyperspeedProps>(({ effectOptions, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => containerRef.current!);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const options = { ...DEFAULT_OPTIONS, ...effectOptions };
    const colors = { ...DEFAULT_OPTIONS.colors, ...effectOptions?.colors };
    
    const state = {
      speed: 1,
      targetSpeed: 1,
      fov: options.fov || 90,
      targetFov: options.fov || 90,
    };

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        antialias: false, // Turned off for better performance
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
    } catch (e) {
      console.error("WebGL initialization failed:", e);
      return;
    }
    
    const scene = new THREE.Scene();
    // Use the color from options
    scene.background = null; // Make it transparent to show underlying gradients if any

    const camera = new THREE.PerspectiveCamera(state.fov, 1, 0.1, 10000);
    camera.position.z = 10;
    camera.position.y = 7;

    const resize = () => {
      if (!containerRef.current || !renderer) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      if (width <= 0 || height <= 0) return;

      const gl = renderer.getContext();
      const maxTex = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 2048;
      const maxRes = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) || 2048;
      const hardLimit = Math.min(maxTex, maxRes, 2048);
      
      const dpr = window.devicePixelRatio || 1;
      const pixelRatio = Math.min(dpr, 1.2);
      
      // Calculate desired pixel dimensions
      let wpx = Math.floor(width * pixelRatio);
      let hpx = Math.floor(height * pixelRatio);

      // Clamp to hard hardware limits and sanity check
      if (isNaN(wpx) || wpx <= 0) wpx = 1;
      if (isNaN(hpx) || hpx <= 0) hpx = 1;
      
      if (wpx > hardLimit) {
        hpx = Math.floor(hpx * (hardLimit / wpx));
        wpx = hardLimit;
      }
      if (hpx > hardLimit) {
        wpx = Math.floor(wpx * (hardLimit / hpx));
        hpx = hardLimit;
      }

      // Final safety check: at least 1px
      wpx = Math.max(1, wpx);
      hpx = Math.max(1, hpx);

      // Set explicit sizes without Three.js internal DPR scaling
      renderer.setPixelRatio(1);
      renderer.setSize(wpx, hpx, false);
      camera.aspect = wpx / hpx;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resize);
    resize();

    const count = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3 * 2);
    const lineColors = new Float32Array(count * 3 * 2);

    for (let i = 0; i < count; i++) {
      const z = Math.random() * options.length!;
      const r = options.roadWidth! + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * r;

      const idx = i * 6;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = -z;
      
      positions[idx + 3] = x;
      positions[idx + 4] = y;
      positions[idx + 5] = -(z + 10 + Math.random() * 50);

      const colorSet = i % 2 === 0 ? colors.leftCars : colors.rightCars;
      const chosenColor = new THREE.Color(colorSet[Math.floor(Math.random() * colorSet.length)]);
      
      lineColors[idx] = chosenColor.r;
      lineColors[idx + 1] = chosenColor.g;
      lineColors[idx + 2] = chosenColor.b;
      
      lineColors[idx + 3] = chosenColor.r;
      lineColors[idx + 4] = chosenColor.g;
      lineColors[idx + 5] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const material = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(geometry, material);
    lines.frustumCulled = true;
    scene.add(lines);

    const applyDistortion = (time: number) => {
      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 6;
        pos[idx + 2] += state.speed * 5;
        pos[idx + 5] += state.speed * 5;

        if (pos[idx + 2] > 50) {
          const newZ = options.length!;
          const lineLength = 10 + Math.random() * 50;
          pos[idx + 2] = -newZ;
          pos[idx + 5] = -(newZ + lineLength);
        }

        if (options.distortion === 'turbulentDistortion') {
          const offset = Math.sin(time * 0.001 + pos[idx + 2] * 0.01) * 2;
          pos[idx] += offset * 0.01;
          pos[idx + 3] += offset * 0.01;
        } else if (options.distortion === 'mountainDistortion') {
            const offset = Math.cos(pos[idx + 2] * 0.005) * 5;
            pos[idx + 1] += offset * 0.01;
            pos[idx + 4] += offset * 0.01;
        }
      }
      geometry.attributes.position.needsUpdate = true;
    };

    let animationId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current!);

    let lastFrameTime = 0;
    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Throttle to 60fps (16.7ms per frame)
      const deltaTime = time - lastFrameTime;
      if (deltaTime < 16) return;
      lastFrameTime = time;

      state.speed += (state.targetSpeed - state.speed) * 0.05;
      state.fov += (state.targetFov - state.fov) * 0.05;
      
      camera.fov = state.fov;
      camera.updateProjectionMatrix();

      applyDistortion(time);
      
      renderer.render(scene, camera);
    };

    animate(0);

    const handleMouseDown = () => {
      state.targetSpeed = options.speedUp!;
      state.targetFov = options.fovSpeedUp!;
      options.onSpeedUp?.();
    };

    const handleMouseUp = () => {
      state.targetSpeed = 1;
      state.targetFov = options.fov!;
      options.onSlowDown?.();
    };

    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchend', handleMouseUp, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [effectOptions]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className || ''}`}
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  );
});

export default Hyperspeed;

export const hyperspeedPresets = {
  one: {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xB8860B, 0xFFD700, 0x8B4513],
      rightCars: [0x131318, 0x1A1A1B, 0x242426],
      sticks: 0xB8860B
    }
  },
  two: {
    distortion: 'mountainDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff102a, 0xeb383e, 0xff102a],
      rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
      sticks: 0xdadafa
    }
  },
  three: {
    distortion: 'xyDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 3,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0x7d0d1b, 0xa90519, 0xff102a],
      rightCars: [0xf1eece, 0xe6e2b1, 0xdfd98a],
      sticks: 0xf1eece
    }
  },
  four: {
    distortion: 'LongRaceDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 5,
    lanesPerRoad: 2,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff5f73, 0xe74d60, 0xff102a],
      rightCars: [0xa4e3e6, 0x80d1d4, 0x53c2c6],
      sticks: 0xa4e3e6
    }
  },
  five: {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xdc5b20, 0xdca320, 0xdc2020],
      rightCars: [0x334bf7, 0xe5e6ed, 0xbfc6f3],
      sticks: 0xc5e8eb
    }
  },
  six: {
    distortion: 'deepDistortion',
    length: 400,
    roadWidth: 18,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff322f, 0xa33010, 0xa81508],
      rightCars: [0xfdfdf0, 0xf3dea0, 0xe2bb88],
      sticks: 0xfdfdf0
    }
  }
};
