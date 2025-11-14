type DividerStyle = 'wave' | 'angled'

type SectionDividerProps = {
  flip?: boolean
  style?: DividerStyle
}

export default function SectionDivider({ flip = false, style = 'wave' }: SectionDividerProps) {
  const fillColor = 'fill-surface'

  if (style === 'angled') {
    return (
      <div
        aria-hidden="true"
        className={`-mx-[1px] select-none transition-opacity duration-300 ${flip ? 'rotate-180' : ''}`}
      >
        <svg
          className={`h-16 w-full ${fillColor} md:h-20`}
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1440,80 1440,0" className={fillColor} />
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`-mx-[1px] select-none transition-opacity duration-300 ${flip ? 'rotate-180' : ''}`}
    >
      <svg
        className={`h-20 w-full ${fillColor} md:h-24`}
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={fillColor}
          d="M0,64L60,53.3C120,43,240,21,360,37.3C480,53,600,107,720,128C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>
  )
}
