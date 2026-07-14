"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const lightPositions = [
      { color: 0x4ade80, pos: [5, 4, 5] },
      { color: 0xf472b6, pos: [-5, -3, 5] },
      { color: 0x22d3ee, pos: [4, -4, 5] },
      { color: 0xa78bfa, pos: [-4, 5, 5] },
    ];
    lightPositions.forEach(({ color, pos }) => {
      const light = new THREE.PointLight(color, 2, 25);
      light.position.set(pos[0], pos[1], pos[2]);
      scene.add(light);
    });

    const geometries = [
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.65, 0.25, 16, 32),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TorusKnotGeometry(0.55, 0.2, 64, 8),
      new THREE.DodecahedronGeometry(0.6, 0),
    ];

    const colors = [0x4ade80, 0xf472b6, 0x22d3ee, 0xa78bfa, 0xf59e0b];

    const group = new THREE.Group();
    scene.add(group);

    const shapes: THREE.Mesh[] = [];
    const count = 7;
    const radius = 3.2;

    for (let i = 0; i < count; i++) {
      const geo = geometries[i % geometries.length];
      const color = colors[i % colors.length];
      const mat = new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.05,
        roughness: 0.25,
        transparent: true,
        opacity: 0.35,
        emissive: color,
        emissiveIntensity: 0.08,
        wireframe: i % 2 === 0,
      });
      const mesh = new THREE.Mesh(geo, mat);

      const theta = (i / count) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta) * 0.6
      );
      mesh.scale.setScalar(0.5 + Math.random() * 0.5);

      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.015,
        },
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.3,
        floatAmp: 0.15 + Math.random() * 0.15,
        origPos: mesh.position.clone(),
      };

      group.add(mesh);
      shapes.push(mesh);
    }

    const mouse = { x: 0, y: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();

      group.rotation.x += (mouse.y * 0.2 - group.rotation.x) * 0.015;
      group.rotation.y += (mouse.x * 0.25 - group.rotation.y) * 0.015;

      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeed.x;
        mesh.rotation.y += mesh.userData.rotSpeed.y;
        mesh.position.y +=
          Math.sin(elapsed * mesh.userData.floatSpeed + mesh.userData.floatOffset) *
          mesh.userData.floatAmp *
          0.005;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      shapes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
