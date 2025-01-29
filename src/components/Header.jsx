import React, { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";

const Header = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: "user1.jpg",
            message: "You have a new message",
            time: "2 mins ago",
            read: false, // Add a `read` flag to track unread notifications
        },
        {
            id: 2,
            profile: "user2.jpg",
            message: "Your profile has been updated",
            time: "10 mins ago",
            read: false, // Add a `read` flag to track unread notifications
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Mark a notification as read
    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notification) =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between bg-black pl-16 pr-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-indigo-800">
                    UNITECH HR
                </span>
            </div>

            {/* Search Input */}
            <div className="flex-1 mx-4">
                <div className="relative max-w-sm mx-auto">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 border rounded-full px-4 text-sm focus:outline-none focus:ring focus:ring-indigo-300 pr-10"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m1.198-5.773a6 6 0 11-11.995.027 6 6 0 0111.996-.027z"
                            />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Notification and Profile */}
            <div className="flex items-center space-x-4">
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                        onClick={toggleDropdown}
                    >
                        <Bell className="w-6 h-6 text-gray-700" />
                        {/* Green Ping on Notification Icon */}
                        {notifications.some((n) => !n.read) && (
                            <span className="absolute top-0 right-1 flex h-3.5 w-3.5">
                                <span className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-500/50 opacity-75"></span>
                                <span className="relative m-1 top-0 right-0 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg divide-y">
                            <div className="px-4 py-2 font-semibold text-lg flex items-center">
                                <span>Notification</span>
                                {notifications.some((n) => !n.read) && (
                                    <span className="ml-2 bg-[#76B5FE] text-white text-sm px-2 py-1 rounded-full ml-auto pl-4 pr-4">
                                        {
                                            notifications.filter((n) => !n.read)
                                                .length
                                        }{" "}
                                        New
                                    </span>
                                )}
                            </div>
                            {notifications.length > 0 ? (
                                notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className="flex items-center px-4 py-3 hover:bg-gray-100"
                                        onClick={() =>
                                            markAsRead(notification.id)
                                        }
                                    >
                                        <div className="relative h-12 w-12">
                                            <img
                                                src={`/assets/images/${notification.profile}`}
                                                alt="Profile"
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                            {/* Green Ping Indicator */}
                                            {!notification.read && (
                                                <span className="absolute bottom-0 right-0 flex h-3 w-3">
                                                    <span className="absolute -top-[2px] -right-[2px] h-full w-full animate-ping rounded-full bg-green-500/50 opacity-75"></span>
                                                    <span className="relative left-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                </span>
                                            )}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <p className="text-sm font-medium">
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {notification.time}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-gray-400 hover:text-red-500"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent the parent div's onClick from firing
                                                markAsRead(notification.id);
                                            }}
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    opacity="0.5"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-500">
                                    No notifications available.
                                </div>
                            )}
                            {notifications.length > 0 && (
                                <div className="p-3">
                                    <button
                                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                                        onClick={() =>
                                            setNotifications(
                                                notifications.map((n) => ({
                                                    ...n,
                                                    read: true,
                                                }))
                                            )
                                        }
                                    >
                                        Mark All as Read
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <img
                    src="/path/to/your-logo.png" // Replace with your profile image path
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
            </div>
        </header>
    );
};

export default Header;
