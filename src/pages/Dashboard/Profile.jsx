import React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  ExternalLink,
  Edit,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Award,
  BookOpen,
  CheckCircle2,
  Upload,
  Camera,
  BarChart3,
  FileText,
  Download,
  Share2,
  Plus,
  Clock,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal and professional information</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export as PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share Profile
          </Button>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>Update your personal and professional information</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">Change profile picture</span>
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" /> Upload New Photo
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" defaultValue="Senior Frontend Developer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Specialized in React and modern JavaScript frameworks."
                  />
                </div>

                <Separator />
                <h3 className="font-medium">Social Links</h3>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" defaultValue="https://github.com/johndoe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter" defaultValue="https://twitter.com/johndoe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Personal Website</Label>
                  <Input id="website" defaultValue="https://johndoe.dev" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsEditDialogOpen(false)}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground mb-4">Senior Frontend Developer</p>

                <div className="flex gap-2 mb-6">
                  <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </Button>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-3 w-full text-left">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <span>5+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Joined January 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills Overview</CardTitle>
              <CardDescription>Your top skills based on assessments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">React.js</span>
                  <span className="text-sm text-muted-foreground">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">JavaScript</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">TypeScript</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Next.js</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">CSS/Tailwind</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <Button variant="outline" className="w-full mt-2">
                View All Skills
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Badges and recognitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-xs">Top Performer</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-xs">Fast Learner</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-xs">Problem Solver</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <span className="text-xs">Data Driven</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-2">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <span className="text-xs">Certified Pro</span>
                </div>

                <div className="flex flex-col items-center">
                  <Button variant="outline" size="icon" className="h-16 w-16 rounded-full mb-2">
                    <Plus className="h-6 w-6" />
                  </Button>
                  <span className="text-xs">More</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Passionate frontend developer with 5+ years of experience building responsive and accessible web
                applications. Specialized in React and modern JavaScript frameworks with a focus on creating intuitive
                user experiences.
              </p>
              <p className="text-muted-foreground mt-4">
                I enjoy solving complex UI challenges and optimizing application performance. My background in design
                helps me collaborate effectively with UX teams to deliver polished products that users love.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="experience">
            <TabsList>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-6 pt-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
                        <p className="text-muted-foreground">TechGiant Inc.</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Jan 2021 - Present</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lead frontend development for multiple projects using React, Next.js, and TypeScript. Implemented
                      responsive designs, optimized performance, and mentored junior developers.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Frontend Developer</h3>
                        <p className="text-muted-foreground">WebSolutions Co.</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Mar 2018 - Dec 2020</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developed and maintained client websites and web applications. Collaborated with design and
                      backend teams to implement features and improve user experience.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">HTML</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Junior Web Developer</h3>
                        <p className="text-muted-foreground">Digital Agency Inc.</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Jun 2016 - Feb 2018</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built responsive websites for clients across various industries. Focused on HTML, CSS, and
                      JavaScript development with some backend integration.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">HTML</Badge>
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">jQuery</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6 pt-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                        <p className="text-muted-foreground">University of Technology</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2012 - 2016</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Graduated with honors. Specialized in web technologies and software engineering. Senior project:
                      Collaborative Learning Platform.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">GPA: 3.8/4.0</Badge>
                      <Badge variant="secondary">Dean's List</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Web Development Bootcamp</h3>
                        <p className="text-muted-foreground">Code Academy</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Jan 2017 - Apr 2017</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Intensive 12-week program focused on full-stack web development. Built multiple projects including
                      an e-commerce platform and social media application.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">Full Stack</Badge>
                      <Badge variant="secondary">MERN Stack</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6 pt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>E-commerce Platform</CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Full-stack online shopping application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Built a complete e-commerce solution with product catalog, shopping cart, user authentication, and
                      payment processing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Task Management App</CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Collaborative project management tool</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Developed a Trello-like application for task management with drag-and-drop interface, real-time
                      updates, and team collaboration features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Prisma</Badge>
                      <Badge variant="secondary">Socket.io</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Weather Dashboard</CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Real-time weather visualization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Created an interactive weather dashboard with location search, 7-day forecast, and data
                      visualization using charts and maps.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Chart.js</Badge>
                      <Badge variant="secondary">OpenWeather API</Badge>
                      <Badge variant="secondary">Mapbox</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>Portfolio Website</CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Personal portfolio and blog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Designed and developed a personal portfolio website with project showcase, blog functionality, and
                      contact form.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">MDX</Badge>
                      <Badge variant="secondary">Vercel</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6 pt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className="mb-2">Verified</Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
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
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certificate</span>
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
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certificate</span>
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
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">TypeScript for React Developers</CardTitle>
                      <CardDescription>Advanced TypeScript Patterns</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Udemy</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Mar 2022</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Credential ID: UD-TSR-2022-3456</span>
                    </div>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <Button variant="link" className="h-auto p-0 flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certificate</span>
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
                        <ExternalLink className="h-4 w-4" />
                        <span>Continue Course</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Career Progress</CardTitle>
              <CardDescription>Your professional growth journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Path to Senior Developer</h3>
                    <Badge>85% Complete</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    You're on track to reach your career goal. Focus on system design and leadership skills to progress
                    further.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Next Steps</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Complete System Design certification</p>
                        <p className="text-sm text-muted-foreground">Strengthen your architecture skills</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Develop mentoring experience</p>
                        <p className="text-sm text-muted-foreground">
                          Take on junior developer mentorship opportunities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Lead a major project</p>
                        <p className="text-sm text-muted-foreground">
                          Demonstrate technical leadership on a significant initiative
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
