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
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Construct a mailto link with the form content
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:jalkamtanusree@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
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
            {sent && (
              <div className="form-success">
                ✅ Your message has been drafted! Check your email client to send it.
              </div>
            )}
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
            <button type="submit" className="form-submit">
              <Send size={17} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
