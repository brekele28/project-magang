import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

const positions = [
    { name: "Administrasi", image: "/assets/img/vector1.png" },
    { name: "Animasi", image: "/assets/img/vector2.png" },
    { name: "Content Planner", image: "/assets/img/vector3.png" },
    { name: "Content Writer", image: "/assets/img/vector4.png" },
    { name: "Desain Grafis", image: "/assets/img/vector5.png" },
    { name: "Digital Market", image: "/assets/img/vector6.png" },
    { name: "Host / Presenter", image: "/assets/img/vector7.png" },
    { name: "Human Resource", image: "/assets/img/vector8.png" },
    { name: "Las", image: "/assets/img/vector9.png" },
    { name: "Marketing & Sales", image: "/assets/img/vector10.png" },
    { name: "Public Relation", image: "/assets/img/vector11.png" },
    { name: "Photographer Videographer", image: "/assets/img/vector12.png" },
    { name: "Programmer", image: "/assets/img/vector13.png" },
    { name: "Project Manager", image: "/assets/img/vector14.png" },
    { name: "Social Media Specialist", image: "/assets/img/vector15.png" },
    { name: "TikTok Creator", image: "/assets/img/vector16.png" },
    { name: "UI / UX Designer", image: "/assets/img/vector17.png" },
    { name: "Voice Over Talent", image: "/assets/img/vector18.png" },
];

const Internship = () => {
    return (
        <Layout>
            <div className="bg-white text-gray-800 pt-[130px] pb-24">
                <Container>
                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        {/* Konten Kiri */}
                        <div className="w-full md:w-[58%]">
                            <h3 className="text-[20px] tracking-[0.46em] uppercase text-gray-700 mb-3 font-regular">
                                Internship
                            </h3>
                            <h1 className="text-[36px] md:text-[40px] font-bold text-gray-900 leading-snug mb-4">
                                Temukan <br /> Kesempatan, Bangun <br /> Masa Depan.
                            </h1>
                        </div>

                        {/* Konten Kanan (Gambar) */}
                        <div className="w-full flex justify-end">
                            <img
                                src="/assets/img/Internship.png"
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

                    {/* Syarat & Ketentuan */}
                    <div className="mt-24 flex flex-col md:flex-row gap-10">
                        <div className="md:w-1/2 flex flex-col justify-center mt-8">
                            <h2 className="uppercase tracking-[0.4em] text-gray-600 text-sm mb-3">
                                Syarat & Ketentuan
                            </h2>
                            <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-snug">
                                Persiapkan Dirimu, Tumbuh<br />Bersama Kami.
                            </h3>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[16px] leading-relaxed max-w-[500px]">
                                <li>Mengisi Formulir Pendaftaran Magang.</li>
                                <li>Menyertakan surat pengantar atau surat tugas resmi dari pihak sekolah atau perguruan tinggi.</li>
                                <li>Telah memperoleh izin atau persetujuan dari orang tua atau wali sebelum mengikuti program magang.</li>
                                <li>Bersedia berkomitmen untuk menggali keterampilan dan pengalaman selama masa magang berlangsung.</li>
                                <li>Bersedia menjalani proses pembelajaran yang menuntut kemandirian, kedewasaan, dan kesiapan untuk hidup lebih mandiri setelah magang selesai.</li>
                                <li>Bersedia berinteraksi secara profesional dengan seluruh karyawan serta menjaga nama baik institusi asal (sekolah/kampus), perusahaan, dan pribadi.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Bagian Paling Bawah */}
                    <div className="mt-20 text-center max-w-[800px] mx-auto">
                        <h2 className="tracking-[0.4em] uppercase text-gray-600 text-sm mb-3">
                            Formasi Internship
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Bangun Kompetensi dan Karakter Bersama Seven INC.
                        </h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Program magang dan internship di Seven INC. dirancang untuk menjadi wadah bagi siswa, mahasiswa, maupun individu umum
                            yang ingin mengembangkan keterampilan praktis dan kesiapan kerja melalui bimbingan langsung, pelatihan intensif, serta
                            pengalaman di lingkungan industri multisektor.
                        </p>
                    </div>
                    {/* Bagian Card 18 */}
                    <div className="mt-12 grid grid-cols-6 gap-14">
                        {positions.map((item, index) => (
                            <div
                                key={index}
                                className="h-[137px] flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md border border-gray-200 w-full"
                            >
                                <img src={item.image} alt={item.name} className="w-10 h-10 mb-2" />
                                <p className="text-sm font-semibold text-gray-800 text-center px-2">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Konten Fasilitas yang Didapat */}
                    <div className="mt-16 flex flex-col md:flex-row items-center md:items-center gap-6">
                        {/* Bagian Kiri */}
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <p className="tracking-[0.5em] uppercase text-gray-700 text-[20px] mb-3">
                                Fasilitas yang Didapat
                            </p>
                            <h3 className="text-[32px] md:text-[32px] font-bold text-black leading-snug">
                                Karena Belajar Butuh <br />Lingkungan yang Mendukung.
                            </h3>
                        </div>

                        {/* Bagian Kanan */}
                        <div className="md:w-1/2">
                            <ol className="list-decimal pl-5 space-y-2 text-gray-800 text-[16px] leading-relaxed">
                                <li>Setiap peserta magang akan mendapatkan bimbingan langsung dari tim internal yang berpengalaman.</li>
                                <li>Disediakan sesi pengembangan keterampilan tambahan yang dapat diikuti secara sukarela di luar jam kerja reguler.</li>
                                <li>Peserta akan memperoleh sertifikat magang serta seragam resmi dari MagangJogja.com sebagai bukti keikutsertaan.</li>
                                <li>Disediakan koneksi internet tanpa biaya tambahan bagi peserta magang yang menjalankan aktivitas di kantor.</li>
                                <li>Bagi peserta yang berasal dari luar kota, tim kami akan memberikan informasi seputar kost atau hunian dengan harga terjangkau.</li>
                                <li>Tersedia minuman hangat secara cuma-cuma sebagai bentuk dukungan kenyamanan selama kegiatan magang berlangsung.</li>
                                <li>Bagi peserta yang menunjukkan performa baik, akan diberikan surat rekomendasi untuk mendukung karier atau studi lanjutan.</li>
                                <li>Peserta berpeluang untuk terlibat aktif dalam berbagai proyek nyata yang dijalankan oleh tim profesional Seven INC.</li>
                                <li>Magang di Seven INC. memberikan akses untuk membangun koneksi profesional dan pengalaman langsung di lingkungan kerja multisektor.</li>
                            </ol>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Banner Section */}
            <Container>
                <div className="relative h-[380px] py-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {/* Banner Box */}
                    <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                        {/* Layer merah kiri */}
                        <div className="absolute top-0 left-0 h-full w-[810px] bg-[#D43026] z-0" />

                        {/* Chevron Arrows */}
                        <img
                            src="/assets/img/Chevron.png"
                            alt="Chevron Arrows"
                            className="absolute right-0 top-0 translate-x-[40px] w-[670px] h-full object-cover z-10"
                            draggable={false}
                            data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                        />

                        {/* Text dan Tombol */}
                        <div className="absolute top-1/2 left-[100px] -translate-y-1/2 z-20 text-white">
                            <p className="uppercase tracking-[0.4em] text-[20px] font-medium mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                Bergabunglah Sekarang
                            </p>
                            <h2 className="text-white font-bold text-[20px] md:text-[32px] mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                Kesempatan Berkembang<br />
                                Bersama Seven INC.
                            </h2>
                            <button
                                className="btn btn-outline bg-white text-black rounded-4xl font-medium tracking-[0.05em] text-[20px] px-4 py-7 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none mt-1"
                                data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>

                    {/* Gambar Orang */}
                    <img
                        src="/assets/img/Hero2.png"
                        alt="Business Person"
                        className="absolute right-[49px] bottom-10 w-[440px] z-20"
                        draggable={false}
                        data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                    />
                </div>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Internship