'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import TranslatedText from '../TranslatedText';

function ProduitSimilaire({ product }) {
    const [products, setProducts] = useState([]);

    const url = "https://backend.stahlforce.eu/api/";

    const getSimilaryProduct = async () => {
        try {
            const response = await fetch(`${url}client/products/similary/${product.id}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erreur lors du chargement des produits similaires:', error);
        }
    };

    useEffect(() => {
        if (product.id) {
            getSimilaryProduct();
        }
    }, [product.id]);

    return (
        <>
            {products.length > 0 && (
                <div className="mt-10 w-full">
                    <h2 className="text-xl font-semibold mb-4"><TranslatedText text={`Related products`}/></h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProduitSimilaire;