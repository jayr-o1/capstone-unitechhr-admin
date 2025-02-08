import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

import logo from "../../assets/images/Vector.png";

import DashboardIcon from "../../assets/icons/SidebarIcons/DashboardIcon";
import UniversitiesIcon from "../../assets/icons/SidebarIcons/UniversitiesIcon";
import ScrumboardIcon from "../../assets/icons/SidebarIcons/ScrumboardIcon";
import CalendarIcon from "../../assets/icons/SidebarIcons/CalendarIcon";
import CollapseIcon from "../../assets/icons/SidebarIcons/CollapseIcon";

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
        <DashboardIcon
          activeLink={activeLink}
          activeDropdown={activeDropdown}
        />
      ),
      path: "/dashboard", // Add path
    },
    {
      id: "universities",
      label: "Universities",
      icon: (
        <UniversitiesIcon
          activeLink={activeLink}
          activeDropdown={activeDropdown}
        />
      ),
      path: "/universities", // Add path
    },
    {
      id: "scrumboard",
      label: "Scrumboard", // Using "Tasks" as a synonym
      icon: (
        <ScrumboardIcon
          activeLink={activeLink}
          activeDropdown={activeDropdown}
        />
      ),
      path: "/scrumboard", // Add path
    },
    {
      id: "calendar",
      label: "Calendar", // Using "Tasks" as a synonym
      icon: (
        <CalendarIcon activeLink={activeLink} activeDropdown={activeDropdown} />
      ),
      path: "/calendar", // Add path
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
        <div className="flex items-center justify-between px-2 py-4">
          <a
            href="/"
            className={`main-logo flex shrink-0 items-center ${
              !isSidebarOpen ? "pointer-events-none" : ""
            }`}
          >
            <img className="ml-[5px] w-10 flex-none" src={logo} alt="Logo" />
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
              isSidebarOpen ? "opacity-100" : "opacity-0 -translate-x-4"
            }`}
          >
            <CollapseIcon isSidebarOpen={isSidebarOpen} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="perfect-scrollbar relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden py-0 font-semibold">
          {menuItems.map((item) => (
            <li key={item.id} className="menu nav-item group relative">
              <Link
                to={item.path}
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
                  className={`absolute inset-y-0 left-2 right-2 bg-gray-200 opacity-0 ${
                    activeLink === item.id || activeDropdown === item.id
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
                      isSidebarOpen ? "opacity-100" : "opacity-0"
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
                  </div>
                )}
              </Link>

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
                        onClick={() => handleLinkClick(subItem.id)} // Set active link
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
