import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

/* =========================
    API SET UP
========================= */
const API_BASE = import.meta?.env?.VITE_API_BASE || "http://localhost:8000/api";
const api = axios.create({ baseURL: API_BASE });
const tokenHeader = () => ({ Authorization: `Bearer ${localStorage.getItem("token") || ""}` });

/* Reusable Text Input */
const TextInput = ({ label, value, onChange, textarea }) => (
    <div className="mb-4">
        <label className="block text-gray-700 mb-2">{label}</label>
        {textarea ? (
            <textarea
                rows="4"
                value={value}
                onChange={onChange}
                className="w-full border rounded p-2 text-black resize-none"
            />
        ) : (
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full border rounded p-2 text-black"
            />
        )}
    </div>
);

/* File Input Hero (Layout 1) */
const FileInputHero = ({ preview, fileName, onChange, size = "w-100 h-100" }) => (
    <div className="flex-1">
        <label className="block text-gray-700 mb-[-58px]">Ganti Gambar</label>
        <div className="mb-[-35px]">
            <img src={preview} alt="Preview Hero" className={`${size} object-contain rounded`} />
        </div>
        <div className="flex items-center w-full border rounded-md overflow-hidden">
            <label className="bg-green-500 text-white px-4 py-2 cursor-pointer hover:bg-green-600">
                Choose File
                <input type="file" accept="image/*" onChange={onChange} className="hidden" />
            </label>
            <span className="flex-1 px-3 py-2 text-gray-700 bg-white">
                {fileName || (preview ? preview.split("/").pop() : "No file chosen")}
            </span>
        </div>
    </div>
);

/* File Input Card (Layout 2) */
const FileInputCard = ({ preview, fileName, onChange, size = "w-35 h-35" }) => (
    <div className="flex-1">
        <label className="block text-gray-700 mb-2">Ganti Gambar</label>
        <div className="mb-2">
            <img src={preview} alt="Preview Card" className={`${size} object-contain rounded`} />
        </div>
        <div className="flex items-center w-full border rounded-md overflow-hidden">
            <label className="bg-green-500 text-white px-4 py-2 cursor-pointer hover:bg-green-600">
                Choose File
                <input type="file" accept="image/*" onChange={onChange} className="hidden" />
            </label>
            <span className="flex-1 px-3 py-2 text-gray-700 bg-white">
                {fileName || (preview ? preview.split("/").pop() : "No file chosen")}
            </span>
        </div>
    </div>
);

/* ==========================
    LAYOUT 1 (Hero Section)
========================== */
const LayoutHero = () => {
    const [subtitle, setSubtitle] = useState("Internship");
    const [title, setTitle] = useState("Temukan \n Kesempatan, Bangun \n Masa Depan.");
    const [image, setImage] = useState("/assets/img/Internship.png");
    const [preview, setPreview] = useState("/assets/img/Internship.png");
    const [imageFile, setImageFile] = useState(null);
    const [imageName, setImageName] = useState("");

    // PUBLIC GET tanpa token
    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/internship/hero");
                const d = data?.data || {};
                setSubtitle(d.subtitle ?? subtitle);
                setTitle(d.title ?? title);
                setPreview(d.image_url ?? preview);
                setImageName(d.image_filename ?? "");
            } catch { }
        })();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImage(file);
        setImageFile(file);
        setImageName(file.name);
        setPreview(URL.createObjectURL(file));
    };

    const handleSaveHero = async () => {
        try {
            // POST admin: teks
            await api.post(
                "/admin/internship/hero",
                { subtitle, title },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );

            // POST admin: gambar (opsional)
            if (imageFile) {
                const form = new FormData();
                form.append("image", imageFile);
                const { data } = await api.post("/admin/internship/hero/image", form, {
                    headers: { ...tokenHeader(), "Content-Type": "multipart/form-data" },
                });
                const d = data?.data || {};
                setPreview(d.image_url || preview);
                setImageName(d.image_filename || imageName);
                setImageFile(null);
            }

            alert("Perubahan Hero berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan Hero");
        }
    };

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Layout 1 - Edit Text dan Gambar</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full flex flex-col md:flex-row gap-8">
                {/* Kolom kiri */}
                <div className="flex-1">
                    <TextInput label="Sub Judul" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    <TextInput label="Judul Utama" value={title} onChange={(e) => setTitle(e.target.value)} textarea />
                    <button
                        onClick={handleSaveHero}
                        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                    >
                        Simpan
                    </button>
                </div>

                {/* Kolom kanan */}
                <FileInputHero preview={preview} fileName={imageName} onChange={handleImageChange} />
            </div>
        </div>
    );
};

/* ==========================
    LAYOUT 2 (Core Values)
========================== */
const LayoutCoreValues = () => {
    const [coreSubtitle, setCoreSubtitle] = useState("CORE VALUE PERUSAHAAN");
    const [coreTitle, setCoreTitle] = useState("Prinsip Utama yang Menjadi Dasar Tumbuh Bersama");
    const [coreDesc, setCoreDesc] = useState(
        "Sembilan nilai inti ini menjadi pedoman tim Seven INC. dalam membangun budaya kerja profesional, kolaboratif, dan berkelanjutan menuju visi perusahaan yang terus berkembang."
    );

    const [cards, setCards] = useState([
        { id: 1, title: "Integritas", desc: "Sikap dasar ...", image: "/assets/img/vectorSalaman.png" },
        { id: 2, title: "Positive Vibe", desc: "Menciptakan lingkungan ...", image: "/assets/img/vectorPerson.png" },
        { id: 3, title: "Inovasi", desc: "Sikap dasar ...", image: "/assets/img/vectorSalaman.png" },
        { id: 4, title: "Kolaborasi", desc: "Menciptakan lingkungan ...", image: "/assets/img/vectorPerson.png" },
        { id: 5, title: "Profesionalisme", desc: "Sikap dasar ...", image: "/assets/img/vectorSalaman.png" },
        { id: 6, title: "Tanggung Jawab", desc: "Menciptakan lingkungan ...", image: "/assets/img/vectorPerson.png" },
        { id: 7, title: "Keberlanjutan", desc: "Sikap dasar ...", image: "/assets/img/vectorSalaman.png" },
        { id: 8, title: "Pelayanan", desc: "Menciptakan lingkungan ...", image: "/assets/img/vectorPerson.png" },
        { id: 9, title: "Kepemimpinan", desc: "Sikap dasar ...", image: "/assets/img/vectorSalaman.png" },
    ]);

    // PUBLIC GET tanpa token
    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/internship/core-values");
                const d = data?.data;
                if (d?.header) {
                    setCoreSubtitle(d.header.subtitle ?? coreSubtitle);
                    setCoreTitle(d.header.title ?? coreTitle);
                    setCoreDesc(d.header.description ?? coreDesc);
                }
                if (Array.isArray(d?.cards) && d.cards.length) {
                    setCards(d.cards.map((c) => ({ ...c, file: null, image_filename: c.image_filename })));
                }
            } catch { }
        })();
    }, []);

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardImageChange = (e) => {
        const file = e.target.files[0];
        if (!file || !selectedCard) return;
        const newCards = cards.map((c) =>
            c.id === selectedCard.id ? { ...c, image: URL.createObjectURL(file), file, image_filename: file.name } : c
        );
        setCards(newCards);
        setSelectedCard((prev) =>
            prev ? { ...prev, image: newCards.find((c) => c.id === prev.id).image, file, image_filename: file.name } : prev
        );
    };

    const handleHeaderSave = async () => {
        try {
            await api.post(
                "/admin/internship/core-values/header",
                { subtitle: coreSubtitle, title: coreTitle, description: coreDesc },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );
            alert("Core Values berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan Core Values");
        }
    };

    const handleCardSave = async () => {
        if (!selectedCard) return;
        try {
            await api.post(
                `/admin/internship/core-values/cards/${selectedCard.id}`,
                { title: selectedCard.title, desc: selectedCard.desc },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );
            if (selectedCard.file) {
                const form = new FormData();
                form.append("image", selectedCard.file);
                const { data } = await api.post(`/admin/internship/core-values/cards/${selectedCard.id}/image`, form, {
                    headers: { ...tokenHeader(), "Content-Type": "multipart/form-data" },
                });
                const d = data?.data || {};
                setSelectedCard((prev) =>
                    prev ? { ...prev, image: d.image_url || prev.image, image_filename: d.image_filename || prev.image_filename, file: null } : prev
                );
                setCards((prev) =>
                    prev.map((c) =>
                        c.id === selectedCard.id
                            ? { ...c, image: d.image_url || c.image, image_filename: d.image_filename || c.image_filename, file: null }
                            : c
                    )
                );
            }
            alert(`Perubahan card "${selectedCard.title}" berhasil disimpan!`);
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan card");
        }
    };

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Layout 2 - Edit Text dan 9 Card</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kolom kiri (teks utama) */}
                <div>
                    <TextInput label="Sub Judul" value={coreSubtitle} onChange={(e) => setCoreSubtitle(e.target.value)} />
                    <TextInput label="Judul Utama" value={coreTitle} onChange={(e) => setCoreTitle(e.target.value)} textarea />
                    <TextInput label="Deskripsi" value={coreDesc} onChange={(e) => setCoreDesc(e.target.value)} textarea />
                    <button
                        onClick={handleHeaderSave}
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                    >
                        Simpan
                    </button>
                </div>

                {/* Kolom kanan (card area) */}
                <div>
                    {!selectedCard ? (
                        <div className="grid grid-cols-2 gap-4">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                    className="cursor-pointer border rounded-lg p-4 flex flex-col items-center hover:shadow-md transition"
                                >
                                    <img src={card.image_url || card.image} alt={card.title} className="w-20 h-20 object-contain" />
                                    <h3 className="font-bold text-black text-center">{card.title}</h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-4 text-black">Edit Card: {selectedCard.title}</h3>
                            <TextInput
                                label="Judul"
                                value={selectedCard.title}
                                onChange={(e) => setSelectedCard({ ...selectedCard, title: e.target.value })}
                            />
                            <TextInput
                                label="Deskripsi"
                                value={selectedCard.desc}
                                onChange={(e) => setSelectedCard({ ...selectedCard, desc: e.target.value })}
                                textarea
                            />
                            <FileInputCard
                                preview={selectedCard.image_url || selectedCard.image}
                                fileName={selectedCard.image_filename}
                                onChange={handleCardImageChange}
                            />
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={handleCardSave}
                                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                                >
                                    Simpan Card
                                </button>
                                <button
                                    onClick={() => setSelectedCard(null)}
                                    className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition cursor-pointer"
                                >
                                    Kembali ke 9 Card
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ==============================
    LAYOUT 3 (Syarat & Ketentuan)
============================== */
const LayoutSyaratKetentuan = () => {
    const [subtitle, setSubtitle] = useState("Syarat & Ketentuan");
    const [title, setTitle] = useState("Persiapkan Dirimu, Tumbuh Bersama Kami.");
    const [rules, setRules] = useState([
        "Mengisi Formulir Pendaftaran Magang.",
        "Menyertakan surat pengantar atau surat tugas resmi dari pihak sekolah atau perguruan tinggi.",
        "Telah memperoleh izin atau persetujuan dari orang tua atau wali sebelum mengikuti program magang.",
        "Bersedia berkomitmen untuk menggali keterampilan dan pengalaman selama masa magang berlangsung.",
        "Bersedia menjalani proses pembelajaran yang menuntut kemandirian, kedewasaan, dan kesiapan untuk hidup lebih mandiri setelah magang selesai.",
        "Bersedia berinteraksi secara profesional dengan seluruh karyawan serta menjaga nama baik institusi asal (sekolah/kampus), perusahaan, dan pribadi.",
    ]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [editText, setEditText] = useState("");

    // PUBLIC GET tanpa token
    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/internship/terms");
                const d = data?.data || {};
                setSubtitle(d.subtitle ?? subtitle);
                setTitle(d.title ?? title);
                if (Array.isArray(d.rules)) setRules(d.rules);
            } catch { }
        })();
    }, []);

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setEditText(rules[index]);
    };

    const saveTerms = async () => {
        try {
            // POST admin: header
            await api.post(
                "/admin/internship/terms/header",
                { subtitle, title },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );

            // POST admin: butir tertentu (opsional)
            if (selectedIndex !== null) {
                await api.post(
                    `/admin/internship/terms/rules/${selectedIndex}`,
                    { text: editText },
                    { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
                );
                setRules((prev) => {
                    const next = [...prev];
                    next[selectedIndex] = editText;
                    return next;
                });
            }
            alert("Semua perubahan berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan Syarat & Ketentuan");
        }
    };

    const handleSaveRule = saveTerms;

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Layout 3 - Edit Syarat & Ketentuan</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full flex flex-col md:flex-row gap-8">
                {/* Kolom kiri */}
                <div className="flex-1">
                    <TextInput label="Sub Judul" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    <TextInput label="Judul Utama" value={title} onChange={(e) => setTitle(e.target.value)} textarea />
                    <button
                        onClick={saveTerms}
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                    >
                        Simpan
                    </button>
                </div>

                {/* Kolom kanan */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-700 mb-3">Daftar Syarat</h3>
                    <div className="space-y-2">
                        {rules.map((rule, index) => (
                            <label key={index} className="flex items-start space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="rule"
                                    checked={selectedIndex === index}
                                    onChange={() => handleSelect(index)}
                                    className="mt-1"
                                />
                                <span className="text-gray-700">
                                    <span className="font-semibold mr-1">{index + 1}.</span> {rule}
                                </span>
                            </label>
                        ))}
                    </div>

                    {selectedIndex !== null && (
                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Edit Syarat Terpilih</label>
                            <textarea
                                rows="3"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="w-full border rounded p-2 text-black resize-none"
                            />
                            <div className="mt-3 flex gap-3">
                                <button
                                    onClick={handleSaveRule}
                                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                                >
                                    Simpan Syarat
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ========================================
    LAYOUT 4 (Formasi Internship - 18 Card)
======================================== */
const LayoutFormasi = () => {
    const [subtitle, setSubtitle] = useState("FORMASI INTERNSHIP");
    const [title, setTitle] = useState("Bangun Kompetensi dan Karakter Bersama Seven INC.");
    const [desc, setDesc] = useState(
        "Program magang dan internship di Seven INC. dirancang untuk menjadi wadah bagi siswa, mahasiswa, maupun individu umum yang ingin mengembangkan keterampilan praktis dan kesiapan kerja melalui bimbingan langsung, pelatihan intensif, serta pengalaman di lingkungan industri multisektor."
    );

    const [cards, setCards] = useState([
        { id: 1, name: "Administrasi", image: "/assets/img/vector1.png" },
        { id: 2, name: "Animasi", image: "/assets/img/vector2.png" },
        { id: 3, name: "Content Planner", image: "/assets/img/vector3.png" },
        { id: 4, name: "Content Writer", image: "/assets/img/vector4.png" },
        { id: 5, name: "Desain Grafis", image: "/assets/img/vector5.png" },
        { id: 6, name: "Digital Market", image: "/assets/img/vector6.png" },
        { id: 7, name: "Host / Presenter", image: "/assets/img/vector7.png" },
        { id: 8, name: "Human Resource", image: "/assets/img/vector8.png" },
        { id: 9, name: "Las", image: "/assets/img/vector9.png" },
        { id: 10, name: "Marketing & Sales", image: "/assets/img/vector10.png" },
        { id: 11, name: "Public Relation", image: "/assets/img/vector11.png" },
        { id: 12, name: "Photographer Videographer", image: "/assets/img/vector12.png" },
        { id: 13, name: "Programmer", image: "/assets/img/vector13.png" },
        { id: 14, name: "Project Manager", image: "/assets/img/vector14.png" },
        { id: 15, name: "Social Media Specialist", image: "/assets/img/vector15.png" },
        { id: 16, name: "TikTok Creator", image: "/assets/img/vector16.png" },
        { id: 17, name: "UI / UX Designer", image: "/assets/img/vector17.png" },
        { id: 18, name: "Voice Over Talent", image: "/assets/img/vector18.png" },
    ]);

    const [selected, setSelected] = useState(null);

    // PUBLIC GET tanpa token
    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/internship/formations");
                const d = data?.data;
                if (d?.header) {
                    setSubtitle(d.header.subtitle ?? subtitle);
                    setTitle(d.header.title ?? title);
                    setDesc(d.header.description ?? desc);
                }
                if (Array.isArray(d?.cards) && d.cards.length) {
                    setCards(d.cards.map((c) => ({ ...c, file: null, image_filename: c.image_filename })));
                }
            } catch { }
        })();
    }, []);

    const handleCardImageChange = (e) => {
        if (!selected) return;
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setSelected({ ...selected, image: url, file, image_filename: file.name });
    };

    const handleSaveHeader = async () => {
        try {
            await api.post(
                "/admin/internship/formations/header",
                { subtitle, title, description: desc },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );
            alert("Header Formasi berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan header Formasi");
        }
    };

    const handleSaveCard = async () => {
        if (!selected) return;
        try {
            await api.post(
                `/admin/internship/formations/cards/${selected.id}`,
                { name: selected.name },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );
            if (selected.file) {
                const form = new FormData();
                form.append("image", selected.file);
                const { data } = await api.post(`/admin/internship/formations/cards/${selected.id}/image`, form, {
                    headers: { ...tokenHeader(), "Content-Type": "multipart/form-data" },
                });
                const d = data?.data || {};
                setSelected((prev) =>
                    prev ? { ...prev, image: d.image_url || prev.image, image_filename: d.image_filename || prev.image_filename, file: null } : prev
                );
                setCards((prev) =>
                    prev.map((c) =>
                        c.id === selected.id ? { ...c, image: d.image_url || c.image, image_filename: d.image_filename || c.image_filename } : c
                    )
                );
            }

            setCards((prev) => prev.map((c) => (c.id === selected.id ? { ...c, name: selected.name, image: selected.image } : c)));

            alert(`Card "${selected.name}" berhasil disimpan!`);
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan card Formasi");
        }
    };

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Layout 4 - Formasi Internship (18 Card)</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full">
                {/* Header center */}
                <div className="max-w-[500px] mx-auto text-center">
                    <TextInput label="Sub Judul" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    <TextInput label="Judul" value={title} onChange={(e) => setTitle(e.target.value)} textarea />
                    <TextInput label="Deskripsi" value={desc} onChange={(e) => setDesc(e.target.value)} textarea />
                    <button
                        onClick={handleSaveHeader}
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                    >
                        Simpan
                    </button>
                </div>

                {/* Card Area */}
                {!selected ? (
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {cards.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelected(item)}
                                className="h-[137px] w-full bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center group hover:bg-red-500 transition-all cursor-pointer"
                            >
                                <img
                                    src={item.image_url || item.image}
                                    alt={item.name}
                                    className="w-10 h-10 mb-2 transition-all group-hover:brightness-0 group-hover:invert"
                                />
                                <p className="text-sm font-semibold text-gray-800 text-center px-2 transition-all group-hover:text-white">
                                    {item.name}
                                </p>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="mt-8 max-w-[500px] mx-auto">
                        <h3 className="text-lg font-bold text-black mb-4">Edit Card: {selected.name}</h3>

                        <TextInput
                            label="Judul Card"
                            value={selected.name}
                            onChange={(e) => setSelected({ ...selected, name: e.target.value })}
                        />

                        <FileInputCard
                            preview={selected.image_url || selected.image}
                            fileName={selected.image_filename}
                            onChange={handleCardImageChange}
                        />

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={handleSaveCard}
                                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                            >
                                Simpan Card
                            </button>
                            <button
                                onClick={() => setSelected(null)}
                                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition cursor-pointer"
                            >
                                Kembali ke 18 Card
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ==========================
    LAYOUT 5 (Fasilitas)
========================== */
const LayoutFasilitas = () => {
    const [subtitle, setSubtitle] = useState("FASILITAS YANG DIDAPAT");
    const [title, setTitle] = useState("Karena Belajar Butuh \n Lingkungan yang Mendukung.");
    const [items, setItems] = useState([
        "Setiap peserta magang akan mendapatkan bimbingan langsung dari tim internal yang berpengalaman.",
        "Disediakan sesi pengembangan keterampilan tambahan yang dapat diikuti secara sukarela di luar jam kerja reguler.",
        "Peserta akan memperoleh sertifikat magang serta seragam resmi dari MagangJogja.com sebagai bukti keikutsertaan.",
        "Disediakan koneksi internet tanpa biaya tambahan bagi peserta magang yang menjalankan aktivitas di kantor.",
        "Bagi peserta yang berasal dari luar kota, tim kami akan memberikan informasi seputar kost atau hunian dengan harga terjangkau.",
        "Tersedia minuman hangat secara cuma-cuma sebagai bentuk dukungan kenyamanan selama kegiatan magang berlangsung.",
        "Bagi peserta yang menunjukkan performa baik, akan diberikan surat rekomendasi untuk mendukung karier atau studi lanjutan.",
        "Peserta berpeluang untuk terlibat aktif dalam berbagai proyek nyata yang dijalankan oleh tim profesional Seven INC.",
        "Magang di Seven INC. memberikan akses untuk membangun koneksi profesional dan pengalaman langsung di lingkungan kerja multisektor.",
    ]);

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [editText, setEditText] = useState("");

    // PUBLIC GET tanpa token
    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/internship/facilities");
                const d = data?.data || {};
                setSubtitle(d.subtitle ?? subtitle);
                setTitle(d.title ?? title);
                if (Array.isArray(d.items)) setItems(d.items);
            } catch { }
        })();
    }, []);

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setEditText(items[index]);
    };

    const saveFacilities = async () => {
        try {
            await api.post(
                "/admin/internship/facilities/header",
                { subtitle, title },
                { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
            );
            if (selectedIndex !== null) {
                await api.post(
                    `/admin/internship/facilities/items/${selectedIndex}`,
                    { text: editText },
                    { headers: { ...tokenHeader(), "Content-Type": "application/json" } }
                );
                setItems((prev) => {
                    const next = [...prev];
                    next[selectedIndex] = editText;
                    return next;
                });
            }
            alert("Semua perubahan Fasilitas berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan Fasilitas");
        }
    };

    const handleSaveItem = saveFacilities;

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Layout 5 - Edit Fasilitas</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full flex flex-col md:flex-row gap-8">
                {/* Kolom kiri: header */}
                <div className="flex-1">
                    <TextInput label="Sub Judul" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    <TextInput label="Judul Utama" value={title} onChange={(e) => setTitle(e.target.value)} textarea />
                    <button
                        onClick={saveFacilities}
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                    >
                        Simpan
                    </button>
                </div>

                {/* Kolom kanan: daftar fasilitas + editor item terpilih */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-700 mb-3">Daftar Fasilitas</h3>
                    <div className="space-y-2">
                        {items.map((text, index) => (
                            <label key={index} className="flex items-start space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="facility"
                                    checked={selectedIndex === index}
                                    onChange={() => handleSelect(index)}
                                    className="mt-1"
                                />
                                <span className="text-gray-700">
                                    <span className="font-semibold mr-1">{index + 1}.</span> {text}
                                </span>
                            </label>
                        ))}
                    </div>

                    {selectedIndex !== null && (
                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Edit Fasilitas Terpilih</label>
                            <textarea
                                rows="3"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="w-full border rounded p-2 text-black resize-none"
                            />
                            <div className="mt-3 flex gap-3">
                                <button
                                    onClick={handleSaveItem}
                                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer"
                                >
                                    Simpan Fasilitas
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ==========================
    MAIN PAGE
========================== */
const EditInternship = () => {
    return (
        <AdminLayout>
            <div className="p-8 w-full">
                <LayoutHero />
                <LayoutCoreValues />
                <LayoutSyaratKetentuan />
                <LayoutFormasi />
                <LayoutFasilitas />
            </div>
        </AdminLayout>
    );
};

export default EditInternship;