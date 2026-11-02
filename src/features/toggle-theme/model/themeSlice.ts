import { createSlice } from '@reduxjs/toolkit'
import type { Theme } from '@/shared/config'

/** Состояние слайса темы */
export interface ThemeState {
  /** Текущая цветовая тема */
  theme: Theme
}

// Тему уже выставил inline-скрипт в index.html (сохранённая или системная)
const getInitialTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

const initialState: ThemeState = {
  theme: getInitialTheme(),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeToggled: (state: ThemeState): void => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
  selectors: {
    selectTheme: (state: ThemeState): Theme => state.theme,
  },
})

export const { themeToggled } = themeSlice.actions
export const { selectTheme } = themeSlice.selectors
