import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import SiteBackground from './SiteBackground';
import CardTexture from './CardTexture';
export default function WhyChooseAperion() {
  const targetRef = useRef(null);

  // Measure scroll progress inside the tall container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Maps vertical scroll (0 to 1) to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  // Icon dynamic movement reaction based on scroll progress
  const iconRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 18, 0]);
  const iconScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);

  const features = [
    {
      id: "01",
      title: "Top-Rated Cloud Talent",
      icon: Trophy,
      points: [
        "Fully vetted, certified OCI & Fusion Cloud architects",
        "AI-accelerated automation & telemetry monitoring",
        "Zero-compromise high SLA operational standards",
        "Rigorous automated CI/CD and security code reviews"
      ]
    },
    {
      id: "02",
      title: "Agile Engineering",
      icon: Zap,
      points: [
        "Bi-weekly sprint syncs with live cloud telemetry",
        "Round-the-clock shift coverage across time zones",
        "Automated deployment rollbacks & disaster protection",
        "Direct escalation channels with certified leads"
      ]
    }
  ];

  return (
    // Black background with 320vh height
    <section ref={targetRef} className="relative h-[320vh] border-[#E8E4DC]">
      {/* Sticky viewport lock */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <SiteBackground />
        {/* Section Header */}
       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mb-10">
          <div className="flex items-center gap-2 mb-3">
            {/* Eyebrow line: white tha, cream par gayab ho jata */}
<span className="w-8 h-[2px] bg-[#8F55C1]" />
<span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
  Value Engineering
</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight">
            Why choose{' '}
            <span className="bg-gradient-to-r from-[#5DBBE8] via-[#8F55C1] to-[#5DBBE8] bg-clip-text text-transparent drop-shadow-xs">
              Aperion Tech?
            </span>
          </h2>
        </div>

        {/* Horizontal Track for Extra Large White Cards */}
      <div className="relative z-10 w-full pl-6 md:pl-20">
          <motion.div style={{ x }} className="flex gap-10 w-max pr-24">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="w-[88vw] sm:w-[700px] lg:w-[860px] min-h-[460px] rounded-[32px] relative overflow-hidden group bg-white text-slate-900 p-10 sm:p-16 shadow-2xl shadow-[#19357B]/15 border border-[#E3DDCF] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shrink-0 relative overflow-hidden group hover:border-slate-400 transition-colors duration-300"
                >
                  <CardTexture />
                  {/* Left Column: Animated Icon & Title */}
                  <div className="md:w-5/12 flex flex-col items-start relative z-10">
                    
                    {/* Motion Icon reacting to scroll & hover */}
                    <motion.div 
                      style={{ rotate: iconRotate, scale: iconScale }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-black mb-8 shadow-inner group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors duration-300 cursor-pointer"
                    >
                      <Icon size={38} strokeWidth={2} />
                    </motion.div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-950">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-400 mt-3 tracking-widest">
                      PILLAR // {item.id}
                    </span>
                  </div>

                  {/* Right Column: High-Legibility Checklist */}
                  <div className="md:w-7/12 space-y-6 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-10 relative z-10">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="mt-0.5 rounded-full p-0.5 bg-slate-100 border border-slate-300 text-black group-hover:border-black transition-colors">
                          <CheckCircle2 size={18} strokeWidth={2.5} />
                        </div>
                        <span className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Minimalist Scroll Progress Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          <div className="w-full h-1 bg-[#19357B]/10 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
              className="h-full bg-gradient-to-r from-[#5DBBE8] via-[#8F55C1] to-[#5DBBE8]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}