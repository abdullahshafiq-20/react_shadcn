
import React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  MapPin,
  Banknote,
  Clock,
  Calendar,
  CheckCircle2,
  Filter,
  Search,
  BookmarkPlus,
  MessageSquare,
} from "lucide-react"

export default function JobMatchesPage() {
  const [view, setView] = useState("card")

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Matches</h1>
          <p className="text-muted-foreground">Opportunities aligned with your skills and career goals</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search job matches..."
              className="pl-8 h-10 w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="flex border rounded-md">
            <Button
              variant={view === "card" ? "subtle" : "ghost"}
              size="sm"
              onClick={() => setView("card")}
              className="rounded-none rounded-l-md"
            >
              Cards
            </Button>
            <Button
              variant={view === "list" ? "subtle" : "ghost"}
              size="sm"
              onClick={() => setView("list")}
              className="rounded-none rounded-r-md"
            >
              List
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Matches (12)</CardTitle>
              <CardDescription>Positions matched to your skills and career aspirations</CardDescription>
            </CardHeader>
            <CardContent>
              {view === "card" ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">Senior Frontend Developer</h3>
                      <Badge className="bg-green-600 hover:bg-green-700">90% Match</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span>TechGiant Inc.</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Remote (US)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Banknote className="h-4 w-4" />
                      <span>$130K - $160K</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      Lead frontend development using React, Next.js, and modern JavaScript. Collaborate with UX team
                      and mentor junior developers.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="gap-1">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">Tech Lead - Web Applications</h3>
                      <Badge className="bg-green-600 hover:bg-green-700">85% Match</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span>Innovative Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA (Hybrid)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Banknote className="h-4 w-4" />
                      <span>$140K - $170K</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      Lead a team of developers building scalable web applications. Establish technical standards and
                      architecture while mentoring the team.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="gap-1">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">Senior Full Stack Developer</h3>
                      <Badge variant="outline">75% Match</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span>Digital Ventures</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>New York, NY (Remote)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Banknote className="h-4 w-4" />
                      <span>$125K - $155K</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      Develop both frontend and backend components of web applications. Experience with React, Node.js,
                      and cloud infrastructure required.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="gap-1">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">Frontend Engineering Manager</h3>
                      <Badge variant="outline">70% Match</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span>TechStart Inc.</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Austin, TX (Hybrid)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Banknote className="h-4 w-4" />
                      <span>$150K - $180K</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      Lead a team of frontend engineers, establish technical direction, and collaborate with product and
                      design teams on new features.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="gap-1">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold">Senior Frontend Developer</h3>
                        <Badge className="bg-green-600 hover:bg-green-700">90% Match</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>TechGiant Inc.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Remote (US)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Banknote className="h-4 w-4" />
                          <span>$130K - $160K</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Button size="sm" variant="outline" className="gap-1 flex-1 md:w-24">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm" className="flex-1 md:w-24">
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold">Tech Lead - Web Applications</h3>
                        <Badge className="bg-green-600 hover:bg-green-700">85% Match</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>Innovative Solutions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>San Francisco (Hybrid)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Banknote className="h-4 w-4" />
                          <span>$140K - $170K</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Button size="sm" variant="outline" className="gap-1 flex-1 md:w-24">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm" className="flex-1 md:w-24">
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold">Senior Full Stack Developer</h3>
                        <Badge variant="outline">75% Match</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>Digital Ventures</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>New York (Remote)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Banknote className="h-4 w-4" />
                          <span>$125K - $155K</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Button size="sm" variant="outline" className="gap-1 flex-1 md:w-24">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm" className="flex-1 md:w-24">
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold">Frontend Engineering Manager</h3>
                        <Badge variant="outline">70% Match</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>TechStart Inc.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Austin (Hybrid)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Banknote className="h-4 w-4" />
                          <span>$150K - $180K</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Button size="sm" variant="outline" className="gap-1 flex-1 md:w-24">
                        <BookmarkPlus className="h-4 w-4" /> Save
                      </Button>
                      <Button size="sm" className="flex-1 md:w-24">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-6">
                <Button variant="outline">View All 12 Matches</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Senior Frontend Developer</CardTitle>
                  <CardDescription>TechGiant Inc. • Remote (US)</CardDescription>
                </div>
                <Badge className="bg-green-600 hover:bg-green-700">90% Match</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Salary Range</p>
                      <p className="text-sm text-muted-foreground">$130,000 - $160,000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Employment Type</p>
                      <p className="text-sm text-muted-foreground">Full-time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Posted</p>
                      <p className="text-sm text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    TechGiant Inc. is seeking a Senior Frontend Developer to join our growing team. In this role, you
                    will lead frontend development using React, Next.js, and modern JavaScript practices. You'll
                    collaborate closely with our UX design team and mentor junior developers.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    As a Senior Frontend Developer, you'll create responsive, accessible, and high-performance web
                    applications. You'll help establish best practices, participate in code reviews, and contribute to
                    architecture decisions.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Develop and maintain complex frontend applications using React and Next.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Implement responsive, accessible, and performant user interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Collaborate with UX/UI designers and backend developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Mentor junior developers and conduct code reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Contribute to technical architecture and decision-making</span>
                    </li>
                  </ul>
                </div>

                <Tabs defaultValue="skills">
                  <TabsList>
                    <TabsTrigger value="skills">Skills Match</TabsTrigger>
                    <TabsTrigger value="company">Company Info</TabsTrigger>
                    <TabsTrigger value="similar">Similar Jobs</TabsTrigger>
                  </TabsList>

                  <TabsContent value="skills" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Your Skills Match</h3>
                      <Badge className="bg-green-600 hover:bg-green-700">90% Overall Match</Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">React.js</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Strong Match
                          </Badge>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Next.js</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Strong Match
                          </Badge>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">JavaScript/TypeScript</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Strong Match
                          </Badge>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">UI/UX Implementation</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Strong Match
                          </Badge>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Mentoring</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            Partial Match
                          </Badge>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Performance Optimization</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            Partial Match
                          </Badge>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Update Skills</Button>
                      <Button>Apply Now</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="company" className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">TechGiant Inc.</h3>
                        <p className="text-sm text-muted-foreground">Technology • 5,000+ employees • Founded 2010</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Leading technology company specializing in web and mobile applications, cloud solutions, and
                          digital transformation.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Company Benefits</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Competitive salary</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Remote work options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Health insurance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>401(k) matching</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Professional development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Flexible hours</span>
                        </li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Company Profile
                    </Button>
                  </TabsContent>

                  <TabsContent value="similar" className="pt-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Senior Frontend Engineer</h4>
                          <p className="text-sm text-muted-foreground">WebSolutions • Remote • $125K-$155K</p>
                        </div>
                        <Badge variant="outline">85% Match</Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Lead UI Developer</h4>
                          <p className="text-sm text-muted-foreground">AppMedia • New York • $135K-$165K</p>
                        </div>
                        <Badge variant="outline">82% Match</Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Senior React Developer</h4>
                          <p className="text-sm text-muted-foreground">
                            EcomSolutions • Chicago (Remote) • $120K-$150K
                          </p>
                        </div>
                        <Badge variant="outline">80% Match</Badge>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="gap-2 flex-1">
                    <BookmarkPlus className="h-4 w-4" /> Save Job
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1">
                    <MessageSquare className="h-4 w-4" /> Chat with Recruiter
                  </Button>
                  <Button className="flex-1">Apply Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Job Match Profile</CardTitle>
              <CardDescription>Customize your preferences for better matches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Job Preferences</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Employment Type</span>
                    <span className="text-muted-foreground">Full-time</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Location</span>
                    <span className="text-muted-foreground">Remote, San Francisco</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Salary Range</span>
                    <span className="text-muted-foreground">$120K - $170K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Experience Level</span>
                    <span className="text-muted-foreground">Senior</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Top Skills for Matching</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Update Preferences
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job Application Tracker</CardTitle>
              <CardDescription>Monitor your job application status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Saved Jobs</span>
                  <span className="font-semibold">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Applications</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Interviews</span>
                  <span className="font-semibold">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Offers</span>
                  <span className="font-semibold">0</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="text-sm font-medium">Frontend Developer</h4>
                      <Badge>Interview</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">TechStart • Applied 1 week ago</p>
                  </div>

                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="text-sm font-medium">Senior Web Developer</h4>
                      <Badge variant="outline">Applied</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">WebSolutions • Applied 2 weeks ago</p>
                  </div>

                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="text-sm font-medium">Frontend Tech Lead</h4>
                      <Badge variant="outline">Applied</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Digital Ventures • Applied 3 weeks ago</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Application History
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Insights</CardTitle>
              <CardDescription>Trends for your skills and target roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Market Demand</h3>
                  <div className="h-32 bg-muted/50 rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Demand chart would appear here</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Emerging Skills</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI/ML Integration</span>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        +45% YoY
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Web3/Blockchain</span>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        +38% YoY
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AR/VR Development</span>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        +32% YoY
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button variant="link" className="w-full">
                  View Full Industry Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
