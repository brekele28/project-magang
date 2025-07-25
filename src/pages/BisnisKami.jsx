import React from "react";

const BisnisKami = () => {
    return (
    <div className="pt-[91px] bg-white text-gray-800 font-poppins">
      {/* Header Gambar + Teks di Tengah */}
        <div className="relative w-full h-[360px]">
        <img
            src="/assets/img/header tm.png"
            alt="Header Bisnis Kami"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h2 className="uppercase tracking-[0.25em] text-sm mb-3 text-black">
            Lini Bisnis Kami
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-black">
            Satu Visi, Banyak Solusi
            </h1>
        </div>
        </div>

      {/* Deskripsi di Luar Gambar */}
        <div className="max-w-[1205px] mx-auto mt-12 px-10 text-center">
        <p className="text-gray-700 text-base leading-relaxed">
            Sebagai perusahaan holding multisektor, Seven INC. menaungi beragam
            unit usaha strategis yang bergerak di bidang teknologi, fashion &
            tekstil, jasa layanan, serta edukasi dan pelatihan. Setiap sektor
            dikelola secara profesional untuk menghadirkan solusi nyata dan
            berdaya saing tinggi, sejalan dengan visi perusahaan dalam membangun
            ekosistem bisnis yang berdampak, berkelanjutan, dan adaptif terhadap
            perkembangan zaman.
        </p>
        </div>

      {/* Section 1 - Seven Tech */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-20 px-20 mt-25">
        <div className="flex-1 text-justify ml-5">
            <h3 className="text-2xl font-bold mb-3">Seven Tech</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Seven Tech merupakan sebuah sektor teknologi dari Seven INC. yang
            berfokus pada penyediaan solusi digital komprehensif untuk
            mendukung pertumbuhan bisnis di era modern. Melalui pengembangan
            teknologi berbasis web dan mobile, layanan desain visual
            profesional, hingga konsultasi digital, Seven Tech hadir sebagai
            katalis transformasi digital bagi berbagai sektor usaha.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
            Dengan pendekatan inovatif dan berorientasi pada hasil, sektor ini
            mengintegrasikan strategi bisnis dengan pemanfaatan teknologi untuk
            menciptakan sistem kerja yang lebih efisien, terukur, dan berdaya
            saing tinggi. Seven Tech juga berperan penting dalam mendorong
            percepatan adaptasi digital UMKM maupun perusahaan skala menengah
            melalui penerapan platform digital yang ramah pengguna dan
            berkelanjutan.
            </p>
        </div>
        <img
            src="/assets/img/perusahaan.png"
            alt="Seven Tech"
            className="w-[480px] h-[320px] object-cover rounded-md"
        />
        </div>

      {/* Section 2 - Seven Style */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row-reverse items-center gap-20 px-20 mt-25">
        <div className="flex-1 text-justify ml-2">
            <h3 className="text-2xl font-bold mb-3">Seven Style</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Seven Style merupakan sektor bisnis Seven INC. yang bergerak di
            bidang fashion dan tekstil, dengan dedikasi tinggi terhadap
            pengembangan produk lokal yang berkualitas dan bernilai budaya.
            Unit usaha di bawah Seven Style antara lain Crows Denim,
            Alphawear, Grenade, TailorJogja.com, dan Rumah Konveksi
            masing-masing membawa identitas dan spesialisasi dalam dunia
            busana pria premium, fashion kasual lokal, hingga produksi tekstil
            konveksi.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
            Seven Style tidak sekadar memproduksi pakaian, tetapi juga
            membangun narasi budaya dalam setiap desainnya. Dengan menonjolkan
            elemen lokal dan menggabungkan pendekatan desain modern, sektor
            ini mampu menciptakan produk yang relevan di pasar domestik maupun
            internasional. Proses produksinya mengedepankan kualitas
            pengerjaan manual (handmade), pemilihan bahan yang teliti, serta
            kolaborasi erat dengan pelaku industri kreatif. Selain itu,
            melalui platform online dan sistem distribusi terintegrasi, Seven
            Style turut mendorong efisiensi dalam rantai pasok dan memperluas
            akses pasar bagi brand lokal.
            </p>
        </div>
        <img
            src="/assets/img/style.png"
            alt="Seven Style"
            className="w-[480px] h-[320px] object-cover rounded-md ml-3 mr-1"
        />
        </div>

      {/* Section 3 - Seven Serve */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-20 px-20 mt-25">
        <div className="flex-1 text-justify ">
            <h3 className="text-2xl font-bold mb-3">Seven Serve</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Seven Serve merupakan sektor layanan dari Seven INC. yang menaungi
            berbagai jenis usaha berbasis jasa, mulai dari layanan rumah
            tangga, kebutuhan teknis lapangan, hingga jasa pendukung acara dan
            operasional bisnis. Dengan cakupan yang luas dan beragam, sektor
            ini dirancang untuk memberikan kemudahan, kecepatan, dan kualitas
            pelayanan yang sesuai dengan kebutuhan masyarakat urban dan dunia
            industri.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
            Setiap unit dalam sektor ini dikelola dengan standar
            profesionalisme tinggi dan didukung oleh sistem kerja yang
            efisien, sehingga mampu menjawab kebutuhan klien secara tepat
            waktu dan berkualitas. Seven Serve juga menjadi pendorong
            terciptanya ekosistem jasa yang memberdayakan tenaga kerja lokal,
            membuka lapangan kerja baru, serta meningkatkan akses masyarakat
            terhadap layanan yang terjangkau dan terpercaya.
            </p>
        </div>
        <img
            src="/assets/img/serve.png"
            alt="Seven Serve"
            className="w-[480px] h-[320px] object-cover rounded-md ml-3 mr-1"
        />
        </div>

      {/* Section 4 - Seven Edu */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row-reverse items-center gap-20 px-20 mt-20 mb-25">
        <div className="flex-1 text-justify">
            <h3 className="text-2xl font-bold mb-3">Seven Edu</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Seven Edu merupakan sektor pendidikan dan pelatihan dari Seven
            INC. yang dirancang untuk menciptakan sumber daya manusia yang
            kompeten, siap kerja, dan berintegritas. Sektor ini
            menyelenggarakan program magang, pelatihan kerja, bimbingan
            belajar, serta workshop pengembangan diri yang menyasar pelajar,
            mahasiswa, dan masyarakat umum.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
            Dengan pendekatan berbasis praktik langsung di lingkungan kerja
            nyata, Seven Edu tidak hanya membekali peserta dengan keterampilan
            teknis, tetapi juga menanamkan nilai-nilai profesionalisme,
            tanggung jawab, dan kolaborasi. Program pelatihan disusun untuk
            menjawab kebutuhan dunia industri, serta memberikan pengalaman
            berharga yang memperkuat kesiapan peserta dalam memasuki dunia
            kerja.
            </p>
        </div>
        <img
            src="/assets/img/edu.png"
            alt="Seven Edu"
            className="w-[480px] h-[320px] object-cover rounded-md ml-3 mr-1"
        />
        </div>
    </div>
    );
};

export default BisnisKami;
