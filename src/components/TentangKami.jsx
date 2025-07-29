import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from './Container';

const TentangKami = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true); // aktifkan loading
        setTimeout(() => {
            navigate("/tentang-kami"); // pindah ke halaman tentang-kami
        }, 1000); // setelah 3 detik
    };

    return (
        <section className="bg-white mt-[85px]">
            <Container className="flex flex-col md:flex-row items-center">
                {/* Kiri: Teks */}
                <div>
                    <h3 className="text-[20px] tracking-[0.43em] uppercase font-normal text-black mb-[21px]">
                        Tentang Kami
                    </h3>
                    <h2 className="text-[32px] font-bold text-black mb-[21px] leading-snug max-w-[700px] tracking-[-0.01em]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Dari Ide Menjadi Karya Demi Kemajuan Bersama
                    </h2>
                    <p
                        className="text-black text-[16px] tracking-[-0.01em] leading-[1.5] mb-[52px] max-w-[631px] text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
                    >
                        Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti “Pitu”,
                        yang juga memiliki makna “Pitulungan” atau Pertolongan. Nama ini dipilih
                        sebagai wujud komitmen perusahaan untuk senantiasa memberikan dukungan
                        dan manfaat nyata bagi masyarakat melalui berbagai layanan yang ditawarkan.
                    </p>

                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className="btn btn-outline text-black rounded-4xl font-medium text-[16px] px-6 py-6 border border-gray-200 hover:bg-neutral hover:text-white transition-all duration-200 shadow-none flex items-center justify-center gap-2 w-[220px] h-[56px]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2 w-full">
                                <span className="loading loading-spinner"></span>
                                loading
                            </div>
                        ) : (
                            "Baca Selengkapnya"
                        )}
                    </button>
                </div>

                {/* Kanan: Gambar */}
                <div className="md:w-1/2 flex justify-end animate__animated animate__fadeInUp animate__delay-1s">
                    <img
                        src="/assets/img/Tempat.png"
                        alt="Tentang Kami"
                        className="max-w-[584px] h-[447px] w-full object-cover" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-once="true"
                    />
                </div>
            </Container>
        </section>
    );
};

export default TentangKami;