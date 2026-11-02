import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@/entities/user'
import { themeSlice } from '@/features/toggle-theme'

const rootReducer = combineSlices(userSlice, themeSlice)

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
