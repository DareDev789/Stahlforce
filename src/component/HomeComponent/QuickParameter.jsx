import TranslatedText from '../TranslatedText';

function QuickParameter() {
    return (
        <>
            <div className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2"><TranslatedText text="Quick Parameter Search"/></h2>
                        <p className="text-gray-300 max-w-2xl mx-auto"><TranslatedText text="Enter your required parameters to quickly find special steel materials that meet your needs"/></p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Material Type"/></label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option><TranslatedText text="Stainless Steel"/></option>
                                    <option><TranslatedText text="Alloy Steel"/></option>
                                    <option><TranslatedText text="Tool Steel"/></option>
                                    <option><TranslatedText text="All Types"/></option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Thickness Range (mm)"/></label>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <input type="number" placeholder="Max" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Tensile Strength (MPa)"/></label>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <input type="number" placeholder="Max" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Surface Condition"/></label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option><TranslatedText text="All States"/></option>
                                    <option><TranslatedText text="Annealed (ANN)"/></option>
                                    <option><TranslatedText text="Quarter Hard (1/4H)"/></option>
                                    <option><TranslatedText text="Half Hard (1/2H)"/></option>
                                    <option><TranslatedText text="Full Hard (FH)"/></option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Special Requirements"/></label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option><TranslatedText text="No Special Requirements"/></option>
                                    <option><TranslatedText text="High Corrosion Resistance"/></option>
                                    <option><TranslatedText text="High Strength"/></option>
                                    <option><TranslatedText text="High Toughness"/></option>
                                    <option><TranslatedText text="High Fatigue Strength"/></option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm"><TranslatedText text="Application Field"/></label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option><TranslatedText text="All Fields"/></option>
                                    <option><TranslatedText text="Aerospace"/></option>
                                    <option><TranslatedText text="Automotive Industry"/></option>
                                    <option><TranslatedText text="Medical Devices"/></option>
                                    <option><TranslatedText text="Electronics"/></option>
                                </select>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
                                <TranslatedText text="Search Matching Products"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuickParameter;