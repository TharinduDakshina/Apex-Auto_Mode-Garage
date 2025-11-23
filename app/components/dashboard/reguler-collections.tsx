"use client"
import {VehicleModel} from "@/app/types/vehicles";
import {useState} from "react";
import VehiclePopup from "@/app/components/dashboard/vehicalPopup";

export default function RegularCollections({vehicles}: { vehicles: VehicleModel[] }) {

    const [isDialog, setIsDialog] = useState<boolean>(false);
    const [vehicle, setIsVehicle] = useState<VehicleModel>();

    function handleSeeMoreDetails(item: VehicleModel) {
        setIsVehicle(item)
        setIsDialog(true)
    }
    function handleDialogClose() {
        setIsDialog(false)

    }
    return (
        <section>
            <h2 className="text-xl font-semibold text-foreground mb-6">Regular Collections</h2>

            <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-border bg-muted/50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">CAR MODEL</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">TOTAL RUNS</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">CONDITION</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">ASKING PRICE</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vehicles.map((item) => (
                        <tr key={item.id} className="border-b border-border hover:bg-muted/30 transition">
                            <td className="px-6 py-4 text-sm text-foreground">{item.vehicle_name}</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">{item.total_runs}</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">{item.vehicle_condition}</td>
                            <td className="px-6 py-4 text-sm font-medium text-foreground">{item.price}</td>
                            <td className="px-6 py-4">
                                <button
                                    className={`px-3 py-1 rounded-xl cursor-pointer text-xs font-medium transition ${
                                        item.total_runs >= 40000
                                            ? "bg-blue-500 text-white hover:bg-blue-600"
                                            : item.total_runs >= 20000
                                                ? "bg-cyan-400 text-cyan-900 hover:bg-cyan-500"
                                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}

                                    onClick={()=>{handleSeeMoreDetails(item)}}
                                >
                                    See details →
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <VehiclePopup
                open={isDialog}
                onClose={handleDialogClose}
                vehicle={vehicle}
            />

            {/*{isDialog && (*/}
            {/*    <>*/}
            {/*        */}
            {/*    </>*/}
            {/*)}*/}
        </section>
    )
}