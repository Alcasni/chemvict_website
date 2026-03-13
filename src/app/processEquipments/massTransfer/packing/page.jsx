'use client'

import React from 'react'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Settings,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#0284C7',
  border: 'rgba(26, 28, 30, 0.1)',
}

const TECHNICAL_SECTIONS = [
  {
    id: '01',
    title: 'Corrugated Sheet Structured Packing',
    eyebrow: 'High Capacity Packing',
    prose: <>Chemvict offers a full range of conventional corrugated sheet packing as well as the latest generation of Pakpro corrugated sheet structured packing. Chemvict Pakpro packing features a <strong>unique curved and smooth transition</strong> flow channel design. The inclined channels gradually approach a vertical orientation at the interface between packing layers, resulting in smoother gas flow across the contact surfaces between packing layers, a more stable liquid film on the packing surface, and less liquid holdup between layers. Flooding is almost entirely avoided before the packing reaches its capacity limit.</>,
    techNote: <>Compared with conventional structured packing, Chemvict Pakpro packing significantly <strong>reduces pressure drop by 20%</strong> and <strong>increases capacity by 50%</strong>. This allows smaller column diameters in new tower designs and higher throughput in revamp towers. Chemvict Pakpro corrugated sheet packing has a very wide range of applications and is suitable for services from vacuum to high pressure.</>,
    image: '/images/processEquipments/pk1.png',
  },
  {
    id: '02',
    title: 'Wire Gauze Structured Packing',
    eyebrow: 'High Efficiency Packing',
    prose: <>Chemvict Pakpro wire gauze packing is the latest generation of wire gauze structured packing. It can achieve <strong>highly difficult separations</strong> with lower pressure drop. Its unique smooth flow channel design reduces pressure drop by 20% compared with conventional wire gauze packing while maintaining the same efficiency.</>,
    techNote: 'Chemvict Pakpro wire gauze packing is widely used and is suitable for applications from vacuum to atmospheric pressure.',
    image: '/images/processEquipments/pk2.png',
  },
  {
    id: '03',
    title: 'Random Packing',
    eyebrow: 'Versatile Bulk Packing',
    prose: <>We provide both conventional random packing and high performance random packing. Different geometric sizes and materials can meet a wide range of requirements.</>,
    techNote: <>Random packing is suitable for applications with <strong>severe fouling</strong> or corrosion.</>,
    image: '/images/processEquipments/pk3.png',
  },
  {
    id: '04',
    title: 'Grid Packing',
    eyebrow: 'Fouling Resistant Packing',
    prose: <>Grid packing is suitable for services prone to plugging, corrosion, coking, and the presence of solid particles.</>,
    techNote: null,
    image: '/images/processEquipments/pk4.png',
  },
  {
    id: '05',
    title: 'Corrosion Resistant Packing',
    eyebrow: 'Specialty Material Packing',
    prose: <>In severely corrosive services, packing made of special metals, alloys, ceramics, silicon carbide, and plastics is required.</>,
    techNote: null,
    image: '/images/processEquipments/pk5.png',
  },
  {
    id: '06',
    title: 'Dixon Packing',
    eyebrow: 'Laboratory Packing',
    prose: <>Dixon packing, also known domestically as theta ring packing, is a highly efficient small particulate packing made from metal wire mesh. Because its diameter and height are equal, it takes a cylindrical shape, categorizing it as a random packing. It is primarily utilized for the separation and development of <strong>high purity products and isotopes</strong> in laboratories.</>,
    techNote: 'The pressure drop of the packing is related to gas velocity, liquid spray volume, material weight, surface tension, viscosity, and packing characteristics. Thanks to the capillary action of the metal wire mesh, the liquid holdup of the packing is substantial, surface wetting is superior, and thereby the theoretical plate number is significantly high, reaching 2 to 10 times that of common random packing. Common materials for this packing include SS304, SS316L, Hastelloy, Copper, Titanium, and others.',
    image: '/images/processEquipments/pk6.png',
    table: {
      headers: ['Specification (mm)', 'Mesh (mm)', 'Suitable Tower Dia (mm)', 'Theoretical Plates (plates per m)', 'Bulk Quantity (pieces per L)', 'Specific Surface Area (m2 per m3)', 'Voidage %', 'Pressure Drop (mbar per m)'],
      rows: [
        ['Φ2x2', '100', 'Φ15 to φ30', '50 to 55', '90000', '3700', '91', '30'],
        ['Φ3x3', '100', 'Φ30 to φ65', '35 to 40', '28800', '2600', '93', '17'],
        ['φ4x4', '80', 'Φ50 to φ100', '20 to 25', '11500', '1700', '94', '10'],
        ['φ4x4 PLUS', '80', 'Φ50 to φ100', '28 to 32', '11500', '2500', '94', '11'],
        ['Φ5x5', '60', 'Φ60 to φ125', '15 to 18', '5800', '1300', '95', '9'],
        ['Φ5x5 PLUS', '80', 'Φ60 to φ125', '22 to 25', '5800', '2250', '95', '10'],
        ['Φ6x6', '60', 'Φ100 to φ150', '10 to 13', '3450', '1050', '95', '6'],
        ['Φ8x8', '60', 'Φ150 to φ250', '9 to 11', '1467', '850', '96', '3'],
        ['Φ10x10', '60', 'Φ150 to φ300', '7 to 8', '750', '650', '96', '2'],
      ]
    }
  },
  {
    id: '07',
    title: 'Triangular Spiral Packing',
    eyebrow: 'Laboratory Packing',
    prose: <>Triangular spiral packing, also called Fenske Spiral packing, is wound from metal wire. Its outward appearance resembles a spring, earning it the alternate name of triangular spring packing. The distinction from a standard spring is that each coil forms a triangle rather than a circle, and there is a specific angle between the coils. Consequently, looking down from the end reveals a polygonal shape.</>,
    techNote: 'This type of packing boasts high efficiency and excellent separation rates, although it has greater resistance compared to theta ring packing. It is a niche product within the chemical engineering packing sector, predominantly used in laboratories, particularly for the separation and purification of fine chemical isotopes.',
    image: '/images/processEquipments/pk7.png',
    table: {
      headers: ['Index Size', 'Specific Surface Area', 'Voidage %', 'Bulk Density (kg per L)', 'Theoretical Plates (plates per m)'],
      rows: [
        ['1.5mm', '3500', '80', '1.5', '80'],
        ['3mm', '2800', '84', '1.2', '60'],
        ['4mm', '2500', '88', '1.1', '40'],
      ]
    }
  }
]

export default function PackingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#0284C7] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments/massTransfer" className="hover:text-[#0284C7] transition-colors">Mass Transfer</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Packing</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-11">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#0284C7] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Packing
                </h1>
                <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-5xl italic space-y-4">
                  <p>Shanghai Chemvict is an expert and solution provider in the field of distillation. We have experienced technical personnel, professional expertise, strong design capabilities, and high quality manufacturing processes, ensuring that we provide customers with the best solutions and guaranteed performance.</p>
                  <p>Our distillation technologies include: Continuous and batch distillation, Single stage and multi stage distillation, Extractive distillation, Azeotropic distillation, Pressure swing distillation, Reactive distillation, and Dividing wall column distillation.</p>
                  <p>Our distillation products include: structured packing (corrugated sheet packing and wire gauze packing), random packing, trays, column internals, gas liquid separators, and liquid liquid separators.</p>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-40 lg:space-y-56 mb-40">
            {TECHNICAL_SECTIONS.map((section, idx) => (
              <section key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white/40 p-8 lg:p-12 border border-black/5">
                
                <div className={`lg:col-span-7 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-5xl font-black italic opacity-10 tracking-tighter">{section.id}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase italic leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-8 pr-0 lg:pr-10">
                    <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
                      {section.prose}
                    </p>
                    
                    {section.techNote && (
                      <div className="bg-white p-8 border border-black/5 shadow-sm rounded-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <Settings size={14} className="text-[#0284C7]" />
                          <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">Technical capability</span>
                        </div>
                        <p className="text-sm text-slate-800 leading-relaxed tracking-tight">
                          {section.techNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex flex-col gap-8`}>
                  <div className="relative aspect-[4/3] bg-white border shadow-lg overflow-hidden" style={{ borderColor: COLORS.border }}>
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/[0.02]" />
                  </div>
                </div>

                {/* Conditional Rendering for Laboratory Packing Tables */}
                {section.table && (
                  <div className="lg:col-span-12 mt-4 lg:mt-8 overflow-x-auto bg-white border border-black/5 shadow-sm">
                    <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
                      <thead className="bg-slate-50 border-b border-black/5 text-[11px] uppercase tracking-wider font-bold">
                        <tr>
                          {section.table.headers.map((h, i) => <th key={i} className="p-4 md:p-6">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i} className="border-b border-black/5 last:border-0 hover:bg-slate-50/50 transition-colors">
                            {row.map((cell, j) => <td key={j} className="p-4 md:p-6 font-medium">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </section>
            ))}
          </div>

          <section className="bg-white border p-12 lg:p-24 mb-32" style={{ borderColor: COLORS.border }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Performance Reliability</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  The primary focus of Chemvict packing systems is maximizing capacity while minimizing pressure drop. By utilizing advanced Pakpro geometries, we consistently deliver high efficiency separation across all column diameters, substantially reducing the energy required for distillation and absorption processes.
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <Shield size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">
                    Materials are selected to endure aggressive chemical environments, ranging from standard stainless steels to specialty alloys, ceramics, and advanced plastics.
                  </p>
                </div>
                <div className="flex gap-6">
                  <BookOpen size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">
                    All packing geometries are optimized for stable hydraulic performance, significantly reducing liquid holdup and preventing premature flooding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[1400px] mx-auto py-32 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <Link href="/processEquipments/massTransfer/phaseSeparation" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#0284C7] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#0284C7]" size={32} /> 
              Back to Phase Separation
            </Link>
            
            <Link href="/processEquipments/massTransfer/columnInternals" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#1A1C1E] transition-colors">
              Column Internals
              <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#1A1C1E]" size={32} /> 
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}