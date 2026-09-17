const THEME_KEY = 'arkvision-theme'
const ACCESSIBLE_KEY = 'arkvision-accessible'
const ACCESSIBLE_EVENT = 'arkvision-accessible-change'

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

/** Whether accessible mode is currently active on the document. */
export function isAccessibleMode() {
  return document.body.classList.contains('accessible-mode')
}

/** Apply accessible mode to both html and body, persist, and notify listeners. */
export function setAccessibleMode(enabled) {
  document.body.classList.toggle('accessible-mode', enabled)
  document.documentElement.classList.toggle('accessible-mode', enabled)
  localStorage.setItem(ACCESSIBLE_KEY, enabled ? 'on' : 'off')
  window.dispatchEvent(new CustomEvent(ACCESSIBLE_EVENT, { detail: { enabled } }))
}

/** Restore accessible mode from localStorage (default: off). */
export function applyAccessibleFromStorage() {
  setAccessibleMode(localStorage.getItem(ACCESSIBLE_KEY) === 'on')
}

export { ACCESSIBLE_EVENT }
