import React, { useState, useEffect, useRef } from "react";
import NotificationIcon from "../assets/icons/NotificationIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import SignOutIcon from "../assets/icons/SignOutIcon";
import SubscriptionIcon from "../assets/icons/SubscriptionIcon";

const Header = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: "user1.jpg",
            message: "You have a new message",
            time: "2 mins ago",
            read: false,
        },
        {
            id: 2,
            profile: "user2.jpg",
            message: "Your profile has been updated",
            time: "10 mins ago",
            read: false,
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);

    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notification) =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
            if (
                profileDropdownRef.current &&
                !profileDropdownRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                        <NotificationIcon />
                        {notifications.some((n) => !n.read) && (
                            <span className="absolute top-0 right-1 flex h-3.5 w-3.5">
                                <span className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-500/50 opacity-75"></span>
                                <span className="relative m-1 top-0 right-0 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            </span>
                        )}
                    </button>

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
                                                e.stopPropagation();
                                                setNotifications(
                                                    notifications.filter(
                                                        (n) =>
                                                            n.id !==
                                                            notification.id
                                                    )
                                                );
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
                                <div className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                                    <div className="mx-auto mb-4 rounded-full text-[#76B5FE] ring-4 ring-[#76B5FE]/30">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.3"
                                                d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                                                fill="#76B5FE"
                                            />
                                            <path
                                                d="M10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V5C9.25 4.58579 9.58579 4.25 10 4.25Z"
                                                fill="#76B5FE"
                                            />
                                            <path
                                                d="M10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                                                fill="#76B5FE"
                                            />
                                        </svg>
                                    </div>
                                    No notification available.
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

                {/* Profile Section */}
                <div className="relative" ref={profileDropdownRef}>
                    <button
                        className="group relative"
                        onClick={toggleProfileDropdown}
                    >
                        <span>
                            <img
                                className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                                src="/assets/images/user-profile.jpeg"
                                alt="Profile"
                            />
                        </span>
                    </button>
                    {isProfileOpen && (
                        <ul className="absolute right-0 mt-2 min-w-max bg-white rounded-lg shadow-lg">
                            <li className="border-b border-gray-400">
                                <div className="flex items-center px-4 py-4">
                                    <div className="flex-none">
                                        <img
                                            className="h-10 w-10 rounded-md object-cover"
                                            src="/assets/images/user-profile.jpeg"
                                            alt="Profile"
                                        />
                                    </div>
                                    <div className="truncate ltr:pl-4 rtl:pr-4">
                                        <h4 className="text-base whitespace-nowrap">
                                            Jay-r Olores
                                            <span className="rounded bg-[#04B800] px-2 py-1 text-xs text-white ltr:ml-2 rtl:ml-2">
                                                Admin
                                            </span>
                                        </h4>
                                        <a
                                            className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-[#0066FF] whitespace-nowrap"
                                            href="javascript:;"
                                        >
                                            jayrmalazarte.olores@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="users-profile.html"
                                    className="flex items-center px-4 py-3 hover:bg-gray-100"
                                    onClick={toggleProfileDropdown}
                                >
                                    <ProfileIcon />
                                    <span className="ml-2">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="subscription.html"
                                    className="flex items-center px-4 py-3 hover:bg-gray-100"
                                    onClick={toggleProfileDropdown}
                                >
                                    <SubscriptionIcon />
                                    <span className="ml-2">
                                        &nbsp;Subscription
                                    </span>
                                </a>
                            </li>
                            <li className="border-t border-gray-400">
                                <a
                                    href="auth-boxed-signin.html"
                                    className="flex items-center px-4 py-4 text-red-600 hover:bg-gray-100"
                                    onClick={toggleProfileDropdown}
                                >
                                    <SignOutIcon className="text-red-600" />
                                    <span className="ml-2">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
