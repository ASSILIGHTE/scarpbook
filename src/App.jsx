import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CoverSection from './components/CoverSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import PolaroidSection from './components/PolaroidSection';
import StickyNotesSection from './components/StickyNotesSection';
import FavoriteMemoriesSection from './components/FavoriteMemoriesSection';
import ScrapbookSpreadSection from './components/ScrapbookSpreadSection';
import SecretLetterSection from './components/SecretLetterSection';
import MemoryCounterSection from './components/MemoryCounterSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import CursorTrail from './components/CursorTrail';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [isBookUnlocked, setIsBookUnlocked] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [activeModalPhoto, setActiveModalPhoto] = useState(null);

  const handleOpenGlobalModal = (image, title, date, location, description) => {
    setActiveModalPhoto({
      image,
      title,
      date,
      location,
      caption: description
    });
  };

  const handleUnlockBook = () => {
    setIsBookUnlocked(true);
    setIsMusicPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#8B625B] relative font-sans selection:bg-[#F7D6DC] selection:text-[#8B625B]">
      {/* Interactive Cursor Trail */}
      <CursorTrail />

      {/* Welcome Screen Cover Gate (Full Overlay when locked) */}
      {!isBookUnlocked && (
        <CoverSection
          isWelcomeGate={true}
          onOpen={handleUnlockBook}
        />
      )}

      {/* Main Unlocked Scrapbook Content */}
      {isBookUnlocked && (
        <div className="animate-in fade-in duration-700">
          {/* Navigation Bar */}
          <Navbar
            onOpenMusic={() => setIsMusicPlaying(!isMusicPlaying)}
            isMusicPlaying={isMusicPlaying}
          />

          {/* Main Sections */}
          <main>
            {/* Cover Section Header */}
            <CoverSection
              isWelcomeGate={false}
              onOpen={() => {
                const target = document.querySelector('#timeline');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />

            {/* Section 2: Memory Timeline ("Our Story") */}
            <TimelineSection onPhotoClick={handleOpenGlobalModal} />

            {/* Section 3: Photo Scrapbook Gallery ("Little Moments") */}
            <GallerySection />

            {/* Section 4: Polaroid Memory Cards */}
            <PolaroidSection onPhotoClick={handleOpenGlobalModal} />

            {/* Section 5: Love Notes (Sticky Notes) */}
            <StickyNotesSection />

            {/* Section 6: Favorite Memories */}
            <FavoriteMemoriesSection onPhotoClick={handleOpenGlobalModal} />

            {/* Section 7: Interactive Scrapbook Page Spread */}
            <ScrapbookSpreadSection onPhotoClick={handleOpenGlobalModal} />

            {/* Section 8: Secret Letter */}
            <SecretLetterSection />

            {/* Section 9: Memory Counter */}
            <MemoryCounterSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}

      {/* Global Background Music Player */}
      <AudioPlayer
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
      />

      {/* Global Lightbox Modal */}
      {activeModalPhoto && (
        <LightboxModal
          photoData={activeModalPhoto}
          onClose={() => setActiveModalPhoto(null)}
        />
      )}
    </div>
  );
}
