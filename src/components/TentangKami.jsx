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
        <section className="bg-white py-24">
            <Container className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Kiri: Teks */}
                <div className="md:w-1/2">
                    <h3 className="text-[20px] tracking-[0.4em] uppercase font-normal text-black mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Tentang Kami
                    </h3>
                    <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-6 leading-snug max-w-[600px]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Dari Ide Menjadi Karya Demi Kemajuan Bersama
                    </h2>
                    <p className="text-black text-[16px] leading-[1.8] mb-14 text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti “Pitu”, yang juga memiliki makna “Pitulungan” atau Pertolongan. Nama ini dipilih sebagai wujud komitmen perusahaan untuk senantiasa memberikan dukungan dan manfaat nyata bagi masyarakat melalui berbagai layanan yang ditawarkan.
                    </p>

                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className="btn btn-outline text-black rounded-4xl font-medium text-[16px] px-6 py-6 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none flex items-center justify-center gap-2 w-[220px] h-[56px]" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-once="true"
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
                <div className="md:w-1/2 animate__animated animate__fadeInUp animate__delay-1s">
                    <img
                        src="/assets/img/Tempat.png"
                        alt="Tentang Kami"
                        className="rounded-[24px] w-full object-cover shadow" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-once="true"
                    />
                </div>
            </Container>
        </section>
    );
};

export default TentangKami;