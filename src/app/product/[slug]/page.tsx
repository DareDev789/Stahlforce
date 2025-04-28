import { notFound } from 'next/navigation';
import FicheProduit from '../../../../component/ProductsComponents/FicheProduit';
import axios from 'axios';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stahlforce - Tous les produits",
  description: "une application qui vous met en relation directe avec les boutiques et vendeurs en Afrique. Peu importe où vous vous trouvez, vous pouvez effectuer vos achats directement chez les commerçants situés dans la ville de vos proches",
};

interface Product {
  id: number;
  title: string;
  slug: string;
  type: 'simple' | 'variable';
  price: number | { min: number; max: number };
  sale_price?: number;
  regular_price?: number;
  currency: string;
  description: string;
  isInStock: boolean;
  images?: string[];
  
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductsPage(props: ProductPageProps) {
  const params = await props.params;
  const slug = params.slug;
  let product: Product;
  const url = "https://backend.stahlforce.eu/api/";

  try {
    const response = await axios.get<Product>(`${url}client/products/one/${slug}`); 
    product = response.data;
  } catch (_) {
    notFound();
  }

  return (
    <>
      <FicheProduit product={product}/>
    </>
  );
}