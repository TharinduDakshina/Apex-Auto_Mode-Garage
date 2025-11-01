"use client"

import {useRouter} from "next/navigation";

export default function SignIn() {
    const router = useRouter()
    return (
        <div className="min-h-screen flex justify-center items-center">

            <img
                src="../cars/honda_civic.jpg"
                alt="background-image"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="relative right-100 bottom-20 z-10 bg-black backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 w-full max-w-lg mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-6 text-white tracking-wide uppercase">
                    Apex Auto Mods
                </h1>
                <h2 className="text-2xl font-bold text-center mb-8 text-white/85">
                    Sign In
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block font-semibold mb-1 text-white">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            placeholder="Email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-white">Password</label>
                        <input
                            type="password"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        className="w-full bg-gray-200 text-black py-3 rounded-lg font-bold text-lg cursor-pointer hover:bg-red-700 transition shadow-md hover:text-white"
                    >
                        Sign In
                    </button>

                    <div>
                        <label
                            className="relative left-48 font-semibold mb-1 text-white cursor-pointer hover:underline"
                            onClick={() => {router.push(`/components/signUp`)}}
                        >signUp</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
