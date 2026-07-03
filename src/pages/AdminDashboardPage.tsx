import { useState } from 'react'

const sampleUsers = [
  { id: '1', name: 'Priya S.', email: 'priya@example.com', role: 'maintainer', trustLevel: 3, status: 'active' },
  { id: '2', name: 'Marcus T.', email: 'marcus@example.com', role: 'contributor', trustLevel: 2, status: 'active' },
  { id: '3', name: 'Aisha K.', email: 'aisha@example.com', role: 'contributor', trustLevel: 1, status: 'active' },
  { id: '4', name: 'John D.', email: 'john@example.com', role: 'contributor', trustLevel: 0, status: 'suspended' },
]

const sampleReports = [
  { id: 'r1', reporter: 'Marcus T.', reported: 'John D.', type: 'harassment', status: 'open', date: '2025-06-01' },
  { id: 'r2', reporter: 'Aisha K.', reported: 'John D.', type: 'spam', status: 'open', date: '2025-06-03' },
]

const sampleTrustEvents = [
  { id: 'e1', user: 'Marcus T.', type: 'learning_path_completion', delta: '+20', flagged: true, date: '2025-06-02' },
  { id: 'e2', user: 'Aisha K.', type: 'mentor_endorsement', delta: '+25', flagged: true, date: '2025-06-04' },
]

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'users' | 'reports' | 'trust'>('users')

  const tabs = [
    { id: 'users', label: 'User Management' },
    { id: 'reports', label: 'Abuse Reports' },
    { id: 'trust', label: 'Trust Review Queue' },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Page heading */}
      <h1 style={{
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
        Admin Dashboard
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        marginBottom: '24px'
      }}>
        Manage users, review reports, and monitor trust events.
      </p>

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {[
          { label: 'Total Users', value: '1,204' },
          { label: 'Active Projects', value: '87' },
          { label: 'Open Reports', value: '2' },
          { label: 'Flagged Events', value: '2' },
        ].map(stat => (
          <div key={stat.label} style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px'
          }}>
            <p style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              margin: '0 0 8px 0'
            }}>
              {stat.label}
            </p>
            <p style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '24px',
              fontWeight: 700,
              margin: 0
            }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '4px',
        marginBottom: '24px',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '0'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid var(--accent-primary)' : '2px solid transparent',
              color: activeTab === tab.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 16px',
              cursor: 'pointer',
              marginBottom: '-1px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* USER MANAGEMENT TAB */}
      {activeTab === 'users' && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          {sampleUsers.map((user, index) => (
            <div key={user.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: index < sampleUsers.length - 1 ? '1px solid var(--border-subtle)' : 'none'
            }}>
              {/* User info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-inverse)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
                  flexShrink: 0
                }}>
                  {user.name[0]}
                </div>
                <div>
                  <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 500, margin: '0 0 2px 0' }}>
                    {user.name}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: 0 }}>
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Role + trust + status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-default)'
                }}>
                  {user.role}
                </span>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px'
                }}>
                  L{user.trustLevel}
                </span>
                <span style={{
                  color: user.status === 'active' ? 'var(--state-success)' : 'var(--state-error)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  {user.status}
                </span>
                <button style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--state-error)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--state-error)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}>
                  {user.status === 'active' ? 'Suspend' : 'Reactivate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ABUSE REPORTS TAB */}
      {activeTab === 'reports' && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          {sampleReports.map((report, index) => (
            <div key={report.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: index < sampleReports.length - 1 ? '1px solid var(--border-subtle)' : 'none'
            }}>
              <div>
                <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 500, margin: '0 0 4px 0' }}>
                  {report.reporter} reported {report.reported}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: 0 }}>
                  Type: {report.type} · {report.date}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{
                  backgroundColor: 'var(--state-success-bg)',
                  border: '1px solid var(--state-success)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--state-success)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}>
                  Resolve
                </button>
                <button style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}>
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TRUST REVIEW TAB */}
      {activeTab === 'trust' && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          {sampleTrustEvents.map((event, index) => (
            <div key={event.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: index < sampleTrustEvents.length - 1 ? '1px solid var(--border-subtle)' : 'none'
            }}>
              <div>
                <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 500, margin: '0 0 4px 0' }}>
                  {event.user}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontSize: '12px', margin: 0 }}>
                  {event.type} · {event.date}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  color: 'var(--state-success)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  fontWeight: 700
                }}>
                  {event.delta} pts
                </span>
                <button style={{
                  backgroundColor: 'var(--state-success-bg)',
                  border: '1px solid var(--state-success)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--state-success)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}>
                  Approve
                </button>
                <button style={{
                  backgroundColor: 'var(--state-error-bg)',
                  border: '1px solid var(--state-error)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--state-error)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  padding: '4px 10px',
                  cursor: 'pointer'
                }}>
                  Reverse
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}