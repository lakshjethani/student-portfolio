"use client"
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
      {children}
    </ThemeProvider>
  )
}
