import { siteConfig } from '../data/config'

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      <div style={{ display:'flex', gap:24 }}>
        {Object.entries(siteConfig.links).map(([key, url]) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.06em',
              textTransform:'uppercase', color:'var(--text-secondary)', transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='var(--accent)'}
            onMouseLeave={e => e.target.style.color='var(--text-secondary)'}
          >{key}</a>
        ))}
      </div>
    </footer>
  )
}
