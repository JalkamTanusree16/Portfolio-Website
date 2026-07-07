import { MapPin, Mail, Phone, GraduationCap, Briefcase, Heart } from './Icons'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="tag">About Me</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          Passionate about turning data and code into real-world impact
        </p>

        <div className="about-grid">
          {/* Left: Text + Info */}
          <div>
            <div className="about-text">
              <h3>Computer Science Student & AI Enthusiast</h3>
              <p>
                I'm Jalkam Tanusree, a B.Tech Computer Science student at GITAM University, Hyderabad.
                My passion lies at the intersection of artificial intelligence, machine learning, and
                full-stack web development.
              </p>
              <p>
                I have hands-on experience building AI-powered applications — from intelligent ROS
                systems to career intelligence platforms. I thrive on solving complex problems
                through clean, efficient code and creative engineering.
              </p>
              <p>
                When I'm not coding, I'm solving problems on LeetCode, contributing to open-source
                projects, or exploring the latest research in computer vision and NLP.
              </p>
            </div>

            <ul className="info-list">
              <li>
                <MapPin className="info-icon" size={18} />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Hyderabad, Telangana, India</span>
                </div>
              </li>
              <li>
                <Mail className="info-icon" size={18} />
                <div>
                  <span className="info-label">Email</span>
                  <a className="info-value" href="mailto:jalkamtanusree@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    jalkamtanusree@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <Phone className="info-icon" size={18} />
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 6309028289</span>
                </div>
              </li>
              <li>
                <Heart className="info-icon" size={18} />
                <div>
                  <span className="info-label">Interests</span>
                  <span className="info-value">AI/ML, Computer Vision, Full Stack, Open Source</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Education */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <GraduationCap size={22} style={{ color: 'var(--accent-1)' }} />
              Education
            </h3>

            <div className="education-card">
              <div className="edu-degree">B.Tech — Computer Science & Engineering</div>
              <div className="edu-school">GITAM University, Hyderabad</div>
              <div className="edu-meta">2022 – 2026 · Hyderabad, India</div>
              <span className="edu-grade">CGPA: 9.2</span>
            </div>

            <div className="education-card">
              <div className="edu-degree">Intermediate — MPC</div>
              <div className="edu-school">Sri Chaitanya Junior College</div>
              <div className="edu-meta">2020 – 2022 · Hyderabad, India</div>
              <span className="edu-grade">Score: 98%</span>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Briefcase size={22} style={{ color: 'var(--accent-1)' }} />
                Experience
              </h3>
              <div className="education-card">
                <div className="edu-degree">AI/ML Research Project Lead</div>
                <div className="edu-school">GITAM University — Academic Project</div>
                <div className="edu-meta">2024 – Present</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '10px', lineHeight: '1.7' }}>
                  Leading development of an AI-ROS integrated multi-agent orchestration system for
                  intelligent robotic automation and document processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
