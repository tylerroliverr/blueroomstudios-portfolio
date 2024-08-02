"use client";
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

extend({ MeshPhysicalMaterial: THREE.MeshPhysicalMaterial });

function Modelp({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center);
    }
  }, [scene]);

  // Apply glass material to all children of the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        transmission: 0.1, // transmission for glass-like transparency
        opacity: 0.9, // base opacity
        transparent: true,
        roughness: 0.1, // lower roughness for clearer reflections
        metalness: 1.1, // some metalness for shininess
        clearcoat: 1, // clearcoat for a glossy finish
        clearcoatRoughness: 0, // clearcoat roughness
        ior: 1.5, // index of refraction for glass
      });
    }
  });

  return <primitive object={scene} ref={ref} position={[0, 0, 0]} scale={[0.003, 0.003, 0.003]} />;
}

// function DynamicFOVCamera({ fovs }) {
//     const { camera, size } = useThree();

//     // Find the appropriate FOV based on viewport width
//     const calculatedFOV = Object.entries(fovs)
//       .sort(([aWidth], [bWidth]) => bWidth - aWidth)
//       .find(([width]) => size.width <= width)?.[1];

//     // Update camera FOV
//     React.useEffect(() => {
//       if (camera && calculatedFOV !== undefined) {
//         camera.fov = calculatedFOV;
//         camera.updateProjectionMatrix();
//       }
//     }, [camera, calculatedFOV]);

//     return null; // This component doesn't render anything
//   }

export default function GlassLogo() {
  const fovs = {
    1200: 80,
    3000: 10
  }

  return (
    <>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          fov={40}
          position={[20, 0, 10]}
          near={1}
          far={1000}
        />
        {/* <DynamicFOVCamera fovs={fovs} /> */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={0} />
        <Suspense>
          <Modelp url="/24_08_01_10_19_29_584.gltf" />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}