import { Github, ExternalLink } from './Icons'

const projects = [
  {
    emoji: '🤖',
    title: 'AI-ROS Multi-Agent System',
    desc: 'An intelligent multi-agent orchestration system integrating ROS with LangGraph. Features autonomous robotic task planning, real-time sensor fusion, collaborative agent coordination, and a Next.js dashboard for mission control.',
    tags: ['Python', 'ROS', 'LangGraph', 'Next.js', 'LangChain', 'AI Agents'],
    github: 'https://github.com/JalkamTanusree16/AI-ROS',
    featured: true,
  },
  {
    emoji: '🎓',
    title: 'Career OS — AI Career Intelligence',
    desc: 'Full-stack AI-powered career platform with resume analysis, job matching, skill gap detection, learning roadmaps, salary prediction, and an AI career coach. Built with React 19, FastAPI, and advanced NLP models.',
    tags: ['React', 'FastAPI', 'Python', 'NLP', 'AI', 'PostgreSQL'],
    github: 'https://github.com/JalkamTanusree16',
    featured: true,
  },
  {
    emoji: '🏥',
    title: 'Lung Nodule Segmentation',
    desc: 'Deep learning pipeline for automated pulmonary nodule detection and segmentation in CT scans. Implements U-Net architecture with custom augmentations achieving state-of-the-art Dice scores.',
    tags: ['PyTorch', 'U-Net', 'Medical Imaging', 'OpenCV', 'Python', 'DICOM'],
    github: 'https://github.com/JalkamTanusree16',
  },
  {
    emoji: '🛡️',
    title: 'SafeWalk AI',
    desc: 'AI-powered women safety application with real-time threat detection, SOS alerts, safe route recommendations, and a community safety network. Leverages geofencing and ML-based anomaly detection.',
    tags: ['React', 'Node.js', 'Socket.io', 'ML', 'Maps API', 'Express'],
    github: 'https://github.com/JalkamTanusree16',
  },
  {
    emoji: '📊',
    title: 'House Price Prediction',
    desc: 'End-to-end ML pipeline for real estate price prediction. Features exploratory data analysis, feature engineering, ensemble models (XGBoost, LightGBM), and an interactive Streamlit dashboard.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Streamlit', 'EDA'],
    github: 'https://github.com/JalkamTanusree16',
  },
  {
    emoji: '🔍',
    title: 'Audit Portal',
    desc: 'Full-stack audit management portal with role-based access control, document management, e-proceedings tracking, and compliance dashboards for administrative workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Vite', 'REST API'],
    github: 'https://github.com/JalkamTanusree16',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built — from AI systems to full-stack web applications
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              {p.featured && <div className="featured-badge">⭐ Featured</div>}
              <span className="project-emoji">{p.emoji}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span className="project-tag" key={j}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  className="project-link project-link-github"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} />
                  Code
                </a>
                {p.live && (
                  <a
                    className="project-link project-link-live"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
