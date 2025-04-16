"use client"

import React, { useState, useEffect } from "react"
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  LineChart,
  Award,
  Settings,
  UserCircle,
  LogOut,
  BarChart3,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, useLocation } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function DashboardSidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const links = [
    // { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/career-paths", label: "Career Paths", icon: LineChart },
    { href: "/dashboard/credentials", label: "Credentials", icon: Award },
    { href: "/dashboard/jobs", label: "Job Matches", icon: Briefcase },
    { href: "/dashboard/learning", label: "Learning Paths", icon: BookOpen },
    { href: "/dashboard/skills", label: "My Skills", icon: BarChart3 },
  ]

  // Handle window resize to detect mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical md breakpoint
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const handleNavigate = (path) => {
    navigate(path)
    if (isMobile) {
      setIsSheetOpen(false)
    }
  }

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b flex items-center gap-3">
        <span className="font-bold text-xl">CareerCanvas</span>
      </div>

      <div className="flex flex-col flex-1 py-6 px-3 space-y-1">
        <button
          key="dashboard"
          onClick={() => handleNavigate("/dashboard")}
          className={`
            flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full text-left
            ${location.pathname === "/dashboard" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}
          `}
          type="button"
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </button>
        {links.map((link) => {
          const isActive = location.pathname === link.href
          return (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full text-left
                ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}
              `}
              type="button"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </button>
          )
        })}
      </div>

      <div className="p-3 border-t mt-auto">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <UserCircle className="h-7 w-7 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
        <Button onClick={() => handleNavigate("/")} variant="ghost" className="w-full justify-start mt-2 text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" /> Log out
        </Button>
      </div>
    </>
  )

  // Mobile floating menu button
  if (isMobile) {
    return (
      <>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50 bg-primary text-primary-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="h-full flex flex-col">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  // Desktop sidebar
  return (
    <div className="h-screen w-64 border-r flex flex-col">
      <SidebarContent />
    </div>
  )
}