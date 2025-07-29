import { useState } from "react";
import Container from './Container';

const Kontak = () => {
    // Email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [touched, setTouched] = useState(false);

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (touched) {
            setEmailError(!validateEmail(e.target.value));
        }
    };

    const handleBlur = () => {
        setTouched(true);
        setEmailError(!validateEmail(email));
    };


    // Kontak
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    const validatePhone = (value) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (phoneTouched) {
            setPhoneError(!validatePhone(e.target.value));
        }
    };

    const handlePhoneBlur = () => {
        setPhoneTouched(true);
        setPhoneError(!validatePhone(phone));
    };

    return (
        <section className="bg-white mb-[60px] mt-[81px]">
            <Container>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Kiri: Info Kontak */}
                    <div className="md:w-1/2">
                        <h3 className="text-[20px] tracking-[0.4em] uppercase font-normal text-black mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            Kontak
                        </h3>
                        <h2 className="text-[32px] font-bold text-black mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            Hubungi Kami
                        </h2>
                        <p className="text-[16px] leading-relaxed text-black text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            Jangan ragu menghubungi Seven INC. untuk menjalin kemitraan dan kesempatan berkembang bersama.
                        </p>
                    </div>

                    {/* Kanan: Form Kontak */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
                    data-aos-delay="300">
                        {/* Nama Lengkap */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[20px] mb-1 text-black">
                                Nama Lengkap
                                <span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Contoh: John Doe"
                                className="w-full bg-white text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300 text-[16px]"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[20px] mb-1 text-black">
                                Email
                                <span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>

                            <div
                                className={`w-full bg-white text-black px-4 py-3 h-[51px] flex items-center rounded-lg
      ${emailError
                                        ? "border border-red-500"
                                        : touched && email !== ""
                                            ? "border border-green-500"
                                            : "border border-gray-300"
                                    }`}
                            >
                                <input
                                    type="email"
                                    placeholder="mail@site.com"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={handleBlur}
                                    className="w-full outline-none bg-white text-black border-none text-[16px]"
                                />
                            </div>

                            {emailError && (
                                <p className="text-red-500 text-sm mt-1">Enter valid email address</p>
                            )}
                        </div>

                        {/* Nomor Telepon */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[20px] mb-1 text-black">
                                Nomor Telepon
                                <span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>

                            <div
                                className={`w-full bg-white text-black px-4 py-3 h-[51px] flex items-center rounded-lg 
            ${phoneError
                                        ? "border border-red-500"
                                        : phoneTouched && phone !== ""
                                            ? "border border-green-500"
                                            : "border border-gray-300"
                                    }`}
                            >
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onBlur={handlePhoneBlur}
                                    placeholder="Contoh: 081234567891"
                                    className="tabular-nums bg-white text-black w-full outline-none text-[16px]"
                                    required
                                />
                            </div>

                            {phoneError && (
                                <p className="text-red-500 text-sm mt-1">Must be 10-15 digits</p>
                            )}
                        </div>

                        {/* Subjek */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[20px] mb-1 text-black">
                                Subjek<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>

                            <div className="relative">
                                <select
                                    className="appearance-none bg-white border border-gray-300 text-black text-[16px] rounded-lg block w-full px-4 py-3 h-[51px] pr-10 focus:outline-none focus:border-gray-300"
                                >
                                    <option defaultValue>Pilih Objek</option>
                                    <option value="Kemitraan">Kemitraan</option>
                                    <option value="Layanan">Layanan</option>
                                    <option value="Karir">Karir</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>

                                {/* Custom Icon dari Remix Icon */}
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                    <i className="ri-arrow-down-wide-line text-gray-700 text-[25px]"></i>
                                </div>
                            </div>
                        </div>

                        {/* Pesan Anda */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block font-bold text-[20px] mb-1 text-black">
                                Pesan Anda
                                <span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>
                            <textarea
                                placeholder="Pesan Anda"
                                required
                                className="w-full h-40 bg-white text-black border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-300 text-[16px]"
                            />
                        </div>

                        {/* Kirim Pesan */}
                        <div className="col-span-1 md:col-span-2 flex justify-center">
                            <button
                                className="btn btn-outline bg-white text-black rounded-4xl font-medium tracking-[0.05em] text-[20px] px-6 py-6 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none w-[550px]"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Kontak;