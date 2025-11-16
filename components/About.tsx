'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { container, fadeUp, scaleIn, viewportConfig } from '@/lib/motion'
import { skills, FEATURED_SKILL_NAMES } from '@/lib/data/skills'

export default function About() {
  const featuredSkills = skills.filter((s) => FEATURED_SKILL_NAMES.includes(s.name))
  const secondarySkills = skills.filter((s) => !FEATURED_SKILL_NAMES.includes(s.name))

  return (
    <section id="about" className="section cv-auto">
      <div className="section-narrow space-y-12">
        {/* Heading + intro */}
        <div className="mx-auto max-w-3xl space-y-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center"
          >
            <span className="type-h2">About Me</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            // @ts-ignore – framer-motion typing issue
            className="type-lead mx-auto max-w-2xl text-left md:text-center leading-relaxed text-foreground-muted"
          >
            <span>
              I’m a Master’s student at USC specializing in full-stack engineering and scalable
              backend systems.
            </span>
            <span className="block mt-2">
              Recently, I’ve been exploring how AI can streamline development, power smarter user
              experiences, and help teams move from reactive to predictive systems.
            </span>
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)]">
          {/* Left: avatar + short copy */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-2xl ring-2 ring-border shadow-xl">
                  <Image
                    src="/img/pp.jpeg"
                    alt="Profile picture"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 192px, 256px"
                  />
                </div>
                <div
                  className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="card-elevate rounded-2xl border border-border bg-surface p-4 text-sm text-foreground-muted space-y-2">
              <p>
                I like working on systems that get smarter and more reliable over time, combining solid engineering
                basics with practical AI to automate debugging, optimize performance, and turn engineering
                intuition into measurable wins in production.
              </p>
              <p>
                Recently I&apos;ve been focusing on observability, cloud-native architecture, and
                making it easier for teams to ship quickly without losing stability.
              </p>
            </div>
          </motion.div>

          {/* Right: single, classy stack card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-3xl border border-border bg-surface/80 backdrop-blur-sm p-6 sm:p-7 space-y-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold tracking-tight">Tech Stack</h3>
                <p className="mt-1 text-xs text-foreground-muted">
                  A small set of tools I reach for first.
                </p>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
                DAILY DRIVERS
              </span>
            </div>

            {/* Primary stack – icon pills */}
            <motion.div variants={container} className="flex flex-wrap gap-3">
              {featuredSkills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="inline-flex items-center gap-2 rounded-full bg-muted/70 border border-border px-3.5 py-1.5"
                >
                  <Icon className="h-4 w-4 text-foreground-muted" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Secondary stack – soft tag cloud */}
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
                Also worked with
              </p>
              <div className="flex flex-wrap gap-2">
                {secondarySkills.map(({ name }) => (
                  <span
                    key={name}
                    className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-[11px] text-foreground-muted"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
