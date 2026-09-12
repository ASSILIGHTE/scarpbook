import React from 'react';
import { Heart, StickyNote } from 'lucide-react';
import { stickyNotes } from '../data/scrapbookData';

export default function StickyNotesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#FFF8F0]">
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-texture" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <StickyNote className="w-3.5 h-3.5" />
            <span>Chapter 04</span>
            <StickyNote className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            Little Sticky Notes
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Pesan-pesan kecil nan manis yang selalu membuat tersenyum saat dibaca ulang."
          </p>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {stickyNotes.map((note) => (
            <div
              key={note.id}
              className={`relative ${note.color} p-6 sm:p-7 rounded-sm shadow-paper border-b-4 border-r-4 border-black/10 transform transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-paper-lg group ${note.rotation}`}
            >
              {/* Masking Tape on Top */}
              <div className="washi-tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-20" />

              {/* Note Content */}
              <div className="relative pt-2">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl select-none">{note.doodle}</span>
                  <Heart className="w-4 h-4 text-[#D98C9A] fill-[#F7D6DC]" />
                </div>

                <p className="font-handwriting text-2xl font-bold text-[#8B625B] leading-relaxed mb-4">
                  "{note.text}"
                </p>

                <div className="text-right border-t border-black/10 pt-2">
                  <span className="font-handwriting text-xl text-[#C76575] font-bold">
                    {note.author}
                  </span>
                </div>
              </div>

              {/* Corner Paper Fold Effect */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-black/5 rounded-tl-lg shadow-inner pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
