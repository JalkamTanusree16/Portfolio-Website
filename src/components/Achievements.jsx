const achievements = [
  {
    icon: '🥇',
    title: 'Top 1 — Talentio Coding Test',
    desc: 'Ranked #1 student in the Talentio Coding Test, demonstrating exceptional problem-solving and algorithmic skills.',
    meta: 'Coding Contest · Top Rank',
  },
  {
    icon: '🏆',
    title: 'Algo Showdown 2k25 — Top 10 Merit Student',
    desc: 'Ranked as one of the top 10 merit students in the Algo Showdown 2k25 coding contest.',
    meta: '2025 · Coding Contest',
  },
  {
    icon: '💼',
    title: 'Offline Intern — Alonzo AI',
    desc: 'Worked as an offline intern at Alonzo AI, gaining valuable industry experience building AI systems.',
    meta: '2025 · Internship',
  },
  {
    icon: '🚀',
    title: 'Hackathon Competitor',
    desc: 'Competed in prestigious hackathons including the ISRO Hackathon, Gen AI Exchange Hackathon, and Winnovx Hackathon.',
    meta: 'Hackathons',
  },
  {
    icon: '⭐',
    title: 'Open Source Contributor — GSSoC \'26',
    desc: 'Contributed to open source repositories during Girlscript Summer of Code (GSSoC) 2026.',
    meta: '2026 · Open Source',
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
    desc: 'Maintaining excellent academic performance in Computer Science & Engineering at Stanley College of Engineering and Technology for Women.',
    meta: 'CGPA: 9.2 / 10',
  },
  {
    icon: '🧠',
    title: 'Deep Learning Specialization',
    desc: 'Completed advanced deep learning coursework covering CNNs, RNNs, transformers, and deployment strategies.',
    meta: 'Online Certification',
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
