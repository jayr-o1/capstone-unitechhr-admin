import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* Add other components or content for the dashboard here */}
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;
