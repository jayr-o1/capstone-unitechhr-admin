import React, { useState } from "react";
import logo from "../../assets/images/Vector.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeLink, setActiveLink] = useState(null); // Track active link

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleSidebarClick = () => {
        if (!isSidebarOpen) {
            toggleSidebar();
        }
    };

    const handleLinkClick = (id) => {
        setActiveLink(id); // Set the clicked link as active
    };

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (
                <svg
                    className={`shrink-0 ${
                        activeLink === "dashboard" ||
                        activeDropdown === "dashboard"
                            ? "text-blue-500"
                            : "text-gray-500"
                    } group-hover:text-blue-500 transition-colors duration-300`}
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
        },
        {
            id: "universities",
            label: "Universities",
            icon: (
                <svg
                    className={`shrink-0 ${
                        activeLink === "universities" ||
                        activeDropdown === "universities"
                            ? "text-blue-500"
                            : "text-gray-500"
                    } group-hover:text-blue-500 transition-colors duration-300`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5315 11.5857L20.75 10.9605V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4143 22.4142 22.75 22 22.75H2.00003C1.58581 22.75 1.25003 22.4143 1.25003 22C1.25003 21.5858 1.58581 21.25 2.00003 21.25H3.25003V10.9605L2.46855 11.5857C2.1451 11.8445 1.67313 11.792 1.41438 11.4686C1.15562 11.1451 1.20806 10.6731 1.53151 10.4144L9.65742 3.91366C11.027 2.818 12.9731 2.818 14.3426 3.91366L22.4685 10.4144C22.792 10.6731 22.8444 11.1451 22.5857 11.4686C22.3269 11.792 21.855 11.8445 21.5315 11.5857ZM12 6.75004C10.4812 6.75004 9.25003 7.98126 9.25003 9.50004C9.25003 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.50004C14.75 7.98126 13.5188 6.75004 12 6.75004ZM13.7459 13.3116C13.2871 13.25 12.7143 13.25 12.0494 13.25H11.9507C11.2858 13.25 10.7129 13.25 10.2542 13.3116C9.76255 13.3777 9.29128 13.5268 8.90904 13.9091C8.52679 14.2913 8.37773 14.7626 8.31163 15.2542C8.24996 15.7129 8.24999 16.2858 8.25003 16.9507L8.25003 21.25H9.75003H14.25H15.75L15.75 16.9507L15.75 16.8271C15.7498 16.2146 15.7462 15.6843 15.6884 15.2542C15.6223 14.7626 15.4733 14.2913 15.091 13.9091C14.7088 13.5268 14.2375 13.3777 13.7459 13.3116Z"
                        fill="currentColor"
                    />
                    <g opacity="0.5">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                            fill="currentColor"
                        />
                    </g>
                    <path
                        opacity="0.5"
                        d="M12.0494 13.25C12.7142 13.25 13.2871 13.2499 13.7458 13.3116C14.2375 13.3777 14.7087 13.5268 15.091 13.909C15.4732 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827L15.75 21.25H8.25L8.25 16.9506C8.24997 16.2858 8.24993 15.7129 8.31161 15.2542C8.37771 14.7625 8.52677 14.2913 8.90901 13.909C9.29126 13.5268 9.76252 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9506 13.25H12.0494Z"
                        fill="currentColor"
                    />
                    <path
                        opacity="0.5"
                        d="M16 3H18.5C18.7761 3 19 3.22386 19 3.5L19 7.63955L15.5 4.83955V3.5C15.5 3.22386 15.7239 3 16 3Z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
    ];

    return (
        <nav
            className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen transition-all duration-300 ${
                isSidebarOpen ? "w-64" : "w-16"
            } shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white`}
            onClick={handleSidebarClick}
        >
            <div className="h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-2 py-3">
                    <a
                        href="/"
                        className={`main-logo flex shrink-0 items-center ${
                            !isSidebarOpen ? "pointer-events-none" : ""
                        }`}
                    >
                        <img
                            className="ml-[5px] w-10 flex-none"
                            src={logo}
                            alt="Logo"
                        />
                        <span
                            className={`align-middle text-xl ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light transition-all duration-300 ${
                                isSidebarOpen ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            UNITECH HR
                        </span>
                    </a>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleSidebar();
                        }}
                        className={`collapse-icon flex h-8 w-8 items-center rounded-full transition-all duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10 ${
                            isSidebarOpen
                                ? "opacity-100"
                                : "opacity-0 -translate-x-4"
                        }`}
                    >
                        <svg
                            className={`m-auto h-5 w-5 transition-transform duration-300 ${
                                isSidebarOpen ? "rotate-180" : ""
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
                        <li
                            key={item.id}
                            className="menu nav-item group relative"
                        >
                            <button
                                type="button"
                                className={`nav-link w-full flex items-center justify-between p-3 transition-all duration-300 relative z-10 ${
                                    activeLink === item.id ? "" : ""
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown(item.id);
                                    handleLinkClick(item.id); // Set active link
                                }}
                            >
                                {/* Pseudo-element for border background */}
                                <div
                                    className={`absolute inset-y-0 left-2 right-2 bg-gray-100 opacity-0 ${
                                        activeLink === item.id ||
                                        activeDropdown === item.id
                                            ? "opacity-100"
                                            : "group-hover:opacity-100"
                                    } transition-opacity duration-300 rounded-lg -z-10 cursor-pointer`}
                                    aria-hidden="true"
                                ></div>

                                <div className="flex items-center cursor-pointer">
                                    {/* Icon Always Visible */}
                                    <div className="flex items-center justify-center w-10">
                                        {item.icon}
                                    </div>

                                    {/* Text Stays in Place */}
                                    <span
                                        className={`text-black text-sm font-normal ltr:pl-1 rtl:pr-1 transition-all duration-300 ${
                                            isSidebarOpen
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </div>

                                {/* Dropdown Icon (Only Visible When Expanded) */}
                                {isSidebarOpen && item.subItems && (
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
                            {isSidebarOpen && activeDropdown === item.id && (
                                <ul className="space-y-2 pl-10">
                                    {item.subItems?.map((subItem, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={subItem.href}
                                                className={`text-black dark:text-[#9fa2b4] hover:text-[#506690] dark:hover:text-white-dark dark:hover:bg-dark-light/50 ${
                                                    activeLink === subItem.id
                                                        ? "bg-gray-100 rounded-lg"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleLinkClick(subItem.id)
                                                } // Set active link
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
