import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Ubah 847 jika tinggi Hero berbeda
            setIsSticky(scrollTop > 847);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full h-[91px] z-50 backdrop-blur-md transition-all duration-300
                ${isSticky ? 'fixed top-0 bg-white/70 shadow-md' : 'absolute top-0 bg-white/30'}
            `}
        >
            <div className="max-w-[1440px] h-full mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        className="h-10 w-auto object-contain"
                        src="/assets/img/Logo.png"
                        alt="Logo SEVEN INC."
                    />
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-8 text-gray-800 font-semibold">
                        <li className="hover:text-blue-600 cursor-pointer">Beranda</li>
                        <li className="hover:text-blue-600 cursor-pointer">Tentang Kami</li>
                        <li className="hover:text-blue-600 cursor-pointer">Bisnis Kami</li>
                        <li className="hover:text-blue-600 cursor-pointer flex items-center">
                            Karir
                            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">Kontak</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;