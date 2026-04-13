import { Link } from 'react-router-dom'
import WorkCard from '../components/WorkCard'
import { siteConfig, projects, articles } from '../data/config'

export default function Home() {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-number">01</div>
        <div className="hero-tag animate-fade-up"><span>{siteConfig.title}</span></div>
        <h1 className="animate-fade-up delay-1">
          {siteConfig.tagline.split('\n').map((line, i) => (
            <span key={i} style={{display:'block'}}>{i===1?<em>{line}</em>:line}</span>
          ))}
          <em>.</em>
        </h1>
        <div className="hero-footer">
          <p className="hero-desc animate-fade-up delay-2">{siteConfig.description}</p>
          <div className="hero-cta animate-fade-up delay-3">
            <Link to="/work" className="btn btn-primary">View Work ↗</Link>
            <a href={`mailto:${siteConfig.email}`} className="btn">Get in touch</a>
          </div>
        </div>
      </section>

      <section>
        <div className="section-label">Selected Work</div>
        <div className="work-grid">
          {projects.slice(0,4).map((p,i) => <WorkCard key={p.id} project={p} index={i} />)}
        </div>
        <div style={{marginTop:48,textAlign:'center'}}>
          <Link to="/work" className="btn">View all projects</Link>
        </div>
      </section>

      <section>
        <div className="section-label">Recent Writing</div>
        <div className="articles-list">
          {articles.slice(0,3).map(article => (
            <Link key={article.slug} to={`/articles/${article.slug}`} className="article-row">
              <span className="article-date">
                {new Date(article.date).toLocaleDateString('en-US',{month:'short',year:'numeric'})}
              </span>
              <div><div className="article-title">{article.title}</div></div>
              <div className="article-tags">
                {article.tags.map(t=><span key={t} className="tag">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
        <div style={{marginTop:32}}>
          <Link to="/articles" className="btn">All articles</Link>
        </div>
      </section>

      <div className="contact-section" style={{borderTop:'1px solid var(--border)'}}>
        <div className="section-label" style={{justifyContent:'center'}}>Let's work together</div>
        <h2 className="contact-heading">Got a project<br /><em>in mind?</em></h2>
        <p style={{color:'var(--text-secondary)',fontSize:15,maxWidth:400,margin:'0 auto'}}>
          I'm available for freelance projects. Let's build something great together.
        </p>
        <div className="contact-links">
          <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">Send an email ↗</a>
          {Object.entries(siteConfig.links).map(([key,url])=>(
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="btn">
              {key.charAt(0).toUpperCase()+key.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
