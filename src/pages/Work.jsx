// Work.jsx
import WorkCard from '../components/WorkCard'
import { projects, siteConfig } from '../data/config'

export default function Work() {
  return (
    <div className="page-enter">
      <section style={{paddingTop:140}}>
        <div className="section-label">All Projects</div>
        <h1 className="animate-fade-up" style={{fontFamily:'var(--font-display)',fontSize:'clamp(3rem,7vw,6rem)',lineHeight:0.95,marginBottom:64}}>
          Selected<br /><em style={{color:'var(--text-secondary)'}}>work.</em>
        </h1>
        <div className="work-grid">
          {projects.map((p,i)=><WorkCard key={p.id} project={p} index={i} />)}
        </div>
      </section>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'40px 32px 100px',display:'flex',alignItems:'center',gap:16}}>
        <span style={{width:8,height:8,borderRadius:'50%',background:'#4ade80',display:'inline-block',boxShadow:'0 0 8px #4ade80'}} />
        <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-secondary)',letterSpacing:'0.06em'}}>
          Available for new projects — <a href={`mailto:${siteConfig.email}`} style={{color:'var(--accent)'}}>{siteConfig.email}</a>
        </span>
      </div>
    </div>
  )
}
