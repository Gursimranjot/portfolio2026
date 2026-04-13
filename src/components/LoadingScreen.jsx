import { useState, useEffect } from 'react'
import { siteConfig } from '../data/config'

const messages = ['Loading themes...','Optimising images...','Styling components...','Almost ready...']

export default function LoadingScreen({ onComplete }) {
  const [msgIndex, setMsgIndex] = useState(0)
  const [visible, setVisible]   = useState(true)

  useEffect(() => {
    const iv = setInterval(() => setMsgIndex(i => i >= messages.length-1 ? i : i+1), 300)
    const t  = setTimeout(() => { setVisible(false); setTimeout(onComplete, 400) }, 1400)
    return () => { clearInterval(iv); clearTimeout(t) }
  }, [onComplete])

  if (!visible) return null
  return (
    <div className="loading-screen" style={{ opacity: visible ? 1 : 0, transition:'opacity 0.4s ease' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', marginBottom:32, color:'var(--text-primary)' }}>
        {siteConfig.name.split(' ')[0]}.
      </div>
      <div className="loading-bar" />
      <div className="loading-text">{messages[msgIndex]}</div>
    </div>
  )
}
