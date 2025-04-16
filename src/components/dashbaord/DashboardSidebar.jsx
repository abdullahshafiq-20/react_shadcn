"use client"

import React from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, useLocation } from "react-router-dom"

export function DashboardSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    // { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/career-paths", label: "Career Paths", icon: LineChart },
    { href: "/dashboard/credentials", label: "Credentials", icon: Award },
    { href: "/dashboard/jobs", label: "Job Matches", icon: Briefcase },
    { href: "/dashboard/learning", label: "Learning Paths", icon: BookOpen },
    { href: "/dashboard/skills", label: "My Skills", icon: BarChart3 },
  ]

  return (
    <div className="h-screen w-64 border-r flex flex-col">
      <div className="p-4 border-b flex items-center gap-3">
        <span className="font-bold text-xl">CareerCanvas</span>
      </div>

      <div className="flex flex-col flex-1 py-6 px-3 space-y-1">
        <button
          key="dashboard"
          onClick={() => navigate("/dashboard")}
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
              onClick={() => navigate(link.href)}
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
        <Button onClick={() => navigate("/")} variant="ghost" className="w-full justify-start mt-2 text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" /> Log out
        </Button>
      </div>
    </div>
  )
} 