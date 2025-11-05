"use client"


import {Header} from "@/app/components/dashboard/header";
import Sidebar from "@/app/components/dashboard/sidebar";
import HotCollections from "@/app/components/dashboard/hot-collections";
import RegularCollections from "@/app/components/dashboard/reguler-collections";
import TopBar from "@/app/components/dashboard/topBar";

export default function Dashboard() {
    return (<>
        <main className="flex-1 overflow-auto">
            <TopBar/>
            <div className="flex h-10/12 bg-background fixed pl-2">
                <Sidebar/>
            </div>
            <div className="pl-32 space-y-8 space-x-8">
                <Header/>
                <HotCollections/>
                <RegularCollections/>
            </div>
        </main>
    </>)
}