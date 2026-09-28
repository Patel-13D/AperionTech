import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MonitorPlay, FileText, UserCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      
      {/* 1. SLIM / COMPACT ORACLE REDWOOD TEXTURED BANNER */}
      <section className="relative px-6 py-10 md:py-12 bg-[#1b3a4b] text-white overflow-hidden border-t border-slate-800">
        
        {/* Seamless SVG Organic Pebbles & Texture Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='90' viewBox='0 0 160 90'%3E%3Cg fill='%23000000' fill-opacity='0.65'%3E%3Cellipse cx='20' cy='15' rx='9' ry='4.5' transform='rotate(-8 20 15)'/%3E%3Cellipse cx='85' cy='22' rx='11' ry='5' transform='rotate(12 85 22)'/%3E%3Cellipse cx='140' cy='12' rx='8' ry='4' transform='rotate(-5 140 12)'/%3E%3Cellipse cx='45' cy='52' rx='10' ry='5' transform='rotate(6 45 52)'/%3E%3Cellipse cx='115' cy='58' rx='9.5' ry='4.5' transform='rotate(-12 115 58)'/%3E%3Cellipse cx='15' cy='80' rx='8' ry='4' transform='rotate(10 15 80)'/%3E%3Cellipse cx='75' cy='82' rx='12' ry='5' transform='rotate(-4 75 82)'/%3E%3Cellipse cx='145' cy='75' rx='7' ry='3.5' transform='rotate(15 145 75)'/%3E%3C/g%3E%3Cg fill='%23ffffff' fill-opacity='0.18'%3E%3Cellipse cx='22' cy='16' rx='7' ry='3' transform='rotate(-8 22 16)'/%3E%3Cellipse cx='87' cy='23' rx='8' ry='3.5' transform='rotate(12 87 23)'/%3E%3Cellipse cx='47' cy='53' rx='7.5' ry='3.5' transform='rotate(6 47 53)'/%3E%3Cellipse cx='117' cy='59' rx='7' ry='3' transform='rotate(-12 117 59)'/%3E%3Cellipse cx='77' cy='83' rx='9' ry='3.5' transform='rotate(-4 77 83)'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '120px 70px'
          }}
        />

        {/* Soft Edge Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142b38]/60 via-transparent to-[#142b38]/60 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Compact Headline & Action Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-sans">
              Ready to start your Oracle Cloud project?
            </h3>
            <p className="mt-1.5 text-slate-200 text-xs sm:text-sm font-normal max-w-xl">
              Migration, integration, analytics, or automation — let’s map out your architecture properly.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-5 text-[11px] text-slate-300 font-medium">
              <a href="#contact" className="inline-flex items-center gap-1.5 hover:text-[#5DBBE8] transition-colors">
                <MonitorPlay size={14} className="text-[#5DBBE8]" /> Request Demo
              </a>
              <a href="#services" className="inline-flex items-center gap-1.5 hover:text-[#5DBBE8] transition-colors">
                <FileText size={14} className="text-[#5DBBE8]" /> Delivery Framework
              </a>
              <a href="#contact" className="inline-flex items-center gap-1.5 hover:text-[#5DBBE8] transition-colors">
                <UserCheck size={14} className="text-[#5DBBE8]" /> Contact Specialist
              </a>
            </div>
          </div>

          {/* Compact CTA Button */}
          <div className="flex-shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-7 py-3 rounded-xl bg-white text-[#19357B] hover:text-[#0F1E42] font-bold text-xs sm:text-sm shadow-xl hover:shadow-white/20 transition-all duration-200"
            >
              Start a conversation
            </motion.a>
          </div>

        </div>
      </section>

      {/* 2. EXPANSIVE & BOLD WHITE ENTERPRISE FOOTER */}
      <div className="bg-white text-slate-800 px-6 pt-20 pb-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Col (Expanded with BIGGER Logo) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block">
              <img
                src="/logo-full.jpeg"
                alt="Aperion Tech Global Private Limited"
                className="h-14 sm:h-16 w-auto object-contain hover:opacity-95 transition-opacity"
              />
            </div>
            
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Oracle Cloud, integration, data, and AI for enterprises that need mission-critical systems that hold together at scale.
            </p>
            
            <div className="pt-2">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 text-xs font-semibold text-[#19357B] border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Enterprise Cloud Delivery
              </span>
            </div>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#0F1E42] uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Cloud Migration & Management</a></li>
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Integration & API Development</a></li>
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Autonomous Data Warehousing</a></li>
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Bespoke APEX & VBCS Apps</a></li>
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Agentic AI & Invoice Automation</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold text-[#0F1E42] uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">About Aperion</a></li>
              <li><a href="#services" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Capabilities</a></li>
              <li><a href="#cases" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Careers</a></li>
              <li><a href="#" className="hover:text-[#19357B] hover:translate-x-0.5 inline-block transition-transform">Insights & Architecture</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#0F1E42] uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="mailto:info@aperiontechglobal.com" className="flex items-center gap-3 hover:text-[#19357B] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#19357B] group-hover:bg-[#19357B] group-hover:text-white transition-colors">
                    <Mail size={15} />
                  </div>
                  <span className="truncate">Info@aperiontec.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 hover:text-[#19357B] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#8F55C1] group-hover:bg-[#8F55C1] group-hover:text-white transition-colors">
                    <Phone size={15} />
                  </div>
                  <span>+91 9213471341</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#19357B] shrink-0 mt-0.5">
                  <MapPin size={15} />
                </div>
                <span>487, SUTARWAD, TALAVCHORA, Chikhli (Navsari), Chikhli, Navsari- 396521, Gujarat</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aperion Tech Global Private Limited. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-[#19357B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#19357B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#19357B] transition-colors">Security Telemetry</a>
          </div>
        </div>

      </div>
    </footer>
  );
}