import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
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
      <Projects />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  )
}
