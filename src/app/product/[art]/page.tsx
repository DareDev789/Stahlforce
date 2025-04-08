import products from "../../products/products";
import OneProduct from "./OneProduct";

export async function generateStaticParams() {
  const paths = products.map((product) => ({
    art: product.art.toString(),
  }));

  return paths ;
}

export default async function ProductPage({ params }: { params: { art: string } }) {
  const { art } = params;

  return (
    <OneProduct art={art}/>
  );
}
