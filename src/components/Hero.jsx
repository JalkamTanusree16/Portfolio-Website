import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText, Download } from './Icons'
import profileImg from '../assets/profile.png'

const areas = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Web Developer',
  'AI / ML Enthusiast',
  'Researcher',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const full = areas[titleIdx]
    let i = displayed.length

    if (typing) {
      if (i < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, i + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(full.slice(0, i - 1)), 35)
        return () => clearTimeout(t)
      } else {
        setTitleIdx(v => (v + 1) % areas.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIdx])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Content */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Open to Opportunities</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm{' '}
              <span className="hero-name-gradient">Jalkam Tanusree</span>
            </h1>

            <p className="hero-title">
              <span className="hero-typing">{displayed}</span>
              <span className="typing-cursor">|</span>
            </p>

            <p className="hero-desc">
              Computer Science student at Stanley College of Engineering and Technology for Women, Hyderabad — passionate about web development (full stack, frontend, backend), AI/ML, and research.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                <Mail size={17} />
                Get In Touch
              </a>
              <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={17} />
                View Resume
              </a>
              <a className="btn btn-secondary" href="/resume.pdf" download="Jalkam_Tanusree_Resume.pdf">
                <Download size={17} />
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="social-link"
                href="https://github.com/JalkamTanusree16"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                className="social-link"
                href="https://linkedin.com/in/tanusreejalkam16072005"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="social-link"
                href="mailto:jalkamtanusree@gmail.com"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                className="social-link"
                href="https://leetcode.com/u/tanusree16/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                style={{ fontSize: '0.85rem', fontWeight: 700 }}
              >
                LC
              </a>
              <a
                className="social-link"
                href="https://www.hackerrank.com/profile/h160623740016"
                target="_blank"
                rel="noopener noreferrer"
                title="HackerRank"
                style={{ fontSize: '0.85rem', fontWeight: 700 }}
              >
                HR
              </a>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hero-avatar-wrap">
            <div className="avatar-ring">
              <div className="avatar-inner-bg" />
              <img
                src={profileImg}
                alt="Jalkam Tanusree"
                className="avatar-inner"
                style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', border: '4px solid var(--bg-1)', zIndex: 1 }}
              />
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2027</div>
                <div className="stat-label">Graduating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
