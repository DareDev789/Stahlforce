'use client';

import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from "react";

function AllProducts({ products, currentPage, lastPage, totalProduits, link }) {

    const [forCount, setForCount] = useState(1);
    const [toCount, setToCount] = useState(20);

    useEffect(() => {
        const itemsPerPage = products.length || 20;
        const start = (currentPage - 1) * itemsPerPage + 1;
        const end = start + itemsPerPage - 1;

        setForCount(start);
        setToCount(end > totalProduits ? totalProduits : end);
    }, [currentPage, totalProduits, products.length]);

    return (
        <>
            <main className="py-6 container mx-auto text-gray-700">
                <div className="flex gap-6">
                    <aside className="hidden md:block w-64 bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Filtres</h2>
                        
                    </aside>

                    <div className="flex-1">
                        <span className="text-sm mb-4 text-[#f5848c] font-semibold">Showing {forCount} – {toCount} of {totalProduits} results</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt- min-h-[80vh]">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="flex justify-center items-center mt-6">
                            {currentPage > 1 && (
                                <Link href={currentPage === 2 ? `${link}` : `${link}page/${currentPage - 1}`} className="px-2 py-1 border mr-4 rounded-md">
                                    <FontAwesomeIcon icon={faAngleLeft} className="h-4" />
                                </Link>
                            )}
                            <span>Page {currentPage} of {lastPage}</span>
                            {currentPage < lastPage && (
                                <Link href={`${link}page/${currentPage + 1}`} className="px-2 py-1 border ml-4 rounded-md">
                                    <FontAwesomeIcon icon={faAngleRight} className="h-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AllProducts;