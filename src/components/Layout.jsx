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
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
