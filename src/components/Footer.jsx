'use client'

import React from 'react'
import { Linkedin, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  about: [
    { name: 'Company Overview', href: '#' },
    { name: 'Qualifications & Honors', href: '#' },
    { name: 'Milestones', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  technologies: [
    { name: 'Complete Systems', href: '#' },
    { name: 'Purification Technology', href: '#' },
  ],
  equipment: [
    { name: 'Mass Transfer Equipment', href: '#' },
    { name: 'Heat Transfer Equipment', href: '#' },
    { name: 'Melt Crystallization', href: '#' },
    { name: 'Polymer Equipment', href: '#' },
  ],
  lowCarbon: [
    { name: 'CO2 Capture', href: '#' },
    { name: 'Heat Pump-Assisted Distillation', href: '#' },
    { name: 'Dividing Wall Column (DWC)', href: '#' },
    { name: 'Multiple-Effect Distillation', href: '#' },
    { name: 'Distillation System Energy Optimization', href: '#' },
    { name: 'Capacity & Efficiency Improvement', href: '#' },
  ],
  epc: [
    { name: 'Skid-Mounted Equipment', href: '#' },
    { name: 'Engineering Services', href: '#' },
  ],
  caseStudies: [
    { name: 'Energy & Chemical', href: '#' },
    { name: 'Oleochemicals', href: '#' },
    { name: 'Flavors & Fragrances', href: '#' },
    { name: 'Advanced Materials', href: '#' },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative w-full bg-slate-950 text-white px-6 pt-20 pb-10 font-sans border-t border-white/5">
      <div className="mx-auto max-w-[1600px]">
        
        {/* --- MAIN GRID (Balanced 6-Column Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-16 pb-16 border-b border-white/10">
          
          {/* COLUMN 1: BRANDING & WECHAT (Untouched Layout) */}
          <div className="lg:col-span-2 space-y-10">
            <Link href="/" className="flex items-baseline select-none group w-fit">
              <span className="text-[2.2rem] font-bold tracking-[-0.04em] leading-none text-white">
                Chemvict
              </span>
              <span className="ml-1 h-2 w-2 rounded-full bg-[#00a651]" />
            </Link>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">About</h4>
                <ul className="space-y-3">
                  {footerLinks.about.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors whitespace-nowrap">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-xl">
                    <div className="w-20 h-20 bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center rounded-lg">
                      <span className="text-[8px] font-black text-slate-400 text-center leading-tight">WECHAT<br/>QR CODE</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">Connect With Us</span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Official WeChat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PROCESS TECHNOLOGIES */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Process Technologies</h4>
            <ul className="space-y-4">
              {footerLinks.technologies.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors leading-snug block whitespace-nowrap">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PROCESS EQUIPMENT */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Process Equipment</h4>
            <ul className="space-y-4">
              {footerLinks.equipment.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors leading-snug block whitespace-nowrap">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: LOW-CARBON SOLUTIONS */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Low-Carbon Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.lowCarbon.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors leading-snug block whitespace-nowrap">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: EPC TURNKEY ENGINEERING (Circled Area 1) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">EPC Turnkey</h4>
            <ul className="space-y-4">
              {footerLinks.epc.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors leading-snug block whitespace-nowrap">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 6: CASE STUDIES (Circled Area 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Case Studies</h4>
            <ul className="space-y-4">
              {footerLinks.caseStudies.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-slate-300 hover:text-[#D9FF4A] transition-colors block leading-tight whitespace-nowrap">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- LEGAL BASELINE --- */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4">
            <span className="text-[11px] font-bold text-slate-500">© {currentYear} Chemvict Process Solution</span>
            <Link 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              className="text-[11px] font-bold text-slate-500 hover:text-white underline underline-offset-4 decoration-slate-800 transition-colors"
            >
              沪ICP备2023013760号-1
            </Link>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="px-5 py-1.5 border border-white/10 rounded-full">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500 block translate-y-[1px]">
                Precision at Industrial Scale
              </span>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#D9FF4A] hover:text-slate-950 transition-all group"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}