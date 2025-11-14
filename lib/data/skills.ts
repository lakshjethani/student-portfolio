import { IconType } from 'react-icons'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGo,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiDjango,
  SiOpenapiinitiative,
  SiRedux,
  SiSass,
  SiStorybook,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiGooglecloud,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiOpentelemetry,
  SiJest,
  SiPlaywright,
  SiEslint,
  SiPrettier,
  SiNginx,
  SiMicrosoftazure,
  SiJunit5,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export type Skill = {
  name: string
  icon: IconType
}

export const skills: Skill[] = [
  // Languages & Web
  { name: 'Java', icon: FaJava },
  { name: 'Go', icon: SiGo },
  { name: 'Python', icon: SiPython },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },

  // Frontend
  { name: 'React', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Sass/SCSS', icon: SiSass },
  { name: 'Storybook', icon: SiStorybook },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Framer Motion', icon: SiFramer },

  // Backend
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Django', icon: SiDjango },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Apollo', icon: SiApollographql },
  { name: 'OpenAPI', icon: SiOpenapiinitiative },

  // Data & Messaging
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Apache Kafka', icon: SiApachekafka },

  // Cloud & DevOps
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'AWS', icon: SiAmazonaws },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Jenkins', icon: SiJenkins },

  // Observability & Quality
  { name: 'OpenTelemetry', icon: SiOpentelemetry },
  { name: 'JUnit', icon: SiJunit5 },
  { name: 'Jest', icon: SiJest },
  { name: 'Playwright', icon: SiPlaywright },
  { name: 'ESLint', icon: SiEslint },
  { name: 'Prettier', icon: SiPrettier },
  { name: 'Nginx', icon: SiNginx },

  // Auth & Security / Misc
  { name: 'Microsoft Azure', icon: SiMicrosoftazure },
  { name: 'Git', icon: SiGit },
]

// Highlighted stack for the “classy” About card
export const FEATURED_SKILL_NAMES = [
  'Java',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Spring Boot',
  'PostgreSQL',
  'Google Cloud',
  'AWS',
]
