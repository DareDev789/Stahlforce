// /src/app/product/[id]/RelatedProducts.tsx
"use client";

import React from "react";
import products from "../../products/products";
import ProductCard from "../../../../component/ProductCard";

type RelatedProductsProps = {
  currentProductId: number;
  categoryId: number;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  categoryId,
}) => {
  const related = products
    .filter(
      (product) =>
        product.id !== currentProductId && product.categorie === categoryId
    )
    .slice(0, 5); // 🔥 Limite à 5 produits

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
