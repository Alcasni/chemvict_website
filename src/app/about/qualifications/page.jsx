'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Home, ChevronRight, ChevronLeft, X, Maximize2 } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
}

const DOCUMENTS = [
  // --- CERTIFICATIONS (Placeholders for the filter to work) ---
  { id: 'c1', type: 'Certification', category: 'Quality Management', title: 'ISO 9001:2015', desc: 'Quality Management System Certification for chemical engineering design and manufacturing.', date: '2023', image: '/images/qualifications/cert-1.jpg' },
  { id: 'c2', type: 'Certification', category: 'Environmental', title: 'ISO 14001:2015', desc: 'Environmental Management System Certification.', date: '2023', image: '/images/qualifications/cert-2.jpg' },
  { id: 'c3', type: 'Certification', category: 'Health & Safety', title: 'ISO 45001:2018', desc: 'Occupational Health and Safety Management System.', date: '2023', image: '/images/qualifications/cert-3.jpg' },
  { id: 'c4', type: 'Certification', category: 'Manufacturing', title: 'ASME U-Stamp', desc: 'Certification for the design and fabrication of pressure vessels.', date: '2022', image: '/images/qualifications/cert-4.jpg' },
  { id: 'c5', type: 'Certification', category: 'Compliance', title: 'CE Marking', desc: 'European conformity for separation and distillation equipment.', date: '2021', image: '/images/qualifications/cert-5.jpg' },
  { id: 'c6', type: 'Certification', category: 'Enterprise', title: 'High-Tech Enterprise', desc: 'National recognition for continuous R&D and technological transformation.', date: '2020', image: '/images/qualifications/cert-6.jpg' },
  { id: 'c7', type: 'Certification', category: 'Enterprise', title: 'Specialized & Sophisticated SME', desc: 'Provincial recognition for niche market leadership and technical expertise.', date: '2022', image: '/images/qualifications/cert-7.jpg' },
  { id: 'c8', type: 'Certification', category: 'Operations', title: 'Standardized Good Behavior', desc: 'AAAA-level certification for corporate standard systems.', date: '2021', image: '/images/qualifications/cert-8.jpg' },
  { id: 'c9', type: 'Certification', category: 'Credit', title: 'AAA Credit Grade', desc: 'Highest level corporate credit rating certification.', date: '2023', image: '/images/qualifications/cert-9.jpg' },

  // --- PATENTS (English text with exact Chinese .png filenames) ---
  { 
    id: 'p1', 
    type: 'Patent', 
    category: 'Invention Patent', 
    title: 'System and Method for Purifying m-Dichlorobenzene from Mixed Dichlorobenzene', 
    desc: 'Invention patent for a system and process designed to isolate high-purity m-dichlorobenzene from mixed dichlorobenzene streams.', 
    docNumber: 'ZL 202211600948.1', 
    date: '2026',
    image: '/images/qualifications/混合二氯苯中提纯间二氯苯的系统和方法.png' 
  },
  { 
    id: 'p2', 
    type: 'Patent', 
    category: 'Invention Patent', 
    title: 'Separation System and Method for Mixed Dichlorobenzene', 
    desc: 'Invention patent covering a separation system and process for mixed dichlorobenzene streams.', 
    docNumber: 'ZL 201710086626.2', 
    date: '2024',
    image: '/images/qualifications/一种用于分离混合二氯苯的分离系统和分离方法.png' 
  },
  { 
    id: 'p3', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Distillation System for Recovering N,N-Dimethylacetamide (DMAc) from Wastewater', 
    desc: 'Utility model patent for a distillation system used to recover N,N-dimethylacetamide from wastewater streams.', 
    docNumber: 'ZL 202122439819.6', 
    date: '2022',
    image: '/images/qualifications/一种从废水中回收DMAC的精馏系统.png' 
  },
  { 
    id: 'p4', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Purification System for m-Dichlorobenzene from Mixed Dichlorobenzene', 
    desc: 'Utility model patent for a purification system designed to obtain m-dichlorobenzene from mixed dichlorobenzene feedstocks.', 
    docNumber: 'ZL 202223357748.6', 
    date: '2023',
    image: '/images/qualifications/混合二氯苯中提纯间二氯苯的系统.png' 
  },
  { 
    id: 'p5', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Purification System for 2,6-Xylenol', 
    desc: 'Utility model patent for a purification system developed for 2,6-xylenol processing and product refinement.', 
    docNumber: 'ZL 202322198805.9', 
    date: '2024',
    image: '/images/qualifications/一种2,6-二甲苯酚的提纯系统.png' 
  },
  { 
    id: 'p6', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Purification System for n-Butanol', 
    desc: 'Utility model patent for a purification system used in n-butanol separation and product purification.', 
    docNumber: 'ZL 202421151484.5', 
    date: '2025',
    image: '/images/qualifications/一种正丁醇提纯系统.png' 
  },
  { 
    id: 'p7', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Bubble Caps, Trays, and Tray Columns', 
    desc: 'Utility model patent relating to bubble-cap components, tray designs, and tray-column hardware used in mass-transfer and distillation applications.', 
    docNumber: 'ZL 202421186359.8', 
    date: '2025',
    image: '/images/qualifications/一种泡罩、塔盘和板式塔.png' 
  },
  { 
    id: 'p8', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Heat-Pump Distillation System for p-Nitrotoluene', 
    desc: 'Utility model patent for a heat-pump distillation system designed for p-nitrotoluene purification and energy-efficient separation.', 
    docNumber: 'ZL 202420432750.5', 
    date: '2024',
    image: '/images/qualifications/一种对硝基甲苯的热泵精馏系统.png' 
  },
  { 
    id: 'p9', 
    type: 'Patent', 
    category: 'Utility Model', 
    title: 'Separation System for N,N-Dimethylformamide (DMF)', 
    desc: 'Utility model patent for a separation system developed for N,N-dimethylformamide processing and recovery.', 
    docNumber: 'ZL 202321589967.9', 
    date: '2023',
    image: '/images/qualifications/N,N-二甲基甲酰胺的分离系统.png' 
  },
]

export default function QualificationsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedDocIndex, setSelectedDocIndex] = useState(null)

  const filteredDocs = DOCUMENTS.filter(doc => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Certifications') return doc.type === 'Certification'
    if (activeFilter === 'Patents') return doc.type === 'Patent'
    return doc.category === activeFilter
  })

  const openLightbox = (index) => setSelectedDocIndex(index)
  const closeLightbox = () => setSelectedDocIndex(null)
  
  const nextDoc = useCallback(() => {
    if (selectedDocIndex !== null) {
      setSelectedDocIndex((prev) => (prev + 1) % filteredDocs.length)
    }
  }, [selectedDocIndex, filteredDocs.length])

  const prevDoc = useCallback(() => {
    if (selectedDocIndex !== null) {
      setSelectedDocIndex((prev) => (prev - 1 + filteredDocs.length) % filteredDocs.length)
    }
  }, [selectedDocIndex, filteredDocs.length])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedDocIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextDoc()
      if (e.key === 'ArrowLeft') prevDoc()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedDocIndex, nextDoc, prevDoc])

  useEffect(() => {
    if (selectedDocIndex !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedDocIndex])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* BREADCRUMBS */}
          <nav className="flex items-center gap-2 mb-12 opacity-40 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors flex items-center gap-1">
              <Home size={12} /> 
            </Link>
            <ChevronRight size={10} />
            <Link href="/about" className="hover:text-[#00a651] transition-colors">
              About
            </Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}><Link href = '/about/qualifications'>Qualifications</Link></span>
          </nav>

          {/* INTRO */}
          <div className="mb-16 lg:mb-24">
            <span className="block text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#00a651]">
              Technical Archive
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter mb-10">
              Certifications & Patented Technologies
            </h1>
            <div className="text-slate-600 leading-relaxed text-lg font-medium max-w-2xl">
              <p>
                A curated repository of Chemvict’s industry compliance records, quality management systems, and proprietary engineering patents.
              </p>
            </div>
          </div>

          {/* FILTER RAIL */}
          <div className="mb-12 border-b flex overflow-x-auto hide-scrollbar" style={{ borderColor: COLORS.border }}>
            <div className="flex space-x-12 pb-4">
              {['All', 'Certifications', 'Patents'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-colors relative ${
                    activeFilter === filter ? 'text-black opacity-100' : 'text-black opacity-40 hover:opacity-100'
                  }`}
                >
                  {filter}
                  {activeFilter === filter && (
                    <span 
                      className="absolute -bottom-[17px] left-0 right-0 h-[2px]" 
                      style={{ backgroundColor: COLORS.accent }} 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ARCHIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-40">
            {filteredDocs.map((doc, index) => (
              <div key={doc.id} className="group cursor-pointer flex flex-col" onClick={() => openLightbox(index)}>
                
                <div className="relative aspect-[1/1.4] mb-6 bg-white p-4 lg:p-6 shadow-sm border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" style={{ borderColor: COLORS.border }}>
                  
                  <div className="w-full h-full bg-[#F5F5F2] border relative overflow-hidden flex items-center justify-center" style={{ borderColor: COLORS.border }}>
                    <img 
                      src={doc.image} 
                      alt={doc.title}
                      className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center text-black/20 text-[10px] font-bold uppercase tracking-[0.3em] text-center px-4">
                      <Maximize2 size={24} className="mb-3 opacity-50" />
                      <span>IMAGE UNAVAILABLE</span>
                    </div>
                  </div>
                </div>

                <div className="px-1 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                      {doc.category}
                    </span>
                    {doc.date && (
                      <span className="text-[10px] font-bold opacity-40">{doc.date}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2 pr-4">{doc.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium mt-auto">
                    {doc.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />

      {/* LIGHTBOX (IMAGE ONLY) */}
      {selectedDocIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111213]/95 backdrop-blur-md">
          
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
              Viewing {selectedDocIndex + 1} of {filteredDocs.length}
            </div>
            <button 
              onClick={closeLightbox}
              className="text-white/40 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>
          </div>

          <button 
            onClick={prevDoc}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextDoc}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-6xl px-12 md:px-24 h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            <div className="w-full md:w-2/3 h-full max-h-[70vh] flex justify-center">
              <div className="bg-white p-2 md:p-4 shadow-2xl h-full max-w-full inline-block">
                <img 
                  src={filteredDocs[selectedDocIndex].image} 
                  alt={filteredDocs[selectedDocIndex].title}
                  className="h-full w-auto object-contain bg-[#F5F5F2]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-full aspect-[1/1.4] bg-[#F5F5F2] flex-col items-center justify-center text-[#1A1C1E]/30 text-[10px] font-bold uppercase tracking-[0.3em] px-12 text-center border border-black/10">
                  <Maximize2 size={32} className="mb-4 opacity-50" />
                  <span>Image Scan Unavailable</span>
                  <span className="mt-2 text-[10px]">{filteredDocs[selectedDocIndex].id}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 text-white">
              <div className="border-l border-white/20 pl-6 md:pl-8 py-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#00a651] mb-4">
                  {filteredDocs[selectedDocIndex].type}
                </span>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  {filteredDocs[selectedDocIndex].title}
                </h2>
                
                <div className="space-y-4 text-sm text-white/60 mb-8 font-medium">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Category</span>
                    {filteredDocs[selectedDocIndex].category}
                  </div>
                  {filteredDocs[selectedDocIndex].docNumber && (
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Document No.</span>
                      <span className="font-mono">{filteredDocs[selectedDocIndex].docNumber}</span>
                    </div>
                  )}
                  {filteredDocs[selectedDocIndex].date && (
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Year Issued</span>
                      {filteredDocs[selectedDocIndex].date}
                    </div>
                  )}
                </div>

                <p className="text-white/80 leading-relaxed font-medium">
                  {filteredDocs[selectedDocIndex].desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  )
}