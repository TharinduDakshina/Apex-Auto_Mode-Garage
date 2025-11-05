"use client"

import {useRouter} from "next/navigation";

export default function CTASection() {
    const  router = useRouter();
    return (
        <section className="container mx-auto px-16 py-16 flex justify-center">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">GET STARTED</h2>
                <button
                    className="bg-red-600 text-white px-8 py-4 cursor-pointer rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                    onClick={() => {router.push(`/components/signIn`)}}
                >
                    Customize Your Car
                </button>
                <p className="text-xl text-gray-700 mt-8">
                    Operating for 6 years in Colombo and Negombo
                </p>
            </div>
        </section>
    )
}