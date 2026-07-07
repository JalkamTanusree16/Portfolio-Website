import { MapPin, Mail, Phone, GraduationCap, Heart } from './Icons'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="tag">About Me</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about turning data and code into real-world impact
        </p>

        <div className="about-grid">
          {/* Left: Text + Info */}
          <div>
            <div className="about-text">
              <h3>Computer Science Student & Full Stack/AI Enthusiast</h3>
              <p>
                I'm Jalkam Tanusree, a B.Tech Computer Science student at Stanley College of Engineering and Technology for Women, Hyderabad.
                My interest lies in web development (full stack, frontend, backend), AI/ML, and research.
              </p>
              <p>
                I have hands-on experience building projects in web development and artificial intelligence — from
                responsive frontend interfaces and robust backend APIs to career intelligence platforms. I thrive on
                solving problems through clean code and practical engineering.
              </p>
              <p>
                When I'm not coding, I'm solving problems on LeetCode, contributing to open-source
                projects, or exploring new technologies.
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
                  <span className="info-value">Web Dev, Full Stack, Frontend, Backend, AI/ML, Research</span>
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
              <div className="edu-school">Stanley College of Engineering and Technology for Women, Hyderabad</div>
              <div className="edu-meta">2022 – 2027 · Hyderabad, India</div>
              <span className="edu-grade">CGPA: 9.2</span>
            </div>

            <div className="education-card">
              <div className="edu-degree">Intermediate — MPC</div>
              <div className="edu-school">Narayana Junior College</div>
              <div className="edu-meta">2020 – 2022 · Hyderabad, India</div>
              <span className="edu-grade">Score: 98%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
