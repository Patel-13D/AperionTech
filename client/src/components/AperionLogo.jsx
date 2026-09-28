import React from 'react';

export default function AperionLogo({ className = "h-11", isWhite = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Actual Icon Image */}
      <img
        src="/logo-icon.jpeg"
        alt="Aperion Tech Mark"
        className="h-full w-auto object-contain rounded-lg"
      />

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tight ${isWhite ? 'text-white' : 'text-[#19357B]'}`}>
          Aperion Tech
        </span>
        <span className={`text-[10px] font-bold tracking-wider uppercase mt-1 ${isWhite ? 'text-[#5DBBE8]' : 'text-[#8F55C1]'}`}>
          Global Private Limited
        </span>
      </div>
    </div>
  );
}