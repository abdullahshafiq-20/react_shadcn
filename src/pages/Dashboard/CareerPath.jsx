import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, LineChart, TrendingUp, Calendar, BookOpen, Layers, Filter } from "lucide-react";

export default function CareerPathsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Career Pathways</h1>
          <p className="text-muted-foreground">
            Explore potential career trajectories based on your skills and goals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter Options
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Career Trajectory Visualization
            </CardTitle>
            <CardDescription>
              Visual representation of potential career paths based on your current profile
            </CardDescription>
          </CardHeader>
          <CardContent className="h-96 flex justify-center items-center">
            <div className="text-center">
              <LineChart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Career trajectory visualization would appear here</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
            <CardDescription>
              Based on your current skills and career goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4 border border-muted">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">Senior Developer</h3>
                  <p className="text-sm text-muted-foreground">Technical leadership with deep domain expertise</p>
                </div>
                <Badge className="bg-green-600 hover:bg-green-700">High Match (85%)</Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Skills Match</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Timeline: 1-2 years</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span>Avg. Salary: $120k-$150k</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>Key Skills: 8 matched</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span>Demand: High</span>
                </div>
              </div>
              
              <Button className="w-full">Explore This Path</Button>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 border border-muted">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">Technical Lead</h3>
                  <p className="text-sm text-muted-foreground">Technical decision making with team leadership</p>
                </div>
                <Badge variant="outline">Medium Match (70%)</Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Skills Match</span>
                  <span>70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Timeline: 2-3 years</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span>Avg. Salary: $130k-$170k</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>Key Skills: 6 matched</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span>Demand: Medium</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Explore This Path</Button>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 border border-muted">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">DevOps Engineer</h3>
                  <p className="text-sm text-muted-foreground">Infrastructure and deployment automation</p>
                </div>
                <Badge variant="outline">Medium Match (65%)</Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Skills Match</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Timeline: 1-2 years</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span>Avg. Salary: $110k-$140k</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>Key Skills: 5 matched</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span>Demand: High</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Explore This Path</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Senior Developer Career Path Details</CardTitle>
          <CardDescription>
            A detailed breakdown of the skills, learning path, and job prospects for this career
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="skills">
            <TabsList>
              <TabsTrigger value="skills">Required Skills</TabsTrigger>
              <TabsTrigger value="learning">Learning Path</TabsTrigger>
              <TabsTrigger value="market">Market Demand</TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Advanced JavaScript</span>
                        <Badge variant="outline" className="text-green-500 border-green-500">You have this</Badge>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">System Architecture</span>
                        <Badge variant="outline" className="text-red-500 border-red-500">Gap</Badge>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">React Ecosystem</span>
                        <Badge variant="outline" className="text-green-500 border-green-500">You have this</Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Performance Optimization</span>
                        <Badge variant="outline" className="text-yellow-500 border-yellow-500">Partial</Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Testing Strategies</span>
                        <Badge variant="outline" className="text-yellow-500 border-yellow-500">Partial</Badge>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Soft Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Technical Communication</span>
                        <Badge variant="outline" className="text-green-500 border-green-500">You have this</Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Mentoring</span>
                        <Badge variant="outline" className="text-yellow-500 border-yellow-500">Partial</Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Code Reviews</span>
                        <Badge variant="outline" className="text-green-500 border-green-500">You have this</Badge>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Team Leadership</span>
                        <Badge variant="outline" className="text-red-500 border-red-500">Gap</Badge>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Project Planning</span>
                        <Badge variant="outline" className="text-yellow-500 border-yellow-500">Partial</Badge>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="mt-4">
                View Full Skills Breakdown
              </Button>
            </TabsContent>
            
            <TabsContent value="learning" className="space-y-4 pt-4">
              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                  <h3 className="font-semibold mb-2">Phase 1: Fill Technical Gaps</h3>
                  <p className="text-sm text-muted-foreground mb-3">Estimated time: 3-6 months</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">System Design Fundamentals</p>
                        <p className="text-sm text-muted-foreground">Learn about scalable architectures, design patterns, and system trade-offs</p>
                        <Button variant="link" className="px-0 h-auto text-sm">Find Courses</Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Advanced Testing Strategies</p>
                        <p className="text-sm text-muted-foreground">Master unit, integration, and end-to-end testing methodologies</p>
                        <Button variant="link" className="px-0 h-auto text-sm">Find Courses</Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Performance Optimization</p>
                        <p className="text-sm text-muted-foreground">Learn techniques for front-end and back-end performance improvements</p>
                        <Button variant="link" className="px-0 h-auto text-sm">Find Courses</Button>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                  <h3 className="font-semibold mb-2">Phase 2: Develop Soft Skills</h3>
                  <p className="text-sm text-muted-foreground mb-3">Estimated time: 3-6 months</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Technical Leadership Workshop</p>
                        <p className="text-sm text-muted-foreground">Learn to lead and mentor other developers effectively</p>
                        <Button variant="link" className="px-0 h-auto text-sm">Find Courses</Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Project Management Essentials</p>
                        <p className="text-sm text-muted-foreground">Develop skills for planning and managing technical projects</p>
                        <Button variant="link" className="px-0 h-auto text-sm">Find Courses</Button>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                  <h3 className="font-semibold mb-2">Phase 3: Career Preparation</h3>
                  <p className="text-sm text-muted-foreground mb-3">Estimated time: 1-2 months</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Portfolio Enhancement</p>
                        <p className="text-sm text-muted-foreground">Showcase your technical leadership and advanced projects</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Senior Developer Interview Preparation</p>
                        <p className="text-sm text-muted-foreground">Prepare for system design and leadership question formats</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="market" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                  <h3 className="font-semibold mb-4">Industry Demand</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Overall Market Demand</p>
                      <div className="flex items-center">
                        <div className="w-full bg-muted rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">High</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Job Openings (Last 3 Months)</p>
                      <p className="text-2xl font-bold">1,250+</p>
                      <p className="text-xs text-muted-foreground">+12% increase from previous quarter</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Location Breakdown</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex justify-between">
                          <span>Remote</span>
                          <span>45%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>San Francisco</span>
                          <span>18%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>New York</span>
                          <span>12%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Seattle</span>
                          <span>9%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Other</span>
                          <span>16%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                  <h3 className="font-semibold mb-4">Salary Insights</h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-medium">Average Salary Range</p>
                      <p className="text-2xl font-bold">$120,000 - $150,000</p>
                      <p className="text-xs text-muted-foreground">Based on experience and location</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">By Experience Level</p>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Early Senior (3-5 yrs)</span>
                          <span className="text-sm font-medium">$110k - $130k</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Mid Senior (5-8 yrs)</span>
                          <span className="text-sm font-medium">$130k - $150k</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Experienced (8+ yrs)</span>
                          <span className="text-sm font-medium">$150k - $180k</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Additional Compensation</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex justify-between">
                          <span>Equity</span>
                          <span>Common at 80% of companies</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Bonuses</span>
                          <span>Average 10-20% of base</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Remote Work</span>
                          <span>Available at 75% of positions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-4">Top Companies Hiring</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Tech Giant Inc", "Startup Solutions", "Enterprise Apps", "FinTech Leaders"].map((company) => (
                    <div key={company} className="bg-background p-4 rounded-lg border text-center">
                      <p className="font-medium">{company}</p>
                      <p className="text-sm text-muted-foreground">12 open positions</p>
                      <Button variant="link" size="sm" className="mt-2">
                        View Jobs <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}