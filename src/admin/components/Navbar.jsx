import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [adminData, setAdminData] = useState(null);

    // >>> ambil dari localStorage saat inisialisasi agar tidak flicker
    const [logoUrl, setLogoUrl] = useState(() => {
        return localStorage.getItem("navbarLogoUrl") || null;
    });

    const navigate = useNavigate();

    // Sticky on scroll
    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 110);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ambil data admin dari localStorage
    useEffect(() => {
        const storedAdmin = localStorage.getItem("adminData");
        if (storedAdmin) setAdminData(JSON.parse(storedAdmin));
    }, []);

    // Ambil logo navbar dari API, lalu cache di localStorage
    useEffect(() => {
        let alive = true;
        const getLogo = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/admin/logo");
                const url = res?.data?.data?.url || null;
                if (!alive) return;

                if (url) {
                    setLogoUrl(url);
                    // cache agar halaman lain langsung pakai ini sejak render pertama
                    localStorage.setItem("navbarLogoUrl", url);
                }
            } catch (e) {
                // diamkan: kalau gagal, tetap pakai yang ada di localStorage/fallback
            }
        };
        getLogo();
        return () => {
            alive = false;
        };
    }, []);

    // Scroll ke atas tiap klik menu
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Logout
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            await axios.post(
                "http://127.0.0.1:8000/api/admin/logout",
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminData");
            navigate("/");
        }
    };

    return (
        <header
            className={`w-full h-[71px] z-50 backdrop-blur-md transition-all duration-300 ${isSticky ? "fixed top-0 bg-white/70 shadow-md" : "absolute top-0 bg-white/70"
                }`}
        >
            <Container className="h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        className="h-12 w-auto object-contain"
                        // jika ada logoUrl (dari cache/DB) pakai itu; kalau null baru fallback
                        src={logoUrl ?? "/assets/img/Logo.png"}
                        alt="Logo SEVEN INC."
                        // kalau URL dari DB rusak, jatuhkan ke fallback & bersihkan cache
                        onError={(e) => {
                            if (logoUrl) {
                                localStorage.removeItem("navbarLogoUrl");
                                setLogoUrl(null);
                            }
                            e.currentTarget.src = "/assets/img/Logo.png";
                        }}
                    />
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex items-center gap-10 text-gray-800 font-semibold text-[18px]">
                        <li>
                            <Link to="/admin" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/tentang-kami" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/bisnis-kami" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Bisnis Kami
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/berita" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
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
                                        to="/admin/internship"
                                        onClick={() => {
                                            scrollTop();
                                            setShowDropdown(false);
                                        }}
                                        className="block w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-[#DC3933] hover:text-white text-left rounded-t-lg"
                                    >
                                        Internship
                                    </Link>
                                    <Link
                                        to="/admin/lowongan-kerja"
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
                            <Link to="/admin/kontak" onClick={scrollTop} className="hover:text-[#DC3933] cursor-pointer">
                                Kontak
                            </Link>
                        </li>

                        {/* Avatar */}
                        <li className="flex items-center">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                        <img
                                            src={
                                                adminData?.avatar
                                                    ? adminData.avatar
                                                    : "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                                            }
                                            alt="avatar"
                                        />
                                    </div>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
                                >
                                    {/* Bagian Nama & Email */}
                                    <li className="px-2 py-1 border-b border-gray-600">
                                        <div className="flex flex-col max-w-[180px]">
                                            <span className="text-sm font-semibold truncate">
                                                {adminData?.name || "Nama Admin"}
                                            </span>
                                            <span className="text-xs text-gray-300 truncate">
                                                {adminData?.email || "admin@example.com"}
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/admin/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="w-full text-left">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;