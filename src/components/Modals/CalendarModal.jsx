import React from "react";

const CalendarModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default CalendarModal;
