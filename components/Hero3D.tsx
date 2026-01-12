"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";

function FloatingShapes() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.5, 0, 0]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#ff4d5a" />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[1.5, 0.5, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="#00bfff" />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, -1, 0]}>
          <torusKnotGeometry args={[0.4, 0.15, 100, 16]} />
          <meshStandardMaterial color="#00ff99" />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[600px] md:h-[700px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Hi, I’m [Your Name]
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">
          Frontend Developer & Creative Coder
        </p>
      </div>
    </div>
  );
}
