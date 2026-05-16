import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Verify from "./pages/Verify";

const Dashboard= () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Dashboard</h1>
      <p className="text-gray-700 text-lg mb-6">
        You are now signed in!
      </p>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;