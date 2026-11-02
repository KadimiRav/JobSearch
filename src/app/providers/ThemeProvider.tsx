import type { ReactElement, ReactNode } from 'react'
import { useThemeSync } from '@/features/toggle-theme'

interface ThemeProviderProps {
  /** Дерево компонентов, к которому применяется тема */
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  useThemeSync()
  return <>{children}</>
}
