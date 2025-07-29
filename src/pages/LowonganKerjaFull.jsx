import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

const allJobs = {
    1: [
        {
            title: "Staff Human Resources Development (HRD)",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "Staff Human Resources Development (HRD)",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "Staff Human Resources Development (HRD)",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "Staff Human Resources Development (HRD)",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "Staff Human Resources Development (HRD)",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
    ],
    2: [
        {
            title: "UJI Coba Halaman 2",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 2",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 2",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 2",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 2",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
    ],
    3: [
        {
            title: "UJI Coba Halaman 3",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 3",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 3",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 3",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
        {
            title: "UJI Coba Halaman 3",
            company: "Seven INC",
            location: "Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            closeDate: "30 Juni 2025",
        },
    ],
};

const LowonganKerjaFull = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobs = allJobs[currentPage];
    return (
        <Layout>
            <div className="bg-white text-gray-800 pt-[130px] pb-24">
                <Container>
                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="w-full md:w-[58%]">
                            <h3 className="text-[20px] tracking-[0.46em] uppercase text-gray-700 mb-3 font-regular">
                                Lowongan Kerja
                            </h3>
                            <h1 className="text-[36px] md:text-[40px] font-bold text-gray-900 leading-snug mb-4">
                                Berkarir bersama <br /> Seven INC.
                            </h1>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                Temukan peluang karir Anda dengan posisi yang sesuai.
                            </p>
                        </div>

                        <div className="w-full flex justify-end">
                            <img
                                src="/assets/img/cardLoker.png"
                                alt="Lowongan Kerja"
                                className="max-w-[679px] h-[453px] w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Posisi Pekerjaan */}
                    <div className="mt-24">
                        <div className="text-center">
                            <h3 className="text-[20px] tracking-[0.46em] uppercase text-gray-700 mb-3">
                                Posisi Pekerjaan
                            </h3>
                            <h2 className="text-[32px] font-bold text-gray-900 mb-10">
                                Mulai pertumbuhan karirmu sekarang.
                            </h2>
                        </div>

                        {/* 🔹 Mapping data jobs */}
                        {jobs.map((job, index) => (
                            <div key={index} className="w-full mb-[48px]">
                                {/* Bagian Atas */}
                                <div className="border border-gray-300 rounded-t-xl px-14 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-[24px] font-bold text-gray-900">{job.title}</h3>
                                        <p className="text-[16px] text-[#7B7B7B]">{job.company}</p>
                                    </div>
                                    <button
                                        className="bg-[#DC3933] hover:bg-red-500 text-white rounded-full cursor-pointer"
                                        style={{ width: "245px", height: "63px" }}
                                    >
                                        Selengkapnya
                                    </button>
                                </div>

                                {/* Bagian Bawah */}
                                <div className="border-x border-b border-gray-300 rounded-b-xl px-14 p-1 flex flex-wrap justify-between items-center text-gray-700 text-[16px]">
                                    <div className="flex items-center gap-3 text-[12px] text-[#7B7B7B]">
                                        <img src="/assets/img/bagComponen.png" alt="bag-icon" />
                                        <span>{job.title}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-[12px] text-[#7B7B7B]">
                                        <i className="ri-map-pin-line text-[24px]"></i>
                                        <span>{job.location}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-[12px] text-[#7B7B7B]">
                                        <i className="ri-time-line text-[24px]"></i>
                                        <span>Close Date : {job.closeDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Tombol Pagination */}
                        <div className="flex justify-center">
                            <nav aria-label="Page navigation example">
                                <ul className="flex items-center -space-x-px h-10 text-base">

                                    {/* Tombol Arrow Left (hanya muncul jika currentPage > 1) */}
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

                                    {/* Tombol Halaman */}
                                    {[1, 2, 3].map((page) => (
                                        <li key={page}>
                                            <button
                                                onClick={() => setCurrentPage(page)}
                                                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 cursor-pointer ${currentPage === page
                                                        ? "bg-gray-800 text-white"
                                                        : "bg-white text-black hover:bg-gray-100 hover:text-gray-700"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    ))}

                                    {/* Tombol Arrow Right */}
                                    <li>
                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) => Math.min(prev + 1, Object.keys(allJobs).length))
                                            }
                                            className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                        >
                                            <svg className="w-3 h-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                        </button>
                                    </li>
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

export default LowonganKerjaFull;