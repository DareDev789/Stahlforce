import { faArrowRight, faCar, faMedkit, faMicrochip, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ApplicationArea() {
    return (
        <>
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Application Areas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our special steel products are widely used in multiple industries with high precision requirements</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faPlane} className="text-blue-600 h-6"/>
                            </div>
                            <h3 className="font-semibold mb-2">Aerospace</h3>
                            <p className="text-gray-600 text-sm">High-strength lightweight critical components</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faCar} className="text-blue-600 h-6"/>
                            </div>
                            <h3 className="font-semibold mb-2">Automotive Industry</h3>
                            <p className="text-gray-600 text-sm">Precision drive and structural components</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faMedkit} className="text-blue-600 h-6"/>
                            </div>
                            <h3 className="font-semibold mb-2">Medical Devices</h3>
                            <p className="text-gray-600 text-sm">Custom high-purity medical steel</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faMicrochip} className="text-blue-600 h-6"/>
                            </div>
                            <h3 className="font-semibold mb-2">Electronics</h3>
                            <p className="text-gray-600 text-sm">Precision electronic parts and elastic elements</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-gray-50 rounded-lg p-8">
                        <div className="md:grid grid-cols-5 gap-8 items-center">
                            <div className="col-span-2 md:col">
                                <h3 className="text-2xl font-bold mb-4">Industry Case Study</h3>
                                <p className="text-gray-600 mb-6">Ultra-thin stainless steel applied to aircraft engine seal rings, achieving high precision control of ±0.002mm at 0.05mm thickness, significantly improving engine efficiency and service life.</p>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                                    View More Cases <FontAwesomeIcon icon={faArrowRight} className="ml-3 h-4"/>
                                </Link>
                            </div>
                            <div className="col-span-3 md:col">
                                <img src="/api/placeholder/800/400" alt="Application Case" className="w-full rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApplicationArea;