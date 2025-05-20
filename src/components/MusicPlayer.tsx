"use client";

import { useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
      }
    };
  }, [setIsPlaying]);

  return (
    <div className="mt-4 flex items-center gap-3">
      <audio ref={audioRef} src="/music/background.mp3" loop />
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-800 hover:from-blue-600 hover:to-sky-950 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        aria-label="Toggle music"
      >
        {audioRef.current?.paused !== false ? (
          <Play size={24} className="ml-1" />
        ) : (
          <Pause size={24} />
        )}
      </button>
      <p className="italic">Love yourself</p>
    </div>
  );
}
