import type { Metadata } from "next";
import AllProducts from '../../../component/ProductsComponents/AllProducts';
import axios from "axios";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Stahlforce - All products",
  description: "une application qui vous met en relation directe avec les boutiques et vendeurs en Afrique. Peu importe où vous vous trouvez, vous pouvez effectuer vos achats directement chez les commerçants situés dans la ville de vos proches",
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
  const url = "https://backend.stahlforce.eu/api/";

  try {
    const response = await axios.get<ProductApiResponse>(`${url}client/products/all`);
    products = response.data.products;
    lastPage = response.data.last_page;
    totalProduits = response.data.total;

    console.log("Produits récupérés:", response.data);

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