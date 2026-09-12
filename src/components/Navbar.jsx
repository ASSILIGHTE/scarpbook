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
          ? 'bg-[#FFF8F0]/90 backdrop-blur-md shadow-paper py-3 border-b border-[#D98C9A]/20'
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
          <div className="w-8 h-8 rounded-full bg-[#F7D6DC] flex items-center justify-center border border-[#D98C9A]/40 group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 text-[#C76575] fill-[#C76575] animate-pulse-subtle" />
          </div>
          <div>
            <span className="font-handwriting text-2xl font-bold text-[#8B625B] tracking-wide block leading-none">
              {coupleInfo.names}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D98C9A] font-semibold block">
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
              className="text-[#8B625B] hover:text-[#C76575] font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D98C9A] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenMusic}
            className={`p-2 rounded-full border transition-all flex items-center gap-1.5 px-3 text-xs font-semibold ${
              isMusicPlaying
                ? 'bg-[#F7D6DC] border-[#C76575] text-[#C76575]'
                : 'bg-white/60 border-[#D98C9A]/30 text-[#8B625B] hover:bg-[#F7D6DC]/40'
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
              isMusicPlaying ? 'bg-[#F7D6DC] text-[#C76575]' : 'bg-white/60 text-[#8B625B]'
            }`}
          >
            🎵
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#F7D6DC]/50 text-[#8B625B] hover:bg-[#F7D6DC] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-b border-[#D98C9A]/30 px-6 py-6 space-y-4 shadow-paper-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#8B625B] hover:text-[#C76575] font-handwriting text-2xl py-1 border-b border-[#F7D6DC]/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#D98C9A]">♡</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
