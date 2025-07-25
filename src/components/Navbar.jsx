import React, { useState, useEffect } from 'react';
import Container from './Container'; // ⬅️ Tambahkan ini

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

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
            className={`w-full h-[81px] z-50 backdrop-blur-md transition-all duration-300
        ${isSticky ? 'fixed top-0 bg-white/70 shadow-md' : 'absolute top-0 bg-white/30'}
    `}
        >
            {/* ✅ Ganti ini dengan Container */}
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
                        <li className="hover:text-blue-600 cursor-pointer">Beranda</li>
                        <li className="hover:text-blue-600 cursor-pointer">Tentang Kami</li>
                        <li className="hover:text-blue-600 cursor-pointer">Bisnis Kami</li>
                        <li className="hover:text-blue-600 cursor-pointer flex items-center">
                            Karir
                            <i className="ri-arrow-right-s-line ml-1 text-[18px] text-gray-500"></i>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">Kontak</li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
