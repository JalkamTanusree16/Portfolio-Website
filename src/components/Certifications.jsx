import { useState } from 'react'
import { Award, Shield, Cloud, Terminal, GraduationCap } from './Icons'

const categories = [
  { id: 'all', label: 'All Certs' },
  { id: 'ai', label: 'AI & Gen AI' },
  { id: 'cloud', label: 'Cloud & Security' },
  { id: 'dev', label: 'Programming & Dev' },
]

const certificationsData = [
  {
    title: 'Talentio Certificate for PPS',
    issuer: 'Talentio with Con A2I Leap',
    category: 'dev',
    desc: 'Professional Python & Problem Solving credential validating core programming logic, algorithms, and technical fluency.',
    date: 'Credential',
    badge: 'Programming',
    iconType: 'terminal'
  },
  {
    title: 'Data Structures with C',
    issuer: 'Technical Certification',
    category: 'dev',
    desc: 'Advanced validation of fundamental structures including trees, graphs, sorting, and search algorithms in C language.',
    date: 'Certified',
    badge: 'Algorithms',
    iconType: 'grad'
  },
  {
    title: 'Python from HackerRank',
    issuer: 'HackerRank',
    category: 'dev',
    desc: 'Verified skills in python scripting, data handling, object-oriented concepts, and algorithmic challenges.',
    date: 'Certified',
    badge: 'Python',
    iconType: 'terminal'
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Infosys Springboard',
    category: 'ai',
    desc: 'Foundational course in artificial intelligence, search algorithms, knowledge representation, and machine learning structures.',
    date: 'Certified',
    badge: 'AI Core',
    iconType: 'award'
  },
  {
    title: 'Gen AI from Google',
    issuer: 'Google Cloud',
    category: 'ai',
    desc: 'Comprehensive understanding of generative image/text architectures, large language models (LLMs), and Google Vertex AI.',
    date: 'Certified',
    badge: 'Gen AI',
    iconType: 'award'
  },
  {
    title: 'Cloud Computing',
    issuer: 'Microsoft',
    category: 'cloud',
    desc: 'Validation of cloud architecture principles, infrastructure-as-a-service (IaaS), SaaS models, and Azure cloud solutions.',
    date: 'Certified',
    badge: 'Cloud',
    iconType: 'cloud'
  },
  {
    title: 'AI Agent Development on Azure',
    issuer: 'Microsoft',
    category: 'ai',
    desc: 'Hands-on orchestration of intelligent autonomous agents using Azure AI services, memory tools, and custom execution pipelines.',
    date: 'Certified',
    badge: 'AI Agents',
    iconType: 'award'
  },
  {
    title: 'AI to Work Workshop',
    issuer: 'Google Workspace',
    category: 'dev',
    desc: 'Application of generative AI tools within enterprise setups to maximize productivity and workflow automation.',
    date: 'Certified',
    badge: 'Productivity',
    iconType: 'grad'
  },
  {
    title: 'Cyber Security',
    issuer: 'Cisco',
    category: 'cloud',
    desc: 'Comprehensive training in threat detection, network vulnerabilities, operational security, and encryption methods.',
    date: 'Certified',
    badge: 'Security',
    iconType: 'shield'
  },
  {
    title: 'Generative AI',
    issuer: 'IBM',
    category: 'ai',
    desc: 'Specialized course in GANs, transformer models, prompt engineering, and the ethical guardrails of generative AI deployment.',
    date: 'Certified',
    badge: 'Gen AI',
    iconType: 'award'
  },
  {
    title: 'Claude with Google Vertex AI',
    issuer: 'Anthropic',
    category: 'ai',
    desc: 'Deployment and prompt-tuning of Claude models within the Google Cloud Vertex AI ecosystem for production applications.',
    date: 'Certified',
    badge: 'Vertex AI',
    iconType: 'award'
  },
  {
    title: 'Build Enterprise Ready Agents with Copilot Studio',
    issuer: 'Microsoft',
    category: 'ai',
    desc: 'Advanced agentic workflows, conversational logic design, API integrations, and security guardrails using Microsoft Copilot Studio.',
    date: 'Certified',
    badge: 'Copilot',
    iconType: 'award'
  }
]

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCerts = activeCategory === 'all' 
    ? certificationsData 
    : certificationsData.filter(c => c.category === activeCategory)

  const renderIcon = (type) => {
    switch (type) {
      case 'terminal':
        return <Terminal size={20} />
      case 'grad':
        return <GraduationCap size={20} />
      case 'cloud':
        return <Cloud size={20} />
      case 'shield':
        return <Shield size={20} />
      default:
        return <Award size={20} />
    }
  }

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <span className="tag">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional and technical certifications validating skillsets in AI development, cloud, and programming
        </p>

        {/* Tab Filters */}
        <div className="cert-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cert-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {filteredCerts.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-content">
                <div className="cert-header">
                  <div className="cert-icon-wrapper">
                    {renderIcon(cert.iconType)}
                  </div>
                  <div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <h3 className="cert-title">{cert.title}</h3>
                  </div>
                </div>
                <p className="cert-description">{cert.desc}</p>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-badge-tag">{cert.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
