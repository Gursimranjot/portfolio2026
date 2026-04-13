import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from '../data/config'

// ─────────────────────────────────────────────────────────────
//  UPDATE THIS to point to your GitHub repo's articles folder
//  Format: https://raw.githubusercontent.com/USER/REPO/main/articles
// ─────────────────────────────────────────────────────────────
const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/articles'

export default function ArticleDetail() {
  const { slug } = useParams()
  const meta = articles.find(a => a.slug === slug)

  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(false)

  useEffect(() => {
    if (!meta) return
    setLoading(true)
    setError(false)

    // Try GitHub first, fall back to /public/articles/ for local dev
    const urls = [
      `${GITHUB_RAW_BASE}/${slug}.md`,
      `/articles/${slug}.md`,
    ]

    const tryFetch = (index) => {
      if (index >= urls.length) { setError(true); setLoading(false); return }
      fetch(urls[index])
        .then(res => { if (!res.ok) throw new Error(); return res.text() })
        .then(text => { setContent(text); setLoading(false) })
        .catch(() => tryFetch(index + 1))
    }

    tryFetch(0)
  }, [slug, meta])

  if (!meta) return <Navigate to="/articles" replace />

  const currentIndex = articles.indexOf(meta)
  const next = articles[currentIndex + 1]

  return (
    <div className="page-enter">
      <div className="article-detail">
        <Link to="/articles"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 48, transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >← All articles</Link>

        <div className="article-tags" style={{ marginBottom: 20 }}>
          {meta.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <h1 className="animate-fade-up">{meta.title}</h1>

        <div className="article-meta">
          <span>{new Date(meta.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span>{meta.readTime} read</span>
        </div>

        {loading && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 12, padding: '40px 0' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 1s infinite' }} />
            Loading article...
          </div>
        )}

        {error && (
          <div style={{ border: '1px solid var(--border)', padding: 32, background: 'var(--surface)', borderRadius: 2 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>Article not yet published.</p>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Create <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--border)', padding: '2px 6px', borderRadius: 2 }}>articles/{slug}.md</code> in your GitHub repo and update <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--border)', padding: '2px 6px', borderRadius: 2 }}>GITHUB_RAW_BASE</code> in ArticleDetail.jsx.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}

        {next && (
          <div style={{ borderTop: '1px solid var(--border)', marginTop: 80, paddingTop: 40 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Next Article
            </div>
            <Link to={`/articles/${next.slug}`}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', transition: 'color 0.2s', lineHeight: 1.2 }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >{next.title} →</Link>
          </div>
        )}
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  )
}
