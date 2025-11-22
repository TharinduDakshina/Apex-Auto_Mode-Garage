"use client"
export default function RegularCollections() {
    const collections = [
        {
            id: 1,
            model: "Honda Cr-V 2021",
            runs: "02 units",
            condition: "Good",
            price: "$45,000",
            actionColor: "blue",
        },
        {
            id: 2,
            model: "Audi A4 2021",
            runs: "110,000 km",
            condition: "Need Servicing",
            price: "$15,900",
            actionColor: "default",
        },
        {
            id: 3,
            model: "Audi Q3 2019",
            runs: "110,000 km",
            condition: "Good",
            price: "$35,400",
            actionColor: "cyan",
        },
        {
            id: 4,
            model: "Mercedes-C—Class 2019",
            runs: "110,000 km",
            condition: "Excellent",
            price: "$52,000",
            actionColor: "default",
        },
    ]

    return (
        <section>
            <h2 className="text-xl font-semibold text-foreground mb-6">Regular Collections</h2>

            <div className="overflow-x-auto rounded-lg border border-border mb-8">
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
                    {collections.map((item) => (
                        <tr key={item.id} className="border-b border-border hover:bg-muted/30 transition">
                            <td className="px-6 py-4 text-sm text-foreground">{item.model}</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">{item.runs}</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">{item.condition}</td>
                            <td className="px-6 py-4 text-sm font-medium text-foreground">{item.price}</td>
                            <td className="px-6 py-4">
                                <button
                                    className={`px-3 py-1 rounded-xl cursor-pointer text-xs font-medium transition ${
                                        item.actionColor === "blue"
                                            ? "bg-blue-500 text-white hover:bg-blue-600"
                                            : item.actionColor === "cyan"
                                                ? "bg-cyan-400 text-cyan-900 hover:bg-cyan-500"
                                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    See details →
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}