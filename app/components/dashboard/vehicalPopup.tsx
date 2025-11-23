"use client";

import { VehicleModel } from "@/app/types/vehicles";

interface Props {
    open: boolean;
    onClose: () => void;
    vehicle: VehicleModel | undefined;
}

export default function VehiclePopup({ open, onClose, vehicle }: Props) {
    if (!open || !vehicle) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-28 right-120 text-gray-600 hover:text-black cursor-pointer"
                >
                    ❌
                </button>

                {/* Vehicle Name */}
                <h2 className="text-center text-xl font-semibold mb-4">
                    {vehicle.vehicle_name}
                </h2>

                {/* Image box */}
                <div className="w-full bg-gray-100 rounded-xl overflow-hidden border mb-6">
                    <img
                        src={vehicle.image_url}
                        alt={vehicle.vehicle_name}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-row space-y-3">
                    <div className="flex-1/2 items-center justify-center">
                        <p><strong>Engine Capacity</strong></p>
                        <p><strong>Cylinder Capacity</strong></p>
                        <p><strong>Break Horsepower</strong></p>
                        <p><strong>Total Runs</strong></p>
                        <p><strong>Price</strong></p>
                        <p><strong>Condition</strong></p>
                    </div>
                    <div className="flex-1/2 items-center justify-center">
                        <p><strong>:</strong> {vehicle.engine_capacity} cc</p>
                        <p><strong>:</strong> {vehicle.cylinder_capacity}</p>
                        <p><strong>:</strong> {vehicle.brake_horsepower} BHP</p>
                        <p><strong>:</strong> {vehicle.total_runs} km</p>
                        <p><strong>:</strong> LKR {vehicle.price}</p>
                        <p><strong>:</strong> {vehicle.vehicle_condition}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
