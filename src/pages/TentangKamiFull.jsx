import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";


const TentangKamiFull = () => {
    return (
        <Layout>
            <div className="bg-white text-gray-800 pt-[110px] ">
                <Container>
                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="w-full md:w-[68%]">
                            <h3 className="text-[20px] tracking-[0.46em] uppercase text-gray-700 mb-3 font-regular">
                                Tentang Kami
                            </h3>
                            <h1 className="text-[36px] md:text-[40px] font-bold text-gray-900 leading-snug mb-4">
                                Dari Ide Menjadi Karya<br /> Demi Kemajuan<br />Bersama
                            </h1>
                        </div>

                        <div className="w-full flex justify-end">
                            <img
                                src="/assets/img/Tempat.png"
                                alt="Lowongan Kerja"
                                className="max-w-[733px] h-[561px] w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Deskripsi Paragraf */}
                    <div className="mt-[85px] flex flex-col md:flex-row justify-between gap-20 text-gray-700 text-[15.5px] leading-[25px] w-full">
                        <div className="flex-1 w-full flex flex-col gap-6">
                            {/* Paragraf kiri */}
                            <p>
                                Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti<br />“Pitu”, yang juga memiliki makna
                                “Pitulungane” atau Pertolongan. Nama ini dipilih sebagai wujud komitmen perusahaan untuk senantiasa <br />
                                memberikan dukungan dan manfaat nyata bagi masyarakat melalui<br /> berbagai layanan yang ditawarkan.
                            </p>
                            <p>
                                Seven Inc. merupakan perusahaan digital yang bergerak di bidang<br /> industri kreatif, dengan titik awal usaha
                                pada sektor fashion atau apparel<br /> pria. Dengan mengedepankan sistem pelayanan daring, Seven Inc. memberikan
                                kemudahan dan kenyamanan bagi para pelanggan dalam memperoleh produk, tanpa harus mengunjungi toko secara
                                langsung.
                            </p>
                            <p>
                                Dalam perkembangannya, Seven Inc. terus memperluas lini bisnisnya ke sektor jasa, antara lain melalui unit
                                usaha Konveksi yang melayani kebutuhan produksi pakaian secara massal maupun custom, serta Jasa Pengelasan
                                yang menyediakan layanan konstruksi logam untuk berbagai keperluan.
                            </p>
                        </div>

                        <div className="flex-1 w-full flex flex-col gap-6">
                            {/* Paragraf kanan */}
                            <p>
                                Selain fokus pada kegiatan usaha, Seven Inc. juga berperan aktif dalam mendukung pengembangan sumber daya
                                manusia. Perusahaan membuka kesempatan bagi siswa SMK dan mahasiswa untuk menimba pengalaman kerja melalui
                                program magang dan pelatihan, sehingga mereka dapat mengasah keterampilan sesuai dengan bidang<br /> keahliannya
                                masing-masing.
                            </p>
                            <p>
                                Berbekal semangat Pitulungan, Seven Inc. senantiasa berupaya menjadi mitra terpercaya bagi para pelanggan,
                                relasi bisnis, dan masyarakat<br /> luas. Dengan inovasi berkelanjutan dan pelayanan profesional, Seven Inc.
                                berkomitmen untuk menghadirkan solusi terbaik, membuka peluang<br /> kerja sama, serta berkontribusi positif bagi
                                pertumbuhan industri kreatif <br />di Indonesia.
                            </p>
                        </div>
                    </div>

                    {/* Core Value Section */}
                    <div className="mt-[85px] flex flex-col md:flex-row justify-between gap-10 mb-[85px]">
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
                </Container>
            </div>
            <Footer />
        </Layout>
    );
};

export default TentangKamiFull;