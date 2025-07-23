const HeroSection = () => {
    return (
        <section
            className="relative h-[847px] w-full bg-cover bg-center"
            style={{ backgroundImage: `url("/assets/img/Hero.jpg")` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center px-6">
                <div className="text-white max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Menaungi Inovasi,<br />Merajut Masa Depan
                    </h1>
                    <p className="text-lg md:text-xl">
                        Holding Multisektor Teknologi, Fashion, Edukasi & Jasa
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;