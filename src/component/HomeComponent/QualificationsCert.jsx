import TranslatedText from '../TranslatedText';

function QualificationsCert() {
    return (
        <>
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2"><TranslatedText text="Qualifications and Certifications"/></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto"><TranslatedText text="We strictly follow international standards and have obtained multiple authoritative certifications"/></p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-4">
                            <img src="/api/placeholder/150/150" alt="ISO 9001" className="mx-auto h-20 mb-4 grayscale hover:grayscale-0 transition duration-300" />
                            <p className="font-medium"><TranslatedText text="ISO 9001"/></p>
                        </div>

                        <div className="text-center p-4">
                            <img src="/api/placeholder/150/150" alt="IATF 16949" className="mx-auto h-20 mb-4 grayscale hover:grayscale-0 transition duration-300" />
                            <p className="font-medium"><TranslatedText text="IATF 16949"/></p>
                        </div>

                        <div className="text-center p-4">
                            <img src="/api/placeholder/150/150" alt="Aerospace Certification" className="mx-auto h-20 mb-4 grayscale hover:grayscale-0 transition duration-300" />
                            <p className="font-medium"><TranslatedText text="AS 9100"/></p>
                        </div>

                        <div className="text-center p-4">
                            <img src="/api/placeholder/150/150" alt="Environmental Certification" className="mx-auto h-20 mb-4 grayscale hover:grayscale-0 transition duration-300" />
                            <p className="font-medium"><TranslatedText text="ISO 14001"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QualificationsCert;