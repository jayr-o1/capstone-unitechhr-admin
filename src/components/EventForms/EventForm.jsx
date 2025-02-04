import React, { useState } from "react";

const CalendarEventForm = ({ onSubmit, eventDetails, setEventDetails }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({ ...eventDetails, [name]: value });
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Event Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={eventDetails.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    From:
                </label>
                <input
                    type="datetime-local"
                    name="start"
                    value={eventDetails.start}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    To:
                </label>
                <input
                    type="datetime-local"
                    name="end"
                    value={eventDetails.end}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Description:
                </label>
                <textarea
                    name="description"
                    value={eventDetails.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows="3"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Event Type:
                </label>
                <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="primary"
                            checked={eventDetails.type === "primary"}
                            onChange={handleChange}
                            className="form-radio text-indigo-600"
                        />
                        <span className="ml-2">Work</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="info"
                            checked={eventDetails.type === "info"}
                            onChange={handleChange}
                            className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Travel</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="success"
                            checked={eventDetails.type === "success"}
                            onChange={handleChange}
                            className="form-radio text-green-600"
                        />
                        <span className="ml-2">Personal</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="danger"
                            checked={eventDetails.type === "danger"}
                            onChange={handleChange}
                            className="form-radio text-red-600"
                        />
                        <span className="ml-2">Important</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-outline-danger"
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    Create Event
                </button>
            </div>
        </form>
    );
};

export default CalendarEventForm;
