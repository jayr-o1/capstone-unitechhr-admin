import React, { useState } from "react";
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            {/* Main Content */}
            <div
                className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
                    isSidebarOpen ? "ml-64" : "ml-16"
                }`}
            >
                {/* Header */}
                <Header
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />

                {/* Page Content (Children) */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
