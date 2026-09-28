import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Network, 
  CheckCircle2, 
  Zap, 
  Server 
} from 'lucide-react';

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { name: "Oracle Fusion ERP", tag: "Cloud Financials", state: "Live Sync" },
    { name: "OIC Middleware Hub", tag: "Enterprise REST & SOAP", state: "8ms Latency" },
    { name: "Autonomous Database", tag: "ATP / ADW Auto-Scale", state: "Zero Data Loss" },
    { name: "ZATCA Phase-2 Gateway", tag: "Automated Tax Telemetry", state: "100% Verified" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-24 px-6 bg-[#FAF8F5] text-[#1E1C1A] overflow-hidden border-b border-[#E8E4DC]">
      
      {/* 1. Organic Redwood Wave Contour Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cpath d='M-100,200 C150,120 350,280 900,160 M-100,280 C200,200 400,340 900,240 M-100,360 C180,310 420,420 900,320 M-100,440 C220,390 450,500 900,400 M-100,520 C190,490 430,580 900,480 M-100,600 C210,570 460,660 900,560' fill='none' stroke='%23382F2D' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '700px 700px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Crisp, Meaningful Executive Pitch */}
          <div className="lg:col-span-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEBE3] border border-[#DDD7CD] text-[#2C2926] text-xs font-mono font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#19357B] animate-pulse" />
              Oracle Partner • Enterprise Cloud Delivery
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#161513] leading-[1.12]">
              Mission-critical <br />
              <span className="text-[#19357B]">Oracle Cloud</span> engineered to scale.
            </h1>

            <p className="mt-5 text-[#524E48] text-base sm:text-lg max-w-xl leading-relaxed">
              We design, migrate, and run high-availability OCI architectures, seamless OIC middleware pipelines, and autonomous data platforms with zero downtime.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#19357B] hover:bg-[#0F1E42] text-white font-semibold text-sm transition shadow-sm hover:shadow-md flex items-center gap-2"
              >
                Schedule Architecture Review <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl border border-[#D5CFBF] bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2C2926] font-semibold text-sm transition"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Executive Proof Ledger */}
            <div className="mt-12 pt-8 border-t border-[#E3DDCF] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#161513]">99.99%</div>
                <div className="text-xs text-[#635E57] font-medium mt-1">Uptime SLA</div>
              </div>
              <div className="border-l border-[#E3DDCF] pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-[#19357B]">100+</div>
                <div className="text-xs text-[#635E57] font-medium mt-1">Deployments</div>
              </div>
              <div className="border-l border-[#E3DDCF] pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-[#161513]">&lt; 15 min</div>
                <div className="text-xs text-[#635E57] font-medium mt-1">Incident Response</div>
              </div>
            </div>

          </div>

          {/* RIGHT: Authentic Oracle High-Availability Architecture Canvas */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-[#E3DDCF] shadow-xl p-6 sm:p-8 relative overflow-hidden">
              
              {/* Subtle architectural dot grid */}
              <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#19357B 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}
              />

              {/* Topology Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EFEBE3]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#EFEBE3] text-[#19357B] flex items-center justify-center">
                    <Network size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#161513]">OCI Enterprise Fabric</h3>
                    <p className="text-[11px] text-[#7A746B]">Multi-region active redundant topology</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active Cluster
                </span>
              </div>

              {/* 4 Connected Workload Cards */}
              <div className="mt-6 space-y-3 relative">
                {nodes.map((node, i) => {
                  const isActive = activeNode === i;
                  return (
                    <motion.div
                      key={node.name}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        borderColor: isActive ? '#19357B' : '#EFEBE3'
                      }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                        isActive 
                          ? 'bg-[#FAF8F5] shadow-md ring-1 ring-[#19357B]/20' 
                          : 'bg-white hover:bg-[#FAF8F5]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-[#19357B] text-white' 
                            : 'bg-[#F2ECE1] text-[#19357B]'
                        }`}>
                          {i === 0 && <Server size={18} />}
                          {i === 1 && <Cpu size={18} />}
                          {i === 2 && <Database size={18} />}
                          {i === 3 && <ShieldCheck size={18} />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#161513]">{node.name}</div>
                          <div className="text-[11px] text-[#7A746B] font-mono">{node.tag}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                          isActive ? 'bg-[#19357B]/10 text-[#19357B]' : 'text-[#7A746B]'
                        }`}>
                          {node.state}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Architecture Telemetry Footer */}
              <div className="mt-6 pt-4 border-t border-[#EFEBE3] flex items-center justify-between text-xs text-[#7A746B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={14} className="text-[#19357B]" /> SOC-2 Type II & ZATCA Compliant
                </span>
                <span className="font-mono text-[11px]">SLA: 99.99%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}