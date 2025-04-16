import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CareerPathsPage from "./pages/Dashboard/CareerPath"
import CredentialsPage from "./pages/Dashboard/Credintials"
import JobMatchesPage from "./pages/Dashboard/Jobs"
import LearningPathsPage from "./pages/Dashboard/Learning"
import SkillsPage from "./pages/Dashboard/Skills"
import DashboardPage from "./pages/Dashboard/Dashboard"
import DashboardLayout from "./pages/Layout"
import LoginPage from "./pages/Login"
import ProfilePage from "./pages/Dashboard/Profile"
import DocumentUploadPage from "./pages/FileUpload"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other routes here */}
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="career-paths" element={<CareerPathsPage />} />
        <Route path="credentials" element={<CredentialsPage />} />
        <Route path="jobs" element={<JobMatchesPage />} />
        <Route path="learning" element={<LearningPathsPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/upload" element={<DocumentUploadPage />} />

      
    </Routes>
  )
}

export default App
