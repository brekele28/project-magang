import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const location = useLocation();
    const [isTentangKamiOpen, setIsTentangKamiOpen] = useState(false);
    const [isBisnisOpen, setIsBisnisOpen] = useState(false);
    const [isBeritaOpen, setIsBeritaOpen] = useState(false);

    const menuItemClasses = (path) =>
        `flex items-center p-2 rounded-lg ${location.pathname === path
            ? "bg-gray-900 text-white"
            : "text-gray-900 hover:bg-gray-100 hover:text-gray-900"
        }`;

    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r"
        >
            <div className="h-full px-3 py-4 overflow-y-auto">
                <Link to="/admin" className="flex items-center mb-5">
                    <img src="/assets/img/Logo.png" className="h-12" alt="Logo" />
                </Link>

                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/admin/dashboard" className={menuItemClasses("/admin/dashboard")}>
                            <i className="ri-dashboard-line text-[20px]" />
                            <span className="ms-3">Navbar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/profil" className={menuItemClasses("/admin/profil")}>
                            <i className="ri-user-settings-line text-[20px]" />
                            <span className="ms-3">Edit Profil</span>
                        </Link>
                    </li>

                    {/* Tentang Kami */}
                    <li>
                        <button
                            type="button"
                            onClick={() => setIsTentangKamiOpen(!isTentangKamiOpen)}
                            className="flex items-center w-full p-2 rounded-lg text-gray-900 hover:bg-gray-100"
                        >
                            <i className="ri-error-warning-line text-[20px]" />
                            <span className="ms-3 flex-1 text-left">Tentang Kami</span>
                            <i
                                className={`ri-arrow-down-s-line transition-transform ${isTentangKamiOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {isTentangKamiOpen && (
                            <ul className="pl-8 space-y-2">
                                <li>
                                    <Link to="/admin/tentang-kami" className={menuItemClasses("/admin/tentang-kami")}>
                                        Konten Utama
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/tentang-kami" className={menuItemClasses("/admin/tentang-kami")}>
                                        Konten Lengkap
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Bisnis Kami */}
                    <li>
                        <button
                            type="button"
                            onClick={() => setIsBisnisOpen(!isBisnisOpen)}
                            className="flex items-center w-full p-2 rounded-lg text-gray-900 hover:bg-gray-100"
                        >
                            <i className="ri-shake-hands-line text-[20px]" />
                            <span className="ms-3 flex-1 text-left">Bisnis Kami</span>
                            <i
                                className={`ri-arrow-down-s-line transition-transform ${isBisnisOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {isBisnisOpen && (
                            <ul className="pl-8 space-y-2">
                                <li>
                                    <Link to="/admin/bisnis-kami" className={menuItemClasses("/admin/bisnis-kami")}>
                                        Konten Utama
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/bisnis-kami" className={menuItemClasses("/admin/bisnis-kami")}>
                                        Konten Lengkap
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Berita */}
                    <li>
                        <button
                            type="button"
                            onClick={() => setIsBeritaOpen(!isBeritaOpen)}
                            className="flex items-center w-full p-2 rounded-lg text-gray-900 hover:bg-gray-100"
                        >
                            <i className="ri-news-line text-[20px]" />
                            <span className="ms-3 flex-1 text-left">Berita</span>
                            <i
                                className={`ri-arrow-down-s-line transition-transform ${isBeritaOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {isBeritaOpen && (
                            <ul className="pl-8 space-y-2">
                                <li>
                                    <Link to="/admin/berita" className={menuItemClasses("/admin/berita")}>
                                        Konten Utama
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/berita" className={menuItemClasses("/admin/berita")}>
                                        Konten Lengkap
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;