import { notFound } from 'next/navigation';
import AllProducts from '../../../../component/ProductsComponents/AllProducts';
import { url } from '../../../../Contexte/urlApi';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stahlforce - Tous les produits",
    description: "une application qui vous met en relation directe avec les boutiques et vendeurs en Afrique. Peu importe où vous vous trouvez, vous pouvez effectuer vos achats directement chez les commerçants situés dans la ville de vos proches",
};

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductApiResponse {
    products: Product[];
    last_page: number;
    per_page: number;
    total: number;
}

interface CategoriePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductsPage(props: CategoriePageProps) {
    const params = await props.params;
    const { slug } = params;

    let products: Product[] = [];
    let lastPage = 0;
    let totalProduits = 0;
    const currentPage = 1;

    try {
        // const response = await axios.get<ProductApiResponse>(`${url}client/categorie/${slug}`);
        const response = await fetch(`${url}client/categorie/${slug}`, {
            cache: 'no-store'
        });
        const data: ProductApiResponse = await response.json();

        products = data.products;
        lastPage = data.last_page;
        totalProduits = data.total;
    } catch (error) {
        console.error('Erreur lors du chargement des produits :', error);
        notFound();
    }

    return (
        <AllProducts
            products={products}
            currentPage={currentPage}
            lastPage={lastPage}
            totalProduits={totalProduits}
            link={`/material-type/${slug}/`}
        />
    );
}