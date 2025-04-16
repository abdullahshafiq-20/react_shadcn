import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function HomePage() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Floating Navbar */}
      <div className="container mx-auto relative z-30">
        <header className="absolute left-4 right-4 md:left-0 md:right-0 top-4 md:top-8 mx-auto max-w-4xl bg-white/90 backdrop-blur rounded-xl shadow-lg border">
          <nav className="flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
            {isMobile ? (
              <>
                <span className="font-extrabold text-xl md:text-2xl tracking-tight text-primary flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-lg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  CareerCanvas
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative"
                >
                  <Menu className="h-5 w-5" />
                </Button>
                
                {/* Mobile dropdown menu */}
                {isMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border overflow-hidden">
                    <div className="p-2 flex flex-col">
                      <Button 
                        variant="ghost" 
                        className="justify-start px-4 py-2 text-left" 
                        onClick={() => {
                          navigate("/login")
                          setIsMenuOpen(false)
                        }}
                      >
                        Login
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="justify-start px-4 py-2 text-left" 
                        onClick={() => {
                          navigate("/signup")
                          setIsMenuOpen(false)
                        }}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-extrabold text-2xl tracking-tight text-primary flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-lg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    CareerCanvas
                  </span>
                  <span className="text-muted-foreground text-sm font-medium text-center">
                    Empowering Your Career Journey
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" className="px-4 font-semibold transition hover:bg-primary/10" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                  <Button className="px-4 font-semibold shadow-md transition hover:scale-105" onClick={() => navigate("/signup")}>
                    Sign Up
                  </Button>
                </div>
              </>
            )}
          </nav>
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-24">
        <section className="w-full max-w-3xl py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            Visualize your skills, discover personalized learning paths, and connect with opportunities that match your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={() => navigate("/dashboard")}>
              Demo Dashboard <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
        <section className="w-full max-w-5xl py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/90 p-6 md:p-8 rounded-xl border shadow flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-lg md:text-xl">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Map Your Skills</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Build your skill profile and identify gaps through interactive assessments.
              </p>
            </div>
            <div className="bg-white/90 p-6 md:p-8 rounded-xl border shadow flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-lg md:text-xl">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Discover Pathways</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Get personalized learning recommendations and explore career trajectories.
              </p>
            </div>
            <div className="bg-white/90 p-6 md:p-8 rounded-xl border shadow flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-lg md:text-xl">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Monitor your growth, manage credentials, and connect with job opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 mt-auto bg-white/80">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-muted-foreground">
          <p className="mb-2 text-sm md:text-base">© {new Date().getFullYear()} <span className="font-semibold text-primary">CareerCanvas</span>. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline text-xs md:text-sm">Privacy Policy</a>
            <a href="#" className="hover:underline text-xs md:text-sm">Terms of Service</a>
            <a href="#" className="hover:underline text-xs md:text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}