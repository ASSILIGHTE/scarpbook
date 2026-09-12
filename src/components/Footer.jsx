import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { coupleInfo } from '../data/scrapbookData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF8F0] border-t-2 border-dashed border-[#D98C9A]/40 py-12 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-[#C76575]">
          <Sparkles className="w-4 h-4 animate-sparkle" />
          <Heart className="w-5 h-5 fill-[#C76575] animate-pulse-subtle" />
          <Sparkles className="w-4 h-4 animate-sparkle" style={{ animationDelay: '1s' }} />
        </div>

        <h3 className="font-handwriting text-4xl sm:text-5xl font-bold text-[#8B625B]">
          {coupleInfo.names}
        </h3>

        <p className="font-serif italic text-base sm:text-lg text-[#D98C9A] max-w-md mx-auto">
          "{coupleInfo.tagline}"
        </p>

        <div className="pt-4 text-xs font-semibold text-[#8B625B]/70 space-y-1">
          <p>Made with love ♡ {currentYear} • Our Little Memories</p>
          <p className="text-[11px] text-[#D98C9A]">
            Pastel Edition Digital Scrapbook
          </p>
        </div>
      </div>
    </footer>
  );
}
