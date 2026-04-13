import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/config'

export default function WorkDetail() {
  const { id } = useParams()
  const project = projects.find(p=>p.id===id)
  if (!project) return <Navigate to="/work" replace />
  const next = projects[projects.indexOf(project)+1] || projects[0]

  return (
    <div className="page-enter">
      <div className="work-detail-hero">
        <Link to="/work" style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-secondary)',letterSpacing:'0.06em',display:'inline-flex',alignItems:'center',gap:8,marginBottom:40,transition:'color 0.2s'}}
          onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
          onMouseLeave={e=>e.currentTarget.style.color='var(--text-secondary)'}>← All work</Link>
        <div className="work-card__tags" style={{marginBottom:20}}>
          {project.tags.map(tag=><span key={tag} className="tag">{tag}</span>)}
        </div>
        <h1 className="animate-fade-up" style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,6vw,5.5rem)',lineHeight:1.05,maxWidth:800}}>{project.title}</h1>
        <div className="work-detail-meta">
          {project.client && <div className="meta-item"><span className="meta-label">Client</span><span className="meta-value">{project.client}</span></div>}
          {project.role   && <div className="meta-item"><span className="meta-label">Role</span><span className="meta-value">{project.role}</span></div>}
          {project.year   && <div className="meta-item"><span className="meta-label">Year</span><span className="meta-value">{project.year}</span></div>}
        </div>
      </div>

      <div className="work-detail-image" style={{background:project.color||'var(--surface)',maxWidth:1200,margin:'0 auto 40px'}}>
        {project.coverImage
          ? <img src={project.coverImage} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
          : <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'rgba(255,255,255,0.2)',marginBottom:8}}>PROJECT PREVIEW</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'4rem',color:'rgba(255,255,255,0.05)'}}>{project.title}</div>
            </div>
        }
      </div>

      <div className="work-detail-content">
        <p style={{fontSize:18,lineHeight:1.8,color:'var(--text-secondary)',marginBottom:32}}>{project.description}</p>
        <div style={{borderTop:'1px solid var(--border)',paddingTop:40,fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-secondary)',letterSpacing:'0.06em'}}>
          Case study coming soon. <a href="mailto:hello@yourname.com" style={{color:'var(--accent)'}}>Get in touch</a> to learn more.
        </div>
      </div>

      <div style={{borderTop:'1px solid var(--border)',padding:'60px 32px',maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-secondary)',marginBottom:8,letterSpacing:'0.1em',textTransform:'uppercase'}}>Next Project</div>
          <Link to={`/work/${next.id}`} style={{fontFamily:'var(--font-display)',fontSize:'2rem',color:'var(--text-primary)',transition:'color 0.2s'}}
            onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
            onMouseLeave={e=>e.currentTarget.style.color='var(--text-primary)'}>{next.title} →</Link>
        </div>
      </div>
    </div>
  )
}
