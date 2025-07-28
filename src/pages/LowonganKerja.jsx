import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

const LowonganKerja = () => {
    return (
        <Layout>
            <div className="bg-white text-gray-800 pt-[130px] pb-24">
                <Container>
                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        {/* Konten Kiri */}
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

                        {/* Konten Kanan (Gambar) */}
                        <div className="w-full flex justify-end">
                            <img
                                src="/assets/img/cardLoker.png"
                                alt="Lowongan Kerja"
                                className="max-w-[679px] h-[453px] w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Core Value Section */}
                    <div className="mt-24 flex flex-col md:flex-row justify-between gap-10">
                        {/* Bagian Kiri */}
                        <div className="md:w-1/2 flex flex-col justify-center mt-10">
                            <h2 className="uppercase tracking-[0.45em] text-gray-600 text-[20px] mb-3">
                                Core Value Perusahaan
                            </h2>

                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 leading-snug">
                                Prinsip Utama yang Menjadi<br />Dasar Tumbuh Bersama
                            </h3>

                            <p className="text-gray-600 text-[16px] mb-5 leading-relaxed">
                                Sembilan nilai inti ini menjadi pedoman tim Seven <br /> INC. dalam
                                membangun budaya kerja profesional, <br /> kolaboratif, dan berkelanjutan
                                menuju visi <br /> perusahaan yang terus berkembang.
                            </p>

                            <div className="flex items-center gap-12">
                                <button className="w-14 h-14 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer flex items-center justify-center group">
                                    <i className="ri-arrow-left-s-line text-red-500 group-hover:text-white text-3xl"></i>
                                </button>
                                <button className="w-14 h-14 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer flex items-center justify-center group">
                                    <i className="ri-arrow-right-s-line text-red-500 group-hover:text-white text-3xl"></i>
                                </button>
                            </div>
                        </div>

                        {/* Bagian Kanan */}
                        <div className="md:w-[50%] w-full flex flex-col sm:flex-row gap-x-13 justify-end ml-auto">
                            <div
                                className="border border-gray-300 rounded-xl shadow hover:shadow-md transition text-center"
                                style={{ width: "302px", height: "555px" }}
                            >
                                <div className="flex flex-col items-center h-full pt-14">
                                    <img
                                        src="/assets/img/vectorSalaman.png"
                                        alt="Icon Integritas"
                                        style={{ width: "143px", height: "143px" }}
                                    />
                                    <h4
                                        className="font-semibold text-gray-950 mb-7 pt-8"
                                        style={{ fontSize: "20px" }}
                                    >
                                        Integritas
                                    </h4>
                                    <p
                                        className="text-gray-600 leading-relaxed px-4"
                                        style={{ fontSize: "16px" }}
                                    >
                                        Sikap dasar setiap insan Seven INC. untuk selaras antara pikiran,
                                        ucapan, dan tindakan, menjaga kejujuran, tanggung jawab, serta
                                        kerahasiaan sesuai visi dan amanah perusahaan.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="border border-gray-300 rounded-xl shadow hover:shadow-md transition text-center"
                                style={{ width: "302px", height: "555px" }}
                            >
                                <div className="flex flex-col items-center h-full pt-14">
                                    <img
                                        src="/assets/img/vectorPerson.png"
                                        alt="Icon Positive"
                                        style={{ width: "143px", height: "143px" }}
                                    />
                                    <h4
                                        className="font-semibold text-gray-950 mb-7 pt-8"
                                        style={{ fontSize: "20px" }}
                                    >
                                        Positive Vibe
                                    </h4>
                                    <p
                                        className="text-gray-600 leading-relaxed px-4"
                                        style={{ fontSize: "16px" }}
                                    >
                                        Menciptakan lingkungan kerja yang suportif melalui sikap positif,
                                        penyampaian informasi yang membangun, serta menghindari gosip dan
                                        prasangka yang merugikan tim.
                                    </p>
                                </div>
                            </div>
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

                        {/* Data Lowongan */}
                        {[
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
                        ].map((job, index) => (
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
                                    {/* Pekerjaan */}
                                    <div className="flex items-center gap-3 text-[12px] text-[#7B7B7B]">
                                        <img src="/assets/img/bagComponen.png" alt="bag-icon" />
                                        <span>{job.title}</span>
                                    </div>

                                    {/* Lokasi */}
                                    <div className="flex items-center gap-2 text-[12px] text-[#7B7B7B]">
                                        <i className="ri-map-pin-line text-[24px]"></i>
                                        <span>{job.location}</span>
                                    </div>

                                    {/* Tanggal */}
                                    <div className="flex items-center gap-2 text-[12px] text-[#7B7B7B]">
                                        <i className="ri-time-line text-[24px]"></i>
                                        <span>Close Date : {job.closeDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Tombol Lihat Lebih Lanjut */}
                        <div className="flex justify-center">
                            <Link to="/lowongan-full">
                                <button
                                    className="border border-gray-300 rounded-full text-gray-800 font-medium cursor-pointer"
                                    style={{ width: "515px", height: "63px", fontSize: "20px" }}
                                >
                                    Lihat Lebih Lanjut
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </Layout>
    );
};

export default LowonganKerja;