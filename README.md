# CareerCanvas React App

A modern career management dashboard built with React, Vite, and [shadcn/ui](https://ui.shadcn.com/) components. This app helps users upload and analyze resumes, track skills, visualize career paths, manage credentials, and monitor learning progress.

---

## Features

### 1. **Document Upload & Analysis**
- Upload your resume and job description (PDF only, max 10MB).
- Simulated upload progress with validation.
- Analyze your resume against a job description via a backend API (`/analyze`).
- See upload history (demo data).

### 2. **Dashboard**
- Visualize skill matches and gaps between your resume and job requirements.
- Tabs for Gap Analysis, Your Skills, and Required Skills.
- Skill match statistics and breakdowns.

### 3. **Career Paths**
- Explore recommended career trajectories based on your profile.
- See required skills, learning paths, and market demand.
- Visual and tabular breakdowns of technical and soft skills.

### 4. **Skills Management**
- Track, analyze, and improve your technical and soft skills.
- Visualizations for skill distribution and growth trajectory.
- Identify skill gaps and get learning recommendations.

### 5. **Credentials**
- Manage certificates, completed courses, and education.
- Tabs for Certificates, Courses, and Education.
- Download, verify, or continue learning.

### 6. **Learning Dashboard**
- Track your learning progress, hours, and certificates.
- Recommended and popular courses.
- Additional resources and statistics.

---

## Tech Stack

- **React** (with hooks and functional components)
- **Vite** (for fast development)
- **shadcn/ui** (for accessible, modern UI components)
- **Tailwind CSS** (customized via `tailwind.config.js`)
- **Radix UI** (for accessible primitives)
- **Lucide Icons** (for consistent iconography)
- **React Router** (for navigation)
- **LocalStorage** (for storing analysis results)

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```sh
git clone <your-repo-url>
cd react_shadcn
npm install
# or
yarn install
```

### Run the app
```sh
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Backend API

The document analysis feature expects a backend at [http://localhost:8000/analyze](http://localhost:8000/analyze) that accepts `resume` and `job_description` as PDF files in a POST request and returns JSON.

## Project Structure

- `src/pages/FileUpload.jsx` — Document upload and analysis page.
- `src/pages/Dashboard/` — Main dashboard, skills, career paths, credentials, learning, and profile pages.
- `src/components/ui/` — Reusable UI components (card, badge, button, progress, etc.).
- `src/components/dashbaord/DashboardSidebar.jsx` — Sidebar navigation for dashboard sections.
- `src/index.css` — Tailwind and custom styles.
- `tailwind.config.js` — Tailwind theme and color configuration.

## Customization

**API Endpoint:**  
Change the endpoint in `FileUpload.jsx` if your backend is hosted elsewhere.

**Dashboard Data:**  
Integrate your own backend or state management for dynamic dashboard data.

**UI Theme:**  
Adjust colors and styles in `tailwind.config.js` and `src/index.css`.

## License

MIT

---

This project uses open-source UI components from [shadcn/ui](https://ui.shadcn.com/) and is scaffolded for rapid prototyping and customization.