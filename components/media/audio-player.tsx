"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  X,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { cn, formatDuration } from "@/lib/utils";
import { usePlayerStore } from "@/store/player";

export function PersistentAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
    isVisible,
    pause,
    resume,
    stop,
    seek,
    setVolume,
    setPlaybackRate,
    setCurrentTime,
    setDuration,
  } = usePlayerStore();

  const audioRef = useRef<HTMLAudioElement>(null);

  // Sync play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Load new track
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    const audioUrl = "audioUrl" in currentTrack ? currentTrack.audioUrl : undefined;
    if (!audioUrl) return;
    audioRef.current.src = audioUrl;
    audioRef.current.load();
    if (isPlaying) audioRef.current.play().catch(() => {});
  }, [currentTrack]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync playback rate
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  if (!isVisible || !currentTrack) return null;

  const audioUrl = "audioUrl" in currentTrack ? currentTrack.audioUrl : undefined;
  const coverImage = "coverImage" in currentTrack ? currentTrack.coverImage : undefined;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Hidden audio element */}
      {audioUrl && (
        <audio
          ref={audioRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={stop}
          preload="metadata"
        />
      )}

      {/* Player bar — sits above mobile bottom nav */}
      <div
        className={cn(
          "fixed left-0 right-0 z-[var(--z-player)]",
          "bottom-0 md:bottom-0",
          "mb-[60px] md:mb-0" // push above mobile bottom nav
        )}
        role="region"
        aria-label="Audio player"
      >
        {/* Progress bar — tappable */}
        <div
          className="w-full h-1 bg-[var(--color-ck-border)] cursor-pointer group"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            const newTime = pct * duration;
            seek(newTime);
            if (audioRef.current) audioRef.current.currentTime = newTime;
          }}
          role="slider"
          aria-label="Playback progress"
          aria-valuenow={Math.round(currentTime)}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          tabIndex={0}
        >
          <div
            className="h-full bg-[var(--color-ck-accent)] transition-all group-hover:h-1.5"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Main bar */}
        <div className="bg-[var(--color-ck-surface)]/98 backdrop-blur-md border-t border-[var(--color-ck-border)] px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            {/* Cover art */}
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              {coverImage ? (
                <Image
                  src={coverImage.url}
                  alt={coverImage.alt ?? currentTrack.title}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              ) : (
                <div className="w-full h-full bg-[var(--color-ck-surface-2)] flex items-center justify-center">
                  <Play size={12} className="text-white/30" />
                </div>
              )}
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0 hidden sm:block">
              <p className="text-sm font-medium text-white line-clamp-1">
                {currentTrack.title}
              </p>
              <p className="text-xs text-white/40">
                {formatDuration(currentTime)} / {formatDuration(duration)}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = Math.max(0, currentTime - 15);
                  }
                }}
                className="p-2 rounded-full text-white/60 hover:text-white hover:bg-[var(--color-ck-surface-2)] transition-colors"
                aria-label="Rewind 15 seconds"
              >
                <SkipBack size={16} />
              </button>

              <button
                onClick={() => (isPlaying ? pause() : resume())}
                className="w-10 h-10 rounded-full bg-[var(--color-ck-accent)] flex items-center justify-center hover:bg-[var(--color-ck-accent-hover)] transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={18} fill="white" className="text-white" />
                ) : (
                  <Play size={18} fill="white" className="text-white ml-0.5" />
                )}
              </button>

              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = Math.min(
                      duration,
                      currentTime + 15
                    );
                  }
                }}
                className="p-2 rounded-full text-white/60 hover:text-white hover:bg-[var(--color-ck-surface-2)] transition-colors"
                aria-label="Forward 15 seconds"
              >
                <SkipForward size={16} />
              </button>
            </div>

            {/* Playback speed */}
            <button
              onClick={() => {
                const rates = [0.75, 1, 1.25, 1.5, 2];
                const idx = rates.indexOf(playbackRate);
                setPlaybackRate(rates[(idx + 1) % rates.length]);
              }}
              className="hidden sm:flex items-center justify-center w-10 h-7 rounded text-xs font-semibold text-white/60 hover:text-white bg-[var(--color-ck-surface-2)] hover:bg-[var(--color-ck-border)] transition-colors"
              aria-label={`Playback speed: ${playbackRate}x`}
            >
              {playbackRate}x
            </button>

            {/* Volume — desktop only */}
            <button
              onClick={() => setVolume(volume === 0 ? 1 : 0)}
              className="hidden md:flex p-2 rounded-full text-white/60 hover:text-white transition-colors"
              aria-label={volume === 0 ? "Unmute" : "Mute"}
            >
              {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Close */}
            <button
              onClick={stop}
              className="p-2 rounded-full text-white/40 hover:text-white hover:bg-[var(--color-ck-surface-2)] transition-colors"
              aria-label="Close player"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
