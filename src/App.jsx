import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [accentHue, setAccentHue] = useState(262) // Default Purple
  const [isChecked, setIsChecked] = useState({
    init: true,
    install: true,
    style: true,
    git: false,
  })

  // Dynamically update the root CSS variable for theme accent color
  useEffect(() => {
    document.documentElement.style.setProperty('--hue', accentHue)
  }, [accentHue])

  const toggleCheck = (key) => {
    setIsChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const colors = [
    { name: 'Purple', hue: 262, hex: '#7c3aed' },
    { name: 'Indigo', hue: 239, hex: '#4f46e5' },
    { name: 'Blue', hue: 217, hex: '#2563eb' },
    { name: 'Teal', hue: 175, hex: '#0d9488' },
    { name: 'Rose', hue: 350, hex: '#e11d48' },
    { name: 'Amber', hue: 38, hex: '#d97706' },
  ]

  return (
    <>
      {/* Header Section */}
      <header className="dashboard-header fade-in">
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>Workspace Initialized</span>
        </div>
        <h1>
          Freelance React <span className="gradient-text">Core Portal</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Your development workspace is successfully configured with React, Vite, and linked to your remote repository. Use this dashboard to control your styles and inspect setup configurations.
        </p>

        <div className="meta-info">
          <div className="meta-item">
            <span className="meta-label">Repository:</span>
            <code>freelance_project-1</code>
          </div>
          <div className="meta-item">
            <span className="meta-label">Branch:</span>
            <code>main</code>
          </div>
          <div className="meta-item">
            <span className="meta-label">Host:</span>
            <code>GitHub</code>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="grid grid-2 fade-in" style={{ animationDelay: '0.1s' }}>
        
        {/* Card 1: Interactive Styling Playground */}
        <section className="card interactive-sandbox">
          <div>
            <h2>Interactive Accent Engine</h2>
            <p>Modify the primary CSS accent hue of the entire workspace dynamically using the palette selector below.</p>
          </div>

          <div className="interactive-controls">
            {colors.map((color) => (
              <button
                key={color.hue}
                className={`color-option ${accentHue === color.hue ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setAccentHue(color.hue)}
                title={color.name}
                aria-label={`Select ${color.name} theme`}
              ></button>
            ))}
          </div>

          <div style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '0.5rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Micro-Animation Engine</h3>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Increment Pulse Count: {count}
            </button>
          </div>
        </section>

        {/* Card 2: Git Repository Sync Status */}
        <section className="card">
          <h2>Git Integration Stream</h2>
          <p style={{ marginBottom: '1.5rem' }}>Below is the command sequence mapping local changes to your remote origin repository.</p>
          
          <div className="console-panel">
            <div className="console-header">
              <span className="console-dot console-red"></span>
              <span className="console-dot console-yellow"></span>
              <span className="console-dot console-green"></span>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>bash - git console</span>
            </div>
            <div>
              <span style={{ color: '#6b7280' }}># Clone remote empty repo</span><br />
              <span style={{ color: '#38bdf8' }}>$</span> git clone https://github.com/SandhiyaB2205/freelance_project-1.git .<br />
              <span style={{ color: '#10b981' }}>warning: You appear to have cloned an empty repository.</span><br /><br />

              <span style={{ color: '#6b7280' }}># Initialize Vite & Install packages</span><br />
              <span style={{ color: '#38bdf8' }}>$</span> npx create-vite@latest ./ --template react<br />
              <span style={{ color: '#38bdf8' }}>$</span> npm install<br />
              <span style={{ color: '#10b981' }}>added 135 packages, audited 136 packages in 19s</span><br /><br />
              
              <span style={{ color: '#6b7280' }}># Ready to commit & push</span><br />
              <span style={{ color: '#38bdf8' }}>$</span> git add .<br />
              <span style={{ color: '#38bdf8' }}>$</span> git commit -m "Initial commit: Set up Vite-React workspace"<br />
              <span style={{ color: '#38bdf8' }}>$</span> git push -u origin main
            </div>
          </div>
        </section>

        {/* Card 3: Project Configuration Specs */}
        <section className="card grid-3" style={{ gridColumn: '1 / -1' }}>
          <div>
            <h3>Vite Bundler</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Utilizing Vite 6 for blazing-fast Hot Module Replacement (HMR) and optimized build times.
            </p>
          </div>
          <div>
            <h3>React 19 Core</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Rendered with React StrictMode enabled for identifying potential problems in application components.
            </p>
          </div>
          <div>
            <h3>Vanilla CSS Variables</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Custom CSS tokens leveraging HSL systems allow native runtime customization without complex loaders.
            </p>
          </div>
        </section>

        {/* Card 4: Post-Initialization Checklist */}
        <section className="card" style={{ gridColumn: '1 / -1' }}>
          <h2>Workspace Synchronization Checklist</h2>
          <p style={{ marginBottom: '1.5rem' }}>Ensure all initialization stages are verified. Tick items once complete.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontSize: '1.05rem' }}>
              <input 
                type="checkbox" 
                checked={isChecked.init} 
                onChange={() => toggleCheck('init')} 
                style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
              />
              <span style={{ textDecoration: isChecked.init ? 'line-through' : 'none', color: isChecked.init ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>
                Initialize Vite project with React template
              </span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontSize: '1.05rem' }}>
              <input 
                type="checkbox" 
                checked={isChecked.install} 
                onChange={() => toggleCheck('install')}
                style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
              />
              <span style={{ textDecoration: isChecked.install ? 'line-through' : 'none', color: isChecked.install ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>
                Download & Install essential Node modules
              </span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontSize: '1.05rem' }}>
              <input 
                type="checkbox" 
                checked={isChecked.style} 
                onChange={() => toggleCheck('style')}
                style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
              />
              <span style={{ textDecoration: isChecked.style ? 'line-through' : 'none', color: isChecked.style ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>
                Implement premium custom UI styling sheet
              </span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontSize: '1.05rem' }}>
              <input 
                type="checkbox" 
                checked={isChecked.git} 
                onChange={() => toggleCheck('git')}
                style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
              />
              <span style={{ textDecoration: isChecked.git ? 'line-through' : 'none', color: isChecked.git ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>
                Commit modifications and push to remote origin repository
              </span>
            </label>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Freelance Portal &copy; {new Date().getFullYear()}. Connected to{' '}
          <a href="https://github.com/SandhiyaB2205/freelance_project-1" target="_blank" rel="noopener noreferrer">
            SandhiyaB2205/freelance_project-1
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
