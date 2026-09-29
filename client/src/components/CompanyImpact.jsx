import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function Counter({ value, suffix = "+" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function CompanyImpact() {
  const stats = [
    { num: 8, suffix: "+", label: "PROJECTS COMPLETED", sub: "Enterprise & OCI Systems" },
    { num: 5, suffix: "+", label: "HAPPY CLIENTS", sub: "Regulated Global Entities" },
    { num: 97, suffix: "%", label: "CLIENTS RETENTION", sub: "Long-term SLAs" }
  ];

  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#1456F0] text-white select-none">
      
      {/* Background Typography Layer */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none overflow-hidden opacity-90">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[15vw] md:text-[14vw] font-black tracking-tighter text-white leading-none block uppercase font-sans">
            WE ARE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[15vw] md:text-[14vw] font-black tracking-tighter text-white leading-none block uppercase font-sans">
            APERION
          </span>
        </motion.div>
      </div>

      {/* Foreground Cards */}
      <div className="max-w-7xl mx-auto relative z-10 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">

          {/* 3 White Metric Cards */}
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -12, transition: { duration: 0.25 } }}
              className="bg-white text-slate-900 rounded-2xl md:rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-2xl shadow-blue-950/40 border border-white group"
            >
              <div className="text-5xl sm:text-6xl font-black text-[#1456F0] tracking-tight">
                <Counter value={stat.num} suffix={stat.suffix} />
              </div>
              <div className="pt-8 border-t border-slate-100">
                <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wider leading-snug">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Dark Contrast Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.36 }}
            whileHover={{ y: -14, rotate: 0, transition: { duration: 0.25 } }}
            className="bg-[#0B132B] text-white rounded-2xl md:rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-2xl shadow-black/60 border border-slate-800 -rotate-1 lg:-rotate-2 group"
          >
            <div className="text-5xl sm:text-6xl font-black text-[#5DBBE8] tracking-tight">
              <Counter value={15} suffix="+" />
            </div>
            <div className="pt-8 border-t border-slate-800">
              <div className="text-sm sm:text-base font-extrabold text-white tracking-wider leading-snug">
                TECHNOLOGY EXPERTS
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Certified Engineering Core
              </div>
            </div>
          </motion.div>

          {/* Action CTA Card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.48 }}
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.25 } }}
            className="bg-[#E24A22] hover:bg-[#c93f1c] text-white rounded-2xl md:rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-2xl shadow-orange-950/40 border border-orange-400/40 transition-colors group cursor-pointer"
          >
            <div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight leading-tight block uppercase">
                KNOW <br /> MORE
              </span>
              <p className="text-xs text-orange-100 mt-3 leading-relaxed">
                Discover our delivery models, SLAs, and technical competencies.
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white text-[#E24A22] flex items-center justify-center self-start group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 shadow-lg">
              <ArrowUpRight size={28} strokeWidth={2.5} />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}