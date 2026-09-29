import React from 'react';

export default function CardTexture({ glow = true }) {
  return (
    <>
      {/* Organic wave texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.055] group-hover:opacity-[0.085] transition-opacity mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23382F2D' stroke-width='1.3'%3E%3Cpath d='M-100,100 C150,70 350,130 900,90 M-100,170 C200,140 400,210 900,150 M-100,240 C180,220 420,280 900,220 M-100,310 C220,290 450,360 900,300 M-100,380 C190,370 430,420 900,360 M-100,450 C210,450 460,490 900,430 M-100,520 C240,510 480,560 900,500 M-100,590 C200,590 450,630 900,570 M-100,660 C230,670 490,710 900,640' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '450px 450px',
        }}
      />

      {/* Soft warm top-corner ambient light */}
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-36 h-36 bg-[#F5EFEB] rounded-full blur-2xl pointer-events-none group-hover:bg-[#5DBBE8]/10 transition-colors"
        />
      )}
    </>
  );
}