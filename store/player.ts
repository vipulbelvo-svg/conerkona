import { create } from "zustand";
import type { PodcastEpisode, AudiobookChapter, AntaryatraContent } from "@/types";

type TrackSource = PodcastEpisode | AudiobookChapter | AntaryatraContent;

interface PlayerState {
  // Current track
  currentTrack: TrackSource | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  isVisible: boolean;

  // Actions
  play: (track: TrackSource) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  seek: (time: number) => void;
  setVolume: (vol: number) => void;
  setPlaybackRate: (rate: number) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (dur: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  playbackRate: 1,
  isVisible: false,

  play: (track) =>
    set({ currentTrack: track, isPlaying: true, isVisible: true, currentTime: 0 }),

  pause: () => set({ isPlaying: false }),
  resume: () => set({ isPlaying: true }),

  stop: () =>
    set({ currentTrack: null, isPlaying: false, isVisible: false, currentTime: 0 }),

  seek: (time) => set({ currentTime: time }),
  setVolume: (vol) => set({ volume: vol }),
  setPlaybackRate: (rate) => set({ playbackRate: rate }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (dur) => set({ duration: dur }),
}));
