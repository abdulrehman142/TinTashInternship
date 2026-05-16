import React from "react";

const Welcome= () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
    <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Your account has been created successfully.<br />
        We're excited to have you on board!
      </p>
      <a
        href="/dashboard"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition"
      >
        Go to Dashboard
      </a>
    </div>
  </div>
);

export default Welcome;