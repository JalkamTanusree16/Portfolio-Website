const achievements = [
  {
    icon: '🏆',
    title: 'NHAI Hackathon Participant',
    desc: 'Participated in National Highways Authority of India hackathon, developing an AI-based road monitoring solution.',
    meta: '2026',
  },
  {
    icon: '💻',
    title: 'LeetCode Problem Solver',
    desc: 'Active competitive programmer with consistent problem-solving across data structures and algorithms.',
    meta: 'leetcode.com/u/tanusree16/',
    link: 'https://leetcode.com/u/tanusree16/',
  },
  {
    icon: '🤖',
    title: 'AI-ROS Project Publication',
    desc: 'Initial commit and open-source publication of AI-ROS multi-agent robotic orchestration system on GitHub.',
    meta: 'June 2026 · GitHub',
  },
  {
    icon: '🎓',
    title: 'B.Tech CSE — High CGPA',
    desc: 'Maintaining excellent academic performance in Computer Science & Engineering at GITAM University.',
    meta: 'CGPA: 9.2 / 10',
  },
  {
    icon: '📜',
    title: 'Alonzo Spark Contract Certification',
    desc: 'Completed specialized blockchain and smart contract certification program.',
    meta: '2026 · Certification',
  },
  {
    icon: '🧠',
    title: 'Deep Learning Specialization',
    desc: 'Completed advanced deep learning coursework covering CNNs, RNNs, transformers, and deployment strategies.',
    meta: 'Online Certification',
  },
  {
    icon: '🌐',
    title: 'Full Stack Development Projects',
    desc: 'Delivered multiple production-grade full stack applications for audit management, safety, and career tools.',
    meta: '2024 – 2026',
  },
  {
    icon: '🔬',
    title: 'Medical Imaging Research',
    desc: 'Conducted research on pulmonary nodule detection using U-Net based deep learning segmentation models.',
    meta: '2025 · Academic Research',
  },
]

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <span className="tag">Achievements</span>
        <h2 className="section-title">Honours & Milestones</h2>
        <p className="section-subtitle">
          Highlights from my academic journey, competitions, and certifications
        </p>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div className="achievement-card" key={i}>
              <div className="ach-icon">{a.icon}</div>
              <div className="ach-content">
                <div className="ach-title">{a.title}</div>
                <div className="ach-desc">{a.desc}</div>
                <div className="ach-meta">
                  {a.link ? (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {a.meta} ↗
                    </a>
                  ) : a.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
