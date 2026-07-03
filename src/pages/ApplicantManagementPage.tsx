import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MatchScoreRing from '../components/projects/MatchScoreRing'

const sampleApplicants = [
  {
    id: 'a1',
    name: 'Marcus T.',
    email: 'marcus@example.com',
    trustLevel: 2,
    matchScore: 85,
    coverNote: 'I have 4 years of TypeScript experience and would love to contribute to this project.',
    status: 'pending',
    skills: ['TypeScript', 'Node.js', 'Jest'],
  },
  {
    id: 'a2',
    name: 'Aisha K.',
    email: 'aisha@example.com',
    trustLevel: 1,
    matchScore: 62,
    coverNote: 'I am learning TypeScript and looking for my first open source contribution.',
    status: 'pending',
    skills: ['TypeScript', 'React'],
  },
  {
    id: 'a3',
    name: 'John D.',
    email: 'john@example.com',
    trustLevel: 3,
    matchScore: 91,
    coverNote: 'I have contributed to 10+ open source projects and specialize in utility libraries.',
    status: 'pending',
    skills: ['TypeScript', 'Node.js', 'Rollup', 'Jest'],
  },
]

const trustColors: Record<number, string> = {
  0: 'var(--trust-0)',
  1: 'var(--trust-1)',
  2: 'var(--trust-2)',
  3: 'var(--trust-3)',
  4: 'var(--trust-4)',
}

export default function ApplicantManagementPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [applicants, setApplicants] = useState(sampleApplicants)
  const [selectedId, setSelectedId] = useState('a1')
  const [activeTab, setActiveTab] = useState<'pending' | 'accepted' | 'declined'>('pending')

  const selected = applicants.find(a => a.id === selectedId)
  const filtered = applicants.filter(a => a.status === activeTab)

  function handleAccept(applicantId: string) {
    setApplicants(prev =>
      prev.map(a => a.id === applicantId ? { ...a, status: 'accepted' } : a)
    )
    setActiveTab('accepted')
  }

  function handleDecline(applicantId: string) {
    setApplicants(prev =>
      prev.map(a => a.id === applicantId ? { ...a, status: 'declined' } : a)
    )
    setActiveTab('declined')
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Back button */}
      <button
        onClick={() => navigate('/my-projects')}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          cursor: 'pointer',
          marginBottom: '24px',
          padding: 0
        }}
      >
        Back to My Projects
      </button>

      {/* Page heading */}
      <h1 style={{
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '24px'
      }}>
        Applicants
      </h1>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '4px',
        marginBottom: '24px',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        {(['pending', 'accepted', 'declined'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--accent-primary)' : '2px solid transparent',
              color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 16px',
              cursor: 'pointer',
              marginBottom: '-1px',
              textTransform: 'capitalize'
            }}
          >
            {tab} ({applicants.filter(a => a.status === tab).length})
          </button>
        ))}
      </div>

      {/* TWO PANE LAYOUT */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

        {/* LEFT — applicant list */}
        <div style={{
          width: '300px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {filtered.length === 0 ? (
            <div style={{
              padding: '32px',
              textAlign: 'center',
              color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              No {activeTab} applicants
            </div>
          ) : (
            filtered.map(applicant => (
              <div
                key={applicant.id}
                onClick={() => setSelectedId(applicant.id)}
                style={{
                  backgroundColor: selectedId === applicant.id ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                  border: selectedId === applicant.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-inverse)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
                  flexShrink: 0
                }}>
                  {applicant.name[0]}
                </div>

                {/* Name + trust */}
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 500, margin: '0 0 2px 0' }}>
                    {applicant.name}
                  </p>
                  <p style={{ color: trustColors[applicant.trustLevel], fontFamily: 'var(--font-display)', fontSize: '11px', margin: 0 }}>
                    Level {applicant.trustLevel}
                  </p>
                </div>

                {/* Match score */}
                <MatchScoreRing score={applicant.matchScore} size="sm" />
              </div>
            ))
          )}
        </div>

        {/* RIGHT — applicant detail */}
        {selected && (
          <div style={{
            flex: 1,
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '56px', height: '56px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-inverse)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600
              }}>
                {selected.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, margin: '0 0 4px 0' }}>
                  {selected.name}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '13px', margin: 0 }}>
                  {selected.email}
                </p>
              </div>
              <MatchScoreRing score={selected.matchScore} size="lg" />
            </div>

            {/* Trust level */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: '0 0 4px 0' }}>
                Trust Level
              </p>
              <p style={{ color: trustColors[selected.trustLevel], fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, margin: 0 }}>
                Level {selected.trustLevel}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: '0 0 8px 0' }}>
                Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selected.skills.map(skill => (
                  <span key={skill} style={{
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cover note */}
            <div>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: '0 0 8px 0' }}>
                Cover note
              </p>
              <p style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                lineHeight: '1.7',
                margin: 0,
                padding: '14px',
                backgroundColor: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                {selected.coverNote}
              </p>
            </div>

            {/* Action buttons */}
            {selected.status === 'pending' && (
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => handleAccept(selected.id)}
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--text-inverse)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 24px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Accept Application
                </button>
                <button
                  onClick={() => handleDecline(selected.id)}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--state-error)',
                    border: '1px solid var(--state-error)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 24px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Decline
                </button>
              </div>
            )}

            {/* Accepted/declined status */}
            {selected.status !== 'pending' && (
              <div style={{
                padding: '12px 16px',
                backgroundColor: selected.status === 'accepted' ? 'var(--state-success-bg)' : 'var(--state-error-bg)',
                border: `1px solid ${selected.status === 'accepted' ? 'var(--state-success)' : 'var(--state-error)'}`,
                borderRadius: 'var(--radius-md)',
                color: selected.status === 'accepted' ? 'var(--state-success)' : 'var(--state-error)',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 500
              }}>
                {selected.status === 'accepted' ? '✓ Application accepted' : '✗ Application declined'}
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  )
}