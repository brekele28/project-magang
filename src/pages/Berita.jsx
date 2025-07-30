import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

// ✅ Data dibagi per halaman
const allCards = {
    1: [
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscussion.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/chees.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication3.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscution2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorSenyum.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol2.png" },
    ],
    2: [
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscussion.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/chees.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication3.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscution2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorSenyum.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol2.png" },
    ],
    3: [
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscussion.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/chees.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorComunication3.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorDiscution2.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/vectorSenyum.png" },
        { date: "28 Jul 2025", title: "Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.", image: "/assets/img/ngobrol2.png" },
    ],
};

const Berita = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cards = allCards[currentPage];
    const navigate = useNavigate();
    const totalPages = Object.keys(allCards).length;

    return (
        <Layout>
            <div className="bg-white text-gray-800">
                {/* Hero Section */}
                <div className="relative w-full max-w-[1440px] h-[510px] mx-auto">
                    <img src="/assets/img/Banner3.png" alt="Header Berita" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h3 className="uppercase tracking-[0.5em] text-gray-950 text-[18px] mb-4">List Berita</h3>
                        <h1 className="text-gray-950 font-bold text-[36px] md:text-[40px] leading-snug">Beberapa berita terbaru kami</h1>
                    </div>
                </div>

                {/* Card Utama */}
                <Container>
                    <div className="relative z-10">
                        <div className="mt-[-130px] flex justify-center">
                            <div className="w-[1266px] h-[320px] bg-white rounded-2xl shadow-lg flex overflow-hidden">
                                <img src="/assets/img/news.png" alt="Card Berita" className="w-[480px] h-full object-cover" />
                                <div className="p-8 flex flex-col justify-between h-full">
                                    <p className="text-red-500 text-sm" style={{ width: "89px", height: "30px", marginBottom: "17px" }}>
                                        28 Jul 2025
                                    </p>
                                    <h2
                                        className="text-gray-900 font-bold leading-snug"
                                        style={{
                                            width: "739px",
                                            height: "60px",
                                            fontSize: "20px",
                                            marginBottom: "102px",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        Integritas dan Disiplin, Dua Pilar Penting Pembentukan SDM Berkualitas di Seven INC.
                                    </h2>
                                    <button
                                        onClick={() => navigate("/isi-berita")}
                                        className="flex items-center gap-2 text-red-500 text-sm font-medium cursor-pointer mt-[18px]"
                                        style={{ width: "120px", height: "63px" }}
                                    >
                                        <span className="hover:underline">Lebih Lanjut</span>
                                        <i className="ri-arrow-right-long-line text-[16px] relative top-[2px]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Grid Card */}
                        <div className="mt-20 grid grid-cols-3 gap-x-[45px] gap-y-[80px] justify-items-center">
                            {cards.map((card, index) => (
                                <div key={index} className="w-[386px] h-[475px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                                    <div className="w-full h-[240px] overflow-hidden rounded-[15px]">
                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <p className="text-red-500 text-sm" style={{ width: "89px", height: "30px", marginBottom: "9px" }}>
                                            {card.date}
                                        </p>
                                        <h3
                                            className="text-gray-900 font-bold leading-snug"
                                            style={{
                                                width: "334px",
                                                height: "60px",
                                                fontSize: "20px",
                                                marginBottom: "18px",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {card.title}
                                        </h3>
                                        <button
                                            onClick={() => navigate("/isi-berita")}
                                            className="flex items-center gap-2 text-red-500 text-sm font-medium cursor-pointer mt-[18px]"
                                            style={{ width: "120px", height: "63px" }}
                                        >
                                            <span className="hover:underline">Lebih Lanjut</span>
                                            <i className="ri-arrow-right-long-line text-[16px] relative top-[2px]"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Baru */}
                        <div className="flex justify-center mt-[78px] mb-[50px]">
                            <nav aria-label="Page navigation">
                                <ul className="flex items-center -space-x-px h-10 text-base">
                                    {currentPage > 1 && (
                                        <li>
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                <svg className="w-3 h-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                                </svg>
                                            </button>
                                        </li>
                                    )}

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <li key={page}>
                                            <button
                                                onClick={() => setCurrentPage(page)}
                                                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 cursor-pointer ${currentPage === page ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100 hover:text-gray-700"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    ))}

                                    {currentPage < totalPages && (
                                        <li>
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                            >
                                                <svg className="w-3 h-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                                </svg>
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </Layout>
    );
};

export default Berita;