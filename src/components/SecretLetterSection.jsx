import React, { useState } from 'react';
import { Mail, Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveLetterContent } from '../data/scrapbookData';

export default function SecretLetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#E11D48', '#9333EA', '#C084FC', '#FB7185', '#0D0614']
      });
    } catch (e) {
      console.log('Heart confetti trigger');
    }
  };

  return (
    <section id="letter" className={`py-24 px-4 relative overflow-hidden transition-colors duration-700 ${isOpen ? 'bg-[#1C092E]' : 'bg-[#0D0614]'}`}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9333EA]/30 text-[#FB7185] font-semibold text-xs tracking-widest uppercase mb-3 border border-[#E11D48]/30">
            <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Chapter 07</span>
            <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#F3E8FF] mb-3">
            A Secret Letter For You
          </h2>
          <p className="text-[#C084FC]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Ada pesan tersembunyi yang ditulis khusus dengan sepenuh hati."
          </p>
        </div>

        {/* Envelope Container */}
        <div className="max-w-xl mx-auto relative perspective-1000">
          {!isOpen ? (
            /* CLOSED ENVELOPE CARD */
            <div 
              onClick={handleOpenLetter}
              className="bg-[#180B28] border-4 border-[#9333EA]/60 rounded-3xl p-8 sm:p-12 shadow-paper-lg text-center cursor-pointer transform hover:scale-105 transition-all duration-300 relative group"
            >
              {/* Washi Tape */}
              <div className="washi-tape-pink w-32 h-7 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-20" />

              <div className="w-20 h-20 rounded-full bg-[#E11D48]/30 text-[#E11D48] flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#E11D48]/40 group-hover:rotate-12 transition-transform">
                <Mail className="w-10 h-10" />
              </div>

              <h3 className="font-handwriting text-4xl font-bold text-[#F3E8FF] mb-2">
                Surat Cinta Spesial
              </h3>
              <p className="text-xs font-semibold text-[#FB7185] tracking-wider uppercase mb-6">
                Privat & Rahasia — Hanya Untuk Jamilah ♡
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLetter();
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333EA] via-[#E11D48] to-[#9333EA] text-white font-bold text-base shadow-paper hover:shadow-2xl transition-all border border-white/20"
              >
                <span>Read My Letter ♡</span>
                <Heart className="w-4 h-4 fill-white" />
              </button>
            </div>
          ) : (
            /* OPENED LETTER CARD */
            <div className="relative bg-[#180B28] border-4 border-[#E11D48]/60 rounded-3xl p-8 sm:p-12 shadow-paper-lg animate-in zoom-in-95 duration-500 text-[#F3E8FF]">
              {/* Top Washi Tape */}
              <div className="washi-tape-gold w-32 h-7 -top-3 left-1/2 -translate-x-1/2 -rotate-1 z-20" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#E11D48] text-white hover:bg-[#9333EA] transition-colors shadow-md"
                aria-label="Fold letter back"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header */}
              <div className="text-center border-b border-[#9333EA]/30 pb-4 mb-6">
                <span className="font-handwriting text-3xl sm:text-4xl text-[#FB7185] font-bold block mb-1">
                  {loveLetterContent.salutation}
                </span>
                <span className="text-xs text-[#C084FC] font-mono">
                  Written with love • Always and Forever
                </span>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 font-handwriting text-2xl sm:text-3xl text-[#F3E8FF] leading-relaxed text-justify sm:text-left">
                {loveLetterContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-[#9333EA]/30 text-right">
                <p className="text-sm font-serif italic text-[#C084FC]">
                  {loveLetterContent.closing}
                </p>
                <p className="font-handwriting text-4xl font-bold text-[#FB7185] mt-1">
                  {loveLetterContent.signature} ♡
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
