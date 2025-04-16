import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AreaChart, BarChart, BadgePlus, Briefcase, ChevronRight, Flag, LineChart, Trophy } from "lucide-react";
// import Link from "next/link" // Removed

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's your career progress.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Flag className="h-4 w-4" />
            Set New Goal
          </Button>
          <Button className="flex items-center gap-2">
            <BadgePlus className="h-4 w-4" />
            Add Skills
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Mapped</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+4 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <div className="mt-2">
              <Progress value={65} />
            </div>
            <p className="text-xs text-muted-foreground mt-2">3 courses in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Based on your profile</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credentials</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 certificates pending</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="skills">
        <TabsList>
          <TabsTrigger value="skills">Skills Radar</TabsTrigger>
          <TabsTrigger value="career">Career Trajectory</TabsTrigger>
          <TabsTrigger value="learning">Learning Recommendation</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Analysis</CardTitle>
              <CardDescription>Current skill profile and identified gaps</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex justify-center items-center">
              <div className="text-center">
                <AreaChart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Skill radar visualization would appear here</p>
                <Button
                  variant="link"
                  className="mt-2"
                  onClick={() => navigate("/dashboard/skills")}
                >
                  View detailed skills analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Potential Career Paths</CardTitle>
              <CardDescription>Based on your current skills and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Senior Developer</h3>
                    <Badge>High Match</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    You have 85% of the required skills for this role. Focus on system architecture and team leadership.
                  </p>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Explore path <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Technical Lead</h3>
                    <Badge variant="outline">Medium Match</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    You have 70% of the required skills. Develop leadership and project management experience.
                  </p>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Explore path <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">DevOps Engineer</h3>
                    <Badge variant="outline">Medium Match</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    You have 65% of the required skills. Focus on CI/CD pipelines and cloud infrastructure.
                  </p>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Explore path <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Learning Paths</CardTitle>
              <CardDescription>Personalized courses and resources to help you reach your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">System Design Fundamentals</h3>
                    <Badge className="bg-green-600 hover:bg-green-700">High Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Learn how to design scalable systems - a key skill for senior roles.
                  </p>
                  <Progress value={15} className="h-2 mb-2" />
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Continue learning <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Team Leadership</h3>
                    <Badge className="bg-green-600 hover:bg-green-700">High Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Develop skills to effectively lead technical teams and mentor junior developers.
                  </p>
                  <Progress value={0} className="h-2 mb-2" />
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Start course <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Advanced Cloud Architecture</h3>
                    <Badge variant="outline">Medium Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Master cloud services and infrastructure as code for modern applications.
                  </p>
                  <Progress value={0} className="h-2 mb-2" />
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                    Start course <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}