import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons/faLongArrowAltRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductSeries() {
    return (
        <>
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Product Series</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Various special steel products to meet high-precision requirements of different industries</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group relative rounded-lg overflow-hidden shadow-lg w-full h-64">
                            {/* <img src="/images/exampleFond.png" alt="Stainless Steel Series" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Stainless Steel Series</h3>
                                    <p className="text-gray-200 mb-4">SUS301/304/430 series, multiple states available</p>
                                    <Link href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded inline-flex items-center">
                                        View Details <FontAwesomeIcon icon={faArrowRight} className="h-4 ml-2"/>
                                    </Link>
                                </div>
                        </div>

                        <div className="group relative rounded-lg overflow-hidden shadow-lg w-full h-64">
                            {/* <img src="/images/exampleFond.png" alt="Alloy Steel Series" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Alloy Steel Series</h3>
                                    <p className="text-gray-200 mb-4">High-strength alloy steel for critical structural components</p>
                                    <Link href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded inline-flex items-center">
                                        View Details <FontAwesomeIcon icon={faArrowRight} className="h-4 ml-2"/>
                                    </Link>
                                </div>
                        </div>

                        <div className="group relative rounded-lg overflow-hidden shadow-lg w-full h-64">
                            {/* <img src="/images/exampleFond.png" alt="Tool Steel Series" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Tool Steel Series</h3>
                                    <p className="text-gray-200 mb-4">High hardness, high wear resistance tool steel products</p>
                                    <Link href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded inline-flex items-center">
                                        View Details <FontAwesomeIcon icon={faArrowRight} className="h-4 ml-2"/> 
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                            View All Products <FontAwesomeIcon className="ml-2 h-4" icon={faLongArrowAltRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSeries;