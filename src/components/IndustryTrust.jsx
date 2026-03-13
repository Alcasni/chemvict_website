'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useAnimationFrame, useMotionValue } from 'framer-motion'

// --- PARTNER LIST ---
const partnerLogos = [
  { name: 'HEXION', file: 'HEXION.jfif' },
  { name: '安徽海华', file: '安徽海华.jfif' },
  { name: '安徽康宁油脂', file: '安徽康宁油脂.jfif' },
  { name: '鞍山七彩化学', file: '鞍山七彩化学.jfif' },
  { name: '滨州裕能', file: '滨州裕能.jfif' },
  { name: '大连大平油脂', file: '大连大平油脂.jfif' },
  { name: '鼎际得', file: '鼎际得.jfif' },
  { name: '丰尚集团', file: '丰尚集团.jfif' },
  { name: '格林生物', file: '格林生物.jfif' },
  { name: '广西新天德', file: '广西新天德.jfif' },
  { name: '湖北三宁', file: '湖北三宁.jfif' },
  { name: '江苏宝众宝达', file: '江苏宝众宝达.jfif' },
  { name: '江苏金马油脂', file: '江苏金马油脂.jfif' },
  { name: '江苏三吉利', file: '江苏三吉利.jfif' },
  { name: '江西盛伟', file: '江西盛伟.jfif' },
  { name: '江西兄弟', file: '江西兄弟.jfif' },
  { name: '金牛油脂', file: '金牛油脂.jfif' },
  { name: '金溪县绿萃', file: '金溪县绿萃.jfif' },
  { name: '凯塔化工', file: '凯塔化工.jfif' },
  { name: '康泰斯', file: '康泰斯.jfif' },
  { name: '联化科技', file: '联化科技.jfif' },
  { name: '南平青松', file: '南平青松.jfif' },
  { name: '宁夏瑞泰', file: '宁夏瑞泰.jfif' },
  { name: '青岛和合汇途', file: '青岛和合汇途.jfif' },
  { name: '山东亘元', file: '山东亘元.jfif' },
  { name: '山东鸿达', file: '山东鸿达.jfif' },
  { name: '山东绿霸', file: '山东绿霸.jfif' },
  { name: '上海东富龙', file: '上海东富龙.jfif' },
  { name: '顺毅', file: '顺毅.jfif' },
  { name: '宿迁科思', file: '宿迁科思.jfif' },
  { name: '宿迁联盛', file: '宿迁联盛.jfif' },
  { name: '武汉有机', file: '武汉有机.jfif' },
  { name: '西尼尔', file: '西尼尔.jfif' },
  { name: '新和成', file: '新和成.jfif' },
  { name: '新疆广汇', file: '新疆广汇.jfif' },
  { name: '新乡博源生物', file: '新乡博源生物.jfif' },
  { name: '烟台巨力', file: '烟台巨力.jfif' },
  { name: '扬农', file: '扬农.jfif' },
  { name: '宜春大海龟', file: '宜春大海龟.jfif' },
  { name: '益海嘉里', file: '益海嘉里.jfif' },
  { name: '营口向阳', file: '营口向阳.jfif' },
  { name: '中广核', file: '中广核.jfif' },
  { name: '中蓝晨光化工', file: '中蓝晨光化工.jfif' },
  { name: '重庆欣欣向荣', file: '重庆欣欣向荣.jfif' },
  { name: '淄博澳帆', file: '淄博澳帆.jfif' },
]

export default function IndustryTrust() {
  const containerRef = useRef(null);
  const set1Ref = useRef(null);
  const set2Ref = useRef(null);
  const [loopDistance, setLoopDistance] = useState(0);
  
  const x = useMotionValue(0);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring creates the "weighty" physical feel when scrolling
  const scrollVelocity = useSpring(scrollYProgress, { 
    stiffness: 400, 
    damping: 90 
  });
  
  const lastScrollPos = useRef(0);

  const calculateDistance = () => {
    if (set1Ref.current && set2Ref.current) {
      const s1 = set1Ref.current.getBoundingClientRect().left;
      const s2 = set2Ref.current.getBoundingClientRect().left;
      setLoopDistance(s2 - s1);
    }
  };

  useEffect(() => {
    calculateDistance();
    window.addEventListener('load', calculateDistance);
    window.addEventListener('resize', calculateDistance);
    
    const timer = setTimeout(calculateDistance, 1000);
    return () => {
      window.removeEventListener('load', calculateDistance);
      window.removeEventListener('resize', calculateDistance);
      clearTimeout(timer);
    };
  }, []);

  useAnimationFrame((t, delta) => {
    if (loopDistance === 0) return;

    const currentScroll = scrollVelocity.get();
    const scrollDiff = currentScroll - lastScrollPos.current;
    lastScrollPos.current = currentScroll;

    // --- SPEED CONFIGURATION ---
    // baseIdleSpeed: Reduced from -2.5 to -1.2 for a smoother, slower drift
    // scrollPush: Multiplier for scroll response
    const baseIdleSpeed = -0.6; 
    const scrollPush = scrollDiff * 3000; 
    const moveBy = baseIdleSpeed + scrollPush;

    let newX = x.get() + moveBy;

    // Seamless Loop
    if (newX <= -loopDistance) {
      newX += loopDistance;
    } else if (newX > 0) {
      newX -= loopDistance;
    }

    x.set(newX);
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white py-12 md:py-20 overflow-hidden select-none"
    >
      {/* Header: Kept within the 1400px container */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#00a651]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651]">
                Global Supply Chain
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
              Strategic Partners.
            </h2>
          </div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] max-w-[260px] md:text-right border-r-2 border-[#00a651] pr-4 leading-tight">
            Precision engineering and manufacturing alliances.
          </p>
        </div>
      </div>

      {/* --- FULL WIDTH CONVEYOR --- */}
      {/* Use w-screen and left-1/2 -translate-x-1/2 to break out of parent padding/constraints */}
      <div 
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <motion.div 
          style={{ x }} 
          className="flex items-center w-max flex-nowrap"
        >
          {/* Sets of logos */}
          <div ref={set1Ref} className="flex items-center gap-24 md:gap-32 pr-24 md:pr-32">
             {partnerLogos.map((p, i) => <LogoItem key={`s1-${i}`} p={p} />)}
          </div>
          <div ref={set2Ref} className="flex items-center gap-24 md:gap-32 pr-24 md:pr-32">
             {partnerLogos.map((p, i) => <LogoItem key={`s2-${i}`} p={p} />)}
          </div>
          <div className="flex items-center gap-24 md:gap-32 pr-24 md:pr-32">
             {partnerLogos.map((p, i) => <LogoItem key={`s3-${i}`} p={p} />)}
          </div>
          <div className="flex items-center gap-24 md:gap-32 pr-24 md:pr-32">
             {partnerLogos.map((p, i) => <LogoItem key={`s4-${i}`} p={p} />)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LogoItem({ p }) {
  return (
    <div className="flex-shrink-0 cursor-pointer">
      <img 
        src={`/images/客户logo/${p.file}`} 
        alt={p.name}
        // FULL COLOR: No grayscale, no low opacity
        className="h-10 md:h-12 w-auto object-contain pointer-events-none hover:scale-105 transition-transform duration-300"
        onLoad={() => window.dispatchEvent(new Event('resize'))}
      />
    </div>
  )
}