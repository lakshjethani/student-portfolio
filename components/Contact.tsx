"use client"

import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/lib/motion'
import { SITE_OWNER } from '@/lib/data/constants'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const email = SITE_OWNER.email
  const links = [
    email
      ? {
          label: 'Email',
          href: `mailto:${email}`,
          icon: <FiMail className="h-6 w-6" aria-hidden />,
          external: false,
        }
      : null,
    SITE_OWNER.linkedin
      ? {
          label: 'LinkedIn',
          href: SITE_OWNER.linkedin,
          icon: <FiLinkedin className="h-6 w-6" aria-hidden />,
          external: true,
        }
      : null,
    SITE_OWNER.github
      ? {
          label: 'GitHub',
          href: SITE_OWNER.github,
          icon: <FiGithub className="h-6 w-6" aria-hidden />,
          external: true,
        }
      : null,
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode; external?: boolean }[]

  return (
    <section id="contact" className="section section-surface">
      <div className="section-narrow">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="type-h2">Contact</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="type-lead mt-6 text-foreground-muted text-center"
        >
          Let’s connect — reach out via email, LinkedIn, or GitHub.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer noopener' : undefined}
              aria-label={link.label}
              className="card-elevate group flex items-center justify-center gap-3 rounded-xl p-5 text-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-foreground-muted transition-colors group-hover:text-primary">
                {link.icon}
              </span>
              <span className="font-medium group-hover:text-foreground">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
