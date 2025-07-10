'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import TranslatedText from './TranslatedText';

function Header() {
    const [miniNavBarShow, setminiNavBarShow] = useState(false);

    const setStorage = (lang) => {
        localStorage.setItem('malangue', lang);
        document.cookie = `lang=${lang}; path=/; max-age=31536000`; // Cookie valide 1 an
        window.location.href = `/${lang}${window.location.pathname.replace(/^\/(zh|en)/, '')}`;
    };

    useEffect(() => {
        const lang = localStorage.getItem('malangue');
        if (lang && !window.location.pathname.startsWith(`/${lang}`)) {
            window.location.href = `/${lang}${window.location.pathname.replace(/^\/(zh|en)/, '')}`;
        }
    }, []);

    return (
        <>
            <div className="bg-gray-800 text-white py-2 px-4 text-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span><i className="fas fa-phone-alt mr-1"></i> +34 676336617</span>
                        <span><i className="fas fa-envelope mr-1"></i> info@stahlforce.com</span>
                    </div>
                    <div className="flex items-center space-x-3 list-none">
                        <li onClick={() => setStorage('zh')} className="hover:text-blue-300">中文</li>
                        <span>|</span>
                        <li onClick={() => setStorage('en')} className="hover:text-blue-300">English</li>
                    </div>
                </div>
            </div>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/" >
                                <img src="/images/logoStahlForceB.png" alt="Stahlforce" className="h-[40px] w-auto" />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-4 text-gray-700 list-none">
                            <Link href="/" ><TranslatedText text={`Home`} /></Link>
                            <Link href="/products"><TranslatedText text={`Products`} /></Link>
                            <Link href="/precision-product"><TranslatedText text={`Production Capabilities`} /></Link>
                            <Link href="/certifications"><TranslatedText text={`Technical Center`} /></Link>
                            <Link href="/applications"><TranslatedText text={`Applications`} /></Link>
                            <Link href="/about_us"><TranslatedText text={`About Us`} /></Link>
                            <Link href="/contact"><TranslatedText text={`Contact`} /></Link>
                        </div>
                        <div className="w-8 flex md:hidden">
                            <FontAwesomeIcon className="text-gray-700 h-5 cursor-pointer" icon={faBars} onClick={() => setminiNavBarShow(!miniNavBarShow)} />
                        </div>
                    </div>
                </div>
            </nav>
            {miniNavBarShow && (
                <>
                    <div className="fixed md:hidden top-0 right-0 h-screen w-[500px] max-w-full p-4 bg-white z-50">
                        <div className="w-8 mb-4">
                            <FontAwesomeIcon className="text-red-700 h-5 cursor-pointer" icon={faXmark} onClick={() => setminiNavBarShow(!miniNavBarShow)} />
                        </div>
                        <div className="space-y-4 text-gray-700 list-none">
                            <li><Link href="/" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Home`} /></Link></li>
                            <li><Link href="/products" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Products`} /></Link></li>
                            <li><Link href="/precision-product" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Production Capabilities`} /></Link></li>
                            <li><Link href="/certifications" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Technical Center`} /></Link></li>
                            <li><Link href="/applications" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Applications`} /></Link></li>
                            <li><Link href="/about_us" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`About Us`} /></Link></li>
                            <li><Link href="/contact" onClick={() => setminiNavBarShow(!miniNavBarShow)}><TranslatedText text={`Contact`} /></Link></li>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Header;
