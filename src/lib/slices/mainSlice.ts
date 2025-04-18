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
    addTracksToQueue: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = [...state.tracks, ...action.payload]
      state.offset = state.offset + 10
    },
    cleanQueue: (state) => {
      state.tracks = []
    },
    prepareQueue: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = [...action.payload]
      state.offset = 10
    },
    changeOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeOffset,
  addTracksToQueue,
  cleanQueue,
  prepareQueue
} = mainSlice.actions

export default mainSlice.reducer