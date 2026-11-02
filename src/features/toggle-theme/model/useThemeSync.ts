import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { THEME_STORAGE_KEY, type Theme } from '@/shared/config'
import { selectTheme } from './themeSlice'

/** Применяет текущую тему к <html> и сохраняет её в localStorage */
export const useThemeSync = (): void => {
  const theme: Theme = useSelector(selectTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage может быть недоступен (приватный режим) — тема просто не запомнится
    }
  }, [theme])
}
