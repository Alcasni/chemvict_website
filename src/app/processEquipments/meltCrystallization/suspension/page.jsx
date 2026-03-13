'use client'

import React from 'react'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  Settings,
  Shield,
  BookOpen,
  CheckCircle2,
  Factory,
  Layers,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#94A3B8',
  border: 'rgba(26, 28, 30, 0.1)',
}

const PROCESS_SECTIONS = [
  {
    id: '01',
    title: 'Crystallization',
    eyebrow: 'Phase Transition',
    prose: (
      <div className="space-y-6">
        <p>
          The driving force of the melt crystallization process is the <strong>supersaturation or supercooling</strong> of a certain component in the molten liquid.
        </p>
        <div className="grid grid-cols-3 gap-4 border-y border-black/5 py-6 my-6">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Stage 1</span>
            <span className="font-bold text-sm">Crystallization</span>
          </div>
          <div className="text-center border-x border-black/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Stage 2</span>
            <span className="font-bold text-sm">Sweating</span>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Stage 3</span>
            <span className="font-bold text-sm">Melting</span>
          </div>
        </div>
        <p>
          After the feed enters the crystallizer, it exchanges heat with the cooling medium in the external jacket. A supersaturated film forms on the inner wall, which is then scraped by blades to prevent caking and ensure continuous operation.
        </p>
      </div>
    ),
    techNote: 'The locally cooled liquid phase is quickly mixed into the bulk material to release supersaturation and generate crystals. This creates a controllable growth environment, producing high purity crystals even in impurity-enriched mother liquor. The resulting slurry then enters the wash column.',
    image: '/images/processEquipments/mc1.png',
  },
  {
    id: '02',
    title: 'Separation',
    eyebrow: 'Slurry Washing',
    prose: (
      <div className="space-y-6">
        <p>
          The wash column efficiently and <strong>completely separates pure crystals</strong> from the mother liquor. The crystals are then melted using hot water, low-pressure steam, or other available heat sources.
        </p>
        <p>
          The purified melt is discharged through an automatic control valve, ensuring a seamless flow from separation to final product output.
        </p>
      </div>
    ),
    techNote: 'The system uses a large inventory to absorb variations in feed composition, automatically adjusting via reliable instrumentation. Both product and mother liquor can be recycled to the feed line, allowing for startup or temporary interruptions without affecting stability.',
    image: '/images/processEquipments/m1.png',
  }
]

const ADVANTAGES = [
  { title: 'Product Purity', desc: <>Purity can reach <strong>chromatographic levels over 99.99%</strong>.</> },
  { title: 'Operating Safety', desc: 'Operates at atmospheric pressure and low temperatures for safe handling.' },
  { title: 'Material Systems', desc: <>Separates isomers and chiral substances <strong>difficult for distillation</strong>.</> },
  { title: 'Zero Solvents', desc: 'No additional solvents required, avoiding environmental pollution.' },
  { title: 'Low Investment', desc: 'Standard equipment specifications help reduce long-term maintenance costs.' },
  { title: 'Energy Efficiency', desc: 'Energy consumption is generally 10% to 30% of conventional distillation.' },
]

const TYPICAL_APPLICATIONS = [
  { category: 'Petrochemicals', items: 'Durene, maleic anhydride, p-xylene, m-xylene' },
  { category: 'Polymer Monomers', items: 'Bisphenol A, acrylic acid, caprolactam, DMT' },
  { category: 'Electronic Chemicals', items: 'Ethylene carbonate, DMC, VC, hydrogen peroxide' },
  { category: 'Biosynthetic Materials', items: 'Dimethyl succinate, lactide, cadaverine' },
  { category: 'Coal Chemicals', items: 'Refined naphthalene, FT-wax, cresol, naphthol' },
  { category: 'Fine Chemicals', items: 'Benzoic acid, phenylenediamine, chloroacetic acid' },
]

const DETAILED_APPLICATIONS = [
  {
    id: '3.1',
    title: 'Isomer Separation',
    desc: 'Common in fine chemicals, isomers with similar boiling points are difficult to separate via distillation. Donggeng technology is widely applied in purifying lactide, MPD, PPD, and mixed cresols with excellent results.'
  },
  {
    id: '3.2',
    title: 'Electronic Grade',
    desc: <>Electronic chemicals require <strong>ultra-pure products</strong> (99.99% to 99.9999%). This technology is used for EC, DMC, and VC, supporting production capacities up to 30,000 tons per year.</>
  },
  {
    id: '3.3',
    title: 'Heat Sensitive',
    desc: 'For substances prone to decomposition or oxidation when heated, melt crystallization preserves yields. Key applications include Bisphenol A, isocyanates, and glacial acrylic acid.'
  },
  {
    id: '3.4',
    title: 'Azeotropic Systems',
    desc: 'Reduces high energy consumption and the need for third-component solvents in systems like naphthalene-thioindene and DMC-methanol, substantially lowering costs.'
  },
  {
    id: '3.5',
    title: 'Polymer Materials',
    desc: 'High-purity monomers ensure better polymer color and heat resistance. Applied in PLA, PGA, and nylon 6 to provide high-quality functional monomers.'
  }
]

export default function SuspensionMeltCrystallizationPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#94A3B8] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments/meltCrystallization" className="hover:text-[#94A3B8] transition-colors">Melt Crystallization</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Suspension</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-11">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Suspension Melt Crystallization
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg text-slate-600 font-medium leading-relaxed italic">
                  <p>Separation method based on melting point differences in molten mixtures. It operates at low temperatures with easily controlled flow rates and continuous stability.</p>
                  <p>Offers superior purity and energy performance compared to traditional methods. Features a compact layout with skid-mounted options to reduce on-site construction costs.</p>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-40 lg:space-y-56 mb-40">
            {PROCESS_SECTIONS.map((section, idx) => (
              <section key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white/40 p-8 lg:p-12 border border-black/5">
                <div className={`lg:col-span-7 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-5xl font-black italic opacity-10 tracking-tighter">{section.id}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase italic leading-tight">{section.title}</h2>
                  </div>
                  <div className="space-y-8 pr-0 lg:pr-10">
                    <div className="text-lg text-slate-600 font-medium leading-relaxed">{section.prose}</div>
                    {section.techNote && (
                      <div className="bg-white p-8 border border-black/5 shadow-sm rounded-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <Settings size={14} className="text-[#94A3B8]" />
                          <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">System Capability</span>
                        </div>
                        <p className="text-sm text-slate-800 leading-relaxed tracking-tight">{section.techNote}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex flex-col gap-8`}>
                  <div className="relative aspect-[4/3] bg-white border shadow-lg overflow-hidden" style={{ borderColor: COLORS.border }}>
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mb-40">
            <div className="flex items-center gap-4 mb-12">
              <Shield size={24} className="text-[#94A3B8]" />
              <h3 className="text-3xl font-bold tracking-tighter uppercase italic">Advantages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVANTAGES.map((adv, i) => (
                <div key={i} className="bg-white border border-black/5 p-8 shadow-sm">
                  <CheckCircle2 size={20} className="text-[#94A3B8] mb-6" />
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-3">{adv.title}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-40 bg-[#1A1C1E] text-white p-12 lg:p-20">
            <div className="flex items-center gap-4 mb-16">
              <Factory size={28} className="text-[#94A3B8]" />
              <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase italic">Applications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {TYPICAL_APPLICATIONS.map((app, i) => (
                <div key={i} className="border-t border-white/20 pt-6">
                  <h4 className="text-[#94A3B8] text-xs font-black uppercase tracking-[0.2em] mb-4">{app.category}</h4>
                  <p className="text-sm font-medium leading-relaxed opacity-80">{app.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <BookOpen size={24} className="text-[#94A3B8]" />
              <h3 className="text-3xl font-bold tracking-tighter uppercase italic">Deep Dive</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {DETAILED_APPLICATIONS.map((detail) => (
                <div key={detail.id} className="bg-white/40 border border-black/5 p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-bold uppercase tracking-tight">{detail.title}</h4>
                    <span className="text-2xl font-black italic opacity-10 leading-none">{detail.id}</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{detail.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="py-32 border-t border-black/10" />

        </div>
      </main>

      <Footer />
    </div>
  )
}