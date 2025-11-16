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
    image: '/img/devHackaday.png',
    demo: 'https://dev.hackaday.io/',
    priority: true,
  },
  {
    title: 'Hackaday.io',
    desc: 'The Hackaday.io community site featuring projects, logs, and collaboration tools.',
    tech: ['Design System', 'Web Platform'],
    image: '/img/hackaday.png',
    demo: 'https://hackaday.io/',
    priority: true,
  },
  {
    title: 'Hackaday.com',
    desc: 'Editorial content and news for makers and engineers with performance improvements.',
    tech: ['Web Platform', 'Performance'],
    image: '/img/hackaday.com.png',
    demo: 'https://hackaday.com/',
    priority: true,
  },
  {
    title: 'Supplyframe.com',
    desc: 'Supplyframe marketing site and experiences with modern animations and UX.',
    tech: ['Next.js', 'Animations'],
    image: '/img/supplyframecom.png',
    demo: 'https://supplyframe.com/',
    priority: true,
  },
  {
    title: 'Artsy Search',
    desc: 'Artsy API search application deployed on Google Cloud (assignment project).',
    tech: ['Node.js', 'Express', 'GCP'],
    image: '/img/artsyapi.png',
    github: 'https://github.com/lakshjethani/Artsyapi',
    demo: 'https://artsy-assignment3.wl.r.appspot.com/search',
  },
  {
    title: 'Movie Mafia',
    desc: 'Movie discovery app deployed on Google Cloud with a RESTful backend.',
    tech: ['React', 'Node.js', 'GCP'],
    image: '/img/moviemafiaproject.png',
    github: 'https://github.com/lakshjethani/movie-mafia',
    demo: 'https://moviemafia-449720.wl.r.appspot.com/',
  }
]
