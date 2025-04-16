import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  BookOpen,
  Video,
  Award,
  Clock,
  Calendar,
  Filter,
  Search,
  PlayCircle,
  ArrowUpRight,
} from "lucide-react"

export default function LearningPathsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Pathways</h1>
          <p className="text-muted-foreground">
            Personalized learning recommendations to help you reach your career goals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses..."
              className="pl-8 h-10 w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Dashboard</CardTitle>
            <CardDescription>Track your progress and continue where you left off</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-muted/50 p-4 rounded-lg border">
              <div className="w-full sm:w-48 h-24 bg-muted rounded-md flex items-center justify-center">
                <Video className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">System Design Fundamentals</h3>
                    <p className="text-sm text-muted-foreground">Instructor: Alex Chen • 12 modules</p>
                  </div>
                  <Badge className="ml-2">In Progress</Badge>
                </div>
                <Progress value={25} className="h-2 mb-2" />
                <div className="flex justify-between items-center text-sm">
                  <span>3/12 modules completed</span>
                  <span>25%</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Last activity: 2 days ago</span>
                  </div>
                  <Button size="sm" className="gap-1">
                    <PlayCircle className="h-4 w-4" /> Continue
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-muted/50 p-4 rounded-lg border">
              <div className="w-full sm:w-48 h-24 bg-muted rounded-md flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">Technical Leadership Workshop</h3>
                    <p className="text-sm text-muted-foreground">Instructor: Maria Lopez • 8 modules</p>
                  </div>
                  <Badge variant="outline">Not Started</Badge>
                </div>
                <Progress value={0} className="h-2 mb-2" />
                <div className="flex justify-between items-center text-sm">
                  <span>0/8 modules completed</span>
                  <span>0%</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Estimated time: 12 hours</span>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <PlayCircle className="h-4 w-4" /> Start Course
                  </Button>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View All Your Courses
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Statistics</CardTitle>
            <CardDescription>Track your learning progress over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Hours This Month</h3>
                <p className="text-3xl font-bold">18.5</p>
                <p className="text-xs text-muted-foreground">+3.2 from last month</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Courses Completed</h3>
                <p className="text-3xl font-bold">4</p>
                <p className="text-xs text-muted-foreground">+1 this month</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Skills Improved</h3>
                <p className="text-3xl font-bold">7</p>
                <p className="text-xs text-muted-foreground">Since you started</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Certificates Earned</h3>
                <p className="text-3xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">1 pending completion</p>
              </div>
            </div>

            <div className="h-48 flex justify-center items-center bg-muted/50 rounded-lg border">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Learning activity graph would appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList>
          <TabsTrigger value="recommended">Recommended For You</TabsTrigger>
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
          <TabsTrigger value="career">Career Path Specific</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-6 pt-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-green-600 hover:bg-green-700">High Priority</Badge>
                <h3 className="font-bold mb-1">System Design for Senior Engineers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master architecture patterns, scalability principles, and distributed systems design.
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>16 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Certificate</span>
                  </div>
                </div>
                <Button className="w-full">Start Learning</Button>
              </div>
            </div>

            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-green-600 hover:bg-green-700">High Priority</Badge>
                <h3 className="font-bold mb-1">Technical Leadership for Developers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop leadership skills for guiding technical teams and mentoring junior developers.
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>12 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Certificate</span>
                  </div>
                </div>
                <Button className="w-full">Start Learning</Button>
              </div>
            </div>

            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="p-4">
                <Badge className="mb-2 variant=&quot;outline&quot;">Medium Priority</Badge>
                <h3 className="font-bold mb-1">Advanced React Performance Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn techniques to identify and solve performance bottlenecks in React applications.
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>8 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    <span>Hands-on</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Course
                </Button>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            View All Recommendations
          </Button>
        </TabsContent>

        <TabsContent value="popular" className="pt-6">
          <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-center h-48">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Most popular courses would appear here</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="career" className="pt-6">
          <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-center h-48">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Career path specific courses would appear here</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
          <CardDescription>Additional resources to supplement your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-1">Technical Books</h3>
              <p className="text-sm text-muted-foreground mb-3">Curated technical reading for your career path</p>
              <Button variant="ghost" className="w-full flex items-center justify-between">
                View Library <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-1">Coding Challenges</h3>
              <p className="text-sm text-muted-foreground mb-3">Practice technical skills with real-world problems</p>
              <Button variant="ghost" className="w-full flex items-center justify-between">
                Start Practicing <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-1">Mentor Connection</h3>
              <p className="text-sm text-muted-foreground mb-3">Connect with mentors in your target career path</p>
              <Button variant="ghost" className="w-full flex items-center justify-between">
                Find Mentors <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-1">Community Forums</h3>
              <p className="text-sm text-muted-foreground mb-3">Discuss career growth with peers and experts</p>
              <Button variant="ghost" className="w-full flex items-center justify-between">
                Join Discussions <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
