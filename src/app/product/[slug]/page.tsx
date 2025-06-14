import { notFound } from 'next/navigation';
import FicheProduit from '../../../../component/ProductsComponents/FicheProduit';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  images?: string[];
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const url = 'https://backend.stahlforce.eu/api/';

export async function generateMetadata(props: ProductPageProps) {
  const params = await props.params;
  const slug = params.slug;

  function stripHtmlTags(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  try {
    const response = await axios.get<Product>(`${url}client/products/one/${slug}`);
    const product = response.data;
    const cleanDescription = stripHtmlTags(product.short_description)?.slice(0, 160);
    return {
      title: `${product.name} - Stahlforce`,
      description: cleanDescription || 'Discover our products in specialized steels and high-performance alloys.',
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'Product not found - Stahlforce',
      description: 'This product could not be found.',
    };
  }
}

export default async function ProductsPage(props: ProductPageProps) {
  const params = await props.params;
  const slug = params.slug;

  let product: Product;

  try {
    const response = await axios.get<Product>(`${url}client/products/one/${slug}`);
    product = response.data;
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <>
      <FicheProduit product={product} />
    </>
  );
}
