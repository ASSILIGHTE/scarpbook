import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { galleryPhotos } from '../data/scrapbookData';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Helper to render distinct frame styles in Warm Pastel palette
  const renderFrameStyle = (photo) => {
    const { frameType, image, title, date, caption, sticker } = photo;

    switch (frameType) {
      case 'vintage':
        return (
          <div className="bg-[#F3E9D9] p-4 rounded-md shadow-paper border-2 border-[#D98C9A]/30">
            <div className="washi-tape-brown w-20 h-5 -top-2 left-6 rotate-3 z-10" />
            <div className="overflow-hidden rounded border-4 border-white shadow-inner aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-3 text-center">
              <span className="font-handwriting text-2xl text-[#8B625B] font-bold block">{title}</span>
              <span className="text-[11px] text-[#D98C9A] font-semibold block">{date}</span>
            </div>
          </div>
        );

      case 'rounded':
        return (
          <div className="bg-[#F7D6DC]/40 p-4 rounded-3xl shadow-paper border border-[#D98C9A]/40">
            <div className="overflow-hidden rounded-2xl aspect-square border-2 border-white">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-3 text-center">
              <span className="font-handwriting text-2xl text-[#C76575] font-bold block">{title}</span>
              <span className="text-xs text-[#8B625B]/70">{date}</span>
            </div>
          </div>
        );

      case 'tape':
        return (
          <div className="bg-white p-3 rounded-lg shadow-paper relative">
            <div className="washi-tape w-24 h-6 -top-3 left-4 -rotate-3 z-10" />
            <div className="washi-tape-gold w-24 h-6 -bottom-3 right-4 rotate-3 z-10" />
            <div className="overflow-hidden rounded aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-2 text-center">
              <span className="font-sans text-xs font-bold text-[#8B625B]">{date}</span>
            </div>
          </div>
        );

      case 'floral':
        return (
          <div className="bg-[#FFF8F0] p-4 rounded-2xl shadow-paper border-2 border-dashed border-[#D98C9A] relative">
            <span className="absolute -top-3 -right-3 text-2xl select-none">🌸</span>
            <span className="absolute -bottom-3 -left-3 text-2xl select-none">🌺</span>
            <div className="overflow-hidden rounded-xl aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-3 text-center">
              <span className="font-handwriting text-2xl text-[#8B625B] font-bold block">{title}</span>
            </div>
          </div>
        );

      case 'heart':
        return (
          <div className="bg-[#FCE7F3] p-4 rounded-3xl shadow-paper border border-[#C76575]/30 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">💖</span>
            <div className="overflow-hidden rounded-2xl aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-3 text-center">
              <span className="font-handwriting text-2xl text-[#C76575] font-bold block">{title}</span>
            </div>
          </div>
        );

      case 'filmstrip':
        return (
          <div className="bg-[#2D2422] p-3 rounded-lg shadow-paper text-white relative">
            <div className="flex justify-between px-1 mb-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2.5 h-3 bg-white/20 rounded-xs" />
              ))}
            </div>
            <div className="overflow-hidden rounded aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="flex justify-between px-1 mt-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2.5 h-3 bg-white/20 rounded-xs" />
              ))}
            </div>
            <div className="pt-2 text-center">
              <span className="font-mono text-[10px] text-[#F7D6DC] block">FILM_ROLL #0{photo.id}</span>
            </div>
          </div>
        );

      case 'instant':
        return (
          <div className="bg-[#FAF7F2] p-4 rounded-lg shadow-polaroid border border-gray-200">
            <div className="washi-tape-pink w-20 h-5 -top-2 right-4 -rotate-6 z-10" />
            <div className="overflow-hidden aspect-square rounded bg-black">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-3 flex items-center justify-between text-xs text-[#8B625B] font-mono">
              <span>{date}</span>
              <span>{sticker}</span>
            </div>
          </div>
        );

      case 'polaroid':
      default:
        return (
          <div className="bg-white p-4 rounded-lg shadow-polaroid border border-gray-100">
            <div className="washi-tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1 z-10" />
            <div className="overflow-hidden rounded aspect-square bg-gray-100">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="pt-4 text-center">
              <span className="font-handwriting text-2xl text-[#8B625B] font-bold block">{title}</span>
              <span className="text-xs text-[#D98C9A] font-semibold block">{date}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7D6DC] text-[#C76575] font-semibold text-xs tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Chapter 02</span>
            <Camera className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#8B625B] mb-3">
            Little Moments Gallery
          </h2>
          <p className="text-[#8B625B]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Setiap bingkai memiliki ceritanya tersendiri. Klik foto untuk melihat caption kenangan romantis kita."
          </p>
        </div>

        {/* Gallery Grid (Responsive: 1-2 cols on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 hover:rotate-0 hover:z-30 hover:shadow-paper-lg group ${photo.rotation}`}
            >
              {renderFrameStyle(photo)}

              {/* Hover Floating Caption Badge */}
              <div className="absolute inset-x-2 bottom-2 bg-[#FFF8F0]/95 border border-[#D98C9A]/40 rounded-xl p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-xs text-center z-30 pointer-events-none">
                <p className="font-serif text-xs italic text-[#8B625B] line-clamp-2">
                  "{photo.caption}"
                </p>
                <div className="flex items-center justify-center gap-1 text-[11px] text-[#C76575] font-semibold mt-1">
                  <Sparkles className="w-3 h-3" /> Click to enlarge ♡
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photoData={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
