// Circular SVG progress ring showing a match score 0-100%
// Color changes based on score: red < 50, amber 50-70, green > 70

interface Props {
  score: number           // 0 to 100
  size?: 'sm' | 'md' | 'lg'  // small, medium, large
}

// Size values in pixels
const sizes = {
  sm: 36,
  md: 48,
  lg: 80,
}

// Font sizes for the number inside the ring
const fontSizes = {
  sm: '10px',
  md: '13px',
  lg: '20px',
}

export default function MatchScoreRing({ score, size = 'md' }: Props) {
  const diameter = sizes[size]
  const radius = (diameter - 8) / 2   // 8 = stroke width on both sides
  const circumference = 2 * Math.PI * radius
  // How much of the circle to fill based on score
  const fillAmount = circumference - (score / 100) * circumference

  // Pick color based on score
  let color = 'var(--match-high)'     // green > 70
  if (score < 50) color = 'var(--match-low)'      // red
  else if (score < 70) color = 'var(--match-medium)' // amber

  return (
    <div style={{ position: 'relative', width: diameter, height: diameter, flexShrink: 0 }}>

      {/* The SVG ring */}
      <svg width={diameter} height={diameter} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background track (gray circle) */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="var(--border-default)"
          strokeWidth={5}
        />
        {/* Colored progress arc */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={fillAmount}
          style={{ transition: 'stroke-dashoffset 800ms ease' }}
        />
      </svg>

      {/* Score number in center */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: fontSizes[size],
        fontWeight: 700,
        color: color
      }}>
        {score}%
      </div>

    </div>
  )
}