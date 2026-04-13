import { siteConfig } from '../data/config'

export default function About() {
  return (
    <div className="page-enter">
      <section style={{ paddingTop: 140 }}>
        <div className="section-label">About</div>
        <div className="about-grid">
          <div className="about-body">
            <h1 className="about-heading animate-fade-up">
              Designer <em>&</em><br />Developer
            </h1>
            <p>{siteConfig.about.intro}</p>
            <p>{siteConfig.about.body}</p>
            <p>{siteConfig.about.footer}</p>
            <div className="skills-list">
              {siteConfig.skills.map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">Get in touch</a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn ↗</a>
            </div>
          </div>

          <div>
            <div style={{
              width: '100%', aspectRatio: '4/5',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)',
            }}>
              Your Photo
            </div>
            <div className="stats-grid">
              {siteConfig.stats.map(stat => (
                <div key={stat.label} className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-label">What I do</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
          {[
            { num: '01', title: 'UI/UX Design',    desc: 'From user research and wireframes to high-fidelity prototypes and design systems.' },
            { num: '02', title: 'Front-End Dev',    desc: 'React, Next.js, TypeScript — pixel-perfect implementations with smooth animations.' },
            { num: '03', title: 'CMS Solutions',    desc: 'Headless CMS setups, markdown-driven blogs, and content architectures you can sell to clients.' },
          ].map(s => (
            <div key={s.num} style={{ border: '1px solid var(--border)', padding: '40px 32px', background: 'var(--surface)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 24 }}>{s.num}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 12, color: 'var(--text-primary)' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
