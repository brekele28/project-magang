import Container from './Container';

const businessLines = [
    { name: "Seven Tech", image: "/assets/img/card.png", dad: "100" },
    { name: "Seven Style", image: "/assets/img/card.png", dad: "300" },
    { name: "Seven Serve", image: "/assets/img/card.png", dad: "500" },
    { name: "Seven Edu", image: "/assets/img/card.png", dad: "700" },
];

const BisnisKami = () => {
    return (
        <section className="w-full bg-white mt-[85px]">
            <Container>
                {/* Heading Section */}
                <div className="text-center mb-6">
                    <p className="text-[20px] tracking-[0.4em] font-normal uppercase text-black mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Lini Bisnis Kami
                    </p>
                    <h2 className="text-[20px] md:text-[32px] font-bold text-gray-900" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        Satu Visi, Banyak Solusi
                    </h2>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {businessLines.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.dad}
                            data-aos-once="true"
                            className="bg-white rounded-xl border border-gray-200 shadow-[0_1px_6px_rgba(0,0,0,0.05)] w-[296px] h-[369px] flex flex-col items-center justify-center text-center mx-auto"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[102px] h-[102px] object-contain mb-4"
                            />
                            <p className="text-[20px] font-semibold text-gray-800">{item.name}</p>
                        </div>
                    ))}
                </div>
            </Container>

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
        </section>
    );
};

export default BisnisKami;