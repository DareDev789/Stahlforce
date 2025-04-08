// src/app/product/[id]/page.tsx

import products from "../../products/products";
import categories from "../../products/categories";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import RelatedProducts from "./RelatedProducts";

// Typage des paramètres
type Params = {
  id: string;
};

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

interface ProductPageProps {
  params: Params; 
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);
  const category = categories.find((c) => c.id === product?.categorie);

  if (!product) {
    return <div className="p-4 text-red-600 font-bold">⛔ Produit introuvable.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <ProductImage images={product.images} image={product.image} />
        </div>
        <div>
          <ProductDetails
            name={product.name}
            category={category?.name || "Catégorie inconnue"}
            description={product.desc}
            reference={product.art}
          />
          <div className="text-left pb-2 mt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
              📩 Demander un devis
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} categoryId={product.categorie} />
    </div>
  );
};

export default ProductPage;
