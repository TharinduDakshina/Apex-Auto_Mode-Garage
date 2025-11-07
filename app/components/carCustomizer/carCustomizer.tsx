"use client"

import { useState } from "react";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useGLTF} from "@react-three/drei";
import {list} from "postcss";
import CarModel from "@/app/components/carCustomizer/carModel";

interface CarParts {
    spoiler: boolean,
    frontBumper: boolean,
    rearBumper: boolean,
    hood: boolean,
    roof: boolean,
    doors: boolean,
}

export default function CarCustomizer() {
    const [color, setColor] = useState("#5f8103");
    const [rotationY, setRotationY] = useState(0);
    const [rotationZ, setRotationZ] = useState(0);

    const [parts, setParts] = useState<CarParts>({
        spoiler: true,
        frontBumper: true,
        rearBumper: true,
        hood: true,
        roof: true,
        doors: true,
    });

    return (
        <div className="p-8 pl-32 grid grid-cols-3 md:grid-cols-4 gap-6">
            {/* 3D CAR VIEW */}
            <div className="col-span-3 h-[500px] rounded-xl overflow-hidden bg-gray-800">
                <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
                    <ambientLight intensity={0.8} />
                    <Environment preset="city" />
                    <CarModel color={color} rotationY={rotationY} rotationZ={rotationZ} parts={parts} />
                    <OrbitControls />
                </Canvas>
            </div>

            {/* CONTROLS */}
            <div className="col-span-1 space-y-6">

                {/* COLOR PICKER */}
                <div>
                    <h2 className="font-semibold mb-2">Color</h2>
                    <input
                        type="color"
                        value={color}
                        className="w-full h-12 border rounded"
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>

                {/* PARTS */}
                <div>
                    <h2 className="font-semibold mb-2">Body Parts</h2>
                    {Object.keys(parts).map((key) => (
                        <label className="flex items-center gap-2 mb-2" key={key}>
                            <input
                                type="checkbox"
                                checked={(parts as any)[key]}
                                onChange={() =>
                                    setParts((p) => ({ ...p, [key]: !(p as any)[key] }))
                                }
                            />
                            {key}
                        </label>
                    ))}
                </div>

                {/* ROTATION */}
                <div>
                    <h2 className="font-semibold mb-2">Rotate</h2>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            className="p-2 bg-gray-200 rounded"
                            onClick={() => setRotationY(rotationY + Math.PI / 2)}
                        >
                            Y + 90°
                        </button>
                        <button
                            className="p-2 bg-gray-200 rounded"
                            onClick={() => setRotationY(rotationY - Math.PI / 2)}
                        >
                            Y - 90°
                        </button>
                        <button
                            className="p-2 bg-gray-200 rounded"
                            onClick={() => setRotationZ(rotationZ + Math.PI / 2)}
                        >
                            Z + 90°
                        </button>
                        <button
                            className="p-2 bg-gray-200 rounded"
                            onClick={() => setRotationZ(rotationZ - Math.PI / 2)}
                        >
                            Z - 90°
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

