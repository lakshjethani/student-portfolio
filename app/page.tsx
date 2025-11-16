import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="section section-surface"><div className="section-narrow h-24 rounded-xl bg-muted/40 animate-pulse"/></div>,
})
const Education = dynamic(() => import('@/components/Education'), {
  loading: () => <div className="section section-surface"><div className="section-narrow h-24 rounded-xl bg-muted/40 animate-pulse"/></div>,
})
const Publications = dynamic(() => import('@/components/Publications'), {
  loading: () => <div className="section section-surface"><div className="section-narrow h-24 rounded-xl bg-muted/40 animate-pulse"/></div>,
})
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="section"><div className="section-wide h-24 rounded-xl bg-muted/40 animate-pulse"/></div>,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="section section-surface"><div className="section-narrow h-10 rounded-xl bg-muted/40 animate-pulse"/></div>,
})
const Footer = dynamic(() => import('@/components/Footer'))
import SectionDivider from '@/components/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider flip />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider flip />
      <Publications />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  )
}
