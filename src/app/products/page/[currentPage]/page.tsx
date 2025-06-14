import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AllProducts from '../../../../../component/ProductsComponents/AllProducts';
import { url } from '../../../../../Contexte/urlApi';

export const metadata: Metadata = {
  title: "All products - Stahlforce",
  description: "High-Precision Special Steel products",
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

  try {
    // const response = await axios.get<ProductApiResponse>(`${url}/produits/all?page=${currentPage}`);
    const response = await fetch(`${url}/produits/all?page=${currentPage}`, {
      cache: 'no-store'
    });
    const data: ProductApiResponse = await response.json();
    products = data.products;
    lastPage = data.last_page;
    totalProduits = data.total;
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <>
      <AllProducts products={products}
        currentPage={currentPage}
        lastPage={lastPage}
        totalProduits={totalProduits}
        link={`/products/`} />
    </>
  );
}