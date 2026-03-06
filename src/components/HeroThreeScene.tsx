"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroThreeScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mountEl = mountRef.current;
        if (!mountEl) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
        camera.position.set(0, 0, 7);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: !isMobile,
            powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        mountEl.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x99ffdd, 0.7);
        const keyLight = new THREE.PointLight(0x88ffcc, 1.1, 30, 2);
        keyLight.position.set(3, 2, 4);
        const rimLight = new THREE.PointLight(0x66ccff, 0.9, 30, 2);
        rimLight.position.set(-4, -2, 3);
        scene.add(ambientLight, keyLight, rimLight);

        const rootGroup = new THREE.Group();
        scene.add(rootGroup);

        const coreGeometry = new THREE.IcosahedronGeometry(isMobile ? 1.2 : 1.35, 1);
        const coreMaterial = new THREE.MeshStandardMaterial({
            color: 0x7cf7c0,
            wireframe: true,
            roughness: 0.35,
            metalness: 0.2,
            transparent: true,
            opacity: 0.85,
        });
        const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
        rootGroup.add(coreMesh);

        const ringGeometry = new THREE.TorusGeometry(isMobile ? 1.8 : 2.1, 0.025, 20, isMobile ? 96 : 128);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x9be8ff,
            transparent: true,
            opacity: 0.5,
        });
        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        ringMesh.rotation.x = 1.15;
        ringMesh.rotation.y = 0.2;
        rootGroup.add(ringMesh);

        const particleCount = isMobile ? 120 : 220;
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i += 1) {
            const i3 = i * 3;
            const radius = 2.3 + Math.random() * 1.9;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            particlePositions[i3 + 2] = radius * Math.cos(phi);
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xe6fff8,
            size: isMobile ? 0.02 : 0.025,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.75,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        rootGroup.add(particles);

        const pointerTarget = new THREE.Vector2(0, 0);
        const pointerCurrent = new THREE.Vector2(0, 0);

        const onPointerMove = (event: PointerEvent) => {
            pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointerTarget.y = (event.clientY / window.innerHeight) * 2 - 1;
        };

        const setRendererSize = () => {
            const width = mountEl.clientWidth;
            const height = mountEl.clientHeight;
            const pixelRatioCap = isMobile ? 1.25 : 1.75;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioCap));
            renderer.setSize(width, height, false);
            camera.aspect = width / Math.max(height, 1);
            camera.updateProjectionMatrix();
        };

        setRendererSize();
        window.addEventListener("resize", setRendererSize);
        window.addEventListener("pointermove", onPointerMove, { passive: true });

        let animationFrameId = 0;
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsed = clock.getElapsedTime();
            pointerCurrent.lerp(pointerTarget, 0.04);

            rootGroup.rotation.y = elapsed * 0.22 + pointerCurrent.x * 0.2;
            rootGroup.rotation.x = Math.sin(elapsed * 0.24) * 0.12 - pointerCurrent.y * 0.12;
            coreMesh.rotation.x = elapsed * 0.28;
            coreMesh.rotation.z = elapsed * 0.22;
            ringMesh.rotation.z = elapsed * 0.18;
            particles.rotation.y = -elapsed * 0.08;

            camera.position.x += ((pointerCurrent.x * 0.45) - camera.position.x) * 0.04;
            camera.position.y += ((-pointerCurrent.y * 0.35) - camera.position.y) * 0.04;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            animationFrameId = window.requestAnimationFrame(animate);
        };

        renderer.render(scene, camera);
        if (!prefersReducedMotion) {
            animationFrameId = window.requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
            window.removeEventListener("resize", setRendererSize);
            window.removeEventListener("pointermove", onPointerMove);

            particlesGeometry.dispose();
            particlesMaterial.dispose();
            ringGeometry.dispose();
            ringMaterial.dispose();
            coreGeometry.dispose();
            coreMaterial.dispose();
            renderer.dispose();

            if (renderer.domElement.parentNode === mountEl) {
                mountEl.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 -z-20 opacity-75"
            aria-hidden="true"
        />
    );
};
