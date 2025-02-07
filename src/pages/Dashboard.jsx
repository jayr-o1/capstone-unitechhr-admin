import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom"; // Import useOutletContext
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const lineData = [
    { name: "Jan", income: 17000, expenses: 16500 },
    { name: "Feb", income: 16000, expenses: 17500 },
    { name: "Mar", income: 17000, expenses: 16000 },
    { name: "Apr", income: 18000, expenses: 16500 },
    { name: "May", income: 15500, expenses: 17000 },
    { name: "Jun", income: 19000, expenses: 19500 },
    { name: "Jul", income: 19500, expenses: 18000 },
    { name: "Aug", income: 16500, expenses: 17500 },
    { name: "Sep", income: 16000, expenses: 16500 },
    { name: "Oct", income: 17500, expenses: 18500 },
    { name: "Nov", income: 15000, expenses: 17000 },
    { name: "Dec", income: 18000, expenses: 18500 },
];

const pieData = [
    { name: "Apparel", value: 250, color: "#DAA520" },
    { name: "Sports", value: 200, color: "#6A0DAD" },
    { name: "Others", value: 180, color: "#DC143C" },
    { name: "Test", value: 180, color: "#663399" },
    { name: "Tets1", value: 182, color: "#FF8C00" },
];

const Dashboard = () => {
    const { isSidebarOpen } = useOutletContext(); // Access isSidebarOpen from Outlet context
    const containerRef = useRef(null);

    // 🔄 Resize Charts Dynamically
    const resizeCharts = () => {
        if (containerRef.current) {
            const charts =
                containerRef.current.querySelectorAll(".recharts-wrapper");
            charts.forEach((chart) => {
                chart.style.width = "100%";
                chart.style.height = "auto";
            });
        }
    };

    // Resize charts when sidebar state changes
    useEffect(() => {
        const timer = setTimeout(resizeCharts, 300); // 🛠 Delay ensures smooth resize
        return () => clearTimeout(timer);
    }, [isSidebarOpen]);

    // Resize charts on window resize
    useEffect(() => {
        window.addEventListener("resize", resizeCharts);
        return () => {
            window.removeEventListener("resize", resizeCharts);
        };
    }, []);

    return (
        <div className="w-full h-full transition-all duration-300 flex flex-col">
            {/* Breadcrumb Navigation */}
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <a
                        href="javascript:;"
                        className="text-primary hover:underline text-blue-500"
                    >
                        Dashboard
                    </a>
                </li>
                <li className="before:content-['/'] ltr:before:mr-1 rtl:before:ml-1">
                    <span>Sales</span>
                </li>
            </ul>

            {/* Charts Section */}
            <div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 pr-6" // Added px-4 for uniform margins
            >
                {/* Revenue Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {/* Header & Legend in One Row */}
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Revenue
                        </h3>
                        <div className="flex space-x-4">
                            <span className="flex items-center text-blue-600 font-medium">
                                <span className="w-3 h-3 bg-blue-600 rounded-full mr-1"></span>{" "}
                                Income
                            </span>
                            <span className="flex items-center text-red-600 font-medium">
                                <span className="w-3 h-3 bg-red-600 rounded-full mr-1"></span>{" "}
                                Expenses
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-10">
                        Total Profit{" "}
                        <span className="text-blue-600">$10,840</span>
                    </p>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={lineData}>
                            <XAxis dataKey="name" />
                            <YAxis
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="income"
                                stroke="#0000FF"
                                dot={{ r: 6, fill: "#0000FF" }}
                                strokeWidth={2}
                            />
                            <Line
                                type="monotone"
                                dataKey="expenses"
                                stroke="#FF0000"
                                dot={{ r: 6, fill: "#FF0000" }}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Sales by Category Pie Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">
                        Sales By Category
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
