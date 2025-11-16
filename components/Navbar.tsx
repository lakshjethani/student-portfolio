"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { SITE_OWNER } from '@/lib/data/constants'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => setMounted(true), [])

  // Track scroll for header styling
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  // Scroll spy
  useEffect(() => {
    const ids = navItems.map(n => n.href.replace('#', ''))
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as Element[]
    
    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )
    
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-border bg-card/80 backdrop-blur-xl shadow-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="section-wide flex items-center justify-between py-4"
      >
        <Link
          href="#home"
          className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label="Go to home"
        >
          <span className="text-primary">{SITE_OWNER.name.split(' ')[0]}</span>{' '}
          <span className="text-foreground-muted">Portfolio</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActiveItem = active === item.href
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActiveItem
                    ? 'text-primary'
                    : 'text-foreground-muted hover:text-foreground'
                } link-underline`}
                aria-current={isActiveItem ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            disabled={!mounted}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative hidden rounded-lg p-2.5 text-foreground-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed md:inline-flex"
          >
            {mounted ? (
              isDark ? (
                <FiSun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FiMoon className="h-5 w-5" aria-hidden="true" />
              )
            ) : (
              <div className="h-5 w-5 animate-pulse rounded-full bg-muted" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden rounded-lg p-2.5 text-foreground-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {/* Prevent background scroll when mobile menu is open */}
      {mobileOpen && typeof document !== 'undefined' ? (document.body.style.overflow = 'hidden') : (typeof document !== 'undefined' && (document.body.style.overflow = ''))}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="section-wide md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mt-2 grid gap-2 pb-3">
              {navItems.map((item) => {
                const isActiveItem = active === item.href
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActiveItem
                        ? 'bg-surface text-primary'
                        : 'text-foreground-muted hover:bg-surface hover:text-foreground'
                    }`}
                    aria-current={isActiveItem ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
