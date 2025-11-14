"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { container, fadeUp, viewportConfig } from '@/lib/motion'

export type TimelineChildItem = {
  title: string
  period: string
  points?: string[]
  tech?: string[]
}

export type TimelineItem = {
  title: string
  subtitle?: string
  period?: string
  description?: string
  points?: string[]
  logo?: string
  icon?: React.ReactNode
  children?: TimelineChildItem[]
  href?: string
}

type TimelineProps = {
  items: TimelineItem[]
  showLogo?: boolean
  variant?: 'default' | 'compact'
}

export default function Timeline({ items, showLogo = false, variant = 'default' }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div
        className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:block"
        aria-hidden="true"
      />

      <motion.ul
        className="space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {items.map((item, idx) => (
          <li key={`${item.title}-${idx}`} className="relative md:ml-10">
            <motion.div
              variants={fadeUp}
              className="card-elevate p-6 transition-all duration-300"
              whileHover={{ y: -1, scale: 1.01 }}
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[26px] top-6 hidden h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20 shadow-lg md:block"
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                {showLogo && item.logo && (
                  <div className="relative mt-1 h-12 w-12 md:h-14 md:w-14 flex-shrink-0 overflow-hidden rounded-md ring-1 ring-border bg-white dark:bg-white">
                    <Image
                      src={item.logo}
                      alt={`${item.subtitle || item.title} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-2 md:p-2.5"
                    />
                  </div>
                )}

                {item.icon && (
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface text-primary">
                    {item.icon}
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="type-h4">{item.title}</h3>
                  {item.subtitle && (
                    <p className="type-body mt-1 text-foreground-muted">{item.subtitle}</p>
                  )}
                  {item.period && (
                    <p className="type-caption mt-1">{item.period}</p>
                  )}

                  {item.description && item.points ? (
                    <p className="type-body mt-3 text-foreground-muted">
                      <span className="text-foreground font-medium">{item.description}: </span>
                      {item.points.join(' • ')}
                    </p>
                  ) : item.description ? (
                    <p className="type-body mt-3 text-foreground-muted">{item.description}</p>
                  ) : null}

                  {/* Default bullet list when no children provided */}
                  {!item.children && item.points && item.points.length > 0 && !item.description && (
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="type-body flex items-start text-foreground-muted">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Grouped children roles (e.g., multiple roles in the same company) */}
                  {item.children && item.children.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {item.children.map((child, cIdx) => (
                        <div
                          key={`${child.title}-${cIdx}`}
                          className="rounded-lg border border-border bg-surface/60 p-4"
                        >
                          <div className="flex items-baseline justify-between gap-4">
                            <p className="type-h5 text-foreground">{child.title}</p>
                            <p className="type-caption whitespace-nowrap text-foreground-muted">{child.period}</p>
                          </div>
                          {child.tech && child.tech.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {child.tech.map((t, ti) => (
                                <span
                                  key={ti}
                                  className="inline-flex items-center rounded-full border border-border bg-surface px-2 py-0.5 text-xs text-foreground-subtle"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                          {child.points && child.points.length > 0 && (
                            <ul className="mt-3 space-y-2">
                              {child.points.map((point, i) => (
                                <li key={i} className="type-body flex items-start text-foreground-muted">
                                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
