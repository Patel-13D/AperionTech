import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote: "Our biggest headache was cutting over 8 plants without losing live shipping orders. Aperion ran our Oracle cutover over a weekend with zero dropped orders, and monday morning books balanced down to the cent.",
      author: "David Vance",
      role: "VP of Supply Chain Systems",
      company: "Apex Precision Mfg",
      metric: "0 Min Downtime",
      metricLabel: "Weekend cutover completed",
      domain: "ERP Cutover"
    },
    {
      quote: "Before this, our team spent 3 hours every night manually matching orders between NetSuite and our warehouses. Aperion's OIC flows just work in the background. We haven't had a sync error in 6 months.",
      author: "Sarah Jenkins",
      role: "Head of IT Operations",
      company: "Nordic Freight & Logistics",
      metric: "15 hrs / wk saved",
      metricLabel: "No manual order cleanup",
      domain: "OIC & Integration"
    },
    {
      quote: "Most consultants understand the code but fail the tax auditor's questions. Aperion set up our ZATCA e-invoicing so cleanly that our internal audit team signed off on the first review.",
      author: "Tariq Al-Harbi",
      role: "Finance Director",
      company: "Gulf Retail Holdings",
      metric: "First-Pass Pass",
      metricLabel: "ZATCA tax clearance",
      domain: "ZATCA Invoicing"
    }
  ];

  const clientPills = [
    "Precision Manufacturing",
    "Third-Party Logistics",
    "Retail & Distribution",
    "Commercial Real Estate",
    "Asset Management"
  ];

  const current = testimonials[active];

  return (
    <section id="solutions" className="py-12 md:py-16 px-6 bg-[#FAF8F5] border-t border-[#E8E4DC] relative overflow-hidden">
      
      {/* Subtle Redwood Organic Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cpath d='M-100,200 C150,120 350,280 900,160 M-100,280 C200,200 400,340 900,240 M-100,360 C180,310 420,420 900,320 M-100,440 C220,390 450,500 900,400 M-100,520 C190,490 430,580 900,480 M-100,600 C210,570 460,660 900,560' fill='none' stroke='%23382F2D' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '700px 700px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#E3DDCF] gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#19357B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F1E42] tracking-tight">
              What engineering and finance teams say about us
            </h2>
          </div>

          {/* Quick Domain Selector & Arrows */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 mr-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.domain}
                  onClick={() => setActive(idx)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    active === idx 
                      ? 'bg-[#19357B] text-white shadow-xs font-semibold' 
                      : 'bg-white text-slate-700 border border-[#DDD7CD] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {item.domain}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CD] hover:border-[#19357B] flex items-center justify-center text-slate-700 transition"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CD] hover:border-[#19357B] flex items-center justify-center text-slate-700 transition"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Compact Human-Written Testimonial Card */}
        <div className="my-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.domain}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E3DDCF] p-6 sm:p-7 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              {/* Left Side: Quote & Author */}
              <div className="lg:w-8/12">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                  ))}
                  <span className="text-xs text-slate-500 ml-2">Direct client feedback</span>
                </div>

                <p className="text-slate-900 text-sm sm:text-[15px] leading-relaxed font-normal">
                  "{current.quote}"
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#19357B] text-white flex items-center justify-center font-bold text-xs">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F1E42]">{current.author}</span>
                    <span className="text-xs text-slate-600 ml-2">
                      {current.role} • <strong className="text-slate-800 font-semibold">{current.company}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Tangible Result Box */}
              <div className="lg:w-4/12 w-full flex lg:justify-end border-t lg:border-t-0 lg:border-l border-[#EFEBE3] pt-4 lg:pt-0 lg:pl-6">
                <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl p-4 w-full lg:max-w-[210px]">
                  <div className="text-[11px] font-semibold text-[#8F55C1] uppercase tracking-wider">What Changed</div>
                  <div className="text-lg font-bold text-[#0F1E42] mt-0.5">{current.metric}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{current.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compact Footnote */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span className="text-slate-500">
            Work delivered across:
          </span>
          <div className="flex flex-wrap gap-2">
            {clientPills.map((pill) => (
              <span key={pill} className="px-2.5 py-0.5 rounded-md bg-white border border-[#E3DDCF] text-xs font-medium text-slate-700">
                {pill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}