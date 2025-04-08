"use client";

import Link from "next/link";

type Product = {
    id: number;
    name: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link key={product.id} href={`/product/${product.id}`}>
            <div className="shadow p-2 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-44 hover:scale-110 transition-all object-cover"
                />
                <h2 className="text-center mt-2 font-semibold">{product.name}</h2>
            </div>
        </Link>
    );
}
