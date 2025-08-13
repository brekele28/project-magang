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

    // Fungsi saat click supaya konten di mulai dari atas
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // pakai 'smooth' kalau mau
    };

    return (
        <header
            className={`w-full h-[71px] z-50 backdrop-blur-md transition-all duration-300
        ${isSticky ? 'fixed top-0 bg-white/70 shadow-md' : 'absolute top-0 bg-white/70'}
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
                        <li>
                            <Link to="/" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/tentang-kami" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link to="/bisnis-kami" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Bisnis Kami
                            </Link>
                        </li>
                        <li>
                            <Link to="/berita" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Berita
                            </Link>
                        </li>

                        {/* Dropdown Karir */}
                        <li
                            className="hover:text-[#DC3933] cursor-pointer flex items-center relative"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Karir
                            <i
                                className={`ri-arrow-right-s-line text-[20px] text-gray-600 transition-transform duration-300 ${showDropdown ? "rotate-90" : "rotate-0"
                                    }`}
                            ></i>

                            {showDropdown && (
                                <div className="absolute top-9 left-1/2 -translate-x-1/2 w-40 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <Link
                                        to="/internship"
                                        onClick={() => {
                                            scrollTop();
                                            setShowDropdown(false);
                                        }}
                                        className="block w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-[#DC3933] hover:text-white text-left rounded-t-lg"
                                    >
                                        Internship
                                    </Link>
                                    <Link
                                        to="/lowongan-kerja"
                                        onClick={() => {
                                            scrollTop();
                                            setShowDropdown(false);
                                        }}
                                        className="block w-full px-4 py-2 text-sm font-bold hover:bg-[#DC3933] hover:text-white text-left rounded-b-lg"
                                    >
                                        Lowongan Kerja
                                    </Link>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link to="/kontak" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;