"use client"

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { container, fadeUp } from '@/lib/motion'
import { SITE_OWNER } from '@/lib/data/constants'
import { roles } from '@/lib/data/roles'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || isPaused || roles.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [prefersReducedMotion, isPaused])

  const longestRole = roles.reduce((a, b) => (a.length > b.length ? a : b), '')

  return (
    <section
      id="home"
      className="section relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-animated-gradient blur-2xl opacity-90"
      />

      <motion.div
        className="section-narrow text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="type-display text-balance font-[450] tracking-[-0.02em]"
        >
          Hey, I&apos;m{' '}
          <span className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
            {SITE_OWNER.name}
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-5 flex items-baseline justify-center gap-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <span className="type-lead text-foreground-muted">I&apos;m a</span>

          <div className="relative inline-block text-left align-baseline">
            <span className="type-lead font-medium text-[rgb(var(--foreground))] invisible whitespace-nowrap block">
              {longestRole}
            </span>

            <div className="absolute inset-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="type-lead font-medium text-[rgb(var(--foreground))] absolute inset-0"
                  style={{ pointerEvents: 'none' }}
                  aria-live="polite"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="type-lead mx-auto mt-8 max-w-2xl text-foreground-muted"
        >
          I build accessible, performant web experiences. Explore my projects,
          experience, and how to reach me.
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="btn-primary" aria-label="View my projects">
            View Projects
          </a>
          <a
            href="/resume/LakshJethani(Resume).pdf"
            download="Laksh_Jethani_Resume.pdf"
            className="btn-secondary"
            aria-label="Download my resume as PDF"
          >
            Resume
          </a>
          <a href="#contact" className="btn-secondary" aria-label="Contact me">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
