import { useEffect, useRef } from "react";

const COLORS = {
  cream: 0xfaf9f6,
  sand: 0xf3f2eb,
  forest: 0x2c352b,
  sage: 0x7a8b76,
  wood: 0x8c6a4f,
};

export const WellnessScene = ({ className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let renderer;
    let scene;
    let camera;
    let group;
    let frameId;
    let resizeObserver;
    let intersectionObserver;
    let disposed = false;
    let inView = true;
    let lastTime = performance.now();
    const pointer = { x: 0, y: 0 };
    const smoothPointer = { x: 0, y: 0 };
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      pointer.x = Math.max(-1.4, Math.min(1.4, pointer.x));
      pointer.y = Math.max(-1.4, Math.min(1.4, pointer.y));
    };

    const init = async () => {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.set(0, 0, 7.2);

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch (error) {
        return;
      }

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.pointerEvents = "none";
      mount.appendChild(renderer.domElement);

      group = new THREE.Group();
      group.rotation.z = -0.08;
      scene.add(group);

      const moonMaterial = new THREE.MeshPhysicalMaterial({
        color: COLORS.sand,
        roughness: 0.32,
        metalness: 0,
        clearcoat: 0.28,
        clearcoatRoughness: 0.48,
      });
      const sageMaterial = new THREE.MeshPhysicalMaterial({
        color: COLORS.sage,
        roughness: 0.42,
        metalness: 0.02,
        clearcoat: 0.2,
      });
      const woodMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.5,
        metalness: 0,
      });
      const forestMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.forest,
        roughness: 0.55,
        metalness: 0,
      });

      const moon = new THREE.Mesh(new THREE.IcosahedronGeometry(1.12, 5), moonMaterial);
      moon.position.set(0.72, 0.38, 0.15);
      group.add(moon);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.68, 0.035, 14, 110),
        sageMaterial
      );
      ring.position.copy(moon.position);
      ring.rotation.set(1.12, 0.1, -0.62);
      group.add(ring);

      const pebble = new THREE.Mesh(new THREE.SphereGeometry(0.52, 42, 42), woodMaterial);
      pebble.scale.set(1.15, 0.72, 0.9);
      pebble.position.set(-1.35, -1.02, 0.35);
      pebble.rotation.set(0.25, 0.35, -0.2);
      group.add(pebble);

      const sageOrb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 3), sageMaterial);
      sageOrb.scale.set(0.9, 1.2, 0.85);
      sageOrb.position.set(1.95, -1.28, 0.65);
      group.add(sageOrb);

      const seed = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 24), forestMaterial);
      seed.position.set(-1.62, 1.45, 0.28);
      group.add(seed);

      const seedTwo = seed.clone();
      seedTwo.scale.setScalar(0.58);
      seedTwo.position.set(2.16, 1.56, -0.28);
      group.add(seedTwo);

      const hemisphere = new THREE.HemisphereLight(COLORS.cream, COLORS.forest, 2.45);
      scene.add(hemisphere);

      const keyLight = new THREE.DirectionalLight(0xfff5df, 4.1);
      keyLight.position.set(-3.2, 4.6, 5.5);
      scene.add(keyLight);

      const sageLight = new THREE.PointLight(0xb9c8b2, 5.5, 12);
      sageLight.position.set(4, -1.5, 4.2);
      scene.add(sageLight);

      const warmLight = new THREE.PointLight(0xe8cdb5, 3.2, 10);
      warmLight.position.set(-4, -3, 3);
      scene.add(warmLight);

      const resize = () => {
        if (!renderer || !camera || !mount) return;
        const width = Math.max(1, mount.clientWidth);
        const height = Math.max(1, mount.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      resize();

      const animate = (now) => {
        if (disposed || !renderer || !scene || !camera || !group) return;
        const dt = Math.min(40, now - lastTime);
        lastTime = now;

        if (inView) {
          const t = now * 0.001;
          const ease = 1 - Math.pow(0.001, dt / 1000);
          smoothPointer.x += (pointer.x - smoothPointer.x) * ease;
          smoothPointer.y += (pointer.y - smoothPointer.y) * ease;

          if (!prefersReducedMotion) {
            group.rotation.y = smoothPointer.x * 0.18 + Math.sin(t * 0.24) * 0.08;
            group.rotation.x = -smoothPointer.y * 0.12 + Math.cos(t * 0.21) * 0.045;
            moon.rotation.y = t * 0.08;
            moon.position.y = 0.38 + Math.sin(t * 0.8) * 0.08;
            ring.rotation.z = -0.62 + t * 0.12;
            pebble.rotation.y = 0.35 - t * 0.07;
            pebble.position.y = -1.02 + Math.sin(t * 0.66 + 1.2) * 0.1;
            sageOrb.rotation.x = t * 0.2;
            sageOrb.rotation.y = -t * 0.13;
            sageOrb.position.y = -1.28 + Math.sin(t * 0.92 + 2.4) * 0.12;
            seed.position.y = 1.45 + Math.sin(t * 1.1) * 0.08;
            seedTwo.position.y = 1.56 + Math.cos(t * 0.95) * 0.07;
            camera.position.x = smoothPointer.x * 0.18;
            camera.position.y = -smoothPointer.y * 0.12;
            camera.lookAt(0, 0, 0);
          }

          renderer.render(scene, camera);
        }

        frameId = requestAnimationFrame(animate);
      };

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
        },
        { rootMargin: "150px" }
      );
      intersectionObserver.observe(mount);

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      frameId = requestAnimationFrame(animate);
    };

    init();

    return () => {
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();

      if (scene) {
        scene.traverse((object) => {
          object.geometry?.dispose?.();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose?.());
          } else {
            object.material?.dispose?.();
          }
        });
      }

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss?.();
        renderer.domElement?.remove?.();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  );
};
