import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ITrack} from "@/api/types";

export interface MainState {
  offset: number;
  tracks: ITrack[]
}

const initialState: MainState = {
  offset: 0,
  tracks: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = [...state.tracks, ...action.payload]
    },
    changeOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeOffset,
  addTracks
} = mainSlice.actions

export default mainSlice.reducer