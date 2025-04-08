import { faEnvelopeOpen, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-8">
                        <div>
                            <img src="/images/logoStahlForceW.png" alt="stahlforce" className="h-[40px] w-auto" />
                            <p className="mb-4">Stahlforce is a leading manufacturer of high-precision special steel, focusing on material solutions for aerospace, automotive, medical and other high-end industries.</p>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faLinkedin}/></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faTwitter}/></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faFacebook}/></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon className="h-4" icon={faYoutube}/></Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4">Products</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white">Stainless Steel Series</Link></li>
                                <li><Link href="#" className="hover:text-white">Alloy Steel Series</Link></li>
                                <li><Link href="#" className="hover:text-white">Tool Steel Series</Link></li>
                                <li><Link href="#" className="hover:text-white">Ultra-thin Materials</Link></li>
                                <li><Link href="#" className="hover:text-white">High-precision Materials</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4">Technology &amp; Services</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white">Production Capabilities</Link></li>
                                <li><Link href="#" className="hover:text-white">Technical Center</Link></li>
                                <li><Link href="#" className="hover:text-white">Applications</Link></li>
                                <li><Link href="#" className="hover:text-white">Technical Support</Link></li>
                                <li><Link href="#" className="hover:text-white">Quality Control</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-medium mb-4">Contact Us</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faMapMarker} className="mr-3 h-4" />
                                    <span>xxxxxx</span>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-3 h-4" />
                                    <span>xxxx</span>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-3 h-4" />
                                    <span>info@stahlforce.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p>© 2025 Stahlforce. All Rights Reserved.</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                                <Link href="#" className="hover:text-white">Terms of Use</Link>
                                <Link href="#" className="hover:text-white">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;