import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="bg-[#BDBDBD] text-white pb-3">
            <Container>
                {/* Bagian Atas: Logo dan Icon Sosmed */}
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <img
                        src="/assets/img/Logo.png"
                        alt="Seven Inc Logo"
                        className="h-12"
                    />

                    {/* Icon Sosmed */}
                    <div className="flex space-x-4 text-[35px]">
                        <i class="ri-linkedin-box-fill cursor-pointer"></i>
                        <i class="ri-instagram-line cursor-pointer"></i>
                        <i class="ri-facebook-circle-fill cursor-pointer"></i>
                        <i className="ri-twitter-x-fill cursor-pointer"></i>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <div className="border-t-2 border-white opacity-40 mb-8"></div>

                {/* Bagian Tengah: 4 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white mb-8">
                    {/* Kantor Pusat */}
                    <div>
                        <h3 className="text-[30px] font-bold mb-3">Kantor Pusat</h3>
                        <p className="flex items-start space-x-2">
                            <i class="ri-map-pin-line text-[25px]"></i>
                            <span className="text-[16px]">
                                Jl. Raya Janti Gg. Harjuna No.59,
                                Jaranan, Karangjambe, Kec. Banguntapan, Kabupaten Bantul,
                                Daerah Istimewa Yogyakarta 55198
                            </span>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-[30px] font-bold mb-3 ml-20">Links</h3>
                        <ul className="space-y-2 ml-20 text-[16px]">
                            <li>
                                <Link to="/" className="hover:text-blue-600 hover:underline">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link to="/tentang-kami" className="hover:text-blue-600 hover:underline">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link to="/bisnis-kami" className="hover:text-blue-600 hover:underline">
                                    Bisnis Kami
                                </Link>
                            </li>
                            <li>
                                <Link to="/berita" className="hover:text-blue-600 hover:underline">
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link to="/kontak" className="hover:text-blue-600 hover:underline">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bisnis Kami */}
                    <div>
                        <h3 className="text-[30px] font-bold mb-3 ml-6">Bisnis Kami</h3>
                        <ul className="space-y-2 ml-6 text-[16px]">
                            <li>Seven Tech</li>
                            <li>Seven Style</li>
                            <li>Seven Edu</li>
                            <li>Seven Serve</li>
                        </ul>
                    </div>

                    {/* Hubungi CS Kami */}
                    <div>
                        <h3 className="text-[30px] font-bold mb-3 ml-3">Hubungi CS Kami</h3>
                        <p className="flex items-center space-x-2 mb-4 ml-2">
                            <img src="/assets/img/vectorPhone.png" className="h-6"></img>
                            <span className="text-[16px] px-2">089633040200</span>
                        </p>
                        <p className="flex items-center space-x-2 ml-2">
                            <img src="/assets/img/vectorEmail.png" className="h-5"></img>
                            <span className="text-[16px] px-2">sevenincjogja@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <div className="border-t-2 border-white opacity-40 mb-4"></div>

                {/* Bagian Bawah */}
                <div className="text-center text-[18px] mb-1">
                    <p className="text-center font-medium">
                        Copyright © {new Date().getFullYear()} Seven INC., All right reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;