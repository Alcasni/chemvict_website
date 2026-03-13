'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Linkedin, Mail, Globe } from 'lucide-react'

// --- HIGH-INTENSITY INDUSTRIAL PACKING ENGINE ---
const COUNT = 150000 
const COLORS = { accent: '#FFFFFF' }

const PACKING_MATERIAL_PROPS = {
  size: 0.06,
  transparent: true,
  opacity: 1.5,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  color: COLORS.accent,
}

function createHighIntensityTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64; canvas.height = 64
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,1)') 
  gradient.addColorStop(0.7, 'rgba(255,255,255,0.4)')
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(canvas)
}

function buildHighDefPacking(count) {
  const arr = new Float32Array(count * 3)
  const radius = 3.2
  const totalHeight = 12.0
  const numLayers = 3 
  const layerHeight = totalHeight / numLayers
  const sheetsPerLayer = 16
  const pointsPerLayer = Math.floor(count / numLayers)
  const pointsPerSheet = Math.floor(pointsPerLayer / sheetsPerLayer)
  const amplitude = 0.45 
  const frequency = 1.4
  let idx = 0
  for (let l = 0; l < numLayers; l++) {
    const yCenter = (l - (numLayers - 1) / 2) * layerHeight
    const layerRotation = l * (Math.PI / 2) 
    for (let s = 0; s < sheetsPerLayer; s++) {
      const zPlane = (s / (sheetsPerLayer - 1) - 0.5) * (radius * 1.8)
      const tiltDir = s % 2 === 0 ? 1 : -1
      for (let p = 0; p < pointsPerSheet; p++) {
        const xLocal = (Math.random() - 0.5) * (radius * 2.5)
        const yLocal = (Math.random() - 0.5) * layerHeight
        const zWave = Math.sin((xLocal + (yLocal * tiltDir)) * frequency) * amplitude
        const zLocal = zPlane + zWave
        const xFinal = xLocal * Math.cos(layerRotation) - zLocal * Math.sin(layerRotation)
        const zFinal = xLocal * Math.sin(layerRotation) + zLocal * Math.cos(layerRotation)
        const yFinal = yCenter + yLocal
        if (Math.sqrt(xFinal * xFinal + zFinal * zFinal) < radius) {
          if (idx < count * 3) {
            arr[idx++] = xFinal; arr[idx++] = yFinal; arr[idx++] = zFinal
          }
        }
      }
    }
  }
  return arr
}

function PackingField() {
  const groupRef = useRef()
  const texture = useMemo(() => createHighIntensityTexture(), [])
  const geometry = useMemo(() => buildHighDefPacking(COUNT), [])
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12
  })
  return (
    <group ref={groupRef} rotation={[Math.PI / 6, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={COUNT} array={geometry} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial {...PACKING_MATERIAL_PROPS} map={texture} />
      </points>
    </group>
  )
}

const navItems = [
  { id: "01", name: "Home", href: "/", subItems: [] },
  { 
    id: "02", 
    name: "About", 
    href: "/about", 
    subItems: [
      { name: "Company Overview", href: "/about" },
      { name: "Qualifications & Honors", href: "/about/qualifications" },
      { name: "Milestones", href: "/about/developments" }
    ] 
  },
  { 
    id: "03", 
    name: "Process Technologies", 
    href: "/processTechnologies", 
    subItems: [
      { name: "Integrated Technology", href: "/processTechnologies/integrated" },
      { name: "Purification Technology", href: "/processTechnologies/purification" }
    ] 
  },
  { 
    id: "04", 
    name: "Process Equipment", 
    href: "/processEquipments", 
    subItems: [
      { name: "Mass Transfer Equipment", href: "/processEquipments/massTransfer" },
      { name: "Heat Transfer Equipment", href: "/processEquipments/heatTransfer" },
      { name: "Melt Crystallization", href: "/processEquipments/meltCrystallization" },
      { name: "Polymer Equipment", href: "/processEquipments/polymer" }
    ] 
  },
  { 
    id: "05", 
    name: "Sustainability", 
    href: "/sustainability", 
    subItems: [
      { name: "Heat Pump Distillation", href: "/sustainability/heat-pump-assisted-distillation" },
      { name: "CO2 Capture", href: "/sustainability/co2-capture" },
      { name: "DWC Columns", href: "/sustainability/dividing-wall-column-dwc" },
      { name: "Energy Optimization", href: "/sustainability/distillation-system-energy-optimization" }
    ] 
  },
  { 
    id: "06", 
    name: "EPC Turnkey Engineering", 
    href: "/EPC", 
    subItems: [
      { name: "Skid-Mounted Equipment", href: "/EPC/skid" },
      { name: "Engineering Services", href: "/EPC/services" }
    ] 
  },
  { 
    id: "07", 
    name: "Case Studies", 
    href: "/cases", 
    subItems: [
      { name: "Oleochemicals", href: "/cases/oleochemicals" },
      { name: "Flavors & Fragrances", href: "/cases/flavors-fragrances" },
      { name: "Advanced Materials", href: "/cases/advanced-materials" },
      { name: "Chemical Intermediates", href: "/cases/chemical-intermediates" },
      { name: "Petrochemicals", href: "/cases/petrochemicals" },
      { name: "Specialty Additives", href: "/cases/specialty-additives" },
      { name: "Electronic Chemicals", href: "/cases/electronic-chemicals" },
      { name: "Energy & Environmental", href: "/cases/energy-environmental" },
      { name: "Nutraceuticals", href: "/cases/nutraceuticals" }
    ] 
  },
  { id: "08", name: "News & Insights", href: "/firmNews", subItems: [] },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] pointer-events-none">
        <div className="mx-auto flex max-w-[1600px] items-start justify-between px-6 pt-10 md:px-12 md:pt-14">
          <Link href="/" className="pointer-events-auto flex items-baseline select-none">
            <span className={`text-[1.8rem] md:text-[2.2rem] font-bold tracking-[-0.04em] transition-colors duration-500 ${isOpen ? 'text-white' : 'text-slate-950'}`}>
              Chemvict
            </span>
            <span className="ml-1 h-2 w-2 rounded-full bg-[#00a651]" />
          </Link>

          <div className="pointer-events-auto flex items-center gap-6">
            <Link href="/contact" className={`hidden sm:inline-flex h-12 items-center rounded-xl px-10 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-sm ${isOpen ? 'bg-white/10 text-white border border-white/20' : 'bg-[#D9FF4A] text-slate-950'}`}>
              Contact Us
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`group flex items-center justify-center p-4 rounded-xl transition-all duration-500 ${
                isOpen ? 'bg-white/10 text-white border border-white/10' : 'bg-white/40 backdrop-blur-md border border-slate-950/10 text-slate-950'
              }`}
            >
              <div className="relative h-4 w-5">
                <span className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${isOpen ? 'bg-white rotate-45 top-[7px]' : 'bg-slate-950 top-[3px]'}`} />
                <span className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${isOpen ? 'bg-white -rotate-45 top-[7px]' : 'bg-slate-950 top-[11px]'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9998] bg-[#0A0A0B] text-white flex flex-col md:flex-row overflow-hidden">
            <div className="hidden lg:flex w-1/2 h-full border-r border-white/5 relative items-center justify-center">
              <div className="w-full h-[75%]">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 16], fov: 45 }}>
                  <PackingField />
                </Canvas>
              </div>
            </div>

            <div className="flex-grow flex flex-col h-full bg-[#0D0D0F] overflow-hidden">
              {/* flex-grow with overflow-hidden ensures no scrolling */}
              <div className="flex-grow overflow-hidden">
                {/* Reduced pt-40 to pt-32 to move Home up */}
                <main className="flex flex-col justify-start pt-32 px-10 md:px-24">
                  <nav className="flex flex-col">
                    {navItems.map((item, idx) => {
                      const isActive = item.href === "/" 
                        ? pathname === "/" 
                        : pathname.startsWith(item.href);
                      
                      const isHovered = hoveredIndex === idx;
                      const hasSubItems = item.subItems.length > 0;

                      return (
                        <div key={item.name} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)} className="border-b border-white/[0.03]">
                          <Link href={item.href} onClick={() => setIsOpen(false)} className="group relative flex items-center py-5 transition-all">
                            {isActive && (
                              <motion.span 
                                layoutId="activeDot"
                                className="absolute -left-5 w-1.5 h-1.5 rounded-full bg-[#00a651]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              />
                            )}
                            
                            <span className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-all group-hover:translate-x-3 group-hover:text-[#D9FF4A] ${isActive ? 'text-white' : 'text-slate-500'}`}>
                              {item.name}
                            </span>
                            <ArrowRight className={`ml-auto w-5 h-5 transition-all ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'} text-[#D9FF4A]`} />
                          </Link>

                          <AnimatePresence>
                            {isHovered && hasSubItems && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden">
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 pb-8">
                                  {item.subItems.map((sub, sIdx) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <motion.div key={`${item.name}-${sub.name}`} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: sIdx * 0.02 }}>
                                        <Link href={sub.href} onClick={() => setIsOpen(false)} className={`text-[10px] font-bold transition-colors uppercase tracking-widest leading-relaxed block ${isSubActive ? 'text-[#00a651]' : 'text-slate-500 hover:text-[#D9FF4A]'}`}>
                                          {sub.name}
                                        </Link>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </nav>
                </main>
              </div>

              {/* Footer is fixed to the bottom via flex-grow/shrink-0 and doesn't move */}
              <footer className="px-10 md:px-24 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 shrink-0 bg-[#0D0D0F]">
                <div className="flex gap-16">
                  <div className="space-y-2">
                    <span className="block text-[8px] font-black uppercase tracking-[0.4em] text-slate-700">Connect</span>
                    <div className="flex gap-6">
                      <Linkedin className="w-4 h-4 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                      <Mail className="w-4 h-4 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                      <Globe className="w-4 h-4 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="block text-[8px] font-black uppercase tracking-[0.4em] text-slate-700">Locations</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Shanghai • Qingdao • Singapore</span>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.5em] leading-relaxed">Chemvict Process Solutions <br /> Molecular Precision</p>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}