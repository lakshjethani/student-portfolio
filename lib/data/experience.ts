export type Experience = {
  role: string
  company: string
  logo: string
  period: string
  points: string[]
  url?: string
  tech?: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Supplyframe, a Siemens Company',
    logo: '/img/supplyFrame.png',
    period: 'May 2025 – Present',
    points: [
      'Shipped OAuth2 sign-in with CSRF protection and Redis scope caching.',
      'Cut p95 latency 20% (480→380ms) via retry backoff and slimmer Solr payloads.',
      'Rebuilt dev.hackaday.io as a modular EJS design system with Storybook.'
    ],
    tech: ['OAuth2', 'Redis', 'Solr', 'EJS', 'Storybook'],
    url: 'https://www.supplyframe.com'
  },
  {
    role: 'Senior Software Development Engineer',
    company: 'Deutsche Bank',
    logo: '/img/deutscheBank.png',
    period: 'Aug 2023 – Jul 2024',
    points: [
      'Raised payment success +21% via Kafka reprocessing (idempotency, outbox, DLQs, jittered retries).',
      'Migrated Fabric on‑prem→GCP with IaC and blue‑green deploys; cut cost 17% and improved resilience.',
      'Federated external users via custom OIDC + Azure MFA and Conditional Access.'
    ],
    tech: ['Kafka', 'GCP', 'Terraform', 'OIDC', 'Azure AD'],
    url: 'https://www.db.com'
  },
  {
    role: 'Software Development Engineer',
    company: 'Deutsche Bank',
    logo: '/img/deutscheBank.png',
    period: 'Aug 2022 – Jul 2023',
    points: [
      'Met SLAs with circuit breakers, idempotent retries, and full observability (metrics/logs/tracing).',
      'Decomposed monolith into Spring Boot microservices (JPA/Hibernate); added concurrency controls and standardized builds.',
      'Optimized React/Redux + GraphQL/REST (caching/pagination); −40% re-renders, +25% responsiveness.'
    ],
    tech: ['Spring Boot', 'JPA', 'Hibernate', 'Maven', 'React', 'Redux', 'GraphQL', 'REST'],
    url: 'https://www.db.com'
  },
  {
    role: 'Software Development Engineering Intern',
    company: 'Deutsche Bank',
    logo: '/img/deutscheBank.png',
    period: 'Jun 2021 – Aug 2021',
    points: [
      'Built sharded cache (Redis Cluster + Spring Boot) with consistent hashing, leader election, quorum reads/writes, and version vectors.',
      'Implemented Merkle tree + gossip sync; prevented stampedes/dupes via leases and Bloom filters.'
    ],
    tech: ['Redis Cluster', 'Spring Boot', 'Java', 'Merkle Trees', 'Gossip', 'Bloom Filters'],
    url: 'https://www.db.com'
  }
]
