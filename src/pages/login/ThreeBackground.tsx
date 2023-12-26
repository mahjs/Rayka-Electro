import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refContainer.current) return;

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    renderer.setSize(WIDTH, HEIGHT);
    refContainer.current.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x23153c, 0.0007);

    // Camera
    const fieldOfView = 75;
    const aspectRatio = WIDTH / HEIGHT;
    const nearPlane = 1;
    const farPlane = 3500;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = farPlane / 3;

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const particleCount = 1500;

    for (let i = 0; i < particleCount; i++) {
      vertices.push(Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Materials and Particles
    const parameters: [[number, number, number], number][] = [
      [[220 / 255, 0, 252 / 255], 5],
      [[1 / 255, 241 / 255, 241 / 255], 4],
      [[14 / 255, 0, 45 / 255], 3],
    ];

    const particleCounts = [1000, 250, 250];
    parameters.forEach(([color, size], index) => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < particleCounts[index]; i++) {
        vertices.push(Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      const material = new THREE.PointsMaterial({ size });
      material.color.setRGB(color[0], color[1], color[2]);
      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
    });

    // Animation and Event Handlers
    let mouseX = 0,
      mouseY = 0;
    const windowHalfX = WIDTH / 2;
    const windowHalfY = HEIGHT / 2;

    function animate() {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.0002;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      scene.children.forEach((child, i) => {
        if (child instanceof THREE.Points) {
          child.rotation.x = time * 0.3;
          child.rotation.y = time * 0.3;
        }
      });

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    animate();

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      while (refContainer.current && refContainer.current.firstChild) {
        refContainer.current.removeChild(refContainer.current.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={refContainer}
      style={{
        width: '100%',
        height: '100%',
        // background: 'linear-gradient(to right, rgb(47,0,112), rgb(78,0,98))',
      }}
    />
  );
};

export default ThreeBackground;