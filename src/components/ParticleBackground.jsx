'use client'

import * as THREE from 'three'
import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const COUNT = 6000

const COLORS = {
  latent: '#64748B', 
  column: '#0284C7', 
}

function gaussianRandom(mean = 0, stdev = 1) {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return mean + stdev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

function smoothstep(value) {
  const t = Math.max(0, Math.min(1, value))
  return t * t * (3 - 2 * t)
}

function createSoftDotTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(64, 64, 6, 64, 64, 60)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.28, 'rgba(255,255,255,0.95)')
  gradient.addColorStop(0.62, 'rgba(255,255,255,0.30)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// 1. Initial State: Continuous, wide distribution covering the canvas
function buildLatent(count) {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    // Removing the Math.abs creates a continuous, smooth bell curve spread.
    // Shifted slightly left (-3.0) with a wide spread (10.0) to fill the screen organically.
    arr[i3] = gaussianRandom(-3.0, 10.0) 
    arr[i3 + 1] = gaussianRandom(0, 8.0) // Wide vertical spread 
    arr[i3 + 2] = gaussianRandom(0, 5.0) // Deep depth spread
  }
  return arr
}

// 2. Column State: Architecturally matching the reactor column image
function buildColumn(count) {
  const arr = new Float32Array(count * 3)
  let idx = 0

  const addPoint = (x, y, z) => {
    if (idx < count * 3) {
      arr[idx++] = x; arr[idx++] = y; arr[idx++] = z;
    }
  }

  // A. Outer Shell (1500 particles)
  for (let i = 0; i < 1500; i++) {
    const y = (Math.random() - 0.5) * 19.0
    const theta = Math.random() * Math.PI * 2
    addPoint(2.2 * Math.cos(theta), y, 2.2 * Math.sin(theta))
  }

  // B. Top Structured Packing Bed (1500 particles)
  for (let i = 0; i < 1500; i++) {
    const y = 1.0 + Math.random() * 5.0 
    const theta = Math.random() * Math.PI * 2
    const r = Math.sqrt(Math.random()) * 2.15 
    addPoint(r * Math.cos(theta), y, r * Math.sin(theta))
  }

  // C. Bottom Structured Packing Bed (1500 particles)
  for (let i = 0; i < 1500; i++) {
    const y = -6.0 + Math.random() * 5.0 
    const theta = Math.random() * Math.PI * 2
    const r = Math.sqrt(Math.random()) * 2.15
    addPoint(r * Math.cos(theta), y, r * Math.sin(theta))
  }

  // D. Separator Trays / Distributors (1000 particles)
  const trayHeights = [7.0, 0.5, -0.5, -7.0]
  for (let i = 0; i < 1000; i++) {
    const tIdx = i % 4
    const y = trayHeights[tIdx] + (Math.random() - 0.5) * 0.15 
    const theta = Math.random() * Math.PI * 2
    const r = Math.sqrt(Math.random()) * 2.15
    addPoint(r * Math.cos(theta), y, r * Math.sin(theta))
  }

  // E. Inlet / Outlet Pipes (500 particles)
  for (let i = 0; i < 500; i++) {
    const isTop = i % 2 === 0
    const pipeY = isTop ? 8.2 : -8.2 
    const px = 2.2 + Math.random() * 2.5 
    const theta = Math.random() * Math.PI * 2
    const pr = 0.5 
    
    const py = pipeY + pr * Math.cos(theta)
    const pz = pr * Math.sin(theta)
    addPoint(px, py, pz)
  }

  while (idx < count * 3) addPoint(0, 0, 0)

  return arr
}

function FluidParticleField({ scene }) {
  const pointsRef = useRef()
  const materialRef = useRef()
  const colorRef = useRef(new THREE.Color(COLORS.latent))
  const texture = useMemo(() => createSoftDotTexture(), [])

  const fields = useMemo(() => ({
    latent: buildLatent(COUNT),
    column: buildColumn(COUNT),
  }), [])

  const currentPositions = useMemo(() => new Float32Array(fields.latent), [fields])

  useEffect(() => {
    return () => texture.dispose()
  }, [texture])

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current) return

    const progress = scene?.current?.columnProgress || 0
    const mix = smoothstep(progress)
    
    const time = state.clock.getElapsedTime()
    const positions = pointsRef.current.geometry.attributes.position.array

    const targetColor = new THREE.Color(COLORS.latent).lerp(new THREE.Color(COLORS.column), mix)

    const colRotAngle = time * 0.3
    const cosA = Math.cos(colRotAngle)
    const sinA = Math.sin(colRotAngle)

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3
      
      const cx = fields.column[i3]
      const cy = fields.column[i3 + 1]
      const cz = fields.column[i3 + 2]

      const rotatedCX = cx * cosA - cz * sinA
      const rotatedCZ = cx * sinA + cz * cosA

      const targetX = THREE.MathUtils.lerp(fields.latent[i3], rotatedCX, mix)
      const targetY = THREE.MathUtils.lerp(fields.latent[i3 + 1], cy, mix)
      const targetZ = THREE.MathUtils.lerp(fields.latent[i3 + 2], rotatedCZ, mix)

      const curX = positions[i3]
      const curY = positions[i3 + 1]
      const curZ = positions[i3 + 2]

      const ambientScale = 1.0 - (mix * 0.95)
      const noiseX = Math.sin(time * 0.3 + i) * 0.05 * ambientScale
      const noiseY = Math.cos(time * 0.2 + i) * 0.05 * ambientScale

      const settle = 0.5   //Change here for speed up the formation of particles

      positions[i3] += (targetX + noiseX - curX) * settle
      positions[i3 + 1] += (targetY + noiseY - curY) * settle
      positions[i3 + 2] += (targetZ - curZ) * settle
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true

    colorRef.current.lerp(targetColor, 0.05)
    materialRef.current.color.copy(colorRef.current)
  })

  return (
    <points ref={pointsRef} position={[8.5, 0, 0]} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={currentPositions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.25}         
        transparent
        opacity={0.85}      
        sizeAttenuation
        depthWrite={false}
        map={texture}
        alphaTest={0.02}
        blending={THREE.NormalBlending}
      />
    </points>
  )
}

export default function ParticleBackground({ scene }) {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 25], fov: 54 }} gl={{ antialias: true, alpha: true }}>
        <FluidParticleField scene={scene} />
      </Canvas>
    </div>
  )
}