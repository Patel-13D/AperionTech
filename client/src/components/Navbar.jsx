import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AperionLogo from './AperionLogo';
import { 
  ChevronDown, 
  ChevronRight, 
  Layers, 
  Cloud, 
  Database, 
  ShieldCheck, 
  RefreshCw, 
  Menu, 
  X, 
  Headphones, 
  ArrowUpRight 
} from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // --- SCROLL HIDE/SHOW LOGIC ---
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Agar user top par hai (15px ke andar), hamesha navbar show rakhein
      if (currentScrollY < 15) {
        setIsVisible(true);
      } 
      // Niche scroll karne par navbar hide karein aur open dropdown close karein
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setActiveDropdown(null);
      } 
      // Upar scroll karne par navbar wapas show karein
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const serviceCategories = [
    {
      id: 'oracle',
      name: 'Oracle Cloud Services',
      icon: Layers,
      heading: 'Oracle Cloud Enterprise Services',
      sections: [
        {
          group: 'ORACLE APPLICATIONS',
          items: [
            { name: 'Oracle SCM Cloud Suite', href: '#scm' },
            { name: 'Oracle ERP Cloud Modernization', href: '#erp' },
            { name: 'Oracle HCM Cloud & Workforce', href: '#hcm' },
            { name: 'Oracle CX Solutions & Sales Cloud', href: '#cx' }
          ]
        },
        {
          group: 'ORACLE SOLUTIONS & INFRASTRUCTURE',
          items: [
            { name: 'Oracle AI & Machine Learning Consulting', href: '#ai' },
            { name: 'Oracle Analytics & BI Publisher', href: '#bi' },
            { name: 'Autonomous Data Warehouse (ADW)', href: '#adw' },
            { name: 'Oracle Managed Services (24x7 SLA)', href: '#managed' },
            { name: 'On-Premise to OCI Cloud Migration', href: '#migration' },
            { name: 'OCI Observability & Telemetry', href: '#oic' }
          ]
        }
      ]
    },
    {
      id: 'integration',
      name: 'Integration & Extension',
      icon: RefreshCw,
      heading: 'API & Enterprise Integration',
      sections: [
        {
          group: 'MIDDLEWARE & APIS',
          items: [
            { name: 'Oracle Integration Cloud (OIC)', href: '#oic' },
            { name: 'REST / SOAP Enterprise Hubs', href: '#apis' },
            { name: 'Real-time Event Streaming (Kafka)', href: '#kafka' }
          ]
        },
        {
          group: 'BESPOKE EXTENSIONS',
          items: [
            { name: 'Oracle Visual Builder (VBCS)', href: '#vbcs' },
            { name: 'Custom APEX Applications', href: '#apex' },
            { name: 'NetSuite & Salesforce Bidirectional Sync', href: '#sync' }
          ]
        }
      ]
    },
    {
      id: 'cloud-ops',
      name: 'Cloud Operations & DevOps',
      icon: Cloud,
      heading: 'Hybrid Cloud Architecture',
      sections: [
        {
          group: 'INFRASTRUCTURE',
          items: [
            { name: 'Multi-Cloud Architecture (OCI + AWS)', href: '#oci' },
            { name: 'Kubernetes Container Orchestration', href: '#k8s' },
            { name: 'Zero-Downtime Migration Pipelines', href: '#zero-down' }
          ]
        },
        {
          group: 'RESILIENCE',
          items: [
            { name: 'Enterprise Disaster Recovery (DRaaS)', href: '#dr' },
            { name: '24/7 Cloud NOC Monitoring', href: '#noc' }
          ]
        }
      ]
    },
    {
      id: 'data-ai',
      name: 'Data, AI & Automation',
      icon: Database,
      heading: 'Data Systems & Agentic Workflows',
      sections: [
        {
          group: 'DATA PLATFORMS',
          items: [
            { name: 'PostgreSQL & Enterprise DB Optimization', href: '#postgres' },
            { name: 'Enterprise Data Lakehouses & ETL', href: '#lakehouse' }
          ]
        },
        {
          group: 'AI & DOCUMENT AGENTS',
          items: [
            { name: 'Intelligent Invoice Agent (OCR + Extraction)', href: '#agents' },
            { name: 'Automated Financial Reconciliation', href: '#finance' }
          ]
        }
      ]
    },
    {
      id: 'compliance',
      name: 'Cybersecurity & Compliance',
      icon: ShieldCheck,
      heading: 'Enterprise Governance & Tax Gateways',
      sections: [
        {
          group: 'SECURITY & COMPLIANCE',
          items: [
            { name: 'ZATCA Phase-2 E-Invoicing Gateways', href: '#zatca' },
            { name: 'Zero-Trust IAM Governance', href: '#iam' },
            { name: 'Cloud Security Posture Assessment', href: '#cspm' }
          ]
        }
      ]
    }
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0B132B] border-b border-slate-800 shadow-lg text-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition">
          <AperionLogo className="h-10" isWhite={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <a 
            href="#" 
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-white hover:text-[#5DBBE8] hover:bg-slate-800/50 transition"
          >
            Home
          </a>

          {/* Mega-Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
              activeDropdown === 'services' 
                ? 'text-[#5DBBE8] bg-slate-800' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}>
              Services 
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-[#5DBBE8]' : ''
                }`} 
              />
            </button>

            {/* SOLID ENTERPRISE WHITE MEGA DROPDOWN (NO TRANSPARENCY) */}
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-[-160px] md:left-[-120px] mt-3.5 w-[960px] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-950/25 overflow-hidden flex z-50 text-slate-800"
                >
                  {/* Left Sidebar (Solid Brand Navy) */}
                  <div className="w-[315px] p-6 bg-[#0F1D44] text-white flex flex-col justify-between border-r border-slate-800">
                    <div>
                      <div className="text-[10px] font-black text-[#5DBBE8] tracking-widest uppercase mb-3.5 px-2">
                        Capabilities Platform
                      </div>
                      <div className="space-y-1.5">
                        {serviceCategories.map((cat, idx) => {
                          const Icon = cat.icon;
                          const isSelected = activeServiceTab === idx;
                          return (
                            <button
                              key={cat.id}
                              onMouseEnter={() => setActiveServiceTab(idx)}
                              onClick={() => setActiveServiceTab(idx)}
                              className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-150 ${
                                isSelected 
                                  ? 'bg-white text-[#19357B] shadow-md translate-x-1 font-bold' 
                                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span className="flex items-center gap-3 truncate">
                                <Icon size={17} className={isSelected ? 'text-[#19357B]' : 'text-[#5DBBE8]'} />
                                {cat.name}
                              </span>
                              <ChevronRight size={14} className={isSelected ? 'text-[#19357B]' : 'text-slate-400'} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 flex items-center justify-between px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <Headphones size={15} className="text-[#5DBBE8]" /> Talk to an Expert
                      </span>
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Right Content Area (Solid Clean White) */}
                  <div className="flex-1 p-8 bg-white flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 rounded-2xl bg-slate-100 text-[#19357B] border border-slate-200/80">
                            {React.createElement(serviceCategories[activeServiceTab].icon, { size: 21 })}
                          </div>
                          <div>
                            <h3 className="text-xl font-extrabold text-[#0F1E42] tracking-tight leading-none">
                              {serviceCategories[activeServiceTab].heading}
                            </h3>
                            <span className="text-xs text-slate-500 font-medium mt-1.5 block">
                              Enterprise delivery & managed cloud engineering
                            </span>
                          </div>
                        </div>
                        <a 
                          href="#services" 
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#19357B] hover:text-[#8F55C1] transition group"
                        >
                          View All 
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>

                      {/* 2-Column Links */}
                      <div className="grid grid-cols-2 gap-8">
                        {serviceCategories[activeServiceTab].sections.map((section) => (
                          <div key={section.group}>
                            <h4 className="text-[11px] font-black text-[#8F55C1] uppercase tracking-wider mb-3.5">
                              {section.group}
                            </h4>
                            <ul className="space-y-2.5">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-xs font-semibold text-slate-700 hover:text-[#19357B] hover:translate-x-1 transition-all duration-150 flex items-center gap-2.5 group"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5DBBE8] group-hover:scale-125 transition-transform" />
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Hairline Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Certified architects across OCI, AWS & Autonomous Database.</span>
                      <a href="#contact" className="font-bold text-[#19357B] hover:text-[#8F55C1] transition">
                        Schedule Architecture Review →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#solutions" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/40 transition">
            Solutions
          </a>
          <a href="#cases" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/40 transition">
            Case Studies
          </a>
          <a href="#contact" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/40 transition">
            Contact Us
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-[11px] font-semibold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#5DBBE8] animate-pulse" />
            Oracle Cloud Partner
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#19357B] to-[#254cb3] hover:from-[#14295e] hover:to-[#19357B] text-white font-bold text-xs tracking-wider uppercase transition shadow-md shadow-[#19357B]/40 border border-blue-400/20"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B132B] border-b border-slate-800 px-6 py-4 flex flex-col gap-3 shadow-2xl">
          <a onClick={() => setMobileOpen(false)} href="#" className="font-semibold text-slate-200 py-1">Home</a>
          <a onClick={() => setMobileOpen(false)} href="#services" className="font-semibold text-slate-200 py-1">Services</a>
          <a onClick={() => setMobileOpen(false)} href="#solutions" className="font-semibold text-slate-200 py-1">Solutions</a>
          <a onClick={() => setMobileOpen(false)} href="#cases" className="font-semibold text-slate-200 py-1">Case Studies</a>
          <a onClick={() => setMobileOpen(false)} href="#contact" className="font-semibold text-slate-200 py-1">Contact Us</a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#contact"
            className="w-full text-center py-2.5 rounded-xl bg-[#19357B] text-white font-bold text-xs uppercase"
          >
            Get in Touch
          </a>
        </div>
      )}
    </motion.header>
  );
}