import { Metadata } from "next";
import PrecisionProduct from "../../../component/HomeComponent/PrecisionProduct";

export const metadata: Metadata = {
    title: "Precision Production Capabilities - Stahlforce",
    description: "Advanced equipment and precision processes ensure extremely high product accuracy and consistency",
};

export default function PrecisionProducts() {
    return (
        <div>
            <main>
                <PrecisionProduct />
            </main>
        </div>
    );
}