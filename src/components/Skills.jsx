const skillCategories = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    color: '#6366f1',
    skills: [
      { name: 'Python', pct: 92 },
      { name: 'JavaScript / TypeScript', pct: 85 },
      { name: 'Java', pct: 75 },
      { name: 'C / C++', pct: 70 },
      { name: 'SQL', pct: 80 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    emoji: '🤖',
    color: '#8b5cf6',
    skills: [
      { name: 'TensorFlow / Keras', pct: 88 },
      { name: 'PyTorch', pct: 82 },
      { name: 'Scikit-learn', pct: 90 },
      { name: 'OpenCV', pct: 85 },
      { name: 'LangChain / LangGraph', pct: 78 },
    ],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    color: '#06b6d4',
    skills: [
      { name: 'React / Next.js', pct: 88 },
      { name: 'Node.js / Express', pct: 80 },
      { name: 'FastAPI', pct: 85 },
      { name: 'REST APIs', pct: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    emoji: '🛠️',
    color: '#f59e0b',
    tags: [
      'Git', 'GitHub', 'Docker', 'Linux', 'ROS',
      'MongoDB', 'PostgreSQL', 'SQLite',
      'Vite', 'Tailwind CSS', 'Firebase',
      'Jupyter', 'Google Colab', 'VS Code',
      'Vercel', 'Render',
    ],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="tag">Technical Skills</span>
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-subtitle">
          Technologies and frameworks I've worked with across AI, web, and systems
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{ background: `${cat.color}20` }}
                >
                  {cat.emoji}
                </div>
                <span className="skill-cat-title">{cat.title}</span>
              </div>

              {cat.skills ? (
                cat.skills.map((s, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-row">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.pct}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${s.pct}%`,
                          animationDelay: `${j * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="skills-tags">
                  {cat.tags.map((t, j) => (
                    <span className="skill-tag" key={j}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
