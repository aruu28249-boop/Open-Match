import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-base)',
      fontFamily: 'var(--font-display)',
    }}>

      {/* HERO SECTION */}
      <div style={{
        position: 'relative',
        textAlign: 'center',
        padding: '120px 20px 80px',
        overflow: 'hidden',
      }}>
        {/* Teal glow behind headline */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,212,177,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: '700',
          color: 'var(--text-primary)',
          maxWidth: '800px',
          margin: '0 auto 20px',
          lineHeight: '1.2',
          position: 'relative',
        }}>
          Find the Right Contributors.<br />Join the Right Projects.
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6',
          position: 'relative',
        }}>
          Graph-powered matching that connects open source projects with the right contributors — based on real skills, not keywords.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
        }}>
          <Link to="/login" style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            padding: '12px 28px',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
          }}>
            Sign up with GitHub
          </Link>
          <Link to="/login" style={{
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            padding: '12px 28px',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            border: '1px solid var(--border-default)',
          }}>
            Sign in
          </Link>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-default)',
        borderBottom: '1px solid var(--border-default)',
        padding: '40px 20px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap',
        }}>
          {[
            { number: '500+', label: 'Projects Listed' },
            { number: '2,400+', label: 'Contributors Active' },
            { number: '1,200+', label: 'Matches Made' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '36px',
                fontWeight: '700',
                color: 'var(--accent-primary)',
              }}>
                {stat.number}
              </div>
              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                marginTop: '4px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '1100px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '48px',
        }}>
          How it works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            { icon: '📋', title: 'Post your needs', desc: 'Maintainers list their project with required skills, open issues, and contribution types.' },
            { icon: '🤝', title: 'Get matched', desc: 'Our graph engine finds contributors whose skills align with your project requirements.' },
            { icon: '🚀', title: 'Build your path', desc: 'Newcomers earn trust through learning paths and mentorship to unlock more opportunities.' },
          ].map((card) => (
            <div key={card.title} style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 24px',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{card.icon}</div>
              <h3 style={{
                color: 'var(--text-primary)',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '12px',
                marginTop: 0,
              }}>
                {card.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PERSONA SECTION */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-default)',
        padding: '80px 20px',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '48px',
          }}>
            Built for everyone in open source
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                color: 'var(--accent-secondary)',
                name: 'Priya',
                role: 'Project Maintainer',
                quote: '"I used to spend hours reviewing mismatched PRs. Now I get contributors who actually know my stack."',
              },
              {
                color: 'var(--accent-primary)',
                name: 'Marcus',
                role: 'Experienced Contributor',
                quote: '"Finally a platform that surfaces projects that match my Go and distributed systems experience."',
              },
              {
                color: 'var(--accent-gold)',
                name: 'Aisha',
                role: 'Newcomer',
                quote: '"I had zero merged PRs. OpenMatch gave me a learning path and a mentor. Now I have three."',
              },
            ].map((persona) => (
              <div key={persona.name} style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-default)',
                borderTop: `3px solid ${persona.color}`,
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                textAlign: 'left',
              }}>
                <div style={{
                  color: persona.color,
                  fontWeight: '700',
                  fontSize: '16px',
                  marginBottom: '4px',
                }}>
                  {persona.name}
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  marginBottom: '16px',
                }}>
                  {persona.role}
                </div>
                <p style={{
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: '0 0 20px',
                  fontStyle: 'italic',
                }}>
                  {persona.quote}
                </p>
                <Link to="/login" style={{
                  color: persona.color,
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}>
                  Get started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{
        backgroundColor: 'var(--bg-base)',
        borderTop: '1px solid var(--border-default)',
        padding: '80px 20px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '16px',
        }}>
          Ready to start?
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '16px',
          marginBottom: '32px',
        }}>
          Join thousands of contributors and maintainers already on OpenMatch.
        </p>
        <Link to="/login" style={{
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--text-inverse)',
          padding: '14px 36px',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
        }}>
          Get Started
        </Link>
      </div>

      {/* FOOTER */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-default)',
        padding: '24px 20px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          {['About', 'Privacy Policy', 'Terms of Service'].map((link) => (
            <a key={link} href="#" style={{
              color: 'var(--text-secondary)',
              fontSize: '13px',
              textDecoration: 'none',
            }}>
              {link}
            </a>
          ))}
        </div>
        <p style={{
          color: 'var(--text-tertiary)',
          fontSize: '12px',
          marginTop: '12px',
        }}>
          © 2025 OpenMatch. Open Source Contributor Matching Platform.
        </p>
      </div>

    </div>
  )
}