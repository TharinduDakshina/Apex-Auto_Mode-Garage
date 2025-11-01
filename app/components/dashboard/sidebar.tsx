"use client"

import { Home, Bookmark, Heart, Settings, User, LogOut, } from "lucide-react"

export default function Sidebar() {
    return (
        <aside className="w-20 bg-sidebar rounded-2xl flex flex-col items-center py-6 gap-8 border-r border-sidebar-border">

            {/* Navigation Icons */}
            <nav className="flex flex-col gap-8">
                <button className="p-3 rounded-lg bg-sidebar-accent/20 text-sidebar-accent hover:bg-sidebar-accent/30 transition">
                    <Home size={20} />
                </button>
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition">
                    <Bookmark size={20} />
                </button>
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition">
                    <Heart size={20} />
                </button>
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition">
                    <Settings size={20} />
                </button>
            </nav>

            {/* Profile Section - Bottom */}
            <div className="mt-auto flex flex-col gap-4">
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition">
                    <User size={20} />
                </button>
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition">
                    <LogOut size={20} />
                </button>
            </div>
        </aside>
    )
}