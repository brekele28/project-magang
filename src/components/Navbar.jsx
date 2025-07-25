import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
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
      {/* ✅ Ganti max-w-[1440px] ke max-w-[1280px] */}
        <div className="max-w-[1280px] h-full mx-auto px-6 flex items-center justify-between">
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
            <li>
                <Link
                to="/"
                className={`hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : ''}`}
                >
                Beranda
                </Link>
            </li>
            <li>
                <Link
                to="/tentang-kami"
                className={`hover:text-blue-600 ${location.pathname === '/tentang-kami' ? 'text-blue-600' : ''}`}
                >
                Tentang Kami
                </Link>
            </li>
            <li>
                <Link
                to="/bisnis-kami"
                className={`hover:text-blue-600 ${location.pathname === '/bisnis-kami' ? 'text-blue-600' : ''}`}
                >
                Bisnis Kami
                </Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer flex items-center">
                Karir
                <svg
                className="w-4 h-4 ml-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
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
