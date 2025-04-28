import dynamic from "next/dynamic";

export default function ProductTabs({ activeTab, setActiveTab, product }) {
    const tabs = [
        { id: "description", label: "Description" },
        { id: "informations", label: "Another Informations" },
        // { id: "emplacement", label: "Emplacement" }
    ];

    return (
        <div className='w-full container mx-auto mt-6'>
            <div className="md:flex block">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 cursor-pointer font-medium capitalize ${
                            activeTab === tab.id 
                                ? "border-b-4 border-gray-900 text-gray-900" 
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-4 w-[800px] max-w-full">
                {activeTab === "description" && (
                    <ProductDescription description={product[0].long_description} />
                )}

                {activeTab === "informations" && (
                    <ProductAdditionalInfo product={product} />
                )}

                {/* {activeTab === "emplacement" && (
                    <ProductLocation product={product} />
                )} */}
            </div>
        </div>
    );
}

function ProductDescription({ description }) {
    return description ? (
        <div dangerouslySetInnerHTML={{ __html: description }} />
    ) : (
        <span className='text-gray-500 text-xs'><i>no description</i></span>
    );
}

function ProductAdditionalInfo({ product }) {
    return (
        // <table className='w-full text-sm'>
        //     <tbody>
        //         <tr>
        //             <td className='px-2 py-1 font-bold'>Poids</td>
        //             <td className='px-2 py-1'><i>{product.weight} Kg</i></td>
        //         </tr>
        //         <tr>
        //             <td className='px-2 py-1 font-bold'>Dimensions</td>
        //             <td className='px-2 py-1'>
        //                 <i>{product.length} cm × {product.width} cm × {product.height} cm</i>
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
        <>
        </>
    );
}

// function ProductLocation({ product }) {
//     if (!product.dokan_geo_latitude || !product.dokan_geo_longitude) {
//         return <span className='text-gray-500 text-xs'><i>Emplacement inconnu</i></span>;
//     }

//     return (
//         <>
//             <h2 className='text-gray-600 font-bold'>{product.dokan_geo_address}</h2>
//             <div className='w-full'>
//                 <MapOneComponent
//                     lat={parseFloat(product.dokan_geo_latitude)}
//                     long={parseFloat(product.dokan_geo_longitude)}
//                     address={product.dokan_geo_address}
//                 />
//             </div>
//         </>
//     );
// }