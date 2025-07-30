import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Container from './Container';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 110);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full h-[71px] z-50 backdrop-blur-md transition-all duration-300
        ${isSticky ? 'fixed top-0 bg-white/70 shadow-md' : 'absolute top-0 bg-white/30'}
    `}
        >
            <Container className="h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        className="h-12 w-auto object-contain"
                        src="/assets/img/Logo.png"
                        alt="Logo SEVEN INC."
                    />
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex gap-12 text-gray-800 font-semibold text-[18px]">
                        <Link to="/" className="hover:text-blue-600 cursor-pointer">Beranda</Link>
                        <Link to="/tentang-kami" className="hover:text-blue-600 cursor-pointer">Tentang Kami</Link>
                        <Link to="/bisnis-kami" className="hover:text-blue-600 cursor-pointer">Bisnis Kami</Link>
                        <Link to="/berita" className="hover:text-blue-600 cursor-pointer">Berita</Link>
                        {/* Dropdown Karir */}
                        <li
                            className="hover:text-blue-600 cursor-pointer flex items-center relative"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Karir
                            <i
                                className={`ri-arrow-right-s-line text-[20px] text-gray-600 transition-transform duration-300 ${showDropdown ? "rotate-90" : "rotate-0"
                                    }`}
                            ></i>

                            {/* Dropdown */}
                            {showDropdown && (
                                <div className="absolute top-9 left-1/2 -translate-x-1/2 w-40 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <Link
                                        to="/internship"
                                        className="block w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-300 text-left rounded-t-lg"
                                        onClick={() => setShowDropdown(false)}
                                    >
                                        Internship
                                    </Link>
                                    <Link
                                        to="/lowongan-kerja"
                                        className="block w-full px-4 py-2 text-sm font-bold hover:bg-gray-300 text-left rounded-b-lg"
                                        onClick={() => setShowDropdown(false)}
                                    >
                                        Lowongan Kerja
                                    </Link>
                                </div>
                            )}
                        </li>
                        <Link to="/kontak" className="hover:text-blue-600 cursor-pointer">Kontak</Link>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;