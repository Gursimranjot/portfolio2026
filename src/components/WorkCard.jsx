import { Link } from 'react-router-dom'

const sizeClass = { large:'work-card--large', small:'work-card--small', half:'work-card--half', full:'work-card--full' }

export default function WorkCard({ project, index }) {
  return (
    <Link to={`/work/${project.id}`}
      className={`work-card ${sizeClass[project.size]||'work-card--half'} animate-fade-up delay-${Math.min(index+1,5)}`}>
      <div className="work-card__image">
        {project.coverImage
          ? <img src={project.coverImage} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
          : <div className="work-card__image-placeholder" style={{background:project.color||'var(--surface)'}}>
              <span style={{opacity:0.3,fontFamily:'var(--font-mono)',fontSize:11}}>{project.year}</span>
            </div>
        }
      </div>
      <div className="work-card__body">
        <div className="work-card__tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <h3 className="work-card__title">{project.title}</h3>
        <p className="work-card__desc">{project.description}</p>
      </div>
      <div className="work-card__arrow">↗</div>
    </Link>
  )
}
