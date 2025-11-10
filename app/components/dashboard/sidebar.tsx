"use client"

import { Home, Settings, User, LogOut, } from "lucide-react"
import { useRouter} from "next/navigation";
import {logOut} from "@/app/components/dashboard/server";

export default function Sidebar() {
    const router = useRouter()

   async function handleLogout() {
        await logOut()
    }

    return (
        <aside className="w-20 bg-sidebar rounded-2xl flex flex-col items-center py-6 gap-8 border-r border-sidebar-border">

            {/* Navigation Icons */}
            <nav className="flex flex-col gap-8">
                <button className="p-3 rounded-lg bg-sidebar-accent/20 text-sidebar-accent hover:bg-sidebar-accent/30 transition"
                        onClick={()=>(router.push("./dashboard"))}
                >
                    <Home size={20} />
                </button>
                <button
                    className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition"
                    onClick={()=>(router.push("./carCustomizer"))}
                >
                    <Settings size={20} />
                </button>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
                <button className="p-3 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 transition"
                    onClick={handleLogout}
                >
                    <LogOut size={20} />
                </button>
            </div>
        </aside>
    )
}