'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let isDark;
    const stored = localStorage.getItem('darkMode');
    if (stored === null) {
      // No preference saved, use system preference
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = stored === 'true';
    }
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    console.log('Dark mode toggled:', darkMode);
    console.log('HTML classes:', document.documentElement.className);
    console.log('Body classes:', document.body.className);
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
