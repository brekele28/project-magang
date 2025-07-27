import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../components/Container";

const Internship = () => {
    return (
    <div className="bg-white text-gray-800 pt-[120px] pb-24">
        <Container>
        {/* ✅ Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-16">
            <div className="flex-1 mt-2">
            <h2 className="mb-3 ml-1 tracking-[0.25em] uppercase text-gray-800 text-lg">
                Internship
            </h2>
            <h1 className="font-bold text-black text-[45px] leading-[1.2] max-w-[450px]">
                Temukan<br />
                Kesempatan, Bangun<br />
                Masa Depan.
            </h1>
            </div>

            <div className="flex-1">
            <img
                src="/assets/img/internship.png"
                alt="Internship"
                className="w-full h-auto max-w-[600px] rounded-xl shadow-md"
            />
            </div>
        </div>

        {/* ✅ Core Value Section */}
        <div className="mt-24 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 flex flex-col justify-center mt-10">
            <h2 className="uppercase tracking-[0.25em] text-gray-600 text-base mb-3">
                Core Value Perusahaan
            </h2>

            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Prinsip Utama yang Menjadi<br />Dasar Tumbuh Bersama
            </h3>

            <p className="text-gray-600 text-base mb-5 max-w-md leading-relaxed">
                Sembilan nilai inti ini menjadi pedoman tim Seven INC. dalam
                membangun budaya kerja profesional, kolaboratif, dan berkelanjutan
                menuju visi perusahaan yang terus berkembang.
            </p>

            <div className="flex items-center gap-4">
                <button className="p-4 rounded-full border border-red-500 hover:bg-red-100 transition cursor-pointer">
                <ChevronLeft size={18} strokeWidth={5} className="text-red-500" />
                </button>
                <button className="p-4 rounded-full border border-red-500 hover:bg-red-500 transition cursor-pointer group">
                <ChevronRight
                    size={18}
                    strokeWidth={5}
                    className="text-red-500 group-hover:text-white transition"
                />
                </button>
            </div>
            </div>

            <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-x-13 ml-4">
            <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
                <div className="flex justify-center mb-6">
                <img
                    src="/assets/img/icon integritas.png"
                    alt="Icon Integritas"
                    className="w-24 h-24"
                />
                </div>
                <h4 className="font-semibold text-lg text-gray-950 mb-7">Integritas</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                Sikap dasar setiap insan Seven INC. untuk selaras antara pikiran,
                ucapan, dan tindakan, menjaga kejujuran, tanggung jawab, serta
                kerahasiaan sesuai visi dan amanah perusahaan.
                </p>
            </div>

            <div className="border border-gray-300 rounded-xl px-6 py-8 w-full sm:max-w-[220px] min-h-[360px] text-center shadow hover:shadow-md transition">
                <div className="flex justify-center mb-6">
                <img
                    src="/assets/img/icon positive.png"
                    alt="Icon Positive"
                    className="w-24 h-24"
                />
                </div>
                <h4 className="font-semibold text-lg text-gray-950 mb-7">Positive Vibe</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                Menciptakan lingkungan kerja yang suportif melalui sikap positif,
                penyampaian informasi yang membangun, serta menghindari gosip dan
                prasangka yang merugikan tim.
                </p>
            </div>
            </div>
        </div>

        {/* ✅ Syarat & Ketentuan */}
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
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm leading-relaxed max-w-[500px]">
                <li>Mengisi Formulir Pendaftaran Magang.</li>
                <li>Menyertakan surat pengantar atau surat tugas resmi dari pihak sekolah atau perguruan tinggi.</li>
                <li>Telah memperoleh izin atau persetujuan dari orang tua atau wali sebelum mengikuti program magang.</li>
                <li>Bersedia berkomitmen untuk menggali keterampilan dan pengalaman selama masa magang berlangsung.</li>
                <li>Bersedia menjalani proses pembelajaran yang menuntut kemandirian, kedewasaan, dan kesiapan untuk hidup lebih mandiri setelah magang selesai.</li>
                <li>Bersedia berinteraksi secara profesional dengan seluruh karyawan serta menjaga nama baik institusi asal (sekolah/kampus), perusahaan, dan pribadi.</li>
            </ol>
            </div>
        </div>

        {/* ✅ Bagian Paling Bawah */}
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
        </Container>
    </div>
    );
};

export default Internship;