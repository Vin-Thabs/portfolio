import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const getSize = () => ({
      width: mount.clientWidth || window.innerWidth,
      height: mount.clientHeight || window.innerHeight,
    });

    const { width, height } = getSize();

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap for mobile performance
    mount.appendChild(renderer.domElement);

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

    const positions = new Float32Array(galaxyParams.count * 3);
    const colors = new Float32Array(galaxyParams.count * 3);

    for (let i = 0; i < galaxyParams.count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * galaxyParams.radius;
      const spinAngle = radius * galaxyParams.spin;
      const branchAngle =
        ((i % galaxyParams.arms) / galaxyParams.arms) * Math.PI * 2;

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

      positions[i3] =
        Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * 0.5;
      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = galaxyParams.insideColor.clone();
      mixedColor.lerp(galaxyParams.outsideColor, radius / galaxyParams.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const galaxyMaterial = new THREE.PointsMaterial({
      size: galaxyParams.size,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxyPoints);

    const shootingStars = [];
    const maxShootingStars = 8;

    function createShootingStar() {
      const length = Math.random() * 0.7 + 0.3;

      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-length, -length * 0.4, 0),
      ]);

      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      });

      const star = new THREE.Line(geometry, material);

      star.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 5 + 2,
        (Math.random() - 0.5) * 4
      );

      star.speed = 0.05 + Math.random() * 0.05;
      star.opacity = 1;

      shootingStars.push(star);
      scene.add(star);
    }

    function updateShootingStars() {
      shootingStars.forEach((star, i) => {
        star.position.x -= star.speed * 2;
        star.position.y -= star.speed;
        star.material.opacity -= 0.01;

        if (star.material.opacity <= 0) {
          scene.remove(star);
          shootingStars.splice(i, 1);
        }
      });

      if (shootingStars.length < maxShootingStars) {
        if (Math.random() < 0.015) createShootingStar();
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);

      galaxyPoints.rotation.y += 0.0008;
      galaxyPoints.rotation.x += 0.0002;

      updateShootingStars();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const { width, height } = getSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const debounceResize = () => {
      clearTimeout(debounceResize.t);
      debounceResize.t = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debounceResize);

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", debounceResize);
      renderer.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="main-bg" style={{ width: "100%", height: "100%" }}></div>;
}
