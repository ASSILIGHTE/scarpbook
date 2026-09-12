import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { coupleInfo } from '../data/scrapbookData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0614] border-t-2 border-dashed border-[#9333EA]/40 py-12 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-[#E11D48]">
          <Sparkles className="w-4 h-4 text-[#9333EA] animate-sparkle" />
          <Heart className="w-5 h-5 fill-[#E11D48] text-[#E11D48] animate-pulse-subtle" />
          <Sparkles className="w-4 h-4 text-[#9333EA] animate-sparkle" style={{ animationDelay: '1s' }} />
        </div>

        <h3 className="font-handwriting text-4xl sm:text-5xl font-bold text-[#F3E8FF]">
          {coupleInfo.names}
        </h3>

        <p className="font-serif italic text-base sm:text-lg text-[#C084FC] max-w-md mx-auto">
          "{coupleInfo.tagline}"
        </p>

        <div className="pt-4 text-xs font-semibold text-[#E9D5FF]/70 space-y-1">
          <p>Made with love ♡ {currentYear} • Our Little Memories</p>
          <p className="text-[11px] text-[#FB7185]">
            Dark Velvet Scrapbook Edition
          </p>
        </div>
      </div>
    </footer>
  );
}
