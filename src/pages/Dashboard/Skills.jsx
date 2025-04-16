import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PieChart, BadgePlus, Download, UploadCloud, LineChart } from "lucide-react"

export default function SkillsPage() {
  const technicalSkills = [
    { name: "JavaScript", level: 85, status: "Strong" },
    { name: "React", level: 80, status: "Strong" },
    { name: "Node.js", level: 70, status: "Proficient" },
    { name: "SQL", level: 65, status: "Proficient" },
    { name: "Python", level: 55, status: "Moderate" },
    { name: "AWS", level: 45, status: "Basic" },
    { name: "Docker", level: 40, status: "Basic" },
    { name: "TypeScript", level: 60, status: "Moderate" },
  ]

  const softSkills = [
    { name: "Communication", level: 75, status: "Strong" },
    { name: "Teamwork", level: 80, status: "Strong" },
    { name: "Problem Solving", level: 85, status: "Strong" },
    { name: "Time Management", level: 70, status: "Proficient" },
    { name: "Leadership", level: 65, status: "Proficient" },
    { name: "Adaptability", level: 80, status: "Strong" },
  ]

  const skillGaps = [
    { name: "System Design", importance: "Critical", category: "Technical" },
    { name: "CI/CD Pipelines", importance: "High", category: "Technical" },
    { name: "Team Leadership", importance: "High", category: "Soft" },
    { name: "Cloud Architecture", importance: "Medium", category: "Technical" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills Profile</h1>
          <p className="text-muted-foreground">Track, analyze, and improve your skill set</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <UploadCloud className="h-4 w-4" />
            Import Skills
          </Button>
          <Button className="flex items-center gap-2">
            <BadgePlus className="h-4 w-4" />
            Add New Skill
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Skills Overview
            </CardTitle>
            <CardDescription>Visual breakdown of your current skill profile</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex justify-center items-center">
            <div className="text-center">
              <PieChart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Skills distribution visualization would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Growth Trajectory
            </CardTitle>
            <CardDescription>Your skill development over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex justify-center items-center">
            <div className="text-center">
              <LineChart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Skill growth visualization would appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="technical">
        <TabsList>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="gaps">Identified Gaps</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills Assessment</CardTitle>
              <CardDescription>
                Your proficiency in technical skills based on self-assessment and credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          skill.status === "Strong"
                            ? "text-green-500 border-green-500"
                            : skill.status === "Proficient"
                              ? "text-blue-500 border-blue-500"
                              : skill.status === "Moderate"
                                ? "text-yellow-500 border-yellow-500"
                                : "text-muted-foreground"
                        }`}
                      >
                        {skill.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soft" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills Assessment</CardTitle>
              <CardDescription>Your interpersonal and non-technical professional capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          skill.status === "Strong"
                            ? "text-green-500 border-green-500"
                            : skill.status === "Proficient"
                              ? "text-blue-500 border-blue-500"
                              : skill.status === "Moderate"
                                ? "text-yellow-500 border-yellow-500"
                                : "text-muted-foreground"
                        }`}
                      >
                        {skill.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gaps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gaps Analysis</CardTitle>
              <CardDescription>Skills you should develop to reach your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {skillGaps.map((gap) => (
                  <div key={gap.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{gap.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {gap.category}
                        </Badge>
                      </div>
                      <Badge
                        className={`text-xs ${
                          gap.importance === "Critical"
                            ? "bg-red-500 hover:bg-red-600"
                            : gap.importance === "High"
                              ? "bg-orange-500 hover:bg-orange-600"
                              : "bg-yellow-500 hover:bg-yellow-600"
                        }`}
                      >
                        {gap.importance}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {gap.name === "System Design" &&
                        "Essential for senior roles. Focus on architecture patterns and scalability principles."}
                      {gap.name === "CI/CD Pipelines" &&
                        "Important for DevOps roles. Learn about continuous integration and deployment automation."}
                      {gap.name === "Team Leadership" &&
                        "Key for management positions. Develop mentoring and team coordination skills."}
                      {gap.name === "Cloud Architecture" &&
                        "Growing importance in modern development. Learn about cloud provider offerings and best practices."}
                    </p>
                    <Button variant="outline" size="sm" className="text-xs">
                      Find Learning Resources
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
