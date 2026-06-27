// This widget shows the user's current trust level
// It has a circular badge, score, and progress bar to next level

interface Props {
  level: number        // 0, 1, 2, 3, or 4
  score: number        // current points e.g. 45
  maxScore: number     // points needed for next level e.g. 100
  levelName: string    // e.g. "Emerging"
}

// Each trust level has its own color
const trustColors: Record<number, string> = {
  0: 'var(--trust-0)',
  1: 'var(--trust-1)',
  2: 'var(--trust-2)',
  3: 'var(--trust-3)',
  4: 'var(--trust-4)',
}

export default function TrustLevelWidget({ level, score, maxScore, levelName }: Props) {
  const color = trustColors[level]
  const progressPercent = (score / maxScore) * 100
  const pointsLeft = maxScore - score

  return (
    <div
      onClick={() => window.location.href = '/trust'}
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {/* Title */}
      <p style={{
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-display)',
        fontSize: '13px',
        fontWeight: 500,
        margin: 0
      }}>
        Trust Level
      </p>

      {/* Circle badge + level name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

        {/* Circle */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-full)',
          border: `3px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          backgroundColor: `rgba(0,0,0,0.2)`
        }}>
          <span style={{
            color: color,
            fontFamily: 'var(--font-mono)',
            fontSize: '28px',
            fontWeight: 700
          }}>
            {level}
          </span>
        </div>

        {/* Level name + score */}
        <div>
          <p style={{
            color: color,
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: 600,
            margin: '0 0 4px 0'
          }}>
            Level {level} — {levelName}
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            margin: 0
          }}>
            {score} / {maxScore} pts
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        {/* Bar track */}
        <div style={{
          height: '8px',
          backgroundColor: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }}>
          {/* Bar fill */}
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: color,
            borderRadius: 'var(--radius-full)',
            transition: 'width 600ms ease'
          }} />
        </div>

        {/* Points left label */}
        <p style={{
          color: 'var(--text-tertiary)',
          fontFamily: 'var(--font-display)',
          fontSize: '12px',
          margin: '6px 0 0 0'
        }}>
          {pointsLeft} pts to Level {level + 1}
        </p>
      </div>

    </div>
  )
}