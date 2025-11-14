export type Project = {
  title: string
  desc: string
  tech: string[]
  image: string
  github?: string
  demo?: string
  priority?: boolean
}

export const projects: Project[] = [
  {
    title: 'Hackaday Dev',
    desc: 'Staging platform for Hackaday rebuilt with a modular EJS design system and Storybook.',
    tech: ['EJS', 'Node.js', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200',
    demo: 'https://dev.hackaday.io/',
    priority: true,
  },
  {
    title: 'Hackaday',
    desc: 'The Hackaday.io community site featuring projects, logs, and collaboration tools.',
    tech: ['Design System', 'Web Platform'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200',
    demo: 'https://hackaday.io/',
    priority: true,
  },
  {
    title: 'Hackaday Blog',
    desc: 'Editorial content and news for makers and engineers with performance improvements.',
    tech: ['Web Platform', 'Performance'],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200',
    demo: 'https://hackaday.com/',
    priority: true,
  },
  {
    title: 'Supplyframe',
    desc: 'Supplyframe marketing site and experiences with modern animations and UX.',
    tech: ['Next.js', 'Animations'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
    demo: 'https://supplyframe.com/',
    priority: true,
  },
  {
    title: 'Artsy Search',
    desc: 'Artsy API search application deployed on Google Cloud (assignment project).',
    tech: ['Node.js', 'Express', 'GCP'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
    github: 'https://github.com/lakshjet',
    demo: 'https://artsy-assignment3.wl.r.appspot.com/search',
  },
  {
    title: 'Movie Mafia',
    desc: 'Movie discovery app deployed on Google Cloud with a RESTful backend.',
    tech: ['React', 'Node.js', 'GCP'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200',
    github: 'https://github.com/lakshjet',
    demo: 'https://moviemafia-449720.wl.r.appspot.com/',
  }
]
