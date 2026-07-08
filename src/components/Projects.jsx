import { useState } from 'react'
import { Github, ExternalLink, X, FileText } from './Icons'

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

const projectCodeDetails = {
  'AI-ROS Multi-Agent System': {
    files: [
      {
        name: 'main.py',
        path: 'src/main.py',
        raw: `import rospy
from langgraph.graph import StateGraph, END
from agents import RoboticPlanner, SensorEvaluator

class MissionControl:
    def __init__(self):
        rospy.init_node('ai_ros_orchestrator', anonymous=True)
        self.planner = RoboticPlanner()
        self.evaluator = SensorEvaluator()
        self.graph = StateGraph()
        
    def build_agent_workflow(self):
        # Define agent nodes
        self.graph.add_node("plan_task", self.planner.plan)
        self.graph.add_node("read_sensors", self.evaluator.read)
        self.graph.set_entry_point("read_sensors")
        
        # Add transition logic
        self.graph.add_conditional_edges(
            "read_sensors",
            self.evaluator.should_replan,
            {True: "plan_task", False: END}
        )
        return self.graph.compile()

if __name__ == '__main__':
    control = MissionControl()
    workflow = control.build_agent_workflow()
    rospy.loginfo("AI-ROS Orchestration system running.")
    rospy.spin()`,
        content: `<span class="code-keyword">import</span> rospy
<span class="code-keyword">from</span> langgraph.graph <span class="code-keyword">import</span> StateGraph, END
<span class="code-keyword">from</span> agents <span class="code-keyword">import</span> RoboticPlanner, SensorEvaluator

<span class="code-keyword">class</span> <span class="code-class">MissionControl</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):
        rospy.init_node(<span class="code-string">'ai_ros_orchestrator'</span>, anonymous=<span class="code-keyword">True</span>)
        self.planner = RoboticPlanner()
        self.evaluator = SensorEvaluator()
        self.graph = StateGraph()
        
    <span class="code-keyword">def</span> <span class="code-function">build_agent_workflow</span>(self):
        <span class="code-comment"># Define agent nodes</span>
        self.graph.add_node(<span class="code-string">"plan_task"</span>, self.planner.plan)
        self.graph.add_node(<span class="code-string">"read_sensors"</span>, self.evaluator.read)
        self.graph.set_entry_point(<span class="code-string">"read_sensors"</span>)
        
        <span class="code-comment"># Add transition logic</span>
        self.graph.add_conditional_edges(
            <span class="code-string">"read_sensors"</span>,
            self.evaluator.should_replan,
            {<span class="code-keyword">True</span>: <span class="code-string">"plan_task"</span>, <span class="code-keyword">False</span>: END}
        )
        <span class="code-keyword">return</span> self.graph.compile()

<span class="code-keyword">if</span> __name__ == <span class="code-string">'__main__'</span>:
    control = MissionControl()
    workflow = control.build_agent_workflow()
    rospy.loginfo(<span class="code-string">"AI-ROS Orchestration system running."</span>)
    rospy.spin()`
      },
      {
        name: 'sensor_fusion.py',
        path: 'src/sensor_fusion.py',
        raw: `import rospy
from sensor_msgs.msg import LaserScan, Image
from std_msgs.msg import String

class SensorEvaluator:
    def __init__(self):
        self.lidar_data = None
        self.camera_data = None
        self.sub_lidar = rospy.Subscriber('/scan', LaserScan, self.lidar_cb)
        
    def lidar_cb(self, data):
        self.lidar_data = data.ranges
        
    def read(self, state):
        # Read the current lidar ranges and evaluate obstacle proximity
        rospy.logdebug("Reading laser scan data...")
        min_distance = min(self.lidar_data) if self.lidar_data else 10.0
        return {"obstacle_distance": min_distance}
        
    def should_replan(self, state):
        return state.get("obstacle_distance", 10.0) < 0.5`,
        content: `<span class="code-keyword">import</span> rospy
<span class="code-keyword">from</span> sensor_msgs.msg <span class="code-keyword">import</span> LaserScan, Image
<span class="code-keyword">from</span> std_msgs.msg <span class="code-keyword">import</span> String

<span class="code-keyword">class</span> <span class="code-class">SensorEvaluator</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):
        self.lidar_data = <span class="code-keyword">None</span>
        self.camera_data = <span class="code-keyword">None</span>
        self.sub_lidar = rospy.Subscriber(<span class="code-string">'/scan'</span>, LaserScan, self.lidar_cb)
        
    <span class="code-keyword">def</span> <span class="code-function">lidar_cb</span>(self, data):
        self.lidar_data = data.ranges
        
    <span class="code-keyword">def</span> <span class="code-function">read</span>(self, state):
        <span class="code-comment"># Read the current lidar ranges and evaluate obstacle proximity</span>
        rospy.logdebug(<span class="code-string">"Reading laser scan data..."</span>)
        min_distance = min(self.lidar_data) <span class="code-keyword">if</span> self.lidar_data <span class="code-keyword">else</span> <span class="code-number">10.0</span>
        <span class="code-keyword">return</span> {<span class="code-string">"obstacle_distance"</span>: min_distance}
        
    <span class="code-keyword">def</span> <span class="code-function">should_replan</span>(self, state):
        <span class="code-keyword">return</span> state.get(<span class="code-string">"obstacle_distance"</span>, <span class="code-number">10.0</span>) &lt; <span class="code-number">0.5</span>`
      }
    ]
  },
  'Career OS — AI Career Intelligence': {
    files: [
      {
        name: 'server.py',
        path: 'backend/server.py',
        raw: `from fastapi import FastAPI, UploadFile, File
from parser import parse_resume
from scoring import score_profile

app = FastAPI(title="Career OS Core API")

@app.post("/api/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    raw_text = await file.read()
    resume_details = parse_resume(raw_text.decode('utf-8'))
    score_report = score_profile(resume_details)
    return {
        "success": True,
        "parsed_data": resume_details,
        "analysis": score_report
    }`,
        content: `<span class="code-keyword">from</span> fastapi <span class="code-keyword">import</span> FastAPI, UploadFile, File
<span class="code-keyword">from</span> parser <span class="code-keyword">import</span> parse_resume
<span class="code-keyword">from</span> scoring <span class="code-keyword">import</span> score_profile

app = FastAPI(title=<span class="code-string">"Career OS Core API"</span>)

<span class="code-keyword">@app</span>.post(<span class="code-string">"/api/analyze"</span>)
<span class="code-keyword">async def</span> <span class="code-function">analyze_resume</span>(file: UploadFile = File(...)):
    raw_text = <span class="code-keyword">await</span> file.read()
    resume_details = parse_resume(raw_text.decode(<span class="code-string">'utf-8'</span>))
    score_report = score_profile(resume_details)
    <span class="code-keyword">return</span> {
        <span class="code-string">"success"</span>: <span class="code-keyword">True</span>,
        <span class="code-string">"parsed_data"</span>: resume_details,
        <span class="code-string">"analysis"</span>: score_report
    }`
      },
      {
        name: 'ResumeAnalyzer.py',
        path: 'backend/ResumeAnalyzer.py',
        raw: `import spacy
import re

nlp = spacy.load("en_core_web_sm")

def parse_resume(text):
    doc = nlp(text)
    emails = re.findall(r'[\w\.-]+@[\w\.-]+', text)
    phones = re.findall(r'\+?\d[\d -]{8,12}\d', text)
    
    # Extract skills
    skills = []
    for token in doc:
        if token.text.lower() in ["python", "react", "fastapi", "ml", "nlp", "sql"]:
            skills.append(token.text)
            
    return {
        "name": doc[0:3].text,
        "email": emails[0] if emails else None,
        "phone": phones[0] if phones else None,
        "skills": list(set(skills))
    }`,
        content: `<span class="code-keyword">import</span> spacy
<span class="code-keyword">import</span> re

nlp = spacy.load(<span class="code-string">"en_core_web_sm"</span>)

<span class="code-keyword">def</span> <span class="code-function">parse_resume</span>(text):
    doc = nlp(text)
    emails = re.findall(<span class="code-string">r'[\w\.-]+@[\w\.-]+'</span>, text)
    phones = re.findall(<span class="code-string">r'\+?\d[\d -]{8,12}\d'</span>, text)
    
    <span class="code-comment"># Extract skills</span>
    skills = []
    <span class="code-keyword">for</span> token <span class="code-keyword">in</span> doc:
        <span class="code-keyword">if</span> token.text.lower() <span class="code-keyword">in</span> [<span class="code-string">"python"</span>, <span class="code-string">"react"</span>, <span class="code-string">"fastapi"</span>, <span class="code-string">"ml"</span>, <span class="code-string">"nlp"</span>, <span class="code-string">"sql"</span>]:
            skills.append(token.text)
            
    <span class="code-keyword">return</span> {
        <span class="code-string">"name"</span>: doc[<span class="code-number">0</span>:<span class="code-number">3</span>].text,
        <span class="code-string">"email"</span>: emails[<span class="code-number">0</span>] <span class="code-keyword">if</span> emails <span class="code-keyword">else</span> <span class="code-keyword">None</span>,
        <span class="code-string">"phone"</span>: phones[<span class="code-number">0</span>] <span class="code-keyword">if</span> phones <span class="code-keyword">else</span> <span class="code-keyword">None</span>,
        <span class="code-string">"skills"</span>: list(set(skills))
    }`
      }
    ]
  },
  'AI Resume Analyser': {
    files: [
      {
        name: 'app.py',
        path: 'app.py',
        raw: `from flask import Flask, request, jsonify
from parser import extract_pdf_data

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    file = request.files['file']
    parsed_info = extract_pdf_data(file)
    return jsonify(parsed_info)

if __name__ == '__main__':
    app.run(port=5000)`,
        content: `<span class="code-keyword">from</span> flask <span class="code-keyword">import</span> Flask, request, jsonify
<span class="code-keyword">from</span> parser <span class="code-keyword">import</span> extract_pdf_data

app = Flask(__name__)

<span class="code-keyword">@app</span>.route(<span class="code-string">'/analyze'</span>, methods=[<span class="code-string">'POST'</span>])
<span class="code-keyword">def</span> <span class="code-function">analyze</span>():
    <span class="code-keyword">if</span> <span class="code-string">'file'</span> <span class="code-keyword">not in</span> request.files:
        <span class="code-keyword">return</span> jsonify({<span class="code-string">"error"</span>: <span class="code-string">"No file uploaded"</span>}), <span class="code-number">400</span>
    file = request.files[<span class="code-string">'file'</span>]
    parsed_info = extract_pdf_data(file)
    <span class="code-keyword">return</span> jsonify(parsed_info)

<span class="code-keyword">if</span> __name__ == <span class="code-string">'__main__'</span>:
    app.run(port=<span class="code-number">5000</span>)`
      }
    ]
  },
  'Redrob Ranker': {
    files: [
      {
        name: 'ranker.py',
        path: 'ranker.py',
        raw: `import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def rank_candidates(job_desc, resumes):
    vectorizer = TfidfVectorizer(stop_words='english')
    all_texts = [job_desc] + resumes
    tfidf_matrix = vectorizer.fit_transform(all_texts)
    
    # Calculate cosine similarity with job description
    scores = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:])
    rankings = np.argsort(scores[0])[::-1]
    
    return [
        {"resume_idx": int(idx), "match_score": float(scores[0][idx])}
        for idx in rankings
    ]`,
        content: `<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np
<span class="code-keyword">from</span> sklearn.feature_extraction.text <span class="code-keyword">import</span> TfidfVectorizer
<span class="code-keyword">from</span> sklearn.metrics.pairwise <span class="code-keyword">import</span> cosine_similarity

<span class="code-keyword">def</span> <span class="code-function">rank_candidates</span>(job_desc, resumes):
    vectorizer = TfidfVectorizer(stop_words=<span class="code-string">'english'</span>)
    all_texts = [job_desc] + resumes
    tfidf_matrix = vectorizer.fit_transform(all_texts)
    
    <span class="code-comment"># Calculate cosine similarity</span>
    scores = cosine_similarity(tfidf_matrix[<span class="code-number">0</span>:<span class="code-number">1</span>], tfidf_matrix[<span class="code-number">1</span>:])
    rankings = np.argsort(scores[<span class="code-number">0</span>])[::-<span class="code-number">1</span>]
    
    <span class="code-keyword">return</span> [
        {<span class="code-string">"resume_idx"</span>: int(idx), <span class="code-string">"match_score"</span>: float(scores[<span class="code-number">0</span>][idx])}
        <span class="code-keyword">for</span> idx <span class="code-keyword">in</span> rankings
    ]`
      }
    ]
  },
  'StorySpark AI': {
    files: [
      {
        name: 'server.js',
        path: 'server.js',
        raw: `const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/story', async (req, res) => {
  const { prompt } = req.body;
  const response = await ai.models.generateContent({
    model: 'gemini-1.5-flash',
    contents: prompt,
  });
  res.json({ story: response.text });
});`,
        content: `<span class="code-keyword">const</span> express = require(<span class="code-string">'express'</span>);
<span class="code-keyword">const</span> { GoogleGenAI } = require(<span class="code-string">'@google/genai'</span>);

<span class="code-keyword">const</span> app = express();
app.use(express.json());

<span class="code-keyword">const</span> ai = <span class="code-keyword">new</span> GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post(<span class="code-string">'/api/story'</span>, <span class="code-keyword">async</span> (req, res) =&gt; {
  <span class="code-keyword">const</span> { prompt } = req.body;
  <span class="code-keyword">const</span> response = <span class="code-keyword">await</span> ai.models.generateContent({
    model: <span class="code-string">'gemini-1.5-flash'</span>,
    contents: prompt,
  });
  res.json({ story: response.text });
});`
      }
    ]
  },
  'Gen AI Hackathon - Skill Advisor': {
    files: [
      {
        name: 'app.py',
        path: 'app.py',
        raw: `import streamlit as st
from llm_query import get_learning_path

st.title("💡 Skill Advisor — Gen AI Hackathon")
st.write("Get a personalized AI learning path based on your goals.")

subject = st.text_input("Enter subject / role (e.g. cloud security):")
if st.button("Generate Roadmap"):
    if subject:
        with st.spinner("Analyzing curriculum path..."):
            roadmap = get_learning_path(subject)
            st.markdown(roadmap)
    else:
        st.warning("Please enter a subject first.")`,
        content: `<span class="code-keyword">import</span> streamlit <span class="code-keyword">as</span> st
<span class="code-keyword">from</span> llm_query <span class="code-keyword">import</span> get_learning_path

st.title(<span class="code-string">"💡 Skill Advisor — Gen AI Hackathon"</span>)
st.write(<span class="code-string">"Get a personalized AI learning path based on your goals."</span>)

subject = st.text_input(<span class="code-string">"Enter subject / role (e.g. cloud security):"</span>)
<span class="code-keyword">if</span> st.button(<span class="code-string">"Generate Roadmap"</span>):
    <span class="code-keyword">if</span> subject:
        <span class="code-keyword">with</span> st.spinner(<span class="code-string">"Analyzing curriculum path..."</span>):
            roadmap = get_learning_path(subject)
            st.markdown(roadmap)
    <span class="code-keyword">else</span>:
        st.warning(<span class="code-string">"Please enter a subject first."</span>)`
      }
    ]
  },
  'Micro-IT Task Manager': {
    files: [
      {
        name: 'app.js',
        path: 'app.js',
        raw: `document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('task-list');
  const input = document.getElementById('task-input');
  const button = document.getElementById('task-add-btn');

  button.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      list.appendChild(li);
      input.value = '';
    }
  });
});`,
        content: `document.addEventListener(<span class="code-string">'DOMContentLoaded'</span>, () =&gt; {
  <span class="code-keyword">const</span> list = document.getElementById(<span class="code-string">'task-list'</span>);
  <span class="code-keyword">const</span> input = document.getElementById(<span class="code-string">'task-input'</span>);
  <span class="code-keyword">const</span> button = document.getElementById(<span class="code-string">'task-add-btn'</span>);

  button.addEventListener(<span class="code-string">'click'</span>, () =&gt; {
    <span class="code-keyword">const</span> taskText = input.value.trim();
    <span class="code-keyword">if</span> (taskText !== <span class="code-string">''</span>) {
      <span class="code-keyword">const</span> li = document.createElement(<span class="code-string">'li'</span>);
      li.textContent = taskText;
      list.appendChild(li);
      input.value = <span class="code-string">''</span>;
    }
  });
});`
      }
    ]
  }
}

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState(null)
  const [activeFileIdx, setActiveFileIdx] = useState(0)
  const [copied, setCopied] = useState(false)

  const openCodeModal = (project, e) => {
    e.stopPropagation() // Prevent card click
    setSelectedProj(project)
    setActiveFileIdx(0)
    setCopied(false)
  }

  const closeCodeModal = () => {
    setSelectedProj(null)
    setCopied(false)
  }

  const copyToClipboard = () => {
    const codeObj = projectCodeDetails[selectedProj.title]?.files[activeFileIdx]
    if (codeObj) {
      navigator.clipboard.writeText(codeObj.raw)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <section className="section projects" id="projects">
        <div className="container">
          <span className="tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built — from AI systems to full-stack web applications
          </p>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div 
                className="project-card" 
                key={i}
                onClick={() => window.open(p.github, '_blank', 'noopener,noreferrer')}
                style={{ cursor: 'pointer' }}
              >
                {p.featured && <div className="featured-badge">⭐ Featured</div>}
                <span className="project-emoji">{p.emoji}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span className="project-tag" key={j}>{t}</span>
                  ))}
                </div>
                <div className="project-links" onClick={e => e.stopPropagation()}>
                  <button
                    className="project-link project-link-github"
                    onClick={(e) => openCodeModal(p, e)}
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    <Github size={14} />
                    Code
                  </button>
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

      {/* Code Viewer Modal */}
      {selectedProj && (
        <div className="code-modal-overlay" onClick={closeCodeModal}>
          <div className="code-modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="code-modal-header">
              <div className="code-modal-title">
                <span className="code-modal-title-emoji">{selectedProj.emoji}</span>
                <div>
                  <h3>{selectedProj.title}</h3>
                </div>
              </div>
              <div className="code-modal-actions">
                <a
                  className="code-modal-btn"
                  href={selectedProj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} />
                  Open GitHub
                </a>
                <button className="code-modal-btn" onClick={copyToClipboard}>
                  {copied ? (
                    <span className="code-copy-success">✓ Copied!</span>
                  ) : (
                    <>Copy Code</>
                  )}
                </button>
                <button className="code-modal-close-btn" onClick={closeCodeModal} aria-label="Close modal">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="code-modal-body">
              {/* Sidebar File Tree */}
              <div className="code-modal-sidebar">
                <div className="code-sidebar-section-title">Workspace files</div>
                <ul className="code-file-list">
                  {projectCodeDetails[selectedProj.title]?.files.map((file, idx) => (
                    <li
                      key={idx}
                      className={`code-file-item ${activeFileIdx === idx ? 'active' : ''}`}
                      onClick={() => {
                        setActiveFileIdx(idx)
                        setCopied(false)
                      }}
                    >
                      <FileText size={14} />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Editor */}
              <div className="code-modal-editor">
                <div className="code-editor-header">
                  <span className="code-editor-filepath">
                    {projectCodeDetails[selectedProj.title]?.files[activeFileIdx]?.path}
                  </span>
                </div>
                <pre className="code-editor-body">
                  <code 
                    className="code-editor-pre" 
                    dangerouslySetInnerHTML={{ 
                      __html: projectCodeDetails[selectedProj.title]?.files[activeFileIdx]?.content || '' 
                    }} 
                  />
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
