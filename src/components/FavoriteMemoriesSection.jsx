import React from 'react';
import { MapPin, Calendar, Heart, Sparkles } from 'lucide-react';
import { favoriteMoments } from '../data/scrapbookData';

export default function FavoriteMemoriesSection({ onPhotoClick }) {
  return (
    <section id="favorites" className="py-20 px-4 relative overflow-hidden bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#C76575]" />
            <span>Chapter 05</span>
            <Heart className="w-3.5 h-3.5 fill-[#C76575]" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            Favorite Moments & Special Trips
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Sudut kota, aroma kopi, dan kenangan indah yang selalu kita simpan dengan hangat."
          </p>
        </div>

        {/* Favorite Moments Cards */}
        <div className="space-y-12 sm:space-y-16">
          {favoriteMoments.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 shadow-paper border border-[#F7D6DC]/60 relative`}
              >
                {/* Washi Tape Accent */}
                <div className="washi-tape-gold w-32 h-7 -top-3 left-10 rotate-2 z-10" />

                {/* Photo Side */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Location Sticker Pin */}
                  <div className="absolute -top-4 -left-4 z-20 px-3 py-1.5 rounded-full bg-[#C76575] text-white font-bold text-xs shadow-md flex items-center gap-1 animate-float-slow">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>📍 {item.location}</span>
                  </div>

                  <div 
                    onClick={() => onPhotoClick && onPhotoClick(item.image, item.title, item.date, item.location, item.story)}
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-polaroid cursor-pointer border border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs gap-1">
                      <Sparkles className="w-4 h-4" /> Expand Photo
                    </div>
                  </div>
                </div>

                {/* Story Info Side */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#F7D6DC] text-[#C76575] font-bold text-xs uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#8B625B]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#D98C9A]" /> {item.date}
                    </span>
                  </div>

                  <h3 className="font-handwriting text-3xl sm:text-4xl font-bold text-[#8B625B]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#8B625B]/90 font-sans leading-relaxed">
                    {item.story}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-handwriting text-xl text-[#D98C9A] font-semibold">
                      {item.sticker}
                    </span>
                    <span className="text-xs font-semibold text-[#C76575] underline cursor-pointer hover:opacity-80">
                      Read full story ♡
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
