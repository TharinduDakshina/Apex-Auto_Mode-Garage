import {Gauge, Paintbrush, Wrench} from "lucide-react";

export default function ServiceSection() {
    return (
        <section className="px-16 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">SERVICES</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Performance Upgrades */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:scale-y-95 hover:saturate-50 hover:sh cursor-pointer ">
                        <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                            <Gauge className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Performance<br />Upgrades
                        </h3>
                        <p className="text-gray-600 mt-4">
                            Engine tuning and power enhancements
                        </p>
                    </div>

                    {/* Aesthetic Customization */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:scale-y-95 hover:saturate-50 hover:shadow-2xl cursor-pointer ">
                        <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                            <Paintbrush className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Aesthetic<br />Customization
                        </h3>
                        <p className="text-gray-600 mt-4">
                            Body kits, paint wraps, and custom interiors
                        </p>
                    </div>

                    {/* Restoration & Repairs */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:scale-y-95 hover:saturate-50 hover:shadow-2xl cursor-pointer ">
                        <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                            <Wrench className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Restoration<br />& Repairs
                        </h3>
                        <p className="text-gray-600 mt-4">
                            Vehicle restoration and maintenance
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}