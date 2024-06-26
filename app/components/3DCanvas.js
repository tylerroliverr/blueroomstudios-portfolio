'use client';
import React, { Suspense, useRef } from "react";
import { Environment, OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import style from "../styles/model.module.css";

extend({ MeshPhysicalMaterial: THREE.MeshPhysicalMaterial });

function Model({ url }) {
    const { scene } = useGLTF(url);
    const ref = useRef();

    // Apply glass material to all children of the scene
    scene.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshPhysicalMaterial({
                transmission: 1.1, // transmission for glass-like transparency
                opacity: 0.9, // base opacity
                transparent: true,
                roughness: 0.1, // lower roughness for clearer reflections
                metalness: 0.1, // some metalness for shininess
                clearcoat: 1, // clearcoat for a glossy finish
                clearcoatRoughness: 0, // clearcoat roughness
                ior: 1.5, // index of refraction for glass
            });
        }
    });

    return <primitive object={scene} ref={ref} />;
}


export default function ModelCanvas() {

    return (
        <div className={style.canvasDiv}>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    fov={100}
                    position={[2, 1, 2]}
                    near={1}
                    far={100}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={2} />
                <Environment preset="studio" />
                <OrbitControls />
                <Suspense>
                    <Model url="Vector.glb" />
                </Suspense>
            </Canvas>
        </div>
    )
}