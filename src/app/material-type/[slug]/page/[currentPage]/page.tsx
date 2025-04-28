import { notFound } from 'next/navigation';
import AllProducts from '../../../../../../component/ProductsComponents/AllProducts';
import axios from 'axios';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stahlforce - Tous les produits",
    description: "Une application qui vous met en relation directe avec les boutiques et vendeurs en Afrique. Peu importe où vous vous trouvez, vous pouvez effectuer vos achats directement chez les commerçants situés dans la ville de vos proches.",
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
        currentPage?: string;
    }>;
}

export default async function ProductsPage(props: CategoriePageProps) {
    const params = await props.params;
    const currentPage = parseInt(params.currentPage || '1', 10);
    const { slug } = params;
    const url = "https://backend.stahlforce.eu/api/";

    try {
        const { data } = await axios.get<ProductApiResponse>(
            `${url}client/categorie/${slug}?page=${currentPage}`
        );

        return (
            <AllProducts
                products={data.products}
                currentPage={currentPage}
                lastPage={data.last_page}
                totalProduits={data.total}
                link={`/material-type/${slug}/`}
            />
        );
    } catch (error) {
        console.error('Erreur lors du chargement des produits :', error);
        notFound();
    }
}