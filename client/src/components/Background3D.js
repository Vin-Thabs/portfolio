import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // 🌌 GALAXY CONFIG
    const galaxyParams = {
      count: 6000,
      size: 0.02,
      radius: 6,
      arms: 4,
      spin: 1.4,
      randomness: 0.35,
      randomnessPower: 3,
      insideColor: new THREE.Color("#ffb3ff"),
      outsideColor: new THREE.Color("#4da6ff"),
    };

    // 🌌 Build Spiral Galaxy
    const positions = new Float32Array(galaxyParams.count * 3);
    const colors = new Float32Array(galaxyParams.count * 3);

    for (let i = 0; i < galaxyParams.count; i++) {
      const i3 = i * 3;

      // Distance from center
      const radius = Math.random() * galaxyParams.radius;

      // Angle based on which arm the particle belongs to
      const spinAngle = radius * galaxyParams.spin;
      const branchAngle =
        ((i % galaxyParams.arms) / galaxyParams.arms) * Math.PI * 2;

      // Random offset (gives chaos)
      const randomX =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness;

      const randomY =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness;

      const randomZ =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness;

      // Position using spiral formula
      positions[i3 + 0] =
        Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * 0.5; // galaxy thickness
      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color interpolation: inside → outside
      const mixedColor = galaxyParams.insideColor.clone();
      mixedColor.lerp(galaxyParams.outsideColor, radius / galaxyParams.radius);

      colors[i3 + 0] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    // Build geometry
    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Material
    const galaxyMaterial = new THREE.PointsMaterial({
      size: galaxyParams.size,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxyPoints);

    // Mouse movement
    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate galaxy
      galaxyPoints.rotation.y += 0.0008;
      galaxyPoints.rotation.x += 0.0002;

      // Parallax camera movement
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.6 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="main-bg"></div>;
}
