import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  currentScreenshotId: number;
}

const initialState: MainState = {
  currentScreenshotId: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeCurrentScreenshotId: (state, action: PayloadAction<number>) => {
      state.currentScreenshotId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentScreenshotId,
} = mainSlice.actions

export default mainSlice.reducer