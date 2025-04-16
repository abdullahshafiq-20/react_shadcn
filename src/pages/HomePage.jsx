import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navbar */}
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-30 shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-6">
          <div className="flex flex-col items-center gap-2">
            <span className="font-extrabold text-3xl tracking-tight text-primary flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-lg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              CareerCanvas
            </span>
            <span className="text-muted-foreground text-base font-medium text-center">
              Empowering Your Career Journey
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" className="px-6 font-semibold transition hover:bg-primary/10" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button className="px-6 font-semibold shadow-md transition hover:scale-105" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <section className="w-full max-w-3xl py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Unlock Your Career Potential
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Visualize your skills, discover personalized learning paths, and connect with opportunities that match your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={() => navigate("/dashboard")}>
              Demo Dashboard <ArrowRight className="h-5 w-5" />
            </Button>
            {/* <Button size="lg" variant="outline" onClick={() => navigate("/career-paths")}>
              Explore Career Paths
            </Button> */}
          </div>
        </section>
        <section className="w-full max-w-5xl py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 p-8 rounded-xl border shadow flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Map Your Skills</h3>
              <p className="text-muted-foreground">
                Build your skill profile and identify gaps through interactive assessments.
              </p>
            </div>
            <div className="bg-white/90 p-8 rounded-xl border shadow flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Pathways</h3>
              <p className="text-muted-foreground">
                Get personalized learning recommendations and explore career trajectories.
              </p>
            </div>
            <div className="bg-white/90 p-8 rounded-xl border shadow flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your growth, manage credentials, and connect with job opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto bg-white/80">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-muted-foreground">
          <p className="mb-2">© {new Date().getFullYear()} <span className="font-semibold text-primary">CareerCanvas</span>. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="hover:underline text-sm">Terms of Service</a>
            <a href="#" className="hover:underline text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}