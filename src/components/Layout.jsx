import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";
import PageLoader from "./PageLoader"; // Import the loader component

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Show loader when the route changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500); // Hide after 500ms
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <PageLoader isLoading={isLoading} /> {/* Show loader */}
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
                    {/* Header (Static, no animation) */}
                    <Header
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />

                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-gray-100">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
