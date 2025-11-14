import { SITE_OWNER } from '@/lib/data/constants'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-12 text-center">
      <div className="section-wide">
        <p className="type-caption text-foreground-muted">
          © {new Date().getFullYear()} {SITE_OWNER.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
