"use client"

import TopBar from "@/app/components/dashboard/topBar";
import Sidebar from "@/app/components/dashboard/sidebar";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex-1 overflow-auto">
            <TopBar/>
            <div className="flex h-10/12 bg-background fixed pl-2">
                <Sidebar/>
            </div>

            {children}
        </div>
    )
}