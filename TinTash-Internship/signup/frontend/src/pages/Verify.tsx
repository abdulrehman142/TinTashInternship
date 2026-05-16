import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Verify: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setMessage("Missing verification token.");
      return;
    }
    fetch(`http://localhost:3000/verify?token=${token}`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        if (data.message === "Email verified! You can now log in.") {
          setTimeout(() => navigate("/signup"), 2000);
        }
      });
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Verify;