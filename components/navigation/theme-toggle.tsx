'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/providers/theme-provider'

export function ThemeToggle() {
  const { theme, isThemeable, toggleTheme } = useTheme()

  if (!isThemeable) {
    return null
  }

  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.04] text-ink-soft transition-colors hover:border-ink/20 hover:bg-ink/[0.08] hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink/40"
      onClick={toggleTheme}
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  )
}
