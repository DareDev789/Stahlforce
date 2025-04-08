import Link from "next/link";

function QuickInquiry() {
    return (
        <>
            <div className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Need Technical Support or Product Consultation?</h2>
                            <p className="text-xl mb-8">Our engineering team is ready to provide professional answers and customized solutions</p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="#" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
                                    Contact Us
                                </Link>
                                <Link href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition">
                                    Request Samples
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-blue-600 text-xl font-bold mb-6">Quick Inquiry</h3>
                            <form>
                                <div className="grid md:grid-cols-1 grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2 text-sm">Your Name</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2 text-sm">Company Name</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2 text-sm">Email</label>
                                        <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2 text-sm">Phone</label>
                                        <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2 text-sm">Product Requirements</label>
                                    <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuickInquiry;