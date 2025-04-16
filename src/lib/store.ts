import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {musicApi} from "@/api/api";
import mainReducer from '@/lib/slices/mainSlice'
import audioPlayerReducer from '@/lib/slices/audioPlayerSlice'

const rootReducer = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,
  mainReducer,
  audioPlayerReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']