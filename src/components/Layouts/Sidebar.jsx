import React, { useState } from "react";
import logo from "../../assets/images/Vector.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (
                <svg
                    className="shrink-0 group-hover:!text-primary"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                        fill="currentColor"
                    />
                </svg>
            ),
            subItems: [
                { label: "Sales", href: "/sales" },
                { label: "Analytics", href: "/analytics" },
                { label: "Finance", href: "/finance" },
                { label: "Crypto", href: "/crypto" },
            ],
        },
    ];

    return (
        <nav
            className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen transition-all duration-300 ${
                isSidebarOpen || isHovered ? "w-64" : "w-16"
            } shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-2 py-3">
                    <a
                        href="/"
                        className="main-logo flex shrink-0 items-center"
                    >
                        <img
                            className="ml-[5px] w-10 flex-none"
                            src={logo}
                            alt="Logo"
                        />
                        <span
                            className={`align-middle text-xl ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light transition-all duration-300 ${
                                isSidebarOpen || isHovered
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            UNITECH HR
                        </span>
                    </a>
                    <button
                        onClick={toggleSidebar}
                        className={`collapse-icon flex h-8 w-8 items-center rounded-full transition-all duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10 ${
                            isSidebarOpen || isHovered
                                ? "opacity-100"
                                : "opacity-0 -translate-x-4"
                        }`}
                    >
                        <svg
                            className={`m-auto h-5 w-5 transition-transform duration-300 ${
                                isSidebarOpen || isHovered ? "rotate-180" : ""
                            }`}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 19L7 12L13 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                opacity="0.5"
                                d="M16.9998 19L10.9998 12L16.9998 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Menu */}
                <ul className="perfect-scrollbar relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden py-0 font-semibold">
                    {menuItems.map((item) => (
                        <li key={item.id} className="menu nav-item">
                            <button
                                type="button"
                                className="nav-link group w-full flex items-center justify-between p-3 transition-all duration-300"
                                onClick={() => toggleDropdown(item.id)}
                            >
                                <div className="flex items-center">
                                    {/* Icon Always Visible */}
                                    <div className="flex items-center justify-center w-10">
                                        {item.icon}
                                    </div>

                                    {/* Text Stays in Place */}
                                    <span
                                        className={`text-black ltr:pl-3 rtl:pr-3  transition-all duration-300 ${
                                            isSidebarOpen || isHovered
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </div>

                                {/* Dropdown Icon (Only Visible When Expanded) */}
                                {(isSidebarOpen || isHovered) &&
                                    item.subItems && (
                                        <div
                                            className="rtl:rotate-180 transition-all duration-300"
                                            style={{
                                                transform:
                                                    activeDropdown === item.id
                                                        ? "rotate(90deg)"
                                                        : "rotate(0deg)",
                                            }}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L15 12L9 19"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                            </button>

                            {/* Dropdown Menu (Only Visible When Expanded) */}
                            {(isSidebarOpen || isHovered) &&
                                activeDropdown === item.id && (
                                    <ul className="space-y-2 pl-10">
                                        {item.subItems.map((subItem, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={subItem.href}
                                                    className="text-black dark:text-[#9fa2b4] hover:text-[#506690] dark:hover:text-white-dark dark:hover:bg-dark-light/50"
                                                >
                                                    {subItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
