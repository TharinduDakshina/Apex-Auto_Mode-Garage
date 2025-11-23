"use client"

import {Header} from "@/app/components/dashboard/header";
import HotCollections from "@/app/components/dashboard/hot-collections";
import RegularCollections from "@/app/components/dashboard/reguler-collections";
import {useEffect, useState} from "react";
import {fetchAllVehicles} from "@/app/components/dashboard/api/dashboardAPIs";
import {VehicleModel} from "@/app/types/vehicles";

export default function Dashboard() {

    const [allVehicles, setAllVehicles] = useState<VehicleModel[]>([]);

    useEffect(() => {
        const load = async () => {
            const vehicles:VehicleModel[] = await fetchAllVehicles();
            setAllVehicles(vehicles)
        }
        load();
    },[])


    return (<>
        <main >

            <div className="pl-32 space-y-8 space-x-8">
                <Header/>
                <HotCollections
                    vehicles={allVehicles}
                />
                <RegularCollections
                    vehicles={allVehicles}
                />
            </div>
        </main>
    </>)
}