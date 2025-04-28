function SliderHome() {
    return (
        <>
            <div className="relative bg-gray-900 h-[500px] flex items-center">
                <div className="absolute inset-0 overflow-hidden">
                    {/* <img src="/api/placeholder/1920/500" alt="Special Steel Production" className="w-full h-full object-cover opacity-50" /> */}
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">High-Precision Special Steel<br/>Professional Manufacturer</h1>
                        <p className="text-xl mb-8">Providing custom processing of special steel from 0.02mm ultra-thin to 12mm thickness with high precision</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">Explore Product Range</a>
                            <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition">Technical Consultation</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderHome;