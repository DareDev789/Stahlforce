"use client";
import Link from "next/link";


function ProductCard({ product }) {
    const url = "https://backend.stahlforce.eu";
    return (
        <>
            <Link href={`/product/${product.title}`}>
                <div className="group relative hover:shadow p-2 flex flex-col hover:scale-105 transition-all">
                    {product.sale_price && (
                        <div className="uppercase bg-[#3CC9C9] text-sm absolute rounded-sm px-3 py-1 text-white font-semibold z-10 top-1 right-0">Solde</div>
                    )}

                    <div className="relative overflow-hidden w-full h-44 cursor-pointer transition-all duration-300">
                        {product.gallery_products && product.gallery_products.length >= 2 ? (
                            <>
                                <img
                                    src={`${url}${product?.gallery_products[0]?.url}`}
                                    alt={product.title}
                                    className="w-full h-44 object-cover z-0 transition-opacity duration-300 group-hover:opacity-0 absolute top-0 left-0"
                                />
                                <img
                                    src={`${url}${product?.gallery_products[1]?.url}`}
                                    alt={product.title + ' vue 2'}
                                    className="w-full h-44 object-cover z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                                />
                            </>
                        ) : (
                            <img
                                src={product.gallery_products && product.gallery_products.length === 1 ? `${url}${product?.gallery_products[0]?.url}` : "/images/exampleFond.jpg"}
                                alt={product.name}
                                className="w-full h-44 object-cover z-0 absolute top-0 left-0"
                            />
                        )}
                    </div>

                    <h2 className="text-center text-black text-sm font-semibold">{product.name}</h2>
                    <h3 className="text-center text-xs text-gray-500">
                        {product.material_type.title}
                    </h3>

                    <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded w-full cursor-pointer">
                            Quick View
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProductCard;