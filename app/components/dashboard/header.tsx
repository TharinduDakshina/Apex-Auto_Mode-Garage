"use client"

import { Search } from "lucide-react"
import {useEffect, useState} from "react";

export function Header() {

    const [mainTime,setMainTime] = useState("Good Morning")

    useEffect(()=>{

        function updateTime(){
            const currentTime = new Date().getHours();
            if (currentTime >=5 && currentTime < 12){
                setMainTime("Good Morning")
            } else if (currentTime >=12 && currentTime < 18){
                setMainTime("Good Afternoon")
            }else {
                setMainTime("Good Night")
            }
        }

        const interval = setInterval(()=>{
            updateTime()
        },60000);
        return () => {clearInterval(interval)}
    },[])



    return (
        <header className="bg-transparent px-8 py-6">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">{mainTime},</p>
                    <h1 className="text-2xl font-semibold text-foreground">Jeff Reeves</h1>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl">
                    <Search size={18} className="text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                    />
                </div>

            </div>
        </header>
    )
}