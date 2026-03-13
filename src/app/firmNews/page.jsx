'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  ChevronRight, 
  ChevronLeft,
  ArrowUpRight, 
  Calendar,
  Filter
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { allFirmNews } from '@/content/firmNews'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651', 
  border: 'rgba(26, 28, 30, 0.1)',
}

const ARTICLES_PER_PAGE = 6; 

export default function FirmNewsPage() {
  const [activeCategory, setActiveCategory] = useState('All Dispatches')
  const [currentPage, setCurrentPage] = useState(1)

  const newsData = Array.isArray(allFirmNews) ? allFirmNews : []

  const dynamicCategories = ['All Dispatches', ...new Set(newsData.map(news => news?.category).filter(Boolean))]

  const filteredNews = newsData.filter(news => {
    return activeCategory === 'All Dispatches' ? true : news?.category === activeCategory
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  const featuredArticle = filteredNews[0]
  const allLedgerArticles = filteredNews.slice(1)
  
  const totalPages = Math.max(1, Math.ceil(allLedgerArticles.length / ARTICLES_PER_PAGE))
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const currentLedgerArticles = allLedgerArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  const getPageNumbers = (current, total) => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 3) {
      return [1, 2, 3, 4, '...', total];
    }
    if (current >= total - 2) {
      return [1, '...', total - 3, total - 2, total - 1, total];
    }
    return [1, '...', current - 1, current, current + 1, '...', total];
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#00a651] selection:text-white" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-sm font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors flex items-center gap-1">
              <Home size={16} /> 
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Firm News</span>
          </nav>

          <header className="mb-12 max-w-5xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]"
            >
              <span className="w-8 h-[2px] bg-[#00a651]"></span>
              Press & Media
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-8 italic leading-[0.85] uppercase"
            >
              The Corporate <br /> Chronicle.
            </motion.h1>
          </header>

          <div className="bg-[#F5F5F2]/95 py-4 mb-16 flex items-center justify-between border-y" style={{ borderColor: COLORS.border }}>
            <div className="flex items-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide w-full">
              <div className="flex items-center gap-2 text-slate-400 mr-4 shrink-0">
                <Filter size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
              </div>
              {dynamicCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-[#1A1C1E] text-white' 
                      : 'border border-transparent hover:border-[#1A1C1E]/20 text-slate-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0">
              Showing {filteredNews.length} Results
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}_${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentPage === 1 && featuredArticle && (
                <section className="mb-32">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest mb-8">
                        <span className="px-3 py-1 border border-[#00a651] text-[#00a651]">Latest Spotlight</span>
                        <span className="text-slate-500 flex items-center gap-2"><Calendar size={12} /> {featuredArticle.date}</span>
                      </div>
                      <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                        {featuredArticle.desc || (featuredArticle.content && featuredArticle.content.introduction) || 'Read the full dispatch for more details.'}
                      </p>
                      <Link 
                        href={`/firmNews/${featuredArticle.slug}`} 
                        className="inline-flex items-center justify-center gap-3 bg-[#1A1C1E] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#00a651] transition-colors"
                      >
                        Read Dispatch <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2 bg-white border p-4 shadow-sm" style={{ borderColor: COLORS.border }}>
                      <Link href={`/firmNews/${featuredArticle.slug}`} className="block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden group">
                        <img 
                          src={featuredArticle.image} 
                          alt={featuredArticle.title} 
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </Link>
                    </div>
                  </div>
                </section>
              )}

              {currentLedgerArticles.length > 0 && (
                <section className="mb-24 relative">
                  <div className="border-t-2 border-[#1A1C1E] pt-8 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                      {currentPage === 1 ? 'Archive Ledger' : `Archive Ledger (Page ${currentPage})`}
                    </h3>
                  </div>

                  <div className="flex flex-col relative">
                    {currentLedgerArticles.map((article) => (
                      <Link 
                        key={article.slug}
                        href={`/firmNews/${article.slug}`}
                        className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b transition-colors hover:bg-white/50"
                        style={{ borderColor: COLORS.border }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full md:w-3/4">
                          <div className="w-32 shrink-0 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {article.date}
                          </div>
                          <div className="flex-grow">
                            <span className="text-[9px] font-black text-[#00a651] uppercase tracking-[0.3em] mb-2 block">
                              {article.category}
                            </span>
                            <h4 className="text-xl md:text-3xl font-bold tracking-tight uppercase group-hover:italic transition-all duration-300 group-hover:translate-x-2">
                              {article.title}
                            </h4>
                          </div>
                        </div>
                        <div className="mt-6 md:mt-0 shrink-0 h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-[#1A1C1E] group-hover:text-white" style={{ borderColor: COLORS.border }}>
                          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {filteredNews.length === 0 && (
                <div className="py-32 text-center text-slate-500 uppercase tracking-widest text-sm font-bold">
                  No dispatches found in this category.
                </div>
              )}

              <div className="flex items-center justify-center gap-4 pb-32">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-transparent hover:border-black/20 disabled:opacity-30 disabled:hover:border-transparent transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                  {getPageNumbers(currentPage, totalPages).map((item, i) => {
                    if (item === '...') {
                      return (
                        <span key={`dots_${i}`} className="text-slate-400 font-black px-2 tracking-widest">
                          ...
                        </span>
                      )
                    }
                    
                    const isActive = currentPage === item;
                    return (
                      <button
                        key={item}
                        onClick={() => handlePageChange(item)}
                        className={`h-10 w-10 flex items-center justify-center text-[11px] font-black transition-all ${
                          isActive 
                            ? 'text-white bg-[#1A1C1E] rounded-full' 
                            : 'text-slate-500 hover:text-[#1A1C1E]'
                        }`}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-transparent hover:border-black/20 disabled:opacity-30 disabled:hover:border-transparent transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  )
}