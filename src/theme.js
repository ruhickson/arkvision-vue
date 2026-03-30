const THEME_KEY = 'arkvision-theme'

/** Apply body.dark-mode from localStorage (default: dark if unset). */
export function applyThemeFromStorage() {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light') {
    document.body.classList.remove('dark-mode')
  } else {
    document.body.classList.add('dark-mode')
  }
}

/** Persist dark mode preference. */
export function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add('dark-mode')
    localStorage.setItem(THEME_KEY, 'dark')
  } else {
    document.body.classList.remove('dark-mode')
    localStorage.setItem(THEME_KEY, 'light')
  }
}
