import { Metadata } from "next";
import SliderHome from "../../component/HomeComponent/SliderHome";
import ProductSeries from "../../component/HomeComponent/ProductSeries";
import CoreTechnical from "../../component/HomeComponent/CoreTechnical";
import QuickParameter from "../../component/HomeComponent/QuickParameter";

export const metadata: Metadata = {
  title: "Home - Stahlforce",
  description: "Focused on high-precision special steel R&D and production for 20 years, providing customized solutions for aerospace, automotive, medical and other",
};

export default function Home() {
  return (
    <div className="">
      <main className="">
        <SliderHome />
        <div id="core-technical">
          <CoreTechnical />
        </div>
        <div id="products">
          <ProductSeries />
        </div>
        <div id="parameters">
          <QuickParameter />
        </div>
      </main>
    </div>
  );
}
