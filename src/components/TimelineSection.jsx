import React from 'react';
import { Sparkles, Calendar, MapPin, Heart } from 'lucide-react';
import { timelineEvents } from '../data/scrapbookData';

export default function TimelineSection({ onPhotoClick }) {
  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden bg-[#0D0614]">
      {/* Subtle background elements */}
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9333EA]/30 text-[#FB7185] font-semibold text-xs tracking-widest uppercase mb-3 border border-[#E11D48]/30">
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
            <span>Chapter 01</span>
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl font-bold text-[#F3E8FF] mb-3">
            Our Journey Story
          </h2>
          <p className="text-[#C084FC]/80 max-w-xl mx-auto text-sm sm:text-base font-serif italic">
            "Setiap detik perjalanan kita tersimpan rapi dalam ingatan dan lembaran kertas kenangan ini."
          </p>
          
          <div className="w-24 h-1 bg-[#E11D48]/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical Wavy Dashed Line (Desktop Center, Mobile Left) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-[#E11D48]/60 -translate-x-1/2" />

          <div className="space-y-16 sm:space-y-20">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-[#180B28] border-[3px] border-[#9333EA] shadow-paper flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <span className="text-base leading-none whitespace-nowrap select-none flex items-center justify-center">{event.doodle}</span>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Grid Alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 pl-16 ${isEven ? 'md:pl-4 md:pr-14' : 'md:pl-14 md:pr-4'}`}>
                    <div
                      className={`relative bg-[#180B28] rounded-2xl p-6 shadow-paper border border-[#9333EA]/40 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-paper-lg group ${event.rotation}`}
                    >
                      {/* Top Tape */}
                      <div className={`${event.tapeColor} w-24 h-6 -top-3 left-8 rotate-2 z-10`} />

                      {/* Header Badge & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#E11D48]/30 text-[#FB7185] font-bold text-xs border border-[#E11D48]/40">
                          {event.badge}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-[#C084FC] font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#E11D48]" />
                          <span>{event.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-handwriting text-3xl font-bold text-[#F3E8FF] mb-2 group-hover:text-[#FB7185] transition-colors">
                        {event.title}
                      </h3>

                      {/* Location Badge */}
                      <div className="flex items-center gap-1.5 text-xs text-[#FB7185] font-medium mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                        <span>{event.location}</span>
                      </div>

                      {/* Photo inside Timeline Event */}
                      <div 
                        onClick={() => onPhotoClick && onPhotoClick(event.image, event.title, event.date, event.location, event.description)}
                        className="relative overflow-hidden rounded-xl aspect-[16/10] bg-black mb-4 cursor-pointer group/photo shadow-sm border border-[#9333EA]/30"
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500 opacity-90 group-hover/photo:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs gap-1">
                          <Sparkles className="w-4 h-4 text-[#FB7185]" /> Click to enlarge
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-[#E9D5FF]/90 leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {/* Corner Doodle Sticker */}
                      <div className="absolute -bottom-3 -right-3 text-2xl select-none transform hover:rotate-12 transition-transform">
                        {event.doodle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
