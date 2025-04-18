import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
  currentVolume: 0.5
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
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentTrack,
  changePlaying,
  changeCurrentTime,
  changeCurrentVolume
} = audioPlayerSlice.actions

export default audioPlayerSlice.reducer