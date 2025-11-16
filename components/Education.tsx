"use client"

import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/lib/motion'
import { education } from '@/lib/data/education'
import Timeline, { TimelineItem } from './Timeline'
import { FiBook } from 'react-icons/fi'

export default function Education() {
  const timelineItems: TimelineItem[] = education.map((ed) => {
    const points = ed.courses ? ed.courses.split(',').map((c) => c.trim()).filter(Boolean) : undefined
    return {
      title: ed.school,
      subtitle: ed.degree,
      period: ed.year,
      description: points && points.length > 0 ?""  : undefined,
      points,
      logo: ed.logo,
      href: ed.url,
    }
  })

  return (
    <section id="education" className="section section-surface cv-auto">
      <div className="section-narrow">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="type-h2">Education</span>
        </motion.h2>

        <div className="mt-12">
          <Timeline items={timelineItems} showLogo={true} />
        </div>
      </div>
    </section>
  )
}
