"use client"

import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {signInApi} from "@/app/components/signIn/api/signInApi";

export default function SignIn() {
    const router = useRouter()

    const [form, setForm] = useState({
        name: "",
        password: "",
    });

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form,[e.target.name]: e.target.value});
    }

   async function handelSubmission(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const res = await signInApi(form);

        if (res){
            setForm({name: "", password: "",});
            router.push("/components/dashboard");
        }else {
            alert("Username or Password is incorrect");
        }

    }

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

                <form className="space-y-6" onSubmit={handelSubmission}>
                    <div>
                        <label className="block font-semibold mb-1 text-white">Email</label>
                        <input
                            name="name"
                            value={form.name}
                            type="text"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            placeholder="Jhone"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-white">Password</label>
                        <input
                            name="password"
                            value={form.password}
                            type="password"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            placeholder="Password"
                            onChange={handleOnChange}
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
