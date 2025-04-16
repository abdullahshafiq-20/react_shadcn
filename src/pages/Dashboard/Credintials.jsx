"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, CheckCircle, Clock, Download, ExternalLink, FileText, Link2, Plus, Upload } from "lucide-react"

export default function CredentialsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Credentials</h1>
          <p className="text-muted-foreground">Manage your certifications, courses, and education</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import Certificates
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Credential
          </Button>
        </div>
      </div>

      <Tabs defaultValue="certificates">
        <TabsList>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="courses">Completed Courses</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="certificates" className="space-y-6 pt-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="mb-2">Verified</Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download certificate</span>
                  </Button>
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">Frontend Development Professional</CardTitle>
                  <CardDescription>React.js Certification</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>ReactTraining.com</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Jan 2023</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Credential ID: RT-FED-2023-0472</span>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                    <Link2 className="h-4 w-4" />
                    <span>View Certificate</span>
                  </Button>
                  <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>Verify</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="mb-2">Verified</Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download certificate</span>
                  </Button>
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">Advanced JavaScript Patterns</CardTitle>
                  <CardDescription>Professional JavaScript Development</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>FrontendMasters</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Nov 2022</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Credential ID: FM-AJS-2022-9863</span>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                    <Link2 className="h-4 w-4" />
                    <span>View Certificate</span>
                  </Button>
                  <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>Verify</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2">
                    In Progress
                  </Badge>
                  <Button variant="ghost" size="icon" disabled className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download certificate</span>
                  </Button>
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">System Design for Web Developers</CardTitle>
                  <CardDescription>Architecture and Scalability</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>EducativeIO</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>75% Complete</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Estimated completion: Apr 2023</span>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                    <Link2 className="h-4 w-4" />
                    <span>Continue Course</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline">View All Certificates</Button>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6 pt-6">
          <div className="grid gap-4">
            <div className="bg-muted/50 p-4 rounded-lg border flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Modern JavaScript: From Fundamentals to ES2022</h3>
                  <Badge>Completed</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>Frontend Masters • 16 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive JavaScript course covering ES6+ features, asynchronous patterns, and modern best
                  practices.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Next.js for Production Applications</h3>
                  <Badge>Completed</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>Frontend Masters • 12 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building production-ready applications with Next.js, including SSR, ISR, and API routes.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">TypeScript for React Developers</h3>
                  <Badge>Completed</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>Udemy • 10 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Using TypeScript to build type-safe React applications with advanced type patterns.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Web Performance Optimization</h3>
                  <Badge>Completed</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>Google Developers • 8 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Techniques for measuring and improving web application performance, including Core Web Vitals.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline">View All Courses</Button>
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6 pt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription>University of Technology</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-muted-foreground">2017 - 2021</div>
                  <Badge>Graduated</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>GPA: 3.8/4.0</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dean's List: 7 semesters</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Senior Project: Web-based Collaborative Learning Platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">Database Systems</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>Web Development Bootcamp</CardTitle>
                  <CardDescription>Code Academy</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-muted-foreground">Jan 2022 - Apr 2022 (16 weeks)</div>
                  <Badge>Completed</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Intensive full-stack web development training</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Capstone Project: E-commerce Platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
