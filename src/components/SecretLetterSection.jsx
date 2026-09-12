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
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F7D6DC', '#D98C9A', '#C76575', '#FFF8F0']
      });
    } catch (e) {
      console.log('Heart confetti trigger');
    }
  };

  return (
    <section id="letter" className={`py-24 px-4 relative overflow-hidden transition-colors duration-700 ${isOpen ? 'bg-[#FCE7F3]/40' : 'bg-[#FFF8F0]'}`}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Chapter 07</span>
            <Mail className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            A Secret Letter For You
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Ada pesan tersembunyi yang ditulis khusus dengan sepenuh hati."
          </p>
        </div>

        {/* Envelope Container */}
        <div className="max-w-xl mx-auto relative perspective-1000">
          {!isOpen ? (
            /* CLOSED ENVELOPE CARD */
            <div 
              onClick={handleOpenLetter}
              className="bg-[#FDFBF7] border-4 border-[#F7D6DC] rounded-3xl p-8 sm:p-12 shadow-paper-lg text-center cursor-pointer transform hover:scale-105 transition-all duration-300 relative group"
            >
              {/* Washi Tape */}
              <div className="washi-tape-pink w-32 h-7 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-20" />

              <div className="w-20 h-20 rounded-full bg-[#F7D6DC] text-[#C76575] flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:rotate-12 transition-transform">
                <Mail className="w-10 h-10" />
              </div>

              <h3 className="font-handwriting text-4xl font-bold text-[#8B625B] mb-2">
                Surat Cinta Spesial
              </h3>
              <p className="text-xs font-semibold text-[#D98C9A] tracking-wider uppercase mb-6">
                Privat & Rahasia — Hanya Untuk Jamilah ♡
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLetter();
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D98C9A] to-[#C76575] text-white font-bold text-base shadow-paper hover:shadow-lg transition-all"
              >
                <span>Read My Letter ♡</span>
                <Heart className="w-4 h-4 fill-white" />
              </button>
            </div>
          ) : (
            /* OPENED LETTER CARD */
            <div className="relative bg-[#FFF8F0] border-4 border-[#D98C9A]/40 rounded-3xl p-8 sm:p-12 shadow-paper-lg animate-in zoom-in-95 duration-500">
              {/* Top Washi Tape */}
              <div className="washi-tape-gold w-32 h-7 -top-3 left-1/2 -translate-x-1/2 -rotate-1 z-20" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F7D6DC]/60 text-[#C76575] hover:bg-[#C76575] hover:text-white transition-colors"
                aria-label="Fold letter back"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header */}
              <div className="text-center border-b border-[#D98C9A]/30 pb-4 mb-6">
                <span className="font-handwriting text-3xl sm:text-4xl text-[#C76575] font-bold block mb-1">
                  {loveLetterContent.salutation}
                </span>
                <span className="text-xs text-[#D98C9A] font-mono">
                  Written with love • Always and Forever
                </span>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 font-handwriting text-2xl sm:text-3xl text-[#8B625B] leading-relaxed text-justify sm:text-left">
                {loveLetterContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-[#D98C9A]/30 text-right">
                <p className="text-sm font-serif italic text-[#D98C9A]">
                  {loveLetterContent.closing}
                </p>
                <p className="font-handwriting text-4xl font-bold text-[#C76575] mt-1">
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
