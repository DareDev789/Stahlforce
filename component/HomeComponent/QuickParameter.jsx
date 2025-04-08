function QuickParameter() {
    return (
        <>
            <div className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Quick Parameter Search</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">Enter your required parameters to quickly find special steel materials that meet your needs</p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Material Type</label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Stainless Steel</option>
                                    <option>Alloy Steel</option>
                                    <option>Tool Steel</option>
                                    <option>All Types</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Thickness Range (mm)</label>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <input type="number" placeholder="Max" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Tensile Strength (MPa)</label>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <input type="number" placeholder="Max" className="w-1/2 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Surface Condition</label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>All States</option>
                                    <option>Annealed (ANN)</option>
                                    <option>Quarter Hard (1/4H)</option>
                                    <option>Half Hard (1/2H)</option>
                                    <option>Full Hard (FH)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Special Requirements</label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>No Special Requirements</option>
                                    <option>High Corrosion Resistance</option>
                                    <option>High Strength</option>
                                    <option>High Toughness</option>
                                    <option>High Fatigue Strength</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Application Field</label>
                                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>All Fields</option>
                                    <option>Aerospace</option>
                                    <option>Automotive Industry</option>
                                    <option>Medical Devices</option>
                                    <option>Electronics</option>
                                </select>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
                                Search Matching Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuickParameter;