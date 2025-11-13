import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../styles/Welcome.css";
import { useNavigate } from "react-router-dom";


function StartButton() {
  const navigate = useNavigate();

  function handleClick()
  {
    navigate('/about');
  }
  return (
    <button className="Start-btn" onClick={handleClick}>
      <span>Start Experience</span>
    </button>
  );
}

export default function Welcome() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const mainSphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const mainSphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.6,
      roughness: 0.2,
    });
    const mainSphere = new THREE.Mesh(mainSphereGeometry, mainSphereMaterial);
    scene.add(mainSphere);

    const particleCount = 400;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      mainSphere.rotation.x += 0.004;
      mainSphere.rotation.y += 0.005;

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;


      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

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

  return (
    <div className="Welcome-container">
      <div ref={mountRef} className="three-bg"></div>
      <div className="overlay">
        <h1 className="welcome-title">Welcome to the Future</h1>
        <p className="welcome-subtitle">
            "You can't trust code that you did not totally create yourself." - Ken Thompson
        </p>
        <StartButton />
      </div>
    </div>
  );
}
