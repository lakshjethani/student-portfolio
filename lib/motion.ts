// Helper to check for reduced motion preference
const getReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Base transition config (will be evaluated per component)
const baseTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

const quickTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

// Container variants for stagger animations
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Fade up animation
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
}

// Fade in animation
export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: quickTransition,
  },
}

// Scale in animation
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
}

// Slide in from left
export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
}

// Slide in from right
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
}

// Hover lift effect
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: quickTransition,
  },
}

// Viewport animation config
export const viewportConfig = {
  once: true,
  // More permissive for small screens so sections animate into view reliably
  margin: '0px',
  amount: 0.15,
}

// Quick viewport config (less strict)
export const viewportConfigLoose = {
  once: true,
  margin: '0px',
  amount: 0.1,
}
