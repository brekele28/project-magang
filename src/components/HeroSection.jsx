import Container from './Container'; 

const HeroSection = () => {
    return (
        <div
            className="hero min-h-[118vh] bg-center relative"
            style={{
                backgroundImage: "url('/assets/img/Hero.jpg')",
                backgroundPositionY: "-200px",
            }}
        >
            <div className="hero-overlay bg-black/30"></div>

            {/* Text kiri dengan Container */}
            <Container>
                <div className="absolute top-1/2 -translate-y-1/2 text-left text-white max-w-[600px]">
                    <h1 className="text-[48px] md:text-[56px] font-bold leading-tight mb-4">
                        Menaungi Inovasi,<br />Merajut Masa Depan
                    </h1>
                    <p className="text-[18px] md:text-[20px] font-normal">
                        Holding Multisektor Teknologi, Fashion, Edukasi & Jasa
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;