export default function SignUp() {
    return (
        <div className="min-h-screen flex justify-center items-center">

            <img
                src="../cars/honda_civic.jpg"
                alt="background-image"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="relative bg-black right-100 z-10 border border-gray-200 rounded-2xl shadow-xl p-10 w-full max-w-lg mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-6 text-white tracking-wide uppercase">Apex Auto
                    Mods</h1>
                <h2 className="text-2xl font-bold text-center mb-8 text-white/85">Create Account</h2>

                <form className="space-y-6">
                    <div>
                        <label className="block font-semibold mb-1 text-white">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            placeholder="Jhone Pesta"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-white">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            placeholder="jhonepest@gmail.com"
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
                        className="w-full bg-gray-200 cursor-pointer text-black py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-md hover:text-white"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}