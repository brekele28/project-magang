import Container from "./Container";

const Footer = () => {
    return (
        <footer className="bg-[#BDBDBD] text-white">
            <Container>
                {/* Bagian Atas: Logo dan Icon Sosmed */}
                <div className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <img
                        src="/assets/img/Logo.png"
                        alt="Seven Inc Logo"
                        className="h-10"
                    />

                    {/* Icon Sosmed */}
                    <div className="flex space-x-4 text-2xl">
                        <i className="ri-linkedin-fill cursor-pointer"></i>
                        <i className="ri-instagram-fill cursor-pointer"></i>
                        <i className="ri-facebook-fill cursor-pointer"></i>
                        <i className="ri-twitter-x-fill cursor-pointer"></i>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <div className="border-t border-white opacity-40 mb-8"></div>

                {/* Bagian Tengah: 4 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white mb-8">
                    {/* Kantor Pusat */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Kantor Pusat</h3>
                        <p className="flex items-start space-x-2">
                            <i className="ri-map-pin-fill text-xl"></i>
                            <span>
                                Jl. Raya Janti Gg. Harjuna No.59,
                                Jaranan, Karangjambe, Kec. Banguntapan, Kabupaten Bantul,
                                Daerah Istimewa Yogyakarta 55198
                            </span>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Links</h3>
                        <ul className="space-y-2">
                            <li>Beranda</li>
                            <li>Tentang Kami</li>
                            <li>Bisnis Kami</li>
                            <li>Internship</li>
                            <li>Kontak</li>
                        </ul>
                    </div>

                    {/* Bisnis Kami */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Bisnis Kami</h3>
                        <ul className="space-y-2">
                            <li>Seven Tech</li>
                            <li>Seven Style</li>
                            <li>Seven Edu</li>
                            <li>Seven Serve</li>
                        </ul>
                    </div>

                    {/* Hubungi CS Kami */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Hubungi CS Kami</h3>
                        <p className="flex items-center space-x-2 mb-2">
                            <i className="ri-phone-fill text-xl"></i>
                            <span>089633040200</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <i className="ri-mail-fill text-xl"></i>
                            <span>sevenincjogja@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <div className="border-t border-white opacity-40 mb-4"></div>

                {/* Bagian Bawah */}
                <div className="text-center py-4 text-sm">
                    <p>
                        Copyright © {new Date().getFullYear()} Seven INC., All right reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;