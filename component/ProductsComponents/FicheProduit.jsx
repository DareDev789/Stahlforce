'use client';

import { useState } from 'react';
// import AjouterCart from './AjouterCart';
import ProductGallerie from './ProductGallerie';
import ProduitSimilaire from './ProduitSimilaire';
// import Link from 'next/link';
// import dynamic from "next/dynamic";
// import PriceDisplay from "./PriceDisplay";
// import StockStatus from "./StockStatus";
// import ProductMeta from "./ProductMeta";
import ProductTabs from "./ProductTabs";

function FicheProduit({ product }) {
    const [activeTab, setActiveTab] = useState("description");
    // const [selectedVariation, setSelectedVariation] = useState(null);
    // const [quantity, setQuantity] = useState(1);

    const currentImages = product.gallery_products;
    return (
        <div className="py-6 container mx-auto">
            <div className="grid md:grid-cols-2 gap-6 w-[1200px] max-w-full mx-auto px-4">
                <div className="p-4">
                    <ProductGallerie images={currentImages} />
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <div className="mb-2" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                    <h3 className="text-xs text-gray-500">
                        <b>Material Type : </b>{product.material_type.title}
                    </h3>

                    {/* <AjouterCart
                        product={product}
                        selectedVariation={selectedVariation}
                        setSelectedVariation={setSelectedVariation}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    /> */}

                    {/* <ProductMeta 
                        product={product} 
                    /> */}
                </div>
            </div>

            <ProductTabs 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                product={product}
            />

            <div className='w-full container mx-auto'>
                <ProduitSimilaire product={product} />
            </div>
        </div>
    );
}

export default FicheProduit;