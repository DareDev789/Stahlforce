'use client';

import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from "react";
import axios from 'axios';

const API_URL = "https://backend.stahlforce.eu/api/client/";

function AllProducts({ products, currentPage, lastPage, totalProduits, link }) {
    const [pagination, setPagination] = useState({ from: 1, to: 20 });
    const [data, setData] = useState({
        applicationField: [],
        materialType: [],
        specialRequirement: [],
        surfaceCondition: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const itemsPerPage = products.length || 20;
        const start = (currentPage - 1) * itemsPerPage + 1;
        const end = Math.min(start + itemsPerPage - 1, totalProduits);
        setPagination({ from: start, to: end });
    }, [currentPage, totalProduits, products.length]);

    useEffect(() => {
        async function fetchData() {
            try {
                const endpoints = ['applicationField', 'materialType', 'specialRequirement', 'surfaceCondition'];
                const responses = await Promise.all(endpoints.map(endpoint => axios.get(`${API_URL}${endpoint}`)));
                
                setData({
                    applicationField: responses[0].data,
                    materialType: responses[1].data,
                    specialRequirement: responses[2].data,
                    surfaceCondition: responses[3].data,
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <main className="py-6 container mx-auto text-gray-700">
            <div className="flex gap-6">
                {/* Sidebar */}
                <aside className="hidden md:block w-64 bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">All Categories</h2>
                    {loading ? (
                        <p>Loading categories...</p>
                    ) : error ? (
                        <p>Failed to load categories.</p>
                    ) : (
                        <ul>
                            {data.materialType.map((material) => (
                                <li key={material.id}>
                                    <Link href={`/material-type/${material.name}`}>
                                        <div className="px-2 py-1 mb-2 hover:bg-gray-200">
                                            {material.title}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <span className="text-sm mb-4 text-[#f5848c] font-semibold">
                        Showing {pagination.from} – {pagination.to} of {totalProduits} results
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-[80vh] mt-2">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-6">
                        {currentPage > 1 && (
                            <Link
                                href={currentPage === 2 ? link : `${link}page/${currentPage - 1}`}
                                className="px-2 py-1 border mr-4 rounded-md"
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="h-4" />
                            </Link>
                        )}
                        <span>Page {currentPage} of {lastPage}</span>
                        {currentPage < lastPage && (
                            <Link
                                href={`${link}page/${currentPage + 1}`}
                                className="px-2 py-1 border ml-4 rounded-md"
                            >
                                <FontAwesomeIcon icon={faAngleRight} className="h-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AllProducts;
