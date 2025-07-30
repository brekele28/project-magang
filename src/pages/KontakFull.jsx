import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Container from "../components/Container";

const KontakFull = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [touched, setTouched] = useState(false);

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (touched) setEmailError(!validateEmail(e.target.value));
    };
    const handleBlur = () => {
        setTouched(true);
        setEmailError(!validateEmail(email));
    };

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    const validatePhone = (value) => /^[0-9]{10,15}$/.test(value);
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (phoneTouched) setPhoneError(!validatePhone(e.target.value));
    };
    const handlePhoneBlur = () => {
        setPhoneTouched(true);
        setPhoneError(!validatePhone(phone));
    };

    return (
        <Layout>
            <Container>
                {/* Bagian Judul */}
                <div className="mb-10 pt-[120px]">
                    <p className="text-[20px] font-normal tracking-[0.4em] uppercase text-gray-800">Kontak</p>
                    <h1 className="text-[64px] font-bold text-gray-800 leading-tight">
                        Hubungi Kami
                    </h1>
                </div>

                {/* Pembungkus Merah */}
                <div className="relative w-full h-[790px] mx-auto">
                    {/* Bagian Kanan (Background Merah + Info Kontak) */}
                    <div className="absolute right-0 top-0 bg-red-600 rounded-2xl w-[532px] h-[704px] pt-18 pb-10 pr-10 pl-[168px] flex flex-col justify-start">
                        {/* Kantor Pusat */}
                        <div className="mb-8">
                            <h2 className="text-[30px] font-bold mb-3">Kantor Pusat</h2>
                            <p className="flex items-start gap-4 text-[16px] leading-relaxed">
                                <i className="ri-map-pin-line text-[25px]"></i>
                                Jl. Raya Janti Gg. Harjuna No.59, Jaranan, Karangjambe, Kec. Banguntapan,
                                Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
                            </p>
                        </div>

                        {/* Hubungi CS Kami */}
                        <div className="mb-8">
                            <h2 className="text-[30px] font-bold mb-3">Hubungi CS Kami</h2>
                            <p className="text-[16px] mb-2 flex items-center gap-4">
                                <img
                                    src="/assets/img/vectorPhone.png"
                                    alt="phone"
                                    className="w-[25px] h-full"
                                />
                                089653040200
                            </p>
                        </div>
                        {/* Hubungi CS Kami */}
                        <div className="mb-8">
                            <h2 className="text-[30px] font-bold mb-3">Email</h2>
                            <p className="text-[16px] mb-2 flex items-center gap-4">
                                <img
                                    src="/assets/img/vectorEmail.png"
                                    alt="phone"
                                    className="w-[25px] h-full"
                                />
                                sevenincjogja@gmail.com
                            </p>
                        </div>

                        {/* Follow Sosial Media */}
                        <div>
                            <h2 className="text-[30px] font-bold mb-3">Follow Sosial Media</h2>
                            <div className="flex gap-3">
                                <i className="ri-linkedin-box-fill text-white text-[35px]"></i>
                                <i className="ri-instagram-line text-white text-[35px]"></i>
                                <i className="ri-facebook-circle-line text-white text-[35px]"></i>
                                <i className="ri-twitter-x-line text-white text-[35px]"></i>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Kiri (Form) */}
                    <div
                        className="absolute top-0 left-0 bg-white p-8 rounded-l-2xl rounded-r-4xl shadow-md border border-gray-300"
                        style={{ width: "862px", height: "704px" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Semua form yang sudah ada tetap sama */}
                            {/* Nama Lengkap */}
                            <div className="flex flex-col pt-1">
                                <label className="font-bold text-[20px] mb-1 text-black">
                                    Nama Lengkap<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contoh: John Doe"
                                    className="w-full text-black bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none text-[16px]"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col pt-1">
                                <label className="font-bold text-[20px] mb-1 text-black">
                                    Email<span className="text-red-500"> *</span>
                                </label>
                                <div
                                    className={`w-full bg-white px-4 py-3 h-[51px] flex items-center rounded-lg border ${emailError
                                        ? "border-red-500"
                                        : touched && email !== ""
                                            ? "border-green-500"
                                            : "border-gray-300"
                                        }`}
                                >
                                    <input
                                        type="email"
                                        placeholder="Contoh: johndoe@gmail.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onBlur={handleBlur}
                                        className="w-full outline-none bg-transparent text-[16px] text-black"
                                        required
                                    />
                                </div>
                                {emailError && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Masukkan email yang valid
                                    </p>
                                )}
                            </div>

                            {/* Nomor Telepon */}
                            <div className="flex flex-col pt-4">
                                <label className="font-bold text-[20px] mb-1 text-black">
                                    Nomor Telepon<span className="text-red-500"> *</span>
                                </label>
                                <div
                                    className={`w-full bg-white px-4 py-3 h-[51px] flex items-center rounded-lg border ${phoneError
                                        ? "border-red-500"
                                        : phoneTouched && phone !== ""
                                            ? "border-green-500"
                                            : "border-gray-300"
                                        }`}
                                >
                                    <input
                                        type="tel"
                                        placeholder="Contoh: 081234567891"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        onBlur={handlePhoneBlur}
                                        className="w-full outline-none bg-transparent text-[16px] text-black"
                                        required
                                    />
                                </div>
                                {phoneError && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Masukkan nomor telepon yang valid (10-15 digit)
                                    </p>
                                )}
                            </div>

                            {/* Subjek */}
                            <div className="flex flex-col pt-4">
                                <label className="font-bold text-[20px] mb-1 text-black">
                                    Subjek<span className="text-red-500"> *</span>
                                </label>
                                <div className="relative">
                                    <select className="appearance-none bg-white border border-gray-300 rounded-lg block w-full px-4 py-3 h-[51px] pr-10 focus:outline-none text-[16px] text-black">
                                        <option defaultValue>Pilih Objek</option>
                                        <option value="Kemitraan">Kemitraan</option>
                                        <option value="Layanan">Layanan</option>
                                        <option value="Karir">Karir</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                        <i className="ri-arrow-down-wide-line text-gray-700 text-[25px]"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Pesan Anda */}
                            <div className="col-span-1 md:col-span-2 pt-4">
                                <label className="font-bold text-[20px] mb-1 text-black">
                                    Pesan Anda<span className="text-red-500"> *</span>
                                </label>
                                <textarea
                                    placeholder="Pesan Anda"
                                    className="w-full h-40 bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none text-[16px] text-black"
                                    required
                                />
                            </div>

                            {/* Tombol */}
                            <div className="col-span-1 md:col-span-2 flex justify-center pt-12">
                                <button className="bg-white border border-gray-200 rounded-full px-6 py-4 text-[20px] hover:bg-black hover:text-white transition-all w-[550px] text-black cursor-pointer">
                                    Kirim Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Konten Maps Next Time */}
            </Container>
            <Footer />
        </Layout>
    );
};

export default KontakFull;