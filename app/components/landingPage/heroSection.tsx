export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    SPORTS CAR PERFORMANCE<br />& AESTHETIC MODIFICATIONS
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                    Specializing in sport car performance and aesthetic modifications
                </p>
            </div>

            {/* Car Image */}
            <div className="relative w-full max-w-6xl mx-auto mt-12 mb-16">
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=700&fit=crop"
                        alt="Nissan GT-R in garage"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}