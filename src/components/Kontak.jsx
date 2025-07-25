import Container from './Container';

const Kontak = () => {
    return (
        <section className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Kiri: Info Kontak */}
                    <div className="md:w-1/2">
                        <h3 className="text-[16px] tracking-[0.60em] uppercase font-medium text-black mb-3">
                            Kontak
                        </h3>
                        <h2 className="text-[32px] font-bold text-black mb-6">
                            Hubungi Kami
                        </h2>
                        <p className="text-[16px] leading-relaxed text-[#1f1f1f]">
                            Jangan ragu menghubungi Seven INC. untuk menjalin kemitraan dan kesempatan berkembang bersama.
                        </p>
                    </div>

                    {/* Kanan: Form Kontak */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nama Lengkap */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[16px] mb-1 text-black">
                                Nama Lengkap<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Contoh: John Doe"
                                className="input w-full bg-white text-black border border-gray-300 rounded-lg px-4 py-6"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[16px] mb-1 text-black">
                                Email<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>

                            {/* Tambahkan border hanya di label.input agar seluruh area termasuk ikon memiliki border */}
                            <label className="input validator w-full bg-white text-black border border-gray-300 px-4 py-3 h-[51px] flex items-center rounded-lg">
                                <svg
                                    className="h-[1em] opacity-50 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input
                                    type="email"
                                    placeholder="mail@site.com"
                                    required
                                    className="w-full outline-none bg-white text-black border-none"
                                />
                            </label>

                            <div className="validator-hint hidden text-red-500 text-sm">
                                Enter valid email address
                            </div>
                        </div>

                        {/* Nomor Telepon */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[16px] mb-1 text-black">
                                Nomor Telepon<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>
                            <label className="input validator w-full bg-white text-black border border-gray-300 px-4 py-3 h-[51px] flex items-center rounded-lg">
                                <svg className="h-[1em] opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <g fill="none">
                                        <path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor" />
                                    </g>
                                </svg>
                                <input
                                    type="tel"
                                    className="tabular-nums bg-white text-black w-full outline-none"
                                    required
                                    placeholder="Contoh: 081234567891"
                                    pattern="[0-9]*"
                                    minLength="10"
                                    maxLength="15"
                                    title="Must be 10-15 digits"
                                />
                            </label>
                            <p className="validator-hint text-red-500 text-sm">Must be 10-15 digits</p>
                        </div>

                        {/* Subjek */}
                        <div className="flex flex-col">
                            <label className="font-bold text-[16px] mb-1 text-black">
                                Subjek<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>

                            <div className="relative">
                                <select
                                    className="appearance-none bg-white border border-gray-300 text-black text-sm rounded-lg block w-full px-4 py-3 h-[51px] pr-10"
                                >
                                    <option defaultValue>Pilih Objek</option>
                                    <option value="Kemitraan">Kemitraan</option>
                                    <option value="Layanan">Layanan</option>
                                    <option value="Karir">Karir</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>

                                {/* Custom Panah */}
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Pesan Anda */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="font-bold text-[16px] mb-1 text-black">
                                Pesan Anda<span className="text-red-500 font-bold text-[20px]"> *</span>
                            </label>
                            <textarea className="textarea w-full h-24 bg-white text-black border border-gray-300 px-4 py-3 rounded-lg" placeholder="Pesan Anda" required></textarea>
                        </div>

                        {/* Kirim Pesan */}
                        <div className="col-span-1 md:col-span-2 flex justify-center">
                            <button
                                className="btn btn-outline bg-white text-black rounded-4xl font-medium tracking-[0.05em] text-[16px] px-6 py-6 border border-gray-200 hover:border-neutral hover:bg-neutral hover:text-white transition-all duration-200 shadow-none w-[550px]"
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