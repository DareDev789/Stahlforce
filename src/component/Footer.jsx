import { faEnvelopeOpen, faMapMarker, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import TranslatedText from './TranslatedText';

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-8">
                        <div>
                            <img src="/images/logoStahlForceW.png" alt="stahlforce" className="h-[50px] w-auto" />
                            <p className="mb-4">
                                <TranslatedText text={`Stahlforce is a leading manufacturer of high-precision special steel, focusing on material solutions for aerospace, automotive, medical and other high-end industries.`} />
                            </p>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faLinkedin} /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faTwitter} /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faFacebook} /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faYoutube} /></Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4"><TranslatedText text={`Products`} /></h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Stainless Steel Series`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Alloy Steel Series`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Tool Steel Series`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Ultra-thin Materials`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`High-precision Materials`} /></Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4"><TranslatedText text={`Technology &amp; Services`} /></h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Production Capabilities`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Technical Center`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Applications`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Technical Support`} /></Link></li>
                                <li><Link href="#" className="hover:text-white"><TranslatedText text={`Quality Control`} /></Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4"><TranslatedText text={`Contact Us`} /></h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faMapMarker} className="mr-3 h-4" />
                                    <span>Zaragoza, Spain</span>
                                </li>
                                <li className="">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUserCircle} className="mr-3 h-4" />
                                        {/* <TranslatedText text="Contact person :" /> */}
                                        <b>Alex NIU</b>
                                    </div>
                                    <span className="text-right">+33 676336617</span>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-3 h-4" />
                                    <span>info@stahlforce.eu</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p><TranslatedText text={`© 2025 Stahlforce. All Rights Reserved.`} /></p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <Link href="#" className="hover:text-white"><TranslatedText text={`Privacy Policy`} /></Link>
                                <Link href="#" className="hover:text-white"><TranslatedText text={`Terms of Use`} /></Link>
                                <Link href="#" className="hover:text-white"><TranslatedText text={`Sitemap`} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;