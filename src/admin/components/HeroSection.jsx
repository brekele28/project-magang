import Container from './Container'; 

const HeroSection = () => {
    return (
        <div
            className="hero min-h-[115vh] bg-center relative"
            style={{
                backgroundImage: "url('/assets/img/Hero.jpg')",
                backgroundPositionY: "-200px",
            }}
        >
            <div className="hero-overlay bg-black/30"></div>

            {/* Text kiri dengan Container */}
            <Container>
                <div className="absolute top-1/2 -translate-y-1/2 text-left text-white max-w-[682px] animate__animated animate__fadeInUp">
                    <h1 className="text-[56px] md:text-[64px] font-bold leading-tight mb-4">
                        Menaungi Inovasi,<br />Merajut Masa Depan
                    </h1>
                    <p className="text-[18px] md:text-[24px] font-normal">
                        Holding Multisektor Teknologi, Fashion, Edukasi & Jasa
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;