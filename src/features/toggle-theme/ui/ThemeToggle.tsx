import type { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Theme } from '@/shared/config'
import { selectTheme, themeToggled } from '../model/themeSlice'
import styles from './ThemeToggle.module.css'

const SunIcon = (): ReactElement => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = (): ReactElement => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export const ThemeToggle = (): ReactElement => {
  const dispatch = useDispatch()
  const theme: Theme = useSelector(selectTheme)
  const label: string = theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => dispatch(themeToggled())}
      aria-label={label}
      title={label}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
