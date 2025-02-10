import React, { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Import interactionPlugin
import CalendarModal from "../components/Calendar/Modals/CalendarModal";
import CalendarEventForm from "../components/Calendar/EventForms/CalendarEventForm";

const Calendar = () => {
    const { isSidebarOpen } = useOutletContext();
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([
        { id: 1, title: "Meeting", start: "2025-02-02", type: "work" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventDetails, setEventDetails] = useState({
        title: "",
        start: "",
        end: "",
        description: "",
        type: "work",
    });

    const handleDateClick = (arg) => {
        console.log("Date clicked:", arg.dateStr); // Debugging line
        const clickedDate = arg.date;
        setEventDetails({
            ...eventDetails,
            start: clickedDate.toISOString().slice(0, 16), // Format for datetime-local input
            end: clickedDate.toISOString().slice(0, 16), // Default end time same as start
        });
        setIsModalOpen(true); // Open the modal
        console.log("Modal state:", isModalOpen); // Debugging line
    };

    const handleEventSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            ...eventDetails,
            id: events.length + 1,
            backgroundColor: getEventColor(eventDetails.type),
        };
        setEvents([...events, newEvent]);
        setIsModalOpen(false);
        setEventDetails({
            title: "",
            start: "",
            end: "",
            description: "",
            type: "work",
        });
    };

    const getEventColor = (type) => {
        switch (type) {
            case "work":
                return "#6366f1";
            case "travel":
                return "#3b82f6";
            case "personal":
                return "#10b981";
            case "important":
                return "#ef4444";
            default:
                return "#6366f1";
        }
    };

    // Resize calendar when sidebar state changes
    useEffect(() => {
        const timer = setTimeout(() => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.updateSize();
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [isSidebarOpen]);

    // Resize calendar on window resize
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.updateSize();
            }
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <div className="w-full h-full p-6 bg-white rounded-xl shadow-lg transition-all duration-300 flex flex-col">
            {/* Header Section */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold">Calendar</h2>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-sm bg-indigo-600 mr-2"></div>
                        <span className="text-sm">Work</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-sm bg-blue-600 mr-2"></div>
                        <span className="text-sm">Travel</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-sm bg-green-600 mr-2"></div>
                        <span className="text-sm">Personal</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-sm bg-red-600 mr-2"></div>
                        <span className="text-sm">Important</span>
                    </div>
                </div>
            </div>

            {/* Calendar Component */}
            <div className="flex-grow">
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin]} // Add interactionPlugin here
                    initialView="dayGridMonth"
                    events={events}
                    dateClick={handleDateClick} // This will now work
                    headerToolbar={{
                        left: "prev next today",
                        center: "title",
                        right: "",
                    }}
                    buttonText={{
                        today: "Today",
                    }}
                    customButtons={{
                        prev: {
                            text: "‹",
                            click: () => calendarRef.current.getApi().prev(),
                        },
                        next: {
                            text: "›",
                            click: () => calendarRef.current.getApi().next(),
                        },
                    }}
                    eventContent={(eventInfo) => (
                        <div
                            style={{
                                backgroundColor:
                                    eventInfo.event.backgroundColor,
                                padding: "2px 5px",
                                borderRadius: "4px",
                                color: "white",
                            }}
                        >
                            {eventInfo.event.title}
                        </div>
                    )}
                />
            </div>

            {/* Event Modal */}
            <CalendarModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <h3 className="text-xl font-semibold mb-4">Add Event</h3>
                <CalendarEventForm
                    onSubmit={handleEventSubmit}
                    eventDetails={eventDetails}
                    setEventDetails={setEventDetails}
                    onClose={() => setIsModalOpen(false)} // Pass onClose to form
                />
            </CalendarModal>
        </div>
    );
};

export default Calendar;
