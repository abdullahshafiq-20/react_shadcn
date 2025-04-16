"use client"

import React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  Eye,
  Download,
  Trash2,
  RefreshCw,
  Clock,
  Info,
  Loader2,
} from "lucide-react"

export default function DocumentUploadPage() {
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null)
  const [activeTab, setActiveTab] = useState("upload")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisError, setAnalysisError] = useState(null)
  const navigate = useNavigate()

  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is PDF
    if (file.type !== "application/pdf") {
      setResumeFile({
        name: file.name,
        size: file.size,
        type: file.type,
        status: "error",
        errorMessage: "Only PDF files are allowed",
      })
      return
    }

    // Store the file object globally for later use
    window.resumeFileObj = file

    // Simulate upload process
    setResumeFile({
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0,
    })

    // Simulate upload progress
    const interval = setInterval(() => {
      setResumeFile((prev) => {
        if (!prev) return null
        const newProgress = (prev.progress || 0) + 10

        if (newProgress >= 100) {
          clearInterval(interval)
          return {
            ...prev,
            status: "success",
            progress: 100,
            uploadedAt: new Date(),
          }
        }

        return {
          ...prev,
          progress: newProgress,
        }
      })
    }, 300)
  }

  const handleJobDescriptionUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is PDF
    if (file.type !== "application/pdf") {
      setJobDescriptionFile({
        name: file.name,
        size: file.size,
        type: file.type,
        status: "error",
        errorMessage: "Only PDF files are allowed",
      })
      return
    }

    // Store the file object globally for later use
    window.jobDescFileObj = file

    // Simulate upload process
    setJobDescriptionFile({
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0,
    })

    // Simulate upload progress
    const interval = setInterval(() => {
      setJobDescriptionFile((prev) => {
        if (!prev) return null
        const newProgress = (prev.progress || 0) + 10

        if (newProgress >= 100) {
          clearInterval(interval)
          return {
            ...prev,
            status: "success",
            progress: 100,
            uploadedAt: new Date(),
          }
        }

        return {
          ...prev,
          progress: newProgress,
        }
      })
    }, 300)
  }

  const removeResumeFile = () => {
    setResumeFile(null)
  }

  const removeJobDescriptionFile = () => {
    setJobDescriptionFile(null)
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const formatDate = (date) => {
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const startAnalysis = async () => {
    try {
      setIsAnalyzing(true)
      setAnalysisError(null)
      
      // Create FormData to send the PDF files
      const formData = new FormData()
      
      // Get the actual file objects from the input elements
      const resumeInput = document.querySelector('input[type="file"][accept=".pdf"]:first-of-type')
      const jobDescInput = document.querySelector('input[type="file"][accept=".pdf"]:last-of-type')
      
      if (resumeInput?.files[0] && jobDescInput?.files[0]) {
        formData.append('resume', resumeInput.files[0])
        formData.append('job_description', jobDescInput.files[0])
        
        // API call to analyze the documents
        const response = await fetch("http://localhost:8000/analyze", {
          method: "POST",
          // Don't set Content-Type header when using FormData - browser will set it automatically
          body: formData,
        })
        
        if (!response.ok) {
          const errorText = await response.text()
          console.error("API Error Response:", errorText)
          throw new Error(`Failed to analyze documents: ${errorText}`)
        }

        const analysisData = await response.json()
        
        // Store the analysis results in localStorage to pass to the dashboard
        localStorage.setItem("analysisData", JSON.stringify(analysisData))
        
        // Navigate to dashboard using react-router-dom
        navigate("/dashboard")
      } else {
        // If we can't find the files, let's try another approach
        // We'll save the files during the upload process
        
        // Create a new FormData
        const formData = new FormData()
        
        // Check if we have the file object cached
        if (window.resumeFileObj && window.jobDescFileObj) {
          formData.append('resume', window.resumeFileObj)
          formData.append('job_description', window.jobDescFileObj)
          
          // API call to analyze the documents
          const response = await fetch("http://localhost:8000/analyze", {
            method: "POST",
            body: formData,
          })
          
          if (!response.ok) {
            const errorText = await response.text()
            console.error("API Error Response:", errorText)
            throw new Error(`Failed to analyze documents: ${errorText}`)
          }

          const analysisData = await response.json()
          localStorage.setItem("analysisData", JSON.stringify(analysisData))
          navigate("/dashboard")
        } else {
          throw new Error("Could not find the uploaded PDF files. Please try uploading them again.")
        }
      }
    } catch (error) {
      console.error("Analysis error:", error)
      setAnalysisError(error.message || "An error occurred during analysis")
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Upload</h1>
          <p className="text-muted-foreground">Upload your resume and job descriptions for analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="history">Upload History</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="hidden">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="history">Upload History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-0 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Resume Upload Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resume Upload
                </CardTitle>
                <CardDescription>Upload your resume or CV in PDF format</CardDescription>
              </CardHeader>
              <CardContent>
                {!resumeFile ? (
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Drag and drop your resume</h3>
                    <p className="text-sm text-muted-foreground mb-4">or click to browse files (PDF only, max 10MB)</p>
                    <Button className="relative">
                      Select Resume
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf"
                        onChange={handleResumeUpload}
                      />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium truncate">{resumeFile.name}</h3>
                            <p className="text-sm text-muted-foreground">{formatFileSize(resumeFile.size)} • PDF</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={removeResumeFile}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove file</span>
                          </Button>
                        </div>

                        {resumeFile.status === "uploading" && (
                          <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Uploading...</span>
                              <span>{resumeFile.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${resumeFile.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {resumeFile.status === "error" && (
                          <Alert variant="destructive" className="mt-2 py-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{resumeFile.errorMessage}</AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>

                    {resumeFile.status === "success" && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Uploaded on {formatDate(resumeFile.uploadedAt)}</span>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="h-4 w-4" /> View
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Download className="h-4 w-4" /> Download
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <RefreshCw className="h-4 w-4" /> Replace
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1 text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" /> Delete
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Job Description Upload Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Job Description Upload
                </CardTitle>
                <CardDescription>Upload job description document in PDF format</CardDescription>
              </CardHeader>
              <CardContent>
                {!jobDescriptionFile ? (
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Drag and drop job description</h3>
                    <p className="text-sm text-muted-foreground mb-4">or click to browse files (PDF only, max 10MB)</p>
                    <Button className="relative">
                      Select Job Description
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf"
                        onChange={handleJobDescriptionUpload}
                      />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium truncate">{jobDescriptionFile.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatFileSize(jobDescriptionFile.size)} • PDF
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={removeJobDescriptionFile}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove file</span>
                          </Button>
                        </div>

                        {jobDescriptionFile.status === "uploading" && (
                          <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Uploading...</span>
                              <span>{jobDescriptionFile.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${jobDescriptionFile.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {jobDescriptionFile.status === "error" && (
                          <Alert variant="destructive" className="mt-2 py-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{jobDescriptionFile.errorMessage}</AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>

                    {jobDescriptionFile.status === "success" && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Uploaded on {formatDate(jobDescriptionFile.uploadedAt)}</span>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="h-4 w-4" /> View
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Download className="h-4 w-4" /> Download
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <RefreshCw className="h-4 w-4" /> Replace
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1 text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" /> Delete
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Analysis Card - Shows when both files are uploaded */}
          {resumeFile?.status === "success" && jobDescriptionFile?.status === "success" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ready for Analysis
                </CardTitle>
                <CardDescription>Both files have been successfully uploaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-4 mb-4">
                  <Info className="h-5 w-5 text-blue-500" />
                  <p className="text-sm">
                    Our system will analyze your resume against the job description to identify matches and gaps in
                    skills, experience, and qualifications.
                  </p>
                </div>
                
                {analysisError && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{analysisError}</AlertDescription>
                  </Alert>
                )}
                
                <Button 
                  className="w-full sm:w-auto" 
                  onClick={startAnalysis} 
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : "Start Analysis"}
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Upload History</CardTitle>
              <CardDescription>View your previously uploaded documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Example history items */}
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="font-medium">my-professional-resume.pdf</h3>
                        <p className="text-sm text-muted-foreground">Resume • 1.2 MB</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Uploaded on Apr 15, 2023 at 10:30 AM</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="font-medium">senior-developer-job.pdf</h3>
                        <p className="text-sm text-muted-foreground">Job Description • 0.8 MB</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Uploaded on Apr 15, 2023 at 10:32 AM</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="font-medium">frontend-lead-position.pdf</h3>
                        <p className="text-sm text-muted-foreground">Job Description • 0.9 MB</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Uploaded on Apr 10, 2023 at 2:15 PM</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="font-medium">resume-march-update.pdf</h3>
                        <p className="text-sm text-muted-foreground">Resume • 1.1 MB</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Uploaded on Mar 25, 2023 at 9:45 AM</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}