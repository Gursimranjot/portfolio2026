import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const themes = [
  { id: 'dark',  label: '◐', title: 'Dark' },
  { id: 'light', label: '○', title: 'Light' },
  { id: 'neon',  label: '●', title: 'Neon' },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
