# Jalkam Tanusree — Personal Portfolio Website

A premium, modern **dark-mode glassmorphic** personal portfolio website showcasing the skills, projects, and achievements of Jalkam Tanusree. Built with a React + Vite frontend and a lightweight Express backend for handling form submissions.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Clone or navigate to the portfolio directory:
   ```bash
   cd c:\Users\User\Desktop\Portfolio
   ```

2. Install all root dependencies (including Vite, React, and Concurrently):
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
   ```

---

## 🛠️ How to Run the Project

### Option 1: Run Frontend & Backend Concurrently (Recommended)
We have set up a concurrent dev script using the `concurrently` package. This allows you to launch both the frontend dev server and the backend API server with **one single command** from the root folder:

```bash
# In the root Portfolio directory
npm run dev
```

This will spin up:
* **Frontend Dev Server**: `http://localhost:5173/` (or `5174` if `5173` is busy)
* **Backend API Server**: `http://localhost:5000/`

---

### Option 2: Run Separately

#### Starting the Frontend Server
To run only the frontend client (Vite server):
```bash
# In the root Portfolio directory
npx vite
```
*(Your app will open at `http://localhost:5173/`)*

#### Starting the Backend Server
To run only the Express backend server (handles contact messages):
```bash
# Navigate to the backend directory
cd backend
# Start the Express server
npm start
```
*(The API will start listening at `http://localhost:5000/`)*

---

## 📂 Project Structure

```text
Portfolio/
├── backend/
│   ├── messages.json        # Persistent JSON file storing contact submissions
│   ├── package.json         # Backend Express & Cors dependencies
│   └── server.js            # Express API server handling contact form submissions
├── public/
│   └── favicon.svg          # Custom JT initials SVG Favicon
├── src/
│   ├── assets/
│   │   └── profile.png      # AI-optimized professional headshot with plain white background
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glassmorphism header with active link observer
│   │   ├── Hero.jsx         # Typing intro, headshot, and quick stats
│   │   ├── About.jsx        # Academics (Stanley College, Narayana Jr College)
│   │   ├── Skills.jsx       # Category-wise toolkit badge lists
│   │   ├── Projects.jsx     # Actual Github repositories integration
│   │   ├── Achievements.jsx # Hackathons, GSSoC, Algo Showdown merit, and Alonzo AI intern info
│   │   ├── Contact.jsx      # Input form making POST calls to local Express server
│   │   ├── Footer.jsx       # Custom footer component with socials
│   │   └── Icons.jsx        # Custom robust inline SVG icon exports
│   ├── App.jsx              # Main App layout with IntersectionObserver tracking
│   ├── index.css            # Custom CSS variables, floating blur orbs, and utility classes
│   └── main.jsx             # React DOM entrypoint
├── index.html               # Main root HTML template with Google Fonts (Inter, Outfit)
├── package.json             # Frontend dependencies & concurrently task runner
└── vite.config.js           # Vite build config
```

---

## 🔌 API Endpoints (Backend)

The backend server exposes the following routes for contact submissions:

### 1. Submit Contact Message
* **URL**: `/api/contact`
* **Method**: `POST`
* **Headers**: `Content-Type: application/json`
* **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Collaboration Idea",
    "message": "Hi Tanusree, I'd like to discuss a project with you."
  }
  ```
* **Success Response**:
  ```json
  {
    "success": true,
    "message": "Your message has been saved successfully!"
  }
  ```

### 2. Retrieve All Messages
* **URL**: `/api/messages`
* **Method**: `GET`
* **Description**: Returns a list of all contact form submissions saved inside `messages.json` (useful for local admin inspection).

---

## 📦 Building for Production

To create an optimized production bundle of the frontend:
```bash
npm run build
```
The compiled static assets will be outputted to the `/dist` folder.
