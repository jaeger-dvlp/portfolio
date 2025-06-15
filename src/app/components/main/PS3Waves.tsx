'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PS3WaveBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let last = performance.now();

    const effectMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(1375, 331, 0.1, 16000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    effectMount.appendChild(renderer.domElement);

    const ribbon = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 128, 128),
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
        },
        vertexShader: `
        varying vec3 vEC;
        uniform float time;

        float iqhash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                     mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                     mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                     mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
        }

        float xmb_noise2(vec3 x) {
          return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
        }

        void main() {
          vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 v = vec3(pos.x, 0.0, pos.y);
          vec3 v2 = v;
          vec3 v3 = v;

          v.y = xmb_noise2(v2) / 8.0;

          v3.x -= time / 5.0;
          v3.x /= 4.0;

          v3.z -= time / 10.0;
          v3.y -= time / 80.0;

          v.z -= noise(v3 * 7.0) / 15.0;
          v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0;

          vEC = v;
          gl_Position = vec4(v, 1.0);
        }`,
        fragmentShader: `
        uniform float time;
        varying vec3 vEC;

        void main()
        {
           const vec3 up = vec3(0.0, 0.0, 1.0);
           vec3 x = dFdx(vEC);
           vec3 y = dFdy(vEC);
           vec3 normal = normalize(cross(x, y));
           float c = 1.0 - dot(normal, up);
           c = (1.0 - cos(c * c)) / 3.0;
           gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
        }`,
        side: THREE.DoubleSide,
        transparent: true,
        depthTest: false,
      }),
    );

    scene.add(ribbon);

    const resize = () => {
      if (!mountRef.current) return;
      const { offsetWidth, offsetHeight } = mountRef.current;
      renderer.setSize(offsetWidth, offsetWidth);
      renderer.setPixelRatio(window.devicePixelRatio);
      camera.aspect = offsetWidth / offsetHeight;
      camera.updateProjectionMatrix();
      ribbon.scale.set(camera.aspect * 2.55, 1, 1);
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = (now = 0) => {
      const delta = (now - last) / 1000;
      last = now;

      ribbon.material.uniforms.time.value += delta * 0.5;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      effectMount?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 top-1/2 -z-10 flex w-full -translate-y-1/2 scale-200 items-center justify-center lg:scale-100"
      ref={mountRef}
    />
  );
}
