import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

const TentangKamiFull = () => {
    return (
        <Layout>
            <section className="bg-white py-24">
                <Container className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
                    {/* Kiri: Teks */}
                    <div className="md:w-1/2">
                        <h3 className="text-[20px] tracking-[0.60em] uppercase font-medium text-black mb-6">
                            Tentang Kami
                        </h3>
                        <h2 className="text-[36px] md:text-[40px] font-bold text-black leading-snug mb-6">
                            Dari Ide Menjadi Karya Demi<br />Kemajuan Bersama
                        </h2>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="md:w-1/2">
                        <img
                            src="/assets/img/Tempat.png"
                            alt="Tentang Kami"
                            className="rounded-[24px] w-full object-cover shadow"
                        />
                    </div>
                </Container>
                {/* Deskripsi Paragraf */}
                <Container className="mt-16 flex flex-col md:flex-row gap-16 text-gray-700 text-[15.5px] leading-[25px] text-justify">
                    <div className="flex-1 flex flex-col gap-6">
                        <p>
                            Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti “Pitu”, yang juga memiliki makna
                            “Pitulungane” atau Pertolongan. Nama ini dipilih sebagai wujud komitmen perusahaan untuk senantiasa
                            memberikan dukungan dan manfaat nyata bagi masyarakat melalui berbagai layanan yang ditawarkan.
                        </p>
                        <p>
                            Dalam perkembangannya, Seven Inc. terus memperluas lini bisnisnya ke sektor jasa, antara lain melalui unit
                            usaha Konveksi yang melayani kebutuhan produksi pakaian secara massal maupun custom, serta Jasa Pengelasan
                            yang menyediakan layanan konstruksi logam untuk berbagai keperluan.
                        </p>
                        <p>
                            Berbekal semangat Pitulungan, Seven Inc. senantiasa berupaya menjadi mitra terpercaya bagi para pelanggan,
                            relasi bisnis, dan masyarakat luas. Dengan inovasi berkelanjutan dan pelayanan profesional, Seven Inc.
                            berkomitmen untuk menghadirkan solusi terbaik, membuka peluang kerja sama, serta berkontribusi positif bagi
                            pertumbuhan industri kreatif di Indonesia.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        <p>
                            Seven Inc. merupakan perusahaan digital yang bergerak di bidang industri kreatif, dengan titik awal usaha
                            pada sektor fashion atau apparel pria. Dengan mengedepankan sistem pelayanan daring, Seven Inc. memberikan
                            kemudahan dan kenyamanan bagi para pelanggan dalam memperoleh produk, tanpa harus mengunjungi toko secara
                            langsung.
                        </p>
                        <p>
                            Selain fokus pada kegiatan usaha, Seven Inc. juga berperan aktif dalam mendukung pengembangan sumber daya
                            manusia. Perusahaan membuka kesempatan bagi siswa SMK dan mahasiswa untuk menimba pengalaman kerja melalui
                            program magang dan pelatihan, sehingga mereka dapat mengasah keterampilan sesuai dengan bidang keahliannya
                            masing-masing.
                        </p>
                    </div>
                </Container>

                {/* Core Value Section */}
                <Container className="mt-24 flex flex-col lg:flex-row gap-y-10 gap-x-16 items-start">
                    {/* Kiri - Judul dan Navigasi */}
                    <div className="lg:w-1/2 w-full ml-7">
                        <h2
                            className="uppercase tracking-[0.25em] text-gray-900 text-base mb-3"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Core Value Perusahaan
                        </h2>

                        <h3
                            className="text-3xl font-bold text-gray-900 mb-4 leading-snug"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Prinsip Utama yang Menjadi<br />Dasar Tumbuh Bersama
                        </h3>

                        <p className="text-gray-600 text-base mb-5 max-w-md leading-relaxed">
                            Sembilan nilai inti ini menjadi pedoman tim Seven INC. dalam membangun budaya kerja profesional,
                            kolaboratif, dan berkelanjutan menuju visi perusahaan yang terus berkembang.
                        </p>

                        {/* Tombol navigasi menggunakan Remix Icon */}
                        <div className="flex items-center gap-4">
                            <button className="w-14 h-14 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer flex items-center justify-center group">
                                <i class="ri-arrow-left-s-line text-red-500 group-hover:text-white text-3xl"></i>
                            </button>
                            <button className="w-14 h-14 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer flex items-center justify-center group">
                                <i class="ri-arrow-right-s-line text-red-500 group-hover:text-white text-3xl"></i>
                            </button>
                        </div>

                    </div>

                    {/* Kanan - Dua Card Core Value */}
                    <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-x-13 ml-4">
                        <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
                            <div className="flex justify-center mb-6">
                                <img src="/assets/img/vectorSalaman.png" alt="Icon Integritas" className="w-24 h-24" />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-950 mb-7">Integritas</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Sikap dasar setiap insan Seven INC. untuk selaras antara pikiran, ucapan, dan tindakan, menjaga
                                kejujuran, tanggung jawab, serta kerahasiaan sesuai visi dan amanah perusahaan.
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
                            <div className="flex justify-center mb-6">
                                <img src="/assets/img/vectorPerson.png" alt="Icon Positive" className="w-24 h-24" />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-950 mb-7">Positive Vibe</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Menciptakan lingkungan kerja yang suportif melalui sikap positif, penyampaian informasi yang membangun,
                                serta menghindari gosip dan prasangka yang merugikan tim.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </Layout>
    );
};

export default TentangKamiFull;