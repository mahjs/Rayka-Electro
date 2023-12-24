import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-expect-error Vanta types are not available
import NET from 'vanta/dist/vanta.net.min.js';

interface VantaEffect {
  destroy(): void;
}

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: VantaEffect | null = null;

    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0xff3f81,
        backgroundColor: 0x23153c,
        points: 10,
        maxDistance: 20,
        spacing: 10,
        showDots: false,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaRef]);

  return <div ref={vantaRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default VantaBackground;
