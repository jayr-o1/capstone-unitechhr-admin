import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Universities from "./pages/Universities";
import Scrumboard from "./pages/Scrumboard";
import Calendar from "./pages/Calendar";

function App() {
    return (
        <Router>
            <Routes>
                {/* Wrap all routes with the Layout component */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="universities" element={<Universities />} />
                    <Route path="scrumboard" element={<Scrumboard />} />
                    <Route path="calendar" element={<Calendar />} />
                    {/* Add more routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
