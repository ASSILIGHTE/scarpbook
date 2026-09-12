import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Music } from 'lucide-react';
import { coupleInfo } from '../data/scrapbookData';

export default function Navbar({ onOpenMusic, isMusicPlaying }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#cover' },
    { name: 'Our Story', href: '#timeline' },
    { name: 'Memories', href: '#favorites' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Spread', href: '#spread' },
    { name: 'Letter', href: '#letter' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0614]/90 backdrop-blur-md shadow-paper py-3 border-b border-[#9333EA]/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <a 
          href="#cover" 
          onClick={(e) => handleNavClick(e, '#cover')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#9333EA]/40 flex items-center justify-center border border-[#E11D48]/50 group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 text-[#E11D48] fill-[#E11D48] animate-pulse-subtle" />
          </div>
          <div>
            <span className="font-handwriting text-2xl font-bold text-[#F3E8FF] tracking-wide block leading-none">
              {coupleInfo.names}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#FB7185] font-semibold block">
              Digital Scrapbook
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#E9D5FF] hover:text-[#FB7185] font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E11D48] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenMusic}
            className={`p-2 rounded-full border transition-all flex items-center gap-1.5 px-3 text-xs font-semibold ${
              isMusicPlaying
                ? 'bg-[#E11D48] border-[#9333EA] text-white shadow-lg'
                : 'bg-[#180B28]/80 border-[#9333EA]/40 text-[#E9D5FF] hover:bg-[#9333EA]/40'
            }`}
          >
            <Music className={`w-3.5 h-3.5 ${isMusicPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <span>{isMusicPlaying ? 'Playing 🎵' : 'Music 🎵'}</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenMusic}
            className={`p-2 rounded-full text-xs font-semibold ${
              isMusicPlaying ? 'bg-[#E11D48] text-white' : 'bg-[#180B28]/80 text-[#E9D5FF]'
            }`}
          >
            🎵
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#9333EA]/30 text-[#F3E8FF] hover:bg-[#9333EA]/60 transition-colors focus:outline-none border border-[#E11D48]/30"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#180B28] border-b border-[#9333EA]/40 px-6 py-6 space-y-4 shadow-paper-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#F3E8FF] hover:text-[#FB7185] font-handwriting text-2xl py-1 border-b border-[#9333EA]/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#E11D48]">♡</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
