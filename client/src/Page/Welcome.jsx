import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || "http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">API Response:</h1>
        <p className="mt-2 text-lg text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default Welcome;
