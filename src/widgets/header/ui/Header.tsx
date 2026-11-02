import type { ReactElement } from 'react'
import { ThemeToggle } from '@/features/toggle-theme'
import styles from './Header.module.css'

export const Header = (): ReactElement => (
  <header className={styles.header}>
    <div className={styles.garland} aria-hidden="true" />
    <ThemeToggle />
  </header>
)
