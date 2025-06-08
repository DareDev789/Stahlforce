import { Metadata } from "next";
import ApplicationArea from "../../../component/HomeComponent/ApplicationArea";

export const metadata: Metadata = {
    title: "Application Areas - StahlForce",
    description: "Our special steel products are widely used in multiple industries with high precision requirements",
};

export default function Application() {
    return (
        <div>
            <main>
                <ApplicationArea />
            </main>
        </div>
    );
}