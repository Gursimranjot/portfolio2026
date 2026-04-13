import { useState } from 'react'
import { siteConfig } from '../data/config'

const IDLE       = 'idle'
const SUBMITTING = 'submitting'
const SUCCESS    = 'success'
const ERROR      = 'error'

export default function Contact() {
  const [status, setStatus] = useState(IDLE)
  const [fields, setFields] = useState({ name: '', email: '', budget: '', message: '' })

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(SUBMITTING)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...fields }).toString(),
      })
      if (res.ok) { setStatus(SUCCESS); setFields({ name: '', email: '', budget: '', message: '' }) }
      else setStatus(ERROR)
    } catch { setStatus(ERROR) }
  }

  return (
    <div className="page-enter">
      <div className="contact-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
        <h1 className="contact-heading animate-fade-up">
          Let's build<br /><em>something great.</em>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 440, margin: '0 auto 48px', lineHeight: 1.7 }}>
          I'm available for freelance projects, full-time roles, and collaborations.
          Drop me a message and I'll get back to you within 24 hours.
        </p>

        <a href={`mailto:${siteConfig.email}`}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,4vw,3rem)', color: 'var(--accent)', borderBottom: '2px solid var(--accent-dim)', paddingBottom: 4, display: 'inline-block', marginBottom: 64, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >{siteConfig.email}</a>

        {/* ── Contact Form ── */}
        <form
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          style={{ width: '100%', maxWidth: 560, margin: '0 auto 64px' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}><input name="bot-field" /></p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <Field label="Name *">
              <input name="name" type="text" placeholder="Your name" value={fields.name} onChange={set('name')} required />
            </Field>
            <Field label="Email *">
              <input name="email" type="email" placeholder="you@example.com" value={fields.email} onChange={set('email')} required />
            </Field>
          </div>

          <div style={{ marginBottom: 12 }}>
            <Field label="Budget range">
              <select name="budget" value={fields.budget} onChange={set('budget')}>
                <option value="">Select a range…</option>
                <option value="Under $1k">Under $1,000</option>
                <option value="$1k–$5k">$1,000 – $5,000</option>
                <option value="$5k–$15k">$5,000 – $15,000</option>
                <option value="$15k+">$15,000+</option>
                <option value="Let's talk">Let's talk</option>
              </select>
            </Field>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Field label="Message *">
              <textarea name="message" rows={5} placeholder="Tell me about your project…" value={fields.message} onChange={set('message')} required />
            </Field>
          </div>

          <button type="submit" disabled={status === SUBMITTING} className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '16px 28px', opacity: status === SUBMITTING ? 0.6 : 1 }}>
            {status === SUBMITTING ? 'Sending…' : 'Send message ↗'}
          </button>

          {status === SUCCESS && (
            <div style={{ marginTop: 16, padding: '14px 18px', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 2, background: 'rgba(74,222,128,0.06)', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4ade80', letterSpacing: '0.04em' }}>
              ✓ Message sent! I'll get back to you within 24 hours.
            </div>
          )}
          {status === ERROR && (
            <div style={{ marginTop: 16, padding: '14px 18px', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 2, background: 'rgba(248,113,113,0.06)', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#f87171', letterSpacing: '0.04em' }}>
              ✗ Something went wrong. Email me at <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--accent)' }}>{siteConfig.email}</a>
            </div>
          )}
        </form>

        <div className="contact-links">
          {Object.entries(siteConfig.links).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="btn">
              {key.charAt(0).toUpperCase() + key.slice(1)} ↗
            </a>
          ))}
        </div>

        <div style={{ marginTop: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 0 2px rgba(74,222,128,0.3)', animation: 'ping 2s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>
            Currently available for new projects
          </span>
        </div>
      </div>

      <style>{`
        .cf-field { display: flex; flex-direction: column; gap: 6px; }
        .cf-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-secondary); }
        .cf-field input, .cf-field textarea, .cf-field select {
          width: 100%; background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); color: var(--text-primary);
          font-family: var(--font-sans); font-size: 14px; padding: 12px 16px;
          outline: none; transition: border-color 0.2s, background 0.2s;
          -webkit-appearance: none; appearance: none;
        }
        .cf-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23888880' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 36px; cursor: pointer;
        }
        .cf-field textarea { resize: vertical; min-height: 120px; }
        .cf-field input::placeholder, .cf-field textarea::placeholder { color: var(--text-secondary); opacity: 0.5; }
        .cf-field input:focus, .cf-field textarea:focus, .cf-field select:focus { border-color: var(--accent); background: var(--bg); }
        @media (max-width: 560px) {
          .cf-field input, .cf-field textarea, .cf-field select { font-size: 16px; }
          form > div:first-of-type { grid-template-columns: 1fr !important; }
        }
        @keyframes ping { 0%,100%{box-shadow:0 0 0 2px rgba(74,222,128,0.3)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,0.1)} }
      `}</style>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div className="cf-field">
      <span className="cf-label">{label}</span>
      {children}
    </div>
  )
}
