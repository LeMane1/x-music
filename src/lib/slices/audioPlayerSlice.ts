import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IAudioPlayerTrack{
  trackName: string;
  trackArtistName: string;
  trackImageUrl: string;
  audioUrl: string;
  trackDuration: number;
}

export interface AudioPlayerState{
  playerTrack: IAudioPlayerTrack;
  isPlaying: boolean;
}

const initialState: AudioPlayerState = {
  playerTrack: {
    trackName: '',
    trackArtistName: '',
    trackImageUrl: '',
    audioUrl: '',
    trackDuration: 0,
  },
  isPlaying: false,
}

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    changeCurrentTrack: (state, action: PayloadAction<IAudioPlayerTrack>) => {
      state.playerTrack = action.payload
    },
    changePlaying: (state) => {
      state.isPlaying = !state.isPlaying
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentTrack,
  changePlaying
} = audioPlayerSlice.actions

export default audioPlayerSlice.reducer