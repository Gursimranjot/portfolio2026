import { Link } from 'react-router-dom'
import { articles } from '../data/config'

export default function Articles() {
  return (
    <div className="page-enter">
      <section style={{ paddingTop: 140 }}>
        <div className="section-label">Writing</div>
        <h1 className="animate-fade-up" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          lineHeight: 0.95, marginBottom: 64,
        }}>
          Articles &<br />
          <em style={{ color: 'var(--text-secondary)' }}>Thoughts.</em>
        </h1>

        <div className="articles-list">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="article-row animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="article-date">
                {new Date(article.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
              <div>
                <div className="article-title">{article.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>
                  {article.description}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <div className="article-tags">
                  {article.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>
                  {article.readTime} read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
