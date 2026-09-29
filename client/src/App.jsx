import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomerStories from './components/CustomerStories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhyChooseAperion from './components/WhyChooseAperion';
import Hero from './components/Hero';
import SiteBackground from './components/SiteBackground';
import CardTexture from './components/CardTexture';
import CompanyImpact from './components/CompanyImpact';
import { 
  Cloud, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  RefreshCw, 
  Code2, 
  CheckCircle2, 
  Bot, 
  Send 
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'Oracle Cloud Migration (OCI)',
    message: ''
  });

  // --- MOUSE TRACKING LOGIC (Assigned to Enterprise Cloud Excellence section) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormStatus({ submitted: true, loading: false });
        setFormData({ 
          name: '', 
          email: '', 
          company: '', 
          serviceInterest: 'Oracle Cloud Migration (OCI)', 
          message: '' 
        });
      } else {
        setFormStatus({ submitted: false, loading: false });
      }
    } catch {
      setTimeout(() => {
        setFormStatus({ submitted: true, loading: false });
      }, 700);
    }
  };

  const services = [
    {
      num: "01",
      title: "Oracle Cloud & Infrastructure",
      desc: "Architect, migrate, and manage mission-critical workloads into high-availability OCI & multi-cloud clusters with zero downtime.",
      icon: Cloud,
      tags: ["OCI Architect", "Lift & Shift", "Zero Data Loss"]
    },
    {
      num: "02",
      title: "Enterprise Integration & APIs",
      desc: "Connect enterprise ERPs, NetSuite, Salesforce, and custom endpoints via real-time OIC pipelines and REST middleware.",
      icon: RefreshCw,
      tags: ["OIC Middleware", "Microservices", "REST/SOAP"]
    },
    {
      num: "03",
      title: "Bespoke Enterprise Web Apps",
      desc: "Develop high-scale internal portals, dashboards, and automated workflows using modern full-stack frameworks and APEX/VBCS.",
      icon: Code2,
      tags: ["Oracle APEX", "Oracle VBCS", "React & Node"]
    }
  ];

  // const caseStudies = [
  //   {
  //     badge: "Compliance & Integration",
  //     title: "ZATCA Phase-2 E-Invoicing Integration",
  //     desc: "Integrated Oracle Fusion ERP to central tax authorities with real-time XML hashing and automated telemetry retry queues.",
  //     metric: "100% Tax Compliant",
  //     subMetric: "Over 650,000 monthly transactions"
  //   },
  //   {
  //     badge: "Omnichannel Sync",
  //     title: "NetSuite & Salesforce Real-Time Architecture",
  //     desc: "Built 11 bi-directional sync pipelines for sales orders, live inventory allocation, pricing schedules, and customer masters.",
  //     metric: "99.98% Sync Reliability",
  //     subMetric: "Zero inventory discrepancies"
  //   },
  //   {
  //     badge: "Supply Chain AI",
  //     title: "Autonomous AP Document Extraction",
  //     desc: "AI agent engine parsing line items, VAT numbers, and PO reconciliation across multiple regional warehouses.",
  //     metric: "80% Less Manual Entry",
  //     subMetric: "Under 2.5s invoice processing"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#8F55C1] selection:text-white antialiased">
      
      {/* 1. TOP 3D GLASS MEGA-MENU NAVBAR */}
      <Navbar />

     {/* 2. ORACLE REDWOOD HERO SECTION */}
<Hero />
<WhyChooseAperion />
     <CompanyImpact />
      {/* 3. ORACLE WATERMARK CUSTOMER STORIES */}
      {/* <CustomerStories /> */}

    {/* 4. ENTERPRISE CLOUD EXCELLENCE (WITH ORACLE REDWOOD TEXTURED CARDS) */}
      <section 
        id="services" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="py-24 px-6 border-t border-[#E8E4DC] bg-[#FAF8F5] relative overflow-hidden select-none"
      >
        {/* Dynamic Cursor Light Follower */}
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#5DBBE8]/20 via-[#8F55C1]/15 to-transparent blur-[140px] rounded-full pointer-events-none"
        />

        {/* Subtle Architectural Grid Lines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #19357B 1px, transparent 1px), linear-gradient(to bottom, #19357B 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest text-[#8F55C1] uppercase">Capabilities</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E42] tracking-tight mt-2">
                Enterprise Cloud Excellence
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
              Architected by certified cloud specialists to connect legacy infrastructure with modern workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-[#E3DDCF] shadow-sm hover:shadow-xl hover:border-[#8F55C1]/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                >
                  {/* ORACLE REDWOOD ORGANIC WAVE TEXTURE IN CARD */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.055] group-hover:opacity-[0.085] transition-opacity mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23382F2D' stroke-width='1.3'%3E%3Cpath d='M-100,100 C150,70 350,130 900,90 M-100,170 C200,140 400,210 900,150 M-100,240 C180,220 420,280 900,220 M-100,310 C220,290 450,360 900,300 M-100,380 C190,370 430,420 900,360 M-100,450 C210,450 460,490 900,430 M-100,520 C240,510 480,560 900,500 M-100,590 C200,590 450,630 900,570 M-100,660 C230,670 490,710 900,640' /%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '450px 450px'
                    }}
                  />

                  {/* Soft Warm Top-Corner Ambient Light */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#F5EFEB] rounded-full blur-2xl pointer-events-none group-hover:bg-[#5DBBE8]/10 transition-colors" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E3DDCF] text-[#8F55C1] flex items-center justify-center group-hover:bg-[#19357B] group-hover:text-white group-hover:border-[#19357B] transition-all duration-300 shadow-xs">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#19357B] transition-colors">{item.num}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1E42] group-hover:text-[#8F55C1] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-[#EFEBE3]">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E8E4DC] text-[#19357B]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. RFP & DISCOVERY FORM */}
 <section id="contact" className="relative overflow-hidden py-24 px-6 border-t border-[#E8E4DC]">
  <SiteBackground />

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <span className="text-xs font-bold tracking-widest text-[#8F55C1] uppercase">Let's Connect</span>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E42] tracking-tight mt-2 leading-tight">
        Ready to modernize your systems?
      </h2>
      <p className="text-slate-600 mt-6 text-base leading-relaxed">
        Schedule an architecture discovery session with our engineering leads. We evaluate your current systems and map out a concrete integration blueprint.
      </p>

      <div className="mt-8 space-y-4 text-sm text-slate-700 font-medium">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-[#5DBBE8]" /> Dedicated Enterprise SLAs & 24/7 Monitoring
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-[#8F55C1]" /> End-to-End Encryption & Security Audits
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-[#19357B]" /> Certified Oracle & Multi-Cloud Engineers
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden group p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-[#E3DDCF] shadow-2xl shadow-[#19357B]/10 hover:border-[#8F55C1]/50 transition-colors duration-300"
    >
      <CardTexture />

      <div className="relative z-10">
        {formStatus.submitted ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-purple-50 text-[#8F55C1] flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-2xl font-bold text-[#0F1E42]">Inquiry Received</h4>
            <p className="text-slate-600 text-sm mt-2">
              An Aperion Tech architect will get back to you within 24 business hours.
            </p>
            <button
              onClick={() => setFormStatus({ submitted: false, loading: false })}
              className="mt-6 px-6 py-2 rounded-lg bg-slate-100 text-xs font-semibold text-slate-800 hover:bg-slate-200"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19357B] text-sm transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19357B] text-sm transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Enterprise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19357B] text-sm transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Interest</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] text-slate-800 focus:outline-none focus:border-[#19357B] text-sm transition"
                >
                  <option>Oracle Cloud Migration (OCI)</option>
                  <option>Enterprise Integration (OIC / APIs)</option>
                  <option>Bespoke APEX & VBCS Apps</option>
                  <option>Autonomous DB & Data Tuning</option>
                  <option>24/7 Managed Cloud Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Scope *</label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your Oracle environment, current bottlenecks, or integration requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19357B] text-sm transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="w-full py-3.5 rounded-xl bg-[#19357B] hover:bg-[#0D1C44] text-white font-bold text-sm tracking-wide transition flex items-center justify-center gap-2 shadow-lg shadow-[#19357B]/20"
            >
              {formStatus.loading ? 'Transmitting Scope...' : <>Send Enterprise Inquiry <Send size={16} /></>}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  </div>
</section>

      {/* 8. ORACLE REDWOOD TEXTURED BANNER & MULTI-COLUMN FOOTER */}
      <Footer />

    </div>
  );
}