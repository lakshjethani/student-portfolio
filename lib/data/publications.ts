export type Publication = {
  url: string
  title?: string
  venue?: string
  year?: string | number
  bibtex?: string
  bibtexUrl?: string
  pdfUrl?: string
}

export const publications: Publication[] = [
  {
    url: 'https://www.ijcaonline.org/proceedings/llmuc2023/number2/speakql-sql-generation-from-natural-language/',
    title: 'SpeakQL: SQL Generation from Natural Language',
    venue: 'IJCA LLMUC 2023',
    year: 2025,
  },
  {
    url: 'https://ieeexplore.ieee.org/document/10421609',
    title: 'Data-Driven Approaches to Machine Learning – IEEE',
    venue: 'IEEE Xplore',
    year: 2023,
  },
  {
    url: 'https://ieeexplore.ieee.org/document/10431025',
    title: 'A Study of Reinforcement Learning in Real-Time Systems – IEEE',
    venue: 'IEEE Xplore',
    year: 2023,
  },
  {
    url: 'https://link.springer.com/chapter/10.1007/978-981-97-1961-7_32',
    title: 'Advances in Natural Language Processing – Springer',
    venue: 'Springer',
    year: 2023,
  },
]
