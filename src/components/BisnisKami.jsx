import Container from './Container';

const businessLines = [
    { name: "Seven Tech", image: "/assets/img/card.png" },
    { name: "Seven Style", image: "/assets/img/card.png" },
    { name: "Seven Serve", image: "/assets/img/card.png" },
    { name: "Seven Edu", image: "/assets/img/card.png" },
];

const BisnisKami = () => {
    return (
        <section className="w-full bg-white pt-5">
            <Container>
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <p className="text-[16px] tracking-[0.60em] font-medium uppercase text-black mb-3">
                        Lini Bisnis Kami
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Satu Visi, Banyak Solusi
                    </h2>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {businessLines.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 shadow-[0_1px_6px_rgba(0,0,0,0.05)] w-[296px] h-[369px] flex flex-col items-center justify-center text-center mx-auto"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Banner Section */}
            <Container>
                <div className="relative h-[420px]">
                    {/* Banner Box */}
                    <div className="relative w-full h-[339px] rounded-2xl overflow-hidden shadow-lg bg-white">
                        {/* Layer merah kiri */}
                        <div className="absolute top-0 left-0 h-full w-[810px] bg-[#D6332C] z-0" />

                        {/* Chevron Arrows */}
                        <img
                            src="/assets/img/Chevron.png"
                            alt="Chevron Arrows"
                            className="absolute right-0 top-0 translate-x-[40px] w-[670px] h-full object-cover z-10"
                            draggable={false}
                        />

                        {/* Text dan Tombol */}
                        <div className="absolute top-1/2 left-[110px] -translate-y-1/2 z-20 text-white">
                            <p className="uppercase tracking-[0.4em] text-[20px] font-medium mb-4">
                                Bergabunglah Sekarang
                            </p>
                            <h2 className="text-white font-bold text-[20px] md:text-[32px] leading-relaxed mb-6">
                                Kesempatan Berkembang<br />
                                Bersama Seven INC.
                            </h2>
                            <button
                                className="btn btn-outline bg-white text-black rounded-4xl font-medium tracking-[0.05em] text-[16px] px-6 py-6 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none mt-3"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>

                    {/* Gambar Orang */}
                    <img
                        src="/assets/img/Hero2.png"
                        alt="Business Person"
                        className="absolute right-[55px] bottom-23 w-[420px] z-20"
                        draggable={false}
                    />
                </div>
            </Container>
        </section>
    );
};

export default BisnisKami;