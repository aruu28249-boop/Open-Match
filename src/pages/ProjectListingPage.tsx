// The browse projects page — filter sidebar on left, project cards on right

import { useState } from 'react'
import ProjectCard from '../components/projects/ProjectCard'

// Sample project data — we'll replace this with real API data later
const sampleProjects = [
  {
    id: '1',
    name: 'TypeScript Utility Library',
    description: 'A popular utility library for TypeScript developers. We need help with new features and documentation.',
    skills: ['TypeScript', 'Node.js', 'Jest', 'Rollup', 'GitHub Actions'],
    matchScore: 85,
    minTrustLevel: 1,
    openIssues: 12
  },
  {
    id: '2',
    name: 'Go gRPC Framework',
    description: 'High performance gRPC framework for Go. Looking for contributors with distributed systems experience.',
    skills: ['Go', 'gRPC', 'Protobuf'],
    matchScore: 62,
    minTrustLevel: 2,
    openIssues: 7
  },
  {
    id: '3',
    name: 'Python Data Pipeline',
    description: 'Open source ETL pipeline for data engineers. Great for beginners looking to contribute to data tooling.',
    skills: ['Python', 'PostgreSQL', 'Docker'],
    matchScore: 40,
    minTrustLevel: 0,
    openIssues: 23
  },
  {
    id: '4',
    name: 'Rust WebAssembly Runtime',
    description: 'A fast WebAssembly runtime written in Rust. Looking for systems programmers.',
    skills: ['Rust', 'WebAssembly', 'C++'],
    matchScore: 78,
    minTrustLevel: 2,
    openIssues: 5
  },
  {
    id: '5',
    name: 'React Component Library',
    description: 'Accessible, themeable React components for modern web apps. Contributions welcome from all skill levels.',
    skills: ['React', 'TypeScript', 'CSS', 'Storybook'],
    matchScore: 91,
    minTrustLevel: 1,
    openIssues: 18
  },
  {
    id: '6',
    name: 'GraphQL API Gateway',
    description: 'A lightweight GraphQL gateway for microservices. Looking for backend contributors.',
    skills: ['GraphQL', 'Node.js', 'Docker', 'Redis'],
    matchScore: 55,
    minTrustLevel: 1,
    openIssues: 9
  },
]

export default function ProjectListingPage() {
  // Search text state
  const [search, setSearch] = useState('')

  // Filter projects based on search
  const filtered = sampleProjects.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  )

  const hasFilters = search.length > 0

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Page heading */}
      <h1 style={{
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '24px'
      }}>
        Find Projects
      </h1>

      {/* TWO COLUMN LAYOUT — filter sidebar + cards */}
      <div style={{ display: 'flex', gap: '24px' }}>

        {/* FILTER SIDEBAR */}
        <div style={{
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>

          {/* Search input */}
          <div>
            <label style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 500,
              display: 'block',
              marginBottom: '8px'
            }}>
              SEARCH
            </label>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-base)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 12px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Difficulty filter */}
          <div>
            <label style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 500,
              display: 'block',
              marginBottom: '8px'
            }}>
              DIFFICULTY
            </label>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <label key={level} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                marginBottom: '8px',
                cursor: 'pointer'
              }}>
                <input type="checkbox" />
                {level}
              </label>
            ))}
          </div>

          {/* Clear filters */}
          {hasFilters && (
            <button
              onClick={() => setSearch('')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
            >
              Clear filters
            </button>
          )}

        </div>

        {/* PROJECT CARDS GRID */}
        <div style={{ flex: 1 }}>

          {/* Results count */}
          <p style={{
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            marginBottom: '16px'
          }}>
            {filtered.length} projects found
          </p>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '16px'
            }}>
              {filtered.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 24px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-display)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>No projects match your filters</h3>
              <p style={{ fontSize: '14px', marginBottom: '16px' }}>Try adjusting your search terms</p>
              <button
                onClick={() => setSearch('')}
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-inverse)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '8px 16px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Clear filters
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}