"use client";

import React, { useState } from 'react';
import { products as categories } from "./Products.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import QuickParameter from '../../../component/HomeComponent/QuickParameter';

function Products() {
    const allProducts = categories.flatMap(cat => cat.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <>
            {/* Header section with grid */}
            {/* <div className="relative bg-gray-900 h-[350px] flex items-center">
                <div className="absolute inset-0 overflow-hidden">
                    <img src="/api/placeholder/1920/500" alt="Steel Production" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
                            <p className="text-xl">Discover our complete range of products</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            <QuickParameter/>

            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4">
                    {/* Product list */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {currentProducts.map((product, index) => (
                            <div key={index} className="shadow p-2 cursor-pointer">
                                <img src={product.image} alt={product.name} className="w-full h-44 hover:scale-110 transition-all object-cover" />
                                <h2 className="text-center mt-2 font-semibold">{product.name}</h2>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-6">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="p-2 border mr-4 disabled:opacity-50 cursor-pointer rounded-md"
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <span>Page {currentPage} / {totalPages}</span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="p-2 border ml-4 disabled:opacity-50 cursor-pointer rounded-md"
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;