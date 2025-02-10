import React, { useState, useEffect } from "react";

const Universities = () => {
    const [universities, setUniversities] = useState([]);

    // Fetch universities from your API
    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await fetch("/api/universities"); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch universities");
                }
                const data = await response.json();
                setUniversities(data);
            } catch (error) {
                console.error("Error fetching universities:", error);
            }
        };

        fetchUniversities();
    }, []);

    return (
        <div className="p-4">
            {/* Header with Add University Button */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Universities</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add University
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Location</th>
                            <th className="py-2 px-4 border-b">Established</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universities.length > 0 ? (
                            universities.map((university) => (
                                <tr key={university.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{university.name}</td>
                                    <td className="py-2 px-4 border-b">{university.location}</td>
                                    <td className="py-2 px-4 border-b">{university.established}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="text-blue-500 hover:text-blue-700 mr-2">
                                            Edit
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-2 px-4 border-b text-center">
                                    No universities found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Universities;