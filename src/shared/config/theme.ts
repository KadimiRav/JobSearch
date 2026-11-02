/** Цветовая тема интерфейса */
export type Theme = 'light' | 'dark'

/** Ключ localStorage с выбранной темой. Дублируется в inline-скрипте index.html */
export const THEME_STORAGE_KEY: string = 'jobsearch:theme'
