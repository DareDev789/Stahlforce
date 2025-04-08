import Link from "next/link";

function PrecisionProduct() {
    return (
        <>
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Precision Production Capabilities</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Advanced equipment and precision processes ensure extremely high product accuracy and consistency</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Production Thickness and Width Range</h3>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-700 mb-2">Ultra-thin material production range:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Width: 210-450mm</li>
                                    <li>Thickness: 0.02-2.0mm</li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-700 mb-2">Thick material production range:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Width: 300-550mm</li>
                                    <li>Thickness: 0.5-12mm</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-2">High-precision processing capability:</p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-300 text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50">Plate Thickness (mm)</th>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50">General Accuracy (mm)</th>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50">High Precision (mm)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2">0.02-0.05</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.004</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.002</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2">0.05-0.1</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.006</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.004</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2">0.1-0.15</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.01</td>
                                                <td className="border border-gray-300 px-3 py-2">±0.006</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-500 text-xs mt-2">*For more specifications and precision data, please view the detailed production capabilities page</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="/api/placeholder/600/450" alt="Production Capability Chart" className="w-full rounded" />
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                            View Complete Production Capabilities
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrecisionProduct;