"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  const [analysisData, setAnalysisData] = useState(null)
  const [activeTab, setActiveTab] = useState("gap-analysis")

  useEffect(() => {
    // Retrieve analysis data from localStorage
    const storedData = localStorage.getItem("analysisData")
    if (storedData) {
      try {
        setAnalysisData(JSON.parse(storedData))
      } catch (error) {
        console.error("Error parsing analysis data:", error)
      }
    }
  }, [])

  if (!analysisData) {
    return (
      <div className="p-6 flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>No Analysis Data</CardTitle>
            <CardDescription>
              No analysis data found. Please upload your resume and job description first.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  const { gap_analysis, user_skills, job_skills } = analysisData
  const { missing_skills, existing_skills } = gap_analysis

  // Calculate match percentage
  const matchPercentage = Math.round(
    (existing_skills.length / (existing_skills.length + missing_skills.length)) * 100
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skills Analysis Dashboard</h1>
        <p className="text-muted-foreground">
          Review your skills match and identify areas for improvement
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Match Analysis</CardTitle>
          <CardDescription>
            Your resume matches {matchPercentage}% of the required skills for this job
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-4 bg-muted rounded-full overflow-hidden mb-4">
            <div 
              className={`h-full ${matchPercentage >= 70 ? 'bg-green-500' : matchPercentage >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{ width: `${matchPercentage}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 border rounded-lg">
              <div className="font-medium text-muted-foreground">Total Required Skills</div>
              <div className="text-2xl font-bold mt-1">{job_skills.length}</div>
            </div>
            <div className="p-4 border rounded-lg bg-green-50">
              <div className="font-medium text-green-600">Matching Skills</div>
              <div className="text-2xl font-bold mt-1 text-green-600">{existing_skills.length}</div>
            </div>
            <div className="p-4 border rounded-lg bg-red-50">
              <div className="font-medium text-red-600">Missing Skills</div>
              <div className="text-2xl font-bold mt-1 text-red-600">{missing_skills.length}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="gap-analysis">Gap Analysis</TabsTrigger>
          <TabsTrigger value="your-skills">Your Skills</TabsTrigger>
          <TabsTrigger value="job-skills">Required Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="gap-analysis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Matching Skills
                </CardTitle>
                <CardDescription>Skills from your resume that match the job requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {existing_skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md bg-green-50">
                      <div>
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-sm text-muted-foreground">Your Proficiency: {skill.proficiency}</div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Missing Skills
                </CardTitle>
                <CardDescription>Skills required by the job that are not found in your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {missing_skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md bg-red-50">
                      <div>
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-sm text-muted-foreground">Required Proficiency: {skill.proficiency}</div>
                      </div>
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="your-skills">
          <Card>
            <CardHeader>
              <CardTitle>Your Skills</CardTitle>
              <CardDescription>Skills identified from your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {user_skills.map((skill, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <div className="font-medium">{skill.skill}</div>
                    <div className="text-sm text-muted-foreground">
                      <Badge variant="outline">{skill.proficiency}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="job-skills">
          <Card>
            <CardHeader>
              <CardTitle>Required Skills</CardTitle>
              <CardDescription>Skills required for this job position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {job_skills.map((skill, index) => {
                  const isMatched = existing_skills.some(
                    existingSkill => existingSkill.skill === skill.skill
                  )
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-3 border rounded-md ${isMatched ? 'bg-green-50 border-green-200' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{skill.skill}</div>
                        {isMatched && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <Badge variant="outline">{skill.proficiency}</Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}