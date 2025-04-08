import categories from "../../products/categories";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import RelatedProducts from "./RelatedProducts";
import products from "../../products/products";

function OneProduct({ art }) {
    const productArt = art;
    const product = products.find((p) => p.art === productArt);
    if (!product) {
        return <div className="p-4">Produit introuvable.</div>;
    }
    const category = categories.find((c) => c.id === product.categorie);
    return (
        <>
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
                                Ask a quote
                            </button>
                        </div>
                    </div>
                </div>

                <RelatedProducts currentProductId={product.id} categoryId={product.categorie} />
            </div>
        </>
    )
}

export default OneProduct;