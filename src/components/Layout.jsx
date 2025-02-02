import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";
import PageLoader from "./PageLoader"; // ✅ Import the loader component

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // Start with loading as true initially
    const location = useLocation();

    // Show loader when the route changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800); // Make sure the loader stays for a bit
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <PageLoader isLoading={isLoading} /> {/* ✅ Show loader */}
            {/* Wrap the entire layout inside motion.div for fade-in */}
            <motion.div
                className="flex min-h-screen"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Fade in to full opacity
                exit={{ opacity: 0 }} // Fade out when leaving
                transition={{ duration: 0.3, ease: "easeInOut" }} // Fade speed
            >
                {/* Sidebar */}
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
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
                        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    />

                    {/* Page Content with Fade-in Effect */}
                    <motion.main
                        key={location.pathname}
                        className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-gray-100"
                        initial={{ opacity: 0 }} // Start with opacity 0
                        animate={{ opacity: 1 }} // Fade in to full opacity
                        exit={{ opacity: 0 }} // Fade out when leaving
                        transition={{ duration: 0.3, ease: "easeInOut" }} // Fade speed
                    >
                        <Outlet />
                    </motion.main>
                </div>
            </motion.div>
        </>
    );
};

export default Layout;
