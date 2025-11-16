"use client"

import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/lib/motion'
import { experiences } from '@/lib/data/experience'
import Timeline, { TimelineItem } from './Timeline'

export default function Experience() {
  // Group multiple roles by company for a cleaner layout
  const grouped: TimelineItem[] = []
  const seen = new Map<string, number>() // company -> index in grouped

  experiences.forEach((exp) => {
    const key = exp.company
    const existingIndex = seen.get(key)

    if (existingIndex === undefined) {
      // First time seeing this company: create a parent item
      grouped.push({
        title: exp.company,
        logo: exp.logo,
        href: exp.url,
        // Parent period is omitted; each role shows its own period
        children: [
          {
            title: exp.role,
            period: exp.period,
            points: exp.points,
            tech: exp.tech,
          },
        ],
      })
      seen.set(key, grouped.length - 1)
    } else {
      // Append role under existing company
      grouped[existingIndex].children = grouped[existingIndex].children || []
      grouped[existingIndex].children!.push({
        title: exp.role,
        period: exp.period,
        points: exp.points,
        tech: exp.tech,
      })
      // If parent has no href yet but this role has one, set it
      if (!grouped[existingIndex].href && exp.url) {
        grouped[existingIndex].href = exp.url
      }
    }
  })

  // Optional: keep current/most recent roles at top within each company
  grouped.forEach((item) => {
    if (item.children && item.children.length > 1) {
      item.children.sort((a, b) => {
        const aPresent = /present/i.test(a.period)
        const bPresent = /present/i.test(b.period)
        if (aPresent && !bPresent) return -1
        if (!aPresent && bPresent) return 1
        return 0
      })
    }
  })

  return (
    <section id="experience" className="section section-surface cv-auto">
      <div className="section-narrow">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="type-h2">Experience</span>
        </motion.h2>

        <div className="mt-12">
          <Timeline items={grouped} showLogo={true} />
        </div>
      </div>
    </section>
  )
}
