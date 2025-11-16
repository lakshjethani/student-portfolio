"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { container, fadeUp, hoverLift, viewportConfig } from '@/lib/motion'
import { projects } from '@/lib/data/projects'
import { SITE_OWNER } from '@/lib/data/constants'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="section cv-auto">
      <div className="section-wide">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="type-h2">Projects & Contributions</span>
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {[...projects]
            .sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0))
            .map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="group card-elevate overflow-hidden"
              initial="rest"
              whileHover="hover"
            >
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Action buttons on hover */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-6 flex gap-3">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 rounded-lg bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-card hover:scale-105"
                        aria-label={`View ${project.title} source code`}
                      >
                        <FiGithub className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {(!project.github || project.github === '#') && (
                      <span
                        title="Proprietary"
                        aria-disabled="true"
                        className="flex items-center gap-2 rounded-lg bg-card/60 px-4 py-2 text-sm font-medium text-foreground-muted shadow-lg backdrop-blur-sm border border-border/60 cursor-not-allowed"
                      >
                        <FiGithub className="h-4 w-4" />
                        Code
                      </span>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary-hover hover:scale-105"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="type-h4">{project.title}</h3>
                <p className="type-body mt-2 text-foreground-muted">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <a
            href={SITE_OWNER.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-foreground-muted hover:text-foreground"
          >
            View more of my projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
