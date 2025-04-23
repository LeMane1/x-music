import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ITrack} from "@/api/types";

export type queueTypes = undefined | 'popular-week' | 'searched'

interface IAudioPlayerTrack{
  trackId: string;
  trackName: string;
  trackArtistName: string;
  trackImageUrl: string;
  audioUrl: string;
  trackDuration: number;
}

export interface AudioPlayerState{
  playerTrack: IAudioPlayerTrack;
  isPlaying: boolean;
  currentTime: number;
  currentVolume: number;
  playerQueue: ITrack[];
  queueType: queueTypes;
  isExpanded: boolean;
}

const initialState: AudioPlayerState = {
  playerTrack: {
    trackId: '',
    trackName: '',
    trackArtistName: '',
    trackImageUrl: '',
    audioUrl: '',
    trackDuration: 0,
  },
  isPlaying: false,
  currentTime: 0,
  currentVolume: 0.5,
  playerQueue: [],
  queueType: undefined,
  isExpanded: false
}

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    changeCurrentTrack: (state, action: PayloadAction<IAudioPlayerTrack>) => {
      state.isPlaying = false
      state.currentTime = 0
      state.playerTrack = action.payload
    },
    changePlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    changeCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    changeCurrentVolume: (state, action: PayloadAction<number>) => {
      state.currentVolume = action.payload
    },
    setTracksQueue: (state, action: PayloadAction<ITrack[]>) => {
      state.playerQueue = action.payload
    },
    addTracksToPlayerQueue: (state, action: PayloadAction<ITrack[]>) => {
      state.playerQueue = [...state.playerQueue, ...action.payload]
    },
    changeExpanded: (state, action: PayloadAction<boolean>) => {
      state.isExpanded = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentTrack,
  changePlaying,
  changeCurrentTime,
  changeCurrentVolume,
  setTracksQueue,
  addTracksToPlayerQueue,
  changeExpanded
} = audioPlayerSlice.actions

export default audioPlayerSlice.reducer