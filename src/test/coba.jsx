// Punya Admin

{/* Dropdown Karir */ }
<li
    className="hover:text-blue-600 cursor-pointer flex items-center relative"
    onClick={() => setShowDropdown(!showDropdown)}
>
    Karir
    <i
        className={`ri-arrow-right-s-line text-[20px] text-gray-600 transition-transform duration-300 ${showDropdown ? "rotate-90" : "rotate-0"
            }`}
    ></i>

    {showDropdown && (
        <div className="absolute top-9 left-1/2 -translate-x-1/2 w-40 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Link
                to="/admin/internship"
                className="block w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-300 text-left rounded-t-lg"
                onClick={() => setShowDropdown(false)}
            >
                Internship
            </Link>
            <Link
                to="/admin/lowongan-kerja"
                className="block w-full px-4 py-2 text-sm font-bold hover:bg-gray-300 text-left rounded-b-lg"
                onClick={() => setShowDropdown(false)}
            >
                Lowongan Kerja
            </Link>
        </div>
    )}
</li>


// Punya Users

{/* Dropdown Karir */ }
<li
    className="hover:text-[#DC3933] cursor-pointer flex items-center relative"
    onClick={() => setShowDropdown(!showDropdown)}
>
    Karir
    <i
        className={`ri-arrow-right-s-line text-[20px] text-gray-600 transition-transform duration-300 ${showDropdown ? "rotate-90" : "rotate-0"
            }`}
    ></i>

    {showDropdown && (
        <div className="absolute top-9 left-1/2 -translate-x-1/2 w-40 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Link
                to="/admin/internship"
                onClick={() => {
                    scrollTop();
                    setShowDropdown(false);
                }}
                className="block w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-[#DC3933] hover:text-white text-left rounded-t-lg"
            >
                Internship
            </Link>
            <Link
                to="/admin/lowongan-kerja"
                onClick={() => {
                    scrollTop();
                    setShowDropdown(false);
                }}
                className="block w-full px-4 py-2 text-sm font-bold hover:bg-[#DC3933] hover:text-white text-left rounded-b-lg"
            >
                Lowongan Kerja
            </Link>
        </div>
    )}
</li>