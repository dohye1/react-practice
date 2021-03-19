import { useState } from 'react'

const useTheme = (): [string, () => void] => {
  const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
  let initTheme = isBrowserDarkMode ? 'dark' : 'light'

  const localSettingTheme = localStorage.getItem('theme')

  if (localSettingTheme) {
    initTheme = localSettingTheme
  }

  const [theme, setTheme] = useState(initTheme)

  const setMode = (mode: string) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    setMode(theme === 'light' ? 'dark' : 'light')
  }

  return [theme, toggleTheme]
}

export default useTheme
