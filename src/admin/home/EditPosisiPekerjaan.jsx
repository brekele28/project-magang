import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

const API_BASE = "http://127.0.0.1:8000/api";

const EditPosisiPekerjaan = () => {
    const [positions, setPositions] = useState([]);
    const [newPosition, setNewPosition] = useState({
        title: "",
        company: "",
        location: "",
        close_date: "",
    });
    const [editId, setEditId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch job positions on page load and when page changes
    useEffect(() => {
        async function fetchPositions() {
            try {
                const response = await axios.get(`${API_BASE}/job-works?page=${currentPage}`);
                setPositions(response.data.data);
                setTotalPages(response.data.last_page); // Assume API returns last_page
            } catch (error) {
                console.error("Error fetching positions", error);
            }
        }

        fetchPositions();
    }, [currentPage]);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPosition({ ...newPosition, [name]: value });
    };

    // Add new job position
    const handleAddPosition = async () => {
        try {
            const response = await axios.post(`${API_BASE}/job-works`, newPosition);
            setPositions([...positions, response.data]);
            setNewPosition({ title: "", company: "", location: "", close_date: "" });
        } catch (error) {
            console.error("Error adding position", error);
        }
    };

    // Edit job position
    const handleEditPosition = (id) => {
        const positionToEdit = positions.find((position) => position.id === id);
        setNewPosition({
            title: positionToEdit.title,
            company: positionToEdit.company,
            location: positionToEdit.location,
            close_date: positionToEdit.close_date,
        });
        setEditId(id);
    };

    // Save edited position
    const handleSavePosition = async () => {
        try {
            const response = await axios.put(`${API_BASE}/job-works/${editId}`, newPosition);
            const updatedPositions = positions.map((position) =>
                position.id === editId ? response.data : position
            );
            setPositions(updatedPositions);
            setEditId(null);
            setNewPosition({ title: "", company: "", location: "", close_date: "" });
        } catch (error) {
            console.error("Error saving position", error);
        }
    };

    // Delete job position
    const handleDeletePosition = async (id) => {
        try {
            await axios.delete(`${API_BASE}/job-works/${id}`);
            setPositions(positions.filter((position) => position.id !== id));
        } catch (error) {
            console.error("Error deleting position", error);
        }
    };

    // Handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-5xl text-black text-center font-bold italic">Edit Posisi Pekerjaan</h1>

            {/* Form to add or edit position */}
            <div className="mt-6 text-black">
                <h2 className="text-3xl text-gray-800">{editId ? "Edit Posisi Pekerjaan" : "Tambah Posisi Pekerjaan Baru"}</h2>
                <input
                    type="text"
                    name="title"
                    value={newPosition.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="block w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="company"
                    value={newPosition.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="block w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="location"
                    value={newPosition.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="block w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    name="close_date"
                    value={newPosition.close_date}
                    onChange={handleInputChange}
                    className="block w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    onClick={editId ? handleSavePosition : handleAddPosition}
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800"
                >
                    {editId ? "Simpan Perubahan" : "Tambah Posisi"}
                </button>
            </div>

            {/* Daftar Posisi Pekerjaan */}
            <div className="mt-10 text-black">
                <h2 className="text-3xl text-gray-800">Daftar Posisi Pekerjaan</h2>
                <div className="mt-6">
                    {positions && positions.length > 0 ? (
                        positions.map((position, index) => (
                            <div key={position.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-bold text-xl">{index + 1}. {position.title}</h3>
                                    <p>{position.company}</p>
                                    <p>{position.location}</p>
                                    <p>Close Date: {position.close_date}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEditPosition(position.id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-yellow-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeletePosition(position.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-700"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada posisi pekerjaan yang tersedia.</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-300 cursor-pointer text-white rounded disabled:bg-gray-500"
                    >
                        Previous
                    </button>
                    <span className="mx-4 text-lg">{currentPage} / {totalPages}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-300 text-white rounded disabled:bg-gray-500 cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
};

export default EditPosisiPekerjaan;