"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { container, fadeUp, viewportConfig } from '@/lib/motion'
import { publications } from '@/lib/data/publications'
import { FiExternalLink } from 'react-icons/fi'

export default function Publications() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  return (
    <section id="publications" className="section section-surface cv-auto">
      <div className="section-narrow">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="type-h2">Publications</span>
        </motion.h2>

        <motion.ul
          className="mt-10 grid gap-4 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {publications.map((p, idx) => {
            let host = ''
            try {
              host = new URL(p.url).hostname.replace('www.', '')
            } catch {}
            const label = p.title || p.url
            return (
              <motion.li key={`${p.url}-${idx}`} variants={fadeUp}>
                <div className="card-elevate group rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-accent/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="mb-2 inline-flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[11px] text-foreground-subtle">
                          {idx + 1}
                        </span>
                        {p.venue && p.year && (
                          <span className="text-[11px] uppercase tracking-wide text-foreground-subtle">
                            {p.venue} • {p.year}
                          </span>
                        )}
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-underline inline-flex items-center gap-2"
                      >
                        <span className="type-body font-medium text-foreground break-words">
                          {label}
                        </span>
                        <FiExternalLink className="h-4 w-4 text-foreground-subtle" aria-hidden />
                      </a>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {host && (
                          <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-foreground-subtle">
                            {host}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(p.url)
                            setCopiedIndex(idx)
                            setTimeout(() => setCopiedIndex(null), 2000)
                          } catch {}
                        }}
                        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
                        aria-label="Copy link"
                        title="Copy link"
                      >
                        {copiedIndex === idx ? 'Copied' : 'Link'}
                      </button>
                      {p.bibtex && (
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(p.bibtex as string)
                              setCopiedIndex(idx)
                              setTimeout(() => setCopiedIndex(null), 2000)
                            } catch {
                              // ignore
                            }
                          }}
                          className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
                          aria-label="Copy BibTeX"
                          title="Copy BibTeX"
                        >
                          {copiedIndex === idx ? 'Copied' : 'BibTeX'}
                        </button>
                      )}
                      {!p.bibtex && p.bibtexUrl && (
                        <a
                          href={p.bibtexUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
                        >
                          BibTeX
                        </a>
                      )}
                      {p.pdfUrl && (
                        <a
                          href={p.pdfUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
                        >
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
