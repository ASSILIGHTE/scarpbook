import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function LightboxModal({ photoData, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photoData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative bg-[#FFF8F0] border-4 border-[#F7D6DC] rounded-3xl p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-paper-lg z-10 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#F7D6DC] text-[#C76575] hover:bg-[#C76575] hover:text-white transition-colors flex items-center justify-center shadow-sm"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Washi Tape Accent */}
        <div className="washi-tape w-28 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1" />

        {/* Photo Container */}
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-polaroid mb-5 p-3 border border-[#F7D6DC]/50">
          <img
            src={photoData.image}
            alt={photoData.title || 'Couple Memory Photo'}
            className="w-full max-h-[60vh] object-contain rounded-xl mx-auto"
          />
        </div>

        {/* Info & Caption */}
        <div className="space-y-3 text-center sm:text-left px-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F7D6DC]/60 pb-3">
            <h3 className="font-handwriting text-3xl font-bold text-[#8B625B]">
              {photoData.title || 'Special Moment'}
            </h3>

            <div className="flex items-center gap-3 text-xs font-semibold text-[#D98C9A]">
              {photoData.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {photoData.date}
                </span>
              )}
              {photoData.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {photoData.location}
                </span>
              )}
            </div>
          </div>

          <p className="font-serif italic text-lg text-[#8B625B]/90 leading-relaxed pt-1">
            "{photoData.caption || photoData.description}"
          </p>

          <div className="flex items-center justify-between text-xs text-[#D98C9A] pt-2">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Captured with love
            </span>
            <span className="font-handwriting text-xl text-[#C76575]">
              Jamal & Jamilah ♡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
