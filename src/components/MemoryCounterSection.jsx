import React, { useEffect, useState, useRef } from 'react';
import { Image, Heart, Calendar, Sparkles } from 'lucide-react';

export default function MemoryCounterSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    photos: 0,
    memories: 0,
    days: 0,
    moments: 0
  });

  const targetCounts = {
    photos: 248,
    memories: 89,
    days: 1672,
    moments: 52
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        photos: Math.floor(targetCounts.photos * progress),
        memories: Math.floor(targetCounts.memories * progress),
        days: Math.floor(targetCounts.days * progress),
        moments: Math.floor(targetCounts.moments * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepTime);
  };

  const stats = [
    {
      label: 'Foto Kenangan',
      value: `${counts.photos}+`,
      icon: Image,
      color: 'bg-[#9333EA]/30 border-[#9333EA]/50',
      textColor: 'text-[#C084FC]'
    },
    {
      label: 'Cerita Kenangan',
      value: `${counts.memories}+`,
      icon: Heart,
      color: 'bg-[#E11D48]/30 border-[#E11D48]/50',
      textColor: 'text-[#FB7185]'
    },
    {
      label: 'Hari Bersama',
      value: `${counts.days.toLocaleString()}+`,
      icon: Calendar,
      color: 'bg-[#9333EA]/30 border-[#9333EA]/50',
      textColor: 'text-[#C084FC]'
    },
    {
      label: 'Special Moments',
      value: `${counts.moments}+`,
      icon: Sparkles,
      color: 'bg-[#E11D48]/30 border-[#E11D48]/50',
      textColor: 'text-[#FB7185]'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-[#0A0410] relative overflow-hidden border-y border-[#9333EA]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-handwriting text-4xl sm:text-5xl font-bold text-[#F3E8FF] mb-2">
            How Many Memories Have We Made?
          </h2>
          <p className="text-[#C084FC]/80 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Our Journey In Numbers ♡
          </p>
        </div>

        {/* Counter Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#180B28] rounded-2xl p-5 shadow-paper text-center border border-[#9333EA]/40 transform hover:-translate-y-1 transition-transform"
              >
                <div className={`w-12 h-12 rounded-full ${stat.color} ${stat.textColor} border flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-handwriting text-4xl sm:text-5xl font-bold text-[#F3E8FF] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#C084FC] font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
