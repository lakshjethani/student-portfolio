"use client"

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 0 : 120,
    damping: prefersReducedMotion ? 0 : 30,
    mass: prefersReducedMotion ? 0 : 0.2,
  })

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-primary-hover to-accent shadow-lg"
      style={{ scaleX }}
    />
  )
}
