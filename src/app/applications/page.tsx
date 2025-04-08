import { Metadata } from "next";
import ApplicationArea from "../../../component/HomeComponent/ApplicationArea";

export const metadata: Metadata = {
    title: "StahlForce - Application Areas",
    description: "Generated by create next app",
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