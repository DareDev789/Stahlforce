import { faBullseye, faCertificate, faFlask, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CoreTechnical() {
    return (
        <>
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Core Technical Advantages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Focused on high-precision special steel R&amp;D and production for 20 years, providing customized solutions for aerospace, automotive, medical and other high-end sectors</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon className="text-blue-600 h-7" icon={faRuler}/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ultra-Thin Material Processing</h3>
                            <p className="text-gray-600">Thickness range: 0.02-2.0mm<br />Width range: 210-450mm</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon className="text-blue-600 h-7" icon={faBullseye}/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">High Precision Control</h3>
                            <p className="text-gray-600">Precision up to ±0.002mm<br />Surface roughness Ra≤0.4μm</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon className="text-blue-600 h-7" icon={faFlask}/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Material Diversity</h3>
                            <p className="text-gray-600">Stainless steel, tool steel, alloy steel<br />Multiple states available</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon className="text-blue-600 h-7" icon={faCertificate}/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Certifications</h3>
                            <p className="text-gray-600">ISO9001, IATF16949<br />Aerospace certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoreTechnical;