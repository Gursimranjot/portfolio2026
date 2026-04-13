import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-enter" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 32px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem,20vw,16rem)', lineHeight: 1, color: 'var(--text-primary)', opacity: 0.05, userSelect: 'none', marginBottom: -40 }}>404</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)', marginBottom: 16 }}>Page not found</h1>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 40, letterSpacing: '0.06em' }}>
        This page doesn't exist or was moved.
      </p>
      <Link to="/" className="btn btn-primary">← Back home</Link>
    </div>
  )
}
