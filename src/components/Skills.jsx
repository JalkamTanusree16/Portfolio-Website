const skillCategories = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    color: '#6366f1',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C / C++', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    emoji: '🤖',
    color: '#8b5cf6',
    skills: ['TensorFlow / Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain / LangGraph', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    color: '#06b6d4',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'REST APIs', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Databases',
    emoji: '🛠️',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'ROS', 'MongoDB', 'PostgreSQL', 'SQLite', 'Vite', 'Firebase', 'Jupyter', 'Google Colab', 'Vercel', 'Render'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="tag">Technical Skills</span>
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-subtitle">
          Technologies and frameworks I've worked with across web development, AI, and systems
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

              <div className="skills-tags">
                {cat.skills.map((t, j) => (
                  <span className="skill-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
