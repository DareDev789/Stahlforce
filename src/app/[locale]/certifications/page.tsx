import { Metadata } from "next";
import QualificationsCert from "../../../component/HomeComponent/QualificationsCert";

export const metadata: Metadata = {
    title: "Qualifications and Certifications - StahlForce",
    description: "We strictly follow international standards and have obtained multiple authoritative certifications",
};

export default function QualificationsCerts() {
    return (
        <div>
            <main>
                <QualificationsCert />
            </main>
        </div>
    );
}