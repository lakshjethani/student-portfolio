export type Education = {
  logo: string
  school: string
  degree: string
  year: string
  courses?: string
  url?: string
}

export const education: Education[] = [
  {
    school: 'University of Southern California',
    degree: 'Master of Science (M.S.), Computer Science',
    year: '2024 – 2026',
    courses: 'Analysis of Algorithms, Geospatial Information Management, Web Technologies',
    logo: '/img/usca.png',
    url: 'https://www.usc.edu',
  },
  {
    school: 'University of Mumbai',
    degree: 'Bachelor of Engineering, Computer Science',
    year: '2018 – 2022',
    courses: 'Distributed Computing, Object-Oriented Programming, Operating Systems',
    logo: '/img/mu.png',
    url: 'https://mu.ac.in',

  }
]
