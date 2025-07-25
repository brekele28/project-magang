import { ChevronLeft, ChevronRight } from 'lucide-react';

const TentangKami = () => {
    return (
    <div className="bg-white text-gray-800 pt-[120px] px-4 pb-24">
      {/* Hero Section */}
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 px-4">
        {/* Kiri - Teks */}
        <div className="flex-1 pt-25 md:pl-2">
            <h2
            className="mb-5 tracking-[0.25em] uppercase text-gray-800"
            style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
            }}
            >
            Tentang Kami
            </h2>

            <h1
            className="leading-tight"
            style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '45px',
                lineHeight: '1.2',
            }}
            >
            Dari Ide Menjadi Karya<br />Demi Kemajuan Bersama
            </h1>
        </div>

        {/* Kanan - Gambar */}
        <div className="flex-1">
            <img
            src="/assets/img/Tentang kami.png"
            alt="Tentang Kami"
            className="w-full h-auto max-w-[600px] rounded-xl shadow-md"
            />
        </div>
        </div>

      {/* Deskripsi Paragraf */}
        <section className="max-w-[1280px] mx-auto px-4 mt-16 flex flex-col md:flex-row gap-15 text-gray-700 text-[15.5px] leading-[25px] text-justify">
        {/* Kolom Kiri */}
        <div className="flex-1 flex flex-col gap-6">
            <p>
            Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti “Pitu”, yang juga memiliki makna “Pitulungane” atau Pertolongan.
            Nama ini dipilih sebagai wujud komitmen perusahaan untuk senantiasa memberikan dukungan dan manfaat nyata bagi masyarakat melalui
            berbagai layanan yang ditawarkan.
            </p>
            <p>
            Dalam perkembangannya, Seven Inc. terus memperluas lini bisnisnya ke sektor jasa, antara lain melalui unit usaha Konveksi yang melayani
            kebutuhan produksi pakaian secara massal maupun custom, serta Jasa Pengelasan yang menyediakan layanan konstruksi logam untuk berbagai keperluan.
            </p>
            <p>
            Berbekal semangat Pitulungan, Seven Inc. senantiasa berupaya menjadi mitra terpercaya bagi para pelanggan, relasi bisnis, dan masyarakat luas.
            Dengan inovasi berkelanjutan dan pelayanan profesional, Seven Inc. berkomitmen untuk menghadirkan solusi terbaik, membuka peluang kerja sama,
            serta berkontribusi positif bagi pertumbuhan industri kreatif di Indonesia.
            </p>
        </div>

        {/* Kolom Kanan */}
        <div className="flex-1 flex flex-col gap-6">
            <p>
            Seven Inc. merupakan perusahaan digital yang bergerak di bidang industri kreatif, dengan titik awal usaha pada sektor fashion
            atau apparel pria. Dengan mengedepankan sistem pelayanan daring, Seven Inc. memberikan kemudahan dan kenyamanan bagi para pelanggan
            dalam memperoleh produk, tanpa harus mengunjungi toko secara langsung.
            </p>
            <p>
            Selain fokus pada kegiatan usaha, Seven Inc. juga berperan aktif dalam mendukung pengembangan sumber daya manusia. Perusahaan membuka
            kesempatan bagi siswa SMK dan mahasiswa untuk menimba pengalaman kerja melalui program magang dan pelatihan, sehingga mereka dapat mengasah
            keterampilan sesuai dengan bidang keahliannya masing-masing.
            </p>
        </div>
        </section>

      {/* Core Value Section */}
        <section className="max-w-[1280px] mx-auto px-4 mt-24 flex flex-col lg:flex-row gap-y-10 gap-x-16 items-start">
        {/* Kiri - Judul dan Navigasi */}
        <div className="lg:w-1/2 w-full ml-7">
            <h2
            className="uppercase tracking-[0.25em] text-gray-600 text-base mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            >
            Core Value Perusahaan
            </h2>

            <h3
            className="text-3xl font-bold text-gray-900 mb-4 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            >
            Prinsip Utama yang Menjadi<br />
            Dasar Tumbuh Bersama
            </h3>

            <p className="text-gray-600 text-base mb-5 max-w-md leading-relaxed">
            Sembilan nilai inti ini menjadi pedoman tim Seven INC. dalam membangun budaya kerja profesional,
            kolaboratif, dan berkelanjutan menuju visi perusahaan yang terus berkembang.
            </p>

            <div className="flex items-center gap-4">
            <button className="p-4 rounded-full border border-red-500 hover:bg-red-100 transition cursor-pointer">
            <ChevronLeft size={18} strokeWidth={5} className="text-red-500" />
            </button>
            <button className="p-4 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer group">
            <ChevronRight size={18} strokeWidth={5} className="text-red-500 group-hover:text-white transition" />
            </button>
            </div>
        </div>

        {/* Kanan - Dua Card Core Value */}
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-x-13 ml-4">
          {/* Card: Integritas */}
            <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
            <div className="flex justify-center mb-6">
                <img src="/assets/img/icon integritas.png" alt="Icon Integritas" className="w-24 h-24" />
            </div>
            <h4 className="font-semibold text-lg text-gray-950 mb-7">Integritas</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                Sikap dasar setiap insan Seven INC. untuk selaras antara pikiran, ucapan, dan tindakan,
                menjaga kejujuran, tanggung jawab, serta kerahasiaan sesuai visi dan amanah perusahaan.
            </p>
            </div>

          {/* Card: Positive Vibe */}
            <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
            <div className="flex justify-center mb-6">
            <img src="/assets/img/icon positive.png" alt="Icon Integritas" className="w-24 h-24" />
            </div>
            <h4 className="font-semibold text-lg text-gray-950 mb-7">Positive Vibe</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                Menciptakan lingkungan kerja yang suportif melalui sikap positif, penyampaian informasi
                yang membangun, serta menghindari gosip dan prasangka yang merugikan tim.
            </p>
            </div>
        </div>
        </section>
    </div>
    );
};

export default TentangKami;
