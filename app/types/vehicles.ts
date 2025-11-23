"use server"

export interface VehicleModel {
    id:string;
    vehicle_name:string;
    engine_capacity:number;
    cylinder_capacity:number;
    brake_horsepower:number;
    total_runs:number;
    price:number;
    image_url:string;
    vehicle_condition:string;
}