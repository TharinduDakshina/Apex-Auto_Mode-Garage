"use server"

import {getAccessToken} from "@/app/lib/session";
import {VehicleModel} from "@/app/types/vehicles";

const BACKEND_URL = `${process.env.BACKEND_URL}/vehicle`

export async function fetchAllVehicles(): Promise<VehicleModel[]> {
    const accessToken =await getAccessToken();
    const response = await fetch(`${BACKEND_URL}/allVehicles`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
        }
    });

    if (!response.ok){
        throw new Error(response.statusText);
    }

    const vehicles:VehicleModel[] = await response.json();
    console.log(vehicles);
    return vehicles;
}
