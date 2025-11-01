"use client"

import {BellRingIcon} from "lucide-react";

export default function TopBar() {
    return (
        <>
            <div className="flex flex-row  justify-between mb-4">

                <img src="./logo.png" alt="apex-logo" className="size-18" />

                <span className="flex flex-row  space-x-1 p-4 bg-gray-100  rounded-bl-4xl">
                    <BellRingIcon size={20}/>
                    <p className='text-red-600'>4</p>
                </span>

            </div>
        </>
    )
}