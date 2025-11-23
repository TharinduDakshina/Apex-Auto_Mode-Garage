"use client";

import {JSX, useEffect, useRef} from "react";
import {CarTaxiFront, Droplet, Dumbbell, MoveVertical, Zap} from "lucide-react";
import {VehicleModel} from "@/app/types/vehicles";

export default function HotCollections({vehicles}: { vehicles: VehicleModel[] }) {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let index = 0;

        const interval = setInterval(() => {
            if (!container) return;

            index++;
            const cardWidth = 330; // card width (min-w-[300px] + gap)

            container.scrollTo({
                left: index * cardWidth,
                behavior: "smooth"
            });

            // Reset loop
            if (index >= vehicles.length - 1) index = -1;

        }, 2000); // auto scroll every 2 seconds

        return () => clearInterval(interval);
    }, [vehicles]);

    return (
        <section>
            <h2 className="text-xl font-semibold text-foreground mb-6">🔥 Hot Collections</h2>

            {/* Only 2 cards visible */}
            <div
                ref={scrollRef}
                className="flex gap-12 overflow-hidden scroll-smooth no-scrollbar "
            >
                {vehicles.map((v) => (
                    <div
                        key={v.id}
                        className="w-[25%] bg-orange-300 rounded-2xl p-6 border border-border flex-shrink-0 "
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-full" />
                            <h3 className="font-semibold">{v.vehicle_name}</h3>
                        </div>

                        <img
                            src={v.image_url}
                            alt={v.vehicle_name}
                            className="rounded-xl w-full object-fill mb-4 opacity-95"
                        />

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <Spec icon={<Zap className="size-8 p-1 bg-gray-300 rounded-full" />} label={`${v.engine_capacity} CC`} />
                            <Spec icon={<Droplet className="size-8 p-1 bg-gray-300 rounded-full" />} label={`6 Speed`} />
                            <Spec icon={<MoveVertical className="size-8 p-1 bg-gray-300 rounded-full" />} label={`${v.brake_horsepower} BHP`} />
                            <Spec icon={<Dumbbell className="size-8 p-1 bg-gray-300 rounded-full" />} label={`${v.cylinder_capacity} Cylinder`} />
                        </div>

                        <div className="flex items-center gap-3 bg-blue-100 rounded-xl p-3 mb-3">
                            <CarTaxiFront className="size-9 p-1 bg-gray-300 rounded-full" />
                            <p className="text-xs font-medium">
                                Total Run: {v.total_runs.toLocaleString()} Km
                            </p>
                        </div>

                        <div className="border-t pt-3">
                            <p className="text-2xl font-bold">${v.price}</p>
                            <p className="text-xs text-muted-foreground">See details</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Spec({ icon, label }: { icon: JSX.Element; label: string }) {
    return (
        <div className="h-20 bg-white rounded-lg flex flex-col items-center justify-center shadow-sm">
            {icon}
            <p className="text-xs font-medium">{label}</p>
        </div>
    );
}
