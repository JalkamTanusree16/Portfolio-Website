import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Send, ExternalLink } from './Icons'

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'jalkamtanusree@gmail.com',
    href: 'mailto:jalkamtanusree@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 6309028289',
    href: 'tel:+916309028289',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'JalkamTanusree16',
    href: 'https://github.com/JalkamTanusree16',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'tanusreejalkam16072005',
    href: 'https://linkedin.com/in/tanusreejalkam16072005',
  },
  {
    icon: <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>HR</span>,
    label: 'HackerRank',
    value: 'h160623740016',
    href: 'https://www.hackerrank.com/profile/h160623740016',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 4000)
      } else {
        alert('Failed to send message: ' + (data.error || 'Unknown error'))
      }
    } catch (err) {
      console.error(err)
      alert('Error connecting to backend server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      {sent && (
        <div className="toast-popup">
          <div className="toast-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="#22c55e" />
              <polyline points="8 12 11 15 16 9" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="toast-body">
            <div className="toast-title">Message Sent!</div>
            <div className="toast-sub">I'll get back to you soon 🙌</div>
          </div>
          <button className="toast-close" onClick={() => setSent(false)}>✕</button>
        </div>
      )}

      <section className="section contact" id="contact">
      <div className="container">
        <span className="tag">Contact</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Whether you have an opportunity, project, or just want to say hi — I'd love to hear from you!
        </p>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm currently open to internships, full-time roles, and freelance collaborations.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="contact-links">
              {contactItems.map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    className="contact-item"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-item" style={{ cursor: 'default' }}>
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                className="form-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                className="form-input"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship Opportunity / Collaboration"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Tanusree, I'd like to discuss..."
                required
              />
            </div>
            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="btn-spinner" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
