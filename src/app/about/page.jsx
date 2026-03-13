'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Home, ChevronRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

// --- COMPONENTS ---
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
  mapLand: '#FFFFFF',
  mapWater: '#1557B0',
}

const ACTIVE_CUSTOMER_COUNTRIES = [
  'China',
  'United States of America',
  'United States',
  'USA',
  'Russia',
  'Russian Federation',
  'Japan',
  'Thailand',
  'Vietnam',
  'Viet Nam',
  'Malaysia',
  'Singapore',
  'Indonesia',
  'Philippines',
  'Cambodia',
  'Laos',
  'Lao PDR',
  'Myanmar',
  'Burma',
  'Brunei',
  'Brunei Darussalam',
  'Timor-Leste',
]

const WORLD_GEOJSON_URL =
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'

function normalizeCountryName(name = '') {
  return name.toLowerCase().replace(/\s+/g, ' ').trim()
}

const ACTIVE_COUNTRY_SET = new Set(
  ACTIVE_CUSTOMER_COUNTRIES.map((name) => normalizeCountryName(name))
)

function isActiveCountry(feature) {
  const possibleNames = [
    feature?.properties?.name,
    feature?.properties?.NAME,
    feature?.properties?.admin,
    feature?.properties?.ADMIN,
    feature?.properties?.sovereignt,
    feature?.properties?.SOVEREIGNT,
  ].filter(Boolean)

  return possibleNames.some((name) => ACTIVE_COUNTRY_SET.has(normalizeCountryName(name)))
}

function projectLonLatToCanvas(lon, lat, width, height) {
  const x = ((lon + 180) / 360) * width
  const y = ((90 - lat) / 180) * height
  return [x, y]
}

function getWrappedRingPoints(ring, width, height, xOffset = 0) {
  const points = []
  let previousX = null
  let wrapShift = 0

  for (const coord of ring) {
    if (!Array.isArray(coord) || coord.length < 2) continue

    const [lon, lat] = coord
    const [baseX, y] = projectLonLatToCanvas(lon, lat, width, height)

    let adjustedX = baseX + wrapShift

    if (previousX !== null) {
      const delta = adjustedX - previousX
      if (delta > width / 2) {
        wrapShift -= width
        adjustedX = baseX + wrapShift
      } else if (delta < -width / 2) {
        wrapShift += width
        adjustedX = baseX + wrapShift
      }
    }

    points.push([adjustedX + xOffset, y])
    previousX = adjustedX
  }

  return points
}

function tracePolygonPath(ctx, polygon, width, height) {
  for (const ring of polygon) {
    if (!Array.isArray(ring) || ring.length < 3) continue

    for (const offset of [-width, 0, width]) {
      const points = getWrappedRingPoints(ring, width, height, offset)
      if (points.length < 3) continue

      ctx.moveTo(points[0][0], points[0][1])
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1])
      }
      ctx.closePath()
    }
  }
}

function drawFeature(ctx, feature, width, height, fillStyle, strokeStyle, lineWidth = 1) {
  const geometry = feature?.geometry
  if (!geometry) return

  ctx.beginPath()

  if (geometry.type === 'Polygon') {
    tracePolygonPath(ctx, geometry.coordinates, width, height)
  } else if (geometry.type === 'MultiPolygon') {
    for (const polygon of geometry.coordinates) {
      tracePolygonPath(ctx, polygon, width, height)
    }
  } else {
    return
  }

  ctx.fillStyle = fillStyle
  ctx.fill('evenodd')

  ctx.strokeStyle = strokeStyle
  ctx.lineWidth = lineWidth
  ctx.stroke()
}

function createPoliticalGlobeTexture(geojson) {
  const width = 4096
  const height = 2048

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = COLORS.mapWater
  ctx.fillRect(0, 0, width, height)

  const features = geojson?.features || []

  for (const feature of features) {
    drawFeature(
      ctx,
      feature,
      width,
      height,
      COLORS.mapLand,
      'rgba(20, 30, 40, 0.18)',
      0.8
    )
  }

  for (const feature of features) {
    if (!isActiveCountry(feature)) continue

    drawFeature(
      ctx,
      feature,
      width,
      height,
      COLORS.accent,
      'rgba(0, 120, 60, 0.55)',
      1.0
    )
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  texture.needsUpdate = true

  return texture
}

function createFallbackTexture() {
  const width = 2048
  const height = 1024

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = COLORS.mapWater
  ctx.fillRect(0, 0, width, height)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true

  return texture
}

function HeatMapGlobe() {
  const fallbackTexture = useMemo(() => createFallbackTexture(), [])
  const [mapTexture, setMapTexture] = useState(fallbackTexture)

  useEffect(() => {
    let cancelled = false

    async function buildTexture() {
      try {
        const response = await fetch(WORLD_GEOJSON_URL)
        const geojson = await response.json()
        const texture = createPoliticalGlobeTexture(geojson)

        if (!cancelled && texture) {
          setMapTexture(texture)
        }
      } catch (error) {
        console.error('Failed to build globe texture:', error)
      }
    }

    buildTexture()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <group rotation={[0, -THREE.MathUtils.degToRad(105), 0]}>
      <mesh>
        <sphereGeometry args={[3, 128, 128]} />
        <meshStandardMaterial map={mapTexture} roughness={0.95} metalness={0.02} />
      </mesh>

      <mesh>
        <sphereGeometry args={[3.035, 64, 64]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.035} />
      </mesh>

      <mesh scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshBasicMaterial
          color="#8DB6FF"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

function QualificationPreview() {
  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden rounded-[20px] bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,166,81,0.06),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(2,132,199,0.08),transparent_38%)]" />

      <div className="absolute -right-4 top-4 h-[180px] w-[120px] rotate-[10deg] rounded-[18px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]" />
      <div className="absolute right-12 top-8 h-[190px] w-[140px] rotate-[-8deg] rounded-[18px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]" />
      
      <div className="absolute right-[42px] top-[48px] h-[5px] w-[60px] rounded-full bg-black/10" />
      <div className="absolute right-[42px] top-[64px] h-[5px] w-[80px] rounded-full bg-black/10" />
      <div className="absolute right-[42px] top-[80px] h-[5px] w-[70px] rounded-full bg-black/10" />
      
      <div className="absolute left-6 bottom-6 right-24 rounded-[14px] border border-black/8 bg-[#F8FAFC] px-4 py-3">
        <div className="mb-2 text-[8px] font-black uppercase tracking-[0.2em] opacity-35">
          Patents
        </div>
        <div className="h-[4px] w-[72%] rounded-full bg-black/10 mb-1.5" />
        <div className="h-[4px] w-[58%] rounded-full bg-black/10" />
      </div>
    </div>
  )
}

function DevelopmentsPreview() {
  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden rounded-[20px] bg-[#06152F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(0,166,81,0.24),transparent_22%),radial-gradient(circle_at_80%_70%,rgba(2,132,199,0.24),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="absolute left-8 top-6 bottom-6 w-px bg-white/10" />

      {[
        { top: 'top-8', label: 'Tech Iteration' },
        { top: 'top-20', label: 'Optimization' },
        { top: 'top-32', label: 'Market Expand' },
      ].map((item) => (
        <div key={item.label} className={`absolute left-8 ${item.top} flex items-center gap-3`}>
          <div className="relative -translate-x-1/2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#00a651] shadow-[0_0_15px_rgba(0,166,81,0.45)]" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-semibold tracking-[0.1em] uppercase text-white/78 backdrop-blur-sm">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* BREADCRUMB */}
          <nav className="flex items-center gap-2 mb-12 opacity-40 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link
              href="/"
              className="hover:text-[#00a651] transition-colors flex items-center gap-1"
            >
              <Home size={12} /> 
            </Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}><Link href='/about'>About</Link></span>
          </nav>

          {/* SECTION 1: OUR COMPANY */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40 items-start">
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter mb-10">
                Our Company
              </h1>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
                <p>
                  Chemvict Process Solution (Shanghai) Co., Ltd. (&quot;Chemvict&quot;) was
                  established in Shanghai in 2010. Chemvict is an industry-leading,
                  technology-driven provider of process solutions and a professional
                  manufacturer of separation and distillation equipment, with capabilities
                  spanning distillation and separation, low-carbon and energy-efficiency
                  optimization, and engineering design.
                </p>
                <p>
                  Headquartered in Shanghai with a manufacturing base in Qingdao, Shandong,
                  Chemvict has a proven track record of successfully delivered projects across
                  oleochemicals, food and pharmaceutical industries, fine chemicals, advanced
                  materials, polymers, electronic chemicals, and biodegradable plastics.
                </p>
                <p>
                  Chemvict is supported by experienced R&amp;D and process development and
                  scale-up engineering teams. All team members bring over ten years of
                  experience from well-recognized companies in the industry. Backed by
                  experienced manufacturing and project management teams, Chemvict provides
                  responsive on-site support, including installation supervision,
                  commissioning and start-up assistance, and after-sales and field services.
                </p>
                <p>
                  Chemvict holds a portfolio of patented technologies and extensive process
                  system solutions. Building on close collaboration with leading engineering
                  companies and universities in China and abroad, Chemvict drives joint R&amp;D
                  and technology breakthroughs to strengthen overall competitiveness.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-end">
              <div className="relative aspect-square w-full max-w-[550px] bg-white shadow-2xl">
                <img
                  src="/images/about/qingdaoBase.jpg"
                  alt="Chemvict Qingdao Manufacturing Base"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 p-8">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 text-[10px] font-black uppercase tracking-[0.4em] border border-black/5">
                    Production Base • Qingdao
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: GLOBE */}
          <section className="py-32 border-t" style={{ borderColor: COLORS.border }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="mb-6 text-[10px] font-black uppercase tracking-[0.34em] text-black/35">
                  Market Presence
                </div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Our Footprint</h2>
                <p className="text-2xl text-slate-500 leading-relaxed max-w-xl font-medium mb-12">
                  We empower partners globally. Our digital globe highlights key operational
                  areas across{' '}
                  <span className="text-black">
                    China, Southeast Asia, Japan, Russia, and the USA
                  </span>
                  .
                </p>

                {/* NEW MINIMAL LEGEND */}
<div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] text-black/60 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-black/5 inline-flex">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-4 rounded-sm" style={{ backgroundColor: COLORS.accent }} />
                    <span className="text-black/80">Countries where we have customers</span>
                  </div>
                </div>
              </div>

              <div className="h-[500px] lg:h-[650px] relative cursor-grab active:cursor-grabbing">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Canvas camera={{ position: [0, 0, 8.5], fov: 40 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={1.15} />
                      <directionalLight position={[8, 6, 10]} intensity={1.35} />
                      <pointLight position={[-8, -3, 6]} intensity={0.35} />
                      <HeatMapGlobe />
                      <OrbitControls
                        enableZoom={false}
                        autoRotate={true}
                        autoRotateSpeed={0.6}
                        makeDefault
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: ABOUT NAVIGATION */}
          <section className="py-32 border-t" style={{ borderColor: COLORS.border }}>
            <div className="mb-14">
              <div className="mb-5 text-[10px] font-black uppercase tracking-[0.34em] text-black/35">
                Company Navigation
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                A Deeper Look at Chemvict
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/about/qualifications"
                className="group relative flex flex-col xl:flex-row items-center gap-8 overflow-hidden rounded-[28px] border border-black/6 bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex-1 w-full pl-2">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-black/35">
                    Verified Capabilities
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-6">Qualifications</h3>
                  
                  <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-black group-hover:text-[#00a651] transition-colors">
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                <div className="w-full xl:w-[50%] h-[180px]">
                  <QualificationPreview />
                </div>
              </Link>

              <Link
                href="/about/developments"
                className="group relative flex flex-col xl:flex-row items-center gap-8 overflow-hidden rounded-[28px] border border-black/6 bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex-1 w-full pl-2">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-black/35">
                    Ongoing Evolution
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-6">Developments</h3>
                  
                  <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-black group-hover:text-[#00a651] transition-colors">
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                <div className="w-full xl:w-[50%] h-[180px]">
                  <DevelopmentsPreview />
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}