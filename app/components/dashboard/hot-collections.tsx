"use client"

import {CarTaxiFront, Droplet, Dumbbell, MoveVertical, Zap} from "lucide-react";

export default function HotCollections() {
    return (<section>
            <h2 className="text-xl font-semibold text-foreground mb-6">🔥 Hot Collections</h2>

            <div className="grid grid-cols-2 gap-8">
                {/* Range Rover Card */}
                <div className="bg-orange-300 rounded-2xl p-6 border border-border overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gray-400 rounded-full"/>

                                <h3 className="font-semibold text-foreground">Range Rover</h3>
                            </div>

                            <img src="./cars/rangerover.webp" alt="ranerover-car" width="90%"
                                 className="rounded-xl opacity-95 pt-8"/>
                        </div>

                        {/* Car image placeholder */}
                        <div className="flex flex-col p-4 w-80 h-72 " >
                            <div className="flex flex-row w-full items-center gap-3 mb-2">
                                <div className="w-11/12 h-20 bg-orange-100 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Zap className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">1997 CC</p>
                                </div>

                                <div className="w-11/12 h-20 bg-yellow-200 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Droplet className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">6 Speed</p>
                                </div>
                            </div>

                            <div className="flex flex-row w-full items-center gap-3 mb-2">

                                <div className="w-11/12 h-20 bg-yellow-100 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <MoveVertical className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">246.4 BHP</p>
                                </div>

                                <div className="w-11/12 h-20 bg-blue-100 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Dumbbell className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">4 Cylinder</p>
                                </div>
                            </div>

                            <div className="flex flex-row w-full h-40 bg-blue-100 opacity-80 justify-center items-center rounded-xl pl-2 gap-3 mb-1">

                                <div className="flex flex-row justify-between items-center gap-3">
                                    <CarTaxiFront className="rounded-full bg-gray-300 size-9 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans ">Total Run : 20 000 Km</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-border">
                        <div>
                            <p className="text-2xl font-bold text-foreground">$38,700</p>
                            <p className="text-xs text-muted-foreground mt-1">See details</p>
                        </div>
                    </div>
                </div>

                {/* Nissan GTR Card */}
                <div className="bg-gray-300 rounded-2xl p-6 border border-border overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gray-400 rounded-full"/>

                                <h3 className="font-semibold text-foreground">Nisan GTR</h3>
                            </div>

                            <img src="./cars/nisan_gtr.avif" alt="ranerover-car" width="90%"
                                 className="pt-8 rounded-xl opacity-95 "/>
                        </div>

                        {/* Car image placeholder */}
                        <div className="flex flex-col p-4 w-80 h-72 " >
                            <div className="flex flex-row w-full items-center gap-3 mb-2">
                                <div className="w-11/12 h-20 bg-orange-100 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Zap className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">3799 CC</p>
                                </div>

                                <div className="w-11/12 h-20 bg-yellow-200 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Droplet className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">6 Speed</p>
                                </div>
                            </div>

                            <div className="flex flex-row w-full items-center gap-3 mb-2">

                                <div className="w-11/12 h-20 bg-purple-200 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <MoveVertical className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">591.4 BHP</p>
                                </div>

                                <div className="w-11/12 h-20 bg-green-100 rounded-lg flex flex-col items-center justify-center gap-1 ">
                                    <Dumbbell className="rounded-full bg-gray-300 size-8 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans">6 Cylinder</p>
                                </div>
                            </div>

                            <div className="flex flex-row w-full h-40 bg-green-400 opacity-80 justify-center items-center rounded-xl pl-2 gap-3 mb-1">

                                <div className="flex flex-row justify-between items-center gap-3">
                                    <CarTaxiFront className="rounded-full bg-gray-300 size-9 p-1"/>
                                    <p className="text-xs font-medium text-black font-sans ">Total Run : 9 254 Km</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-border">
                        <div>
                            <p className="text-2xl font-bold text-foreground">$187,700</p>
                            <p className="text-xs text-muted-foreground mt-1">See details</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}