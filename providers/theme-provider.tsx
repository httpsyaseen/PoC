'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { THEMEABLE_ROUTES, THEME_STORAGE_KEY, type Theme } from '@/lib/theme/config'

type ThemeContextValue = {
  theme: Theme
  isThemeable: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<Theme | null>(null)
  const isThemeable = THEMEABLE_ROUTES.includes(pathname)

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    setTheme(stored === 'light' || stored === 'dark' ? stored : prefersLight ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', !isThemeable || theme === 'dark')
    }
  }, [theme, isThemeable])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setTheme(next)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme ?? 'dark', isThemeable, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
