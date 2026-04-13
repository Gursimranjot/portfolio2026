import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Cursor        from './components/Cursor'
import Nav           from './components/Nav'
import Footer        from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Home          from './pages/Home'
import Work          from './pages/Work'
import WorkDetail    from './pages/WorkDetail'
import About         from './pages/About'
import Articles      from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact       from './pages/Contact'
import NotFound      from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/work"            element={<Work />} />
          <Route path="/work/:id"        element={<WorkDetail />} />
          <Route path="/about"           element={<About />} />
          <Route path="/articles"        element={<Articles />} />
          <Route path="/articles/:slug"  element={<ArticleDetail />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="*"                element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Cursor />
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        {loaded  && <AppRoutes />}
      </BrowserRouter>
    </ThemeProvider>
  )
}
