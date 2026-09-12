import React, { useState } from 'react';
import { Book, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

export default function ScrapbookSpreadSection({ onPhotoClick }) {
  const spreads = [
    {
      id: 1,
      pageLeftTitle: 'Our Warm Cozy Days',
      pageLeftDate: '12 Mei 2024',
      image: '/photos/photo6.jpeg',
      sticker: '☕ Cozy Mood',
      doodle: '🌸✨',
      pageRightTitle: 'Catatan Senja & Kopi',
      quote: 'Di antara riuhnya dunia, senyumanmu selalu jadi tempat di mana jiwaku merasa tenang.',
      handwrittenNote: 'Hari itu kita ngobrolin banyak hal dari yang paling konyol sampai rencana lima tahun ke depan. Terima kasih sudah selalu mendengarkan dengan penuh kasih.',
      signature: '— Jamal & Jamilah'
    },
    {
      id: 2,
      pageLeftTitle: 'Malam Di Kota Tua',
      pageLeftDate: '20 September 2024',
      image: '/photos/photo1.jpeg',
      sticker: '🌃 City Light',
      doodle: '🌙⭐',
      pageRightTitle: 'Tawa di Bawah Lampu Jalan',
      quote: 'Bukan tentang ke mana kita pergi, tapi dengan siapa kita melangkah.',
      handwrittenNote: 'Gerimis tipis tidak menghalangi langkah kita untuk keliling menikmati angin malam. Segelas minuman hangat dan genggaman tanganmu sudah cukup.',
      signature: '— Jamal & Jamilah'
    }
  ];

  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const currentSpread = spreads[activeSpreadIndex];

  return (
    <section id="spread" className="py-20 px-4 relative overflow-hidden bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <Book className="w-3.5 h-3.5" />
            <span>Chapter 06</span>
            <Book className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            Interactive Open Book Spread
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Sensasi membuka halaman demi halaman buku kenangan fisik kita."
          </p>
        </div>

        {/* Book Container Spread */}
        <div className="relative bg-[#FDFBF7] border-4 border-[#F7D6DC] rounded-3xl shadow-paper-lg p-6 sm:p-10">
          {/* Top Decorative Tapes */}
          <div className="washi-tape w-28 h-6 -top-3 left-12 rotate-2 z-20" />
          <div className="washi-tape-gold w-28 h-6 -top-3 right-12 -rotate-2 z-20" />

          {/* Book Spine Crease Effect for Desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/15 to-black/5 pointer-events-none z-10 border-x border-black/5" />

          {/* Two-page layout grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-0">
            {/* LEFT PAGE */}
            <div className="bg-[#FFF8F0] rounded-2xl p-6 shadow-sm border border-[#F7D6DC]/40 relative">
              <div className="flex items-center justify-between border-b border-[#D98C9A]/30 pb-3 mb-4">
                <span className="font-handwriting text-2xl font-bold text-[#8B625B]">
                  {currentSpread.pageLeftTitle}
                </span>
                <span className="text-xs font-semibold text-[#D98C9A]">
                  {currentSpread.pageLeftDate}
                </span>
              </div>

              {/* Photo Frame */}
              <div 
                onClick={() => onPhotoClick && onPhotoClick(currentSpread.image, currentSpread.pageLeftTitle, currentSpread.pageLeftDate, '', currentSpread.quote)}
                className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 mb-4 cursor-pointer shadow-polaroid group border border-white"
              >
                <img
                  src={currentSpread.image}
                  alt={currentSpread.pageLeftTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> View Photo
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#8B625B]">
                <span className="px-2.5 py-1 rounded-full bg-[#F7D6DC]/60 text-[#C76575]">
                  {currentSpread.sticker}
                </span>
                <span className="text-xl">{currentSpread.doodle}</span>
              </div>
            </div>

            {/* RIGHT PAGE */}
            <div className="bg-[#FFF8F0] rounded-2xl p-6 shadow-sm border border-[#F7D6DC]/40 flex flex-col justify-between relative">
              <div>
                <div className="border-b border-[#D98C9A]/30 pb-3 mb-4 flex items-center justify-between">
                  <span className="font-handwriting text-2xl font-bold text-[#8B625B]">
                    {currentSpread.pageRightTitle}
                  </span>
                  <Heart className="w-4 h-4 text-[#C76575] fill-[#F7D6DC]" />
                </div>

                <blockquote className="font-serif italic text-base text-[#C76575] border-l-4 border-[#D98C9A] pl-3 py-1 mb-4 bg-[#F7D6DC]/20 rounded-r-lg">
                  "{currentSpread.quote}"
                </blockquote>

                <p className="font-handwriting text-2xl text-[#8B625B] leading-relaxed mb-4">
                  {currentSpread.handwrittenNote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D98C9A]/30 flex items-center justify-between">
                <span className="font-handwriting text-xl text-[#C76575] font-bold">
                  {currentSpread.signature}
                </span>
                <span className="text-xs font-mono text-[#D98C9A]">
                  PAGE 0{activeSpreadIndex + 1}
                </span>
              </div>
            </div>
          </div>

          {/* Book Page Turner Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#D98C9A]/20">
            <button
              onClick={() => setActiveSpreadIndex(prev => Math.max(0, prev - 1))}
              disabled={activeSpreadIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                activeSpreadIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-[#F7D6DC] text-[#C76575] hover:bg-[#C76575] hover:text-white shadow-sm'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous Page
            </button>

            <span className="font-handwriting text-xl text-[#8B625B] font-bold">
              Spread {activeSpreadIndex + 1} of {spreads.length}
            </span>

            <button
              onClick={() => setActiveSpreadIndex(prev => Math.min(spreads.length - 1, prev + 1))}
              disabled={activeSpreadIndex === spreads.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                activeSpreadIndex === spreads.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-[#F7D6DC] text-[#C76575] hover:bg-[#C76575] hover:text-white shadow-sm'
              }`}
            >
              Next Page <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
