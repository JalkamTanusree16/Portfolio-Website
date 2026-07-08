import { Github, Linkedin, Mail, Heart } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
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
            href="https://www.hackerrank.com/profile/h160623740016"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
            style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            HR
          </a>
          <a
            className="social-link"
            href="mailto:jalkamtanusree@gmail.com"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-text">
          Built with <Heart size={13} className="footer-heart" style={{ display: 'inline', color: '#ef4444', verticalAlign: 'middle' }} /> by{' '}
          <strong style={{ color: 'var(--text-secondary)' }}>Jalkam Tanusree</strong>{' '}
          · {year} · Hyderabad, India
        </p>
      </div>
    </footer>
  )
}
