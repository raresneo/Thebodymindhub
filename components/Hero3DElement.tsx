'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AbstractGoldShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Premium abstract icosahedron geometry
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 2), [])

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      
      // Reactive to mouse position
      const targetX = (state.mouse.x * Math.PI) / 4
      const targetY = (state.mouse.y * Math.PI) / 4
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geometry}>
        <MeshDistortMaterial
          color="#D4AF37"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={1.5}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

function SmallParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.015
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#D4AF37" transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

export function Hero3DElement() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
        
        <AbstractGoldShape />
        <SmallParticles />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={15} blur={2.5} far={4} color="#000000" />
      </Canvas>
    </div>
  )
}
