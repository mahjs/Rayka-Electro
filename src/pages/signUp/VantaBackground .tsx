import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min.js';

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let vantaEffect: any = null;

    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        // color1: 0xff0000,
        color: 0x2b889a,
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
