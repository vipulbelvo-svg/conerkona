"use client";

import { usePlayerStore } from "@/store/player";
import type { PodcastEpisode, AudiobookChapter, AntaryatraContent } from "@/types";

type PlayableTrack = PodcastEpisode | AudiobookChapter | AntaryatraContent;

/**
 * Convenience hook for triggering audio playback from any component.
 * Wraps the Zustand store to provide a clean API.
 */
export function usePlayer() {
  const store = usePlayerStore();

  const playTrack = (track: PlayableTrack) => {
    store.play(track);
  };

  const togglePlay = () => {
    if (store.isPlaying) {
      store.pause();
    } else {
      store.resume();
    }
  };

  const isCurrentTrack = (trackId: string) =>
    store.currentTrack?.id === trackId;

  const isPlayingTrack = (trackId: string) =>
    isCurrentTrack(trackId) && store.isPlaying;

  return {
    currentTrack: store.currentTrack,
    isPlaying: store.isPlaying,
    currentTime: store.currentTime,
    duration: store.duration,
    playTrack,
    togglePlay,
    stop: store.stop,
    isCurrentTrack,
    isPlayingTrack,
  };
}
