import Link from "next/link";
import TranslatedText from '../TranslatedText';

function PrecisionProduct() {
    return (
        <>
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2"><TranslatedText text="Precision Production Capabilities"/></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto"><TranslatedText text="Advanced equipment and precision processes ensure extremely high product accuracy and consistency"/></p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4"><TranslatedText text="Production Thickness and Width Range"/></h3>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-700 mb-2"><TranslatedText text="Ultra-thin material production range:"/></p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li><TranslatedText text="Width: 210-450mm"/></li>
                                    <li><TranslatedText text="Thickness: 0.02-2.0mm"/></li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-700 mb-2"><TranslatedText text="Thick material production range:"/></p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li><TranslatedText text="Width: 300-550mm"/></li>
                                    <li><TranslatedText text="Thickness: 0.5-12mm"/></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-2"><TranslatedText text="High-precision processing capability:"/></p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-300 text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50"><TranslatedText text="Plate Thickness (mm)"/></th>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50"><TranslatedText text="General Accuracy (mm)"/></th>
                                                <th className="border border-gray-300 px-3 py-2 bg-gray-50"><TranslatedText text="High Precision (mm)"/></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="0.02-0.05"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.004"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.002"/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="0.05-0.1"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.006"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.004"/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="0.1-0.15"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.01"/></td>
                                                <td className="border border-gray-300 px-3 py-2"><TranslatedText text="±0.006"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-500 text-xs mt-2"><TranslatedText text="*For more specifications and precision data, please view the detailed production capabilities page"/></p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="/api/placeholder/600/450" alt="Production Capability Chart" className="w-full rounded" />
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                            <TranslatedText text="View Complete Production Capabilities"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrecisionProduct;