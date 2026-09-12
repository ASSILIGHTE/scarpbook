import React, { useState } from 'react';
import { Heart, Sparkles, BookOpen, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { coupleInfo } from '../data/scrapbookData';

export default function CoverSection({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E11D48', '#9333EA', '#C084FC', '#FB7185', '#0D0614']
      });
    } catch (e) {
      console.log('Confetti effect');
    }

    if (onOpen) onOpen();

    setTimeout(() => {
      const target = document.querySelector('#timeline');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);
  };

  return (
    <section id="cover" className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center relative overflow-hidden bg-[#0D0614]">
      {/* Background paper texture & decorative floating shapes */}
      <div className="absolute inset-0 paper-texture" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#9333EA]/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#E11D48]/20 rounded-full blur-3xl animate-float-medium" />

      {/* Floating Sparkles & Doodles */}
      <div className="absolute top-20 right-1/4 text-2xl animate-sparkle">✨</div>
      <div className="absolute bottom-24 left-1/5 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>🥀</div>
      <div className="absolute top-1/3 left-12 text-3xl animate-float-slow opacity-80">🖤</div>
      <div className="absolute bottom-1/3 right-12 text-3xl animate-float-medium opacity-80">🦋</div>

      {/* Physical Scrapbook Cover Container */}
      <div className="max-w-3xl w-full mx-auto relative perspective-1000">
        <div 
          className={`relative bg-[#180B28] border-8 border-[#9333EA]/60 rounded-3xl p-6 sm:p-12 shadow-paper-lg transition-transform duration-700 ease-in-out transform ${
            isOpen ? 'rotate-y-12 scale-95 opacity-90' : 'hover:scale-[1.01]'
          }`}
        >
          {/* Top Washi Tapes */}
          <div className="washi-tape w-28 h-7 -top-3 left-12 -rotate-6 z-20" />
          <div className="washi-tape-gold w-28 h-7 -top-3 right-12 rotate-6 z-20" />

          {/* Cover Header Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E11D48]/30 border border-[#FB7185]/40 text-[#FB7185] font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Memoir of Our Hearts</span>
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            </div>

            {/* Title & Subtitle */}
            <h1 className="font-handwriting text-5xl sm:text-7xl font-bold text-[#F3E8FF] tracking-wide mb-2 leading-tight drop-shadow-md">
              {coupleInfo.title}
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#C084FC]">
              "{coupleInfo.subtitle}"
            </p>
          </div>

          {/* Couple Main Polaroid Image Frame */}
          <div className="relative my-8 max-w-md mx-auto">
            {/* Corner Decorative Pins & Clips */}
            <div className="absolute -top-4 -left-4 text-3xl z-20 transform -rotate-12 select-none">📎</div>
            <div className="absolute -bottom-4 -right-4 text-3xl z-20 transform rotate-12 select-none">🖤</div>

            {/* Main Cover Polaroid Frame */}
            <div className="bg-[#220F38] p-4 sm:p-5 rounded-lg shadow-polaroid transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-[#9333EA]/40">
              {/* Tape on Top of Polaroid */}
              <div className="washi-tape-brown w-24 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-10" />

              <div className="relative overflow-hidden rounded aspect-[4/3] bg-black group">
                <img
                  src="/photos/photo2.jpeg"
                  alt="Jamal & Jamilah Cover Memory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D48]" /> Our Happy Place
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-xs text-[#C084FC]">
                    <Calendar className="w-3.5 h-3.5 text-[#E11D48]" /> {coupleInfo.sinceYear} - Forever
                  </span>
                </div>
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="pt-4 text-center">
                <h2 className="font-handwriting text-3xl sm:text-4xl text-[#F3E8FF] font-bold">
                  {coupleInfo.names}
                </h2>
                <p className="text-xs text-[#FB7185] tracking-wider uppercase font-semibold mt-1">
                  Together Since February 2022
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button "Open Our Scrapbook ♡" */}
          <div className="text-center mt-8">
            <button
              onClick={handleOpenClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#9333EA] via-[#E11D48] to-[#9333EA] text-white font-bold text-lg sm:text-xl shadow-paper-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20 group"
            >
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Open Our Scrapbook</span>
              <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
            </button>
            <p className="text-xs text-[#E9D5FF]/70 mt-3 font-medium">
              Click to open our album of memories & love notes ♡
            </p>
          </div>

          {/* Bottom Stamps & Ribbon */}
          <div className="absolute bottom-4 left-6 hidden sm:block">
            <div className="stamp-border px-3 py-1 bg-[#0D0614] transform -rotate-6 text-[11px] font-mono text-[#E11D48]">
              DARK VELVET EDITION
            </div>
          </div>
          <div className="absolute bottom-4 right-6 hidden sm:block">
            <span className="text-2xl font-handwriting text-[#C084FC] transform rotate-6 block">
              Special Edition ✨
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
