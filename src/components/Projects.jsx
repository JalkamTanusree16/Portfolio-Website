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
    github: 'https://github.com/JalkamTanusree16/CareerOS',
    featured: true,
  },
  {
    emoji: '📄',
    title: 'AI Resume Analyser',
    desc: 'A robust intelligence tool built for analyzing resumes, parsing key details, performing matching checks, and providing detailed career feedback.',
    tags: ['Python', 'React', 'NLP', 'Resume Parser', 'Flask'],
    github: 'https://github.com/JalkamTanusree16/resume_analyser',
    featured: true,
  },
  {
    emoji: '⚡',
    title: 'Redrob Ranker',
    desc: 'An automated candidate ranker and grader application leveraging Python backend pipelines to score resumes against job requirements.',
    tags: ['Python', 'Scikit-learn', 'Algorithms', 'Pandas'],
    github: 'https://github.com/JalkamTanusree16/Redrob-Ranker',
  },
  {
    emoji: '📖',
    title: 'StorySpark AI',
    desc: 'Open-source platform designed for creative minds to generate and share multiple creative story variations from a single prompt using generative AI.',
    tags: ['Generative AI', 'React', 'Node.js', 'LLM', 'OpenAPI'],
    github: 'https://github.com/JalkamTanusree16/story-spark-ai',
  },
  {
    emoji: '💡',
    title: 'Gen AI Hackathon - Skill Advisor',
    desc: 'An intelligent skill advising application developed during the Gen-AI hackathon, providing personalized skill recommendations for developers.',
    tags: ['Generative AI', 'Python', 'Streamlit', 'Hackathon'],
    github: 'https://github.com/JalkamTanusree16/Gen-AI-hackathone',
  },
  {
    emoji: '📝',
    title: 'Micro-IT Task Manager',
    desc: 'A practical task management and to-do application designed for micro-IT administrative and tracking workflows.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Task Management'],
    github: 'https://github.com/JalkamTanusree16/to-do-list-for-micro-it',
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
