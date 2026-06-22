import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AIRoadmap from './pages/AIRoadmap.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import ThankYou from './pages/ThankYou.jsx'
import DemoRequestModal from './components/DemoRequestModal.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const target = document.getElementById(hash.slice(1))
    if (!target) return

    const scrollToTarget = () => {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      const previousBehavior = document.documentElement.style.scrollBehavior

      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
      document.documentElement.style.scrollBehavior = previousBehavior
    }

    const frame = window.requestAnimationFrame(scrollToTarget)
    const correction = window.setTimeout(scrollToTarget, 500)

    if (document.readyState !== 'complete') {
      window.addEventListener('load', scrollToTarget, { once: true })
    }

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(correction)
      window.removeEventListener('load', scrollToTarget)
    }
  }, [pathname, hash])
  return null
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-navy text-white shadow-card transition-all duration-300 hover:bg-navy-600 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  )
}

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onRequestDemo={() => setDemoModalOpen(true)} />} />
          <Route path="/ai-roadmap" element={<AIRoadmap />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      {demoModalOpen && <DemoRequestModal onClose={() => setDemoModalOpen(false)} />}
    </div>
  )
}
