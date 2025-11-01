export default function Header() {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
                <div className="text-3xl font-bold">
                    <div className="flex items-center gap-3">
                        <img src="./logo.png" alt="apex-logo" className="size-18 border border-black" />
                        <div>
                            <div className="text-2xl font-bold text-gray-900 leading-none">APEX AUTO</div>
                            <div className="text-sm font-semibold text-gray-700 tracking-wider">MODS GARAGE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-50 transition-colors font-medium cursor-pointer">
                    Customize →
                </button>
                <button className="px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition-colors font-medium cursor-pointer">
                    View Services
                </button>
            </div>
        </header>
    )
}