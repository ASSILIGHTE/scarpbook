import React from 'react';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { polaroidCards } from '../data/scrapbookData';

export default function PolaroidSection({ onPhotoClick }) {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 03</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            Polaroid Snapshots & Heartfelt Quotes
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Kartu kenangan manis berbentuk polaroid dengan kalimat terindah tentang kita."
          </p>
        </div>

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {polaroidCards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-white rounded-2xl p-5 shadow-polaroid border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-paper-lg group ${card.rotation}`}
            >
              {/* Tape Accent */}
              <div className="washi-tape-pink w-28 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-10" />

              {/* Top Badge */}
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#D98C9A]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F7D6DC]/50 text-[#C76575]">
                  {card.badge}
                </span>
                <span>{card.date}</span>
              </div>

              {/* Polaroid Photo Frame */}
              <div 
                onClick={() => onPhotoClick && onPhotoClick(card.image, card.badge, card.date, '', card.quote)}
                className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 mb-4 cursor-pointer group/img shadow-inner"
              >
                <img
                  src={card.image}
                  alt={card.badge}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> View Photo
                </div>
              </div>

              {/* Quote Body */}
              <div className="relative pt-2 text-center">
                <Quote className="w-6 h-6 text-[#F7D6DC] mx-auto mb-1 opacity-70" />
                <p className="font-handwriting text-2xl font-bold text-[#8B625B] leading-snug mb-2">
                  "{card.quote}"
                </p>
                <p className="text-xs text-[#8B625B]/70 font-sans italic">
                  {card.subtext}
                </p>
              </div>

              {/* Heart Sticker */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#F7D6DC] flex items-center justify-center shadow-md text-lg transform group-hover:scale-125 transition-transform">
                <Heart className="w-4 h-4 fill-[#C76575] text-[#C76575]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
