import React from 'react';
import OracleStoryCard from './OracleStoryCard';

export default function CustomerStories() {
  const stories = [
    {
      clientName: "Caesars Entertainment",
      logo: (
        <div className="flex items-center gap-2 font-serif tracking-widest text-slate-800">
          <div className="w-8 h-8 rounded-full border border-amber-600 flex items-center justify-center text-amber-700 text-xs font-black">
            C
          </div>
          <span className="font-bold text-sm tracking-widest uppercase">CAESARS</span>
        </div>
      ),
      headline: "Caesars connects finance and HR to accelerate multi-property enterprise growth",
      buttonText: "Read the Caesars story"
    },
    {
      clientName: "Red Bull Racing",
      logo: (
        <div className="flex flex-col leading-none">
          <span className="text-[10px] tracking-widest font-black uppercase text-red-600">ORACLE</span>
          <span className="text-base font-black italic tracking-tighter text-slate-900">Red Bull RACING</span>
        </div>
      ),
      headline: "Oracle Red Bull Racing extends telemetry-driven performance with cloud scale",
      buttonText: "Read the Red Bull story"
    },
    {
      clientName: "Heathrow Airport",
      logo: (
        <span className="text-2xl font-black tracking-tighter text-indigo-950 font-sans">
          Heathrow
        </span>
      ),
      headline: "Heathrow Airport unifies passenger transit finance and HR with Cloud Applications",
      buttonText: "Read the Heathrow story"
    },
    {
      clientName: "Hearst Corporation",
      logo: (
        <span className="text-xl font-black tracking-[0.25em] text-slate-900 uppercase">
          HEARST
        </span>
      ),
      headline: "Hearst integrates discrete media ERPs, procurement, and global treasury workflows",
      buttonText: "Read the Hearst story"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200 relative overflow-hidden">
      {/* Background soft watermark wave across the entire section */}
      <div className="absolute top-1/2 left-0 w-full h-[450px] bg-gradient-to-r from-transparent via-[#5DBBE8]/5 to-[#8F55C1]/5 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Headline with Oracle-style yellow accent pill */}
        <div className="max-w-3xl mb-14">
          <div className="w-12 h-1 bg-amber-500 rounded-full mb-4" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#19357B] tracking-tight leading-snug">
            Customers who drive growth and operational excellence using Cloud Applications
          </h2>
        </div>

        {/* 4 Cards Grid with Redwood Watermark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <OracleStoryCard
              key={story.clientName}
              logo={story.logo}
              clientName={story.clientName}
              headline={story.headline}
              buttonText={story.buttonText}
            />
          ))}
        </div>

      </div>
    </section>
  );
}