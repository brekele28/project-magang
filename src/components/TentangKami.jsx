import Container from './Container';

const TentangKami = () => {
    return (
        <section className="bg-white py-24">
            <Container className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
                {/* Kiri: Teks */}
                <div className="md:w-1/2">
                    <h3 className="text-[16px] tracking-[0.60em] uppercase font-medium text-black mb-6">
                        Tentang Kami
                    </h3>
                    <h2 className="text-[28px] md:text-[36px] font-bold text-black leading-snug mb-6">
                        Dari Ide Menjadi Karya Demi<br />Kemajuan Bersama
                    </h2>
                    <p className="text-[#1f1f1f] text-[16px] leading-[1.8] mb-8">
                        Seven Inc. berasal dari kata Seven, yang dalam bahasa Jawa berarti “Pitu”, yang juga memiliki makna “Pitulungan” atau Pertolongan. Nama ini dipilih sebagai wujud komitmen perusahaan untuk senantiasa memberikan dukungan dan manfaat nyata bagi masyarakat melalui berbagai layanan yang ditawarkan.
                    </p>


                    <button
                        className="btn btn-outline text-black rounded-4xl font-medium text-[16px] px-8 py-7 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none mt-3"
                    >
                        Baca Selengkapnya
                    </button>
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
        </section>
    );
};

export default TentangKami;