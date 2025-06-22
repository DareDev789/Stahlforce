import type { Metadata } from "next";
import AllProducts from '../../../component/ProductsComponents/AllProducts';
import { notFound } from 'next/navigation';
import { url } from '../../../Contexte/urlApi';

export const metadata: Metadata = {
  title: "All products - Stahlforce",
  description: "High-Precision Special Steel products",
};

interface Product {
  id: string;
  name: string;
  title : string;
  price: number;
  image: string;
}

interface ProductApiResponse {
  products: Product[];
  last_page: number;
  per_page: number;
  total: number;
}

export default async function ProductsPage() {
  let products: Product[] = [];
  let lastPage = 0;
  let totalProduits = 0;
  const currentPage=1;

  try {
    // const response = await axios.get<ProductApiResponse>(`${url}client/products/all`);
    const response = await fetch(`${url}client/products/all`, {
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
        link={`/products/`}/>
    </>
  )
}