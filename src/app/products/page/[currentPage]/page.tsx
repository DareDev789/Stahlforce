import { notFound } from 'next/navigation';
import axios from 'axios'; import { Metadata } from 'next';
import AllProducts from '../../../../../component/ProductsComponents/AllProducts';

export const metadata: Metadata = {
  title: "Sendbazar - Tous les produits",
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

interface PageProps {
  params: Promise<{
    currentPage?: string;
  }>;
}

export default async function ProductsPage(props: PageProps) {
  const params = await props.params;
  const currentPage = parseInt(params.currentPage || '1', 10);

  let products: Product[] = [];
  let lastPage = 0;
  let totalProduits = 0;
  const url = "https://backend.stahlforce.eu/api/";

  try {
    const response = await axios.get<ProductApiResponse>(`${url}/produits/all?page=${currentPage}`);
    products = response.data.products;
    lastPage = response.data.last_page;
    totalProduits = response.data.total;
  } catch (error) {
    notFound();
  }

  return (
    <>
      <AllProducts products={products}
        currentPage={currentPage}
        lastPage={lastPage}
        totalProduits={totalProduits} 
        link={`/products/`}/>
    </>
  );
}