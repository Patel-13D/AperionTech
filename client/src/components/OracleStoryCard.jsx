import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function OracleStoryCard({
  logo,
  clientName,
  headline,
  storyLink = "#",
  buttonText = "Read the story"
}) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[360px]"
    >
      {/* 1. ORACLE REDWOOD WATERMARK TEXTURE (Exact authentic leaves / organic watermark) */}
      <div className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none opacity-[0.06] group-hover:opacity-[0.14] group-hover:scale-110 transition-all duration-500 ease-out text-[#19357B]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Oracle Redwood stylized leaf & curve vectors */}
          <path
            d="M50 180 C30 130 60 70 130 40 C170 20 185 10 190 0 C180 50 160 110 100 150 C70 170 55 178 50 180 Z"
            fill="currentColor"
          />
          <path
            d="M30 190 C60 140 110 110 175 100 C150 130 120 165 70 185 C50 192 38 191 30 190 Z"
            fill="#8F55C1"
          />
          <path
            d="M80 195 C110 160 140 125 195 120 C180 150 150 180 110 192 C95 195 85 195 80 195 Z"
            fill="#5DBBE8"
          />
        </svg>
      </div>

      {/* 2. Soft Brand Ambient Glow on Card Base */}
      <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-tr from-[#5DBBE8]/20 via-[#8F55C1]/10 to-transparent blur-3xl rounded-full pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />

      {/* TOP CONTENT: Client Logo & Headline */}
      <div className="relative z-10">
        {/* Logo Container */}
        <div className="h-14 flex items-center mb-8">
          {typeof logo === 'string' ? (
            <img
              src={logo}
              alt={clientName}
              className="h-9 max-w-[160px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            logo
          )}
        </div>

        {/* Narrative Headline */}
        <h3 className="text-xl sm:text-[22px] font-bold text-[#19357B] leading-snug tracking-tight group-hover:text-[#8F55C1] transition-colors">
          {headline}
        </h3>
      </div>

      {/* BOTTOM ACTION: Button Styled Exactly Like Oracle.com */}
      <div className="relative z-10 pt-8 mt-auto">
        <a
          href={storyLink}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white/90 text-xs font-bold text-slate-800 hover:border-[#8F55C1] hover:text-[#8F55C1] hover:bg-slate-50 transition shadow-xs"
        >
          <span>{buttonText}</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}