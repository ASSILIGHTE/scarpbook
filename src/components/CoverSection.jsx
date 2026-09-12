import React, { useState } from 'react';
import { Heart, Sparkles, BookOpen, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { coupleInfo } from '../data/scrapbookData';

export default function CoverSection({ isWelcomeGate = false, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F7D6DC', '#D98C9A', '#C76575', '#FFF8F0', '#FEF3C7']
      });
    } catch (e) {
      console.log('Confetti effect');
    }

    setTimeout(() => {
      if (onOpen) onOpen();
    }, 400);
  };

  const containerClasses = isWelcomeGate
    ? "fixed inset-0 z-50 overflow-y-auto bg-[#FFF8F0] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500"
    : "min-h-screen pt-24 pb-16 px-4 flex items-center justify-center relative overflow-hidden bg-[#FFF8F0]";

  return (
    <section id="cover" className={containerClasses}>
      {/* Background paper texture & floating petals */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#F7D6DC]/40 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D98C9A]/20 rounded-full blur-3xl animate-float-medium pointer-events-none" />

      {/* Floating Sparkles & Doodles */}
      <div className="absolute top-12 right-12 text-2xl animate-sparkle pointer-events-none">🌸</div>
      <div className="absolute bottom-16 left-12 text-2xl animate-sparkle pointer-events-none" style={{ animationDelay: '1s' }}>🌸</div>
      <div className="absolute top-1/3 right-8 text-3xl animate-float-slow opacity-60 pointer-events-none">✨</div>
      <div className="absolute bottom-1/3 left-8 text-3xl animate-float-medium opacity-60 pointer-events-none">💖</div>

      {/* Physical Scrapbook Cover Container */}
      <div className="max-w-3xl w-full mx-auto relative perspective-1000 my-auto">
        <div 
          className={`relative bg-[#FDFBF7] border-8 border-[#F7D6DC] rounded-3xl p-6 sm:p-10 shadow-paper-lg transition-transform duration-500 ease-in-out transform ${
            isOpening ? 'scale-95 opacity-80' : 'hover:scale-[1.005]'
          }`}
        >
          {/* Top Washi Tapes */}
          <div className="washi-tape w-28 h-7 -top-3 left-12 -rotate-6 z-20" />
          <div className="washi-tape-gold w-28 h-7 -top-3 right-12 rotate-6 z-20" />

          {/* Cover Header Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC]/60 border border-[#D98C9A]/30 text-[#C76575] font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEMOIR OF OUR HEARTS</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            {/* Title & Subtitle */}
            <h1 className="font-handwriting text-5xl sm:text-7xl font-bold text-[#8B625B] tracking-wide mb-2 leading-tight">
              {coupleInfo.title}
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#D98C9A]">
              "{coupleInfo.subtitle}"
            </p>
          </div>

          {/* Couple Main Polaroid Image Frame */}
          <div className="relative my-6 sm:my-8 max-w-md mx-auto">
            {/* Corner Decorative Pins & Clips */}
            <div className="absolute -top-4 -left-4 text-3xl z-20 transform -rotate-12 select-none">📎</div>
            <div className="absolute -bottom-4 -right-4 text-3xl z-20 transform rotate-12 select-none">🌸</div>

            {/* Main Cover Polaroid Frame */}
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-polaroid transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-gray-100 relative">
              {/* Tape on Top of Polaroid */}
              <div className="washi-tape-brown w-24 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-10" />

              <div className="relative overflow-hidden rounded aspect-[4/3] bg-gray-100 group">
                <img
                  src="/photos/photo2.jpeg"
                  alt="Jamal & Jamilah Cover Memory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-xs">
                    <MapPin className="w-3 h-3 text-[#F7D6DC]" /> Our Happy Place
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs font-semibold">
                    <Calendar className="w-3 h-3 text-[#F7D6DC]" /> {coupleInfo.sinceYear} – Forever
                  </span>
                </div>
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="pt-4 text-center">
                <h2 className="font-handwriting text-3xl sm:text-4xl text-[#8B625B] font-bold">
                  {coupleInfo.names}
                </h2>
                <p className="text-[11px] text-[#D98C9A] tracking-widest uppercase font-bold mt-1">
                  TOGETHER SINCE FEBRUARY 2022
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button "Open Our Scrapbook ♡" */}
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={handleOpenClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D98C9A] to-[#C76575] text-white font-bold text-lg sm:text-xl shadow-paper-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 group mx-auto"
            >
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Open Our Scrapbook</span>
              <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
            </button>
            <p className="text-xs text-[#8B625B]/70 mt-3 font-medium">
              Click to open our album of memories & love notes ♡
            </p>
          </div>

          {/* Bottom Stamps & Ribbon */}
          <div className="absolute bottom-4 left-6 hidden sm:block">
            <div className="stamp-border px-3 py-1 bg-[#FFF8F0] transform -rotate-6 text-[11px] font-mono text-[#D98C9A] font-bold">
              OFFICIAL LOVE ALBUM
            </div>
          </div>
          <div className="absolute bottom-4 right-6 hidden sm:block">
            <span className="text-2xl font-handwriting text-[#C76575] transform rotate-6 block font-bold">
              Special Edition ✨
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
