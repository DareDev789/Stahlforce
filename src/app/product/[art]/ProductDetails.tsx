type ProductDetailsProps = {
    name: string;
    category: string;
    description: string;
    reference: string;
  };
  
  const ProductDetails: React.FC<ProductDetailsProps> = ({ name, category, description, reference }) => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="mb-4 text-gray-600">
          Material Type: <span className="font-semibold">{category}</span>
        </p>
        <p className="text-lg">{description || "Aucune description disponible."}</p>
        <p className="mt-4 text-sm text-gray-500">
          Application Field: {reference || "Non spécifiée"}
        </p>
      </div>
    );
  };
  
  export default ProductDetails;
  