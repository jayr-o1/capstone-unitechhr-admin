import React from "react";

const Universities = () => {
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
                        {/* Example Data Row */}
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">Harvard University</td>
                            <td className="py-2 px-4 border-b">Cambridge, MA</td>
                            <td className="py-2 px-4 border-b">1636</td>
                            <td className="py-2 px-4 border-b">
                                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                <button className="text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Universities;