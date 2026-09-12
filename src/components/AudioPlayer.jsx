import React, { useEffect, useRef } from 'react';
import { VolumeX, Music } from 'lucide-react';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Audio autoplay / play prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* HTML5 Audio element loading the local music.mp3 */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Background Music" : "Play Romantic Music"}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-paper-lg transition-all duration-300 transform hover:scale-105 ${
          isPlaying 
            ? 'bg-[#C76575] text-white ring-4 ring-[#F7D6DC]/60 animate-pulse-subtle' 
            : 'bg-[#FFF8F0] text-[#8B625B] border-2 border-[#D98C9A]/40 hover:bg-[#F7D6DC]/30'
        }`}
      >
        <Music className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        <span className="font-handwriting text-lg font-bold hidden sm:inline">
          {isPlaying ? 'Music Playing 🎵' : 'Play Music ♡'}
        </span>
        {isPlaying ? (
          <span className="flex items-center space-x-1 ml-1">
            <span className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
            <span className="w-1 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></span>
          </span>
        ) : (
          <VolumeX className="w-4 h-4 text-[#8B625B]/70" />
        )}
      </button>
    </>
  );
}
