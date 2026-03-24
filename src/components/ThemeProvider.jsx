'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Only use app state, never system theme
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Only update app theme, never system
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    window.toggleDarkMode = () => setDarkMode(prev => !prev)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    console.warn('useTheme must be used within ThemeProvider. Using fallback.')
    return { darkMode: false, setDarkMode: () => {} }
  }
  return context
}
