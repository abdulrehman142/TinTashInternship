import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup= () => {
  const [signIn, toggle] = useState(true);

  // Form states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [message, setMessage] = useState("");
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);

  const navigate = useNavigate();

  // Sign Up handler
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setVerificationUrl(null);
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: signupName,
          email: signupEmail,
          password: signupPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Sign up successful! Please verify your email.");
        setVerificationUrl(data.verificationUrl);
        setSignupName("");
        setSignupEmail("");
        setSignupPassword("");
      } else {
        setMessage(data.message || "Sign up failed");
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  // Sign In handler
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signinEmail,
          password: signinPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Sign in successful! Redirecting...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage(data.message || "Sign in failed");
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] w-[678px] max-w-full min-h-[400px] mx-auto my-10 overflow-hidden box-border">
      {message && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-2 rounded z-[200]">
          {message}
          {verificationUrl && (
            <div className="mt-4">
              <a
                href={verificationUrl}
                className="text-indigo-600 underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to verify your email
              </a>
            </div>
          )}
        </div>
      )}
      {/* Sign Up Container */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out opacity-0 z-[1] ${
          !signIn ? "translate-x-full opacity-100 z-[5]" : ""
        }`}
      >
        <form
          className="bg-white flex flex-col items-center justify-center px-[50px] h-full text-center box-border"
          onSubmit={handleSignUp}
        >
          <h1 className="font-bold mb-5">Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-200 border-none px-4 py-3 my-2 w-full rounded-full text-base"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 border-none px-4 py-3 my-2 w-full rounded-full text-base"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 border-none px-4 py-3 my-2 w-full rounded-full text-base"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="rounded-full border border-[#2f2bff] bg-[#4b41ff] text-white font-bold px-[45px] py-3 mt-3 uppercase text-sm tracking-wider transition transform active:scale-95 hover:bg-[#2f2bff] hover:border-[#4b41ff]"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Sign In Container */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-[2] ${
          !signIn ? "translate-x-full" : ""
        }`}
      >
        <form
          className="bg-white flex flex-col items-center justify-center px-[50px] h-full text-center box-border"
          onSubmit={handleSignIn}
        >
          <h1 className="font-bold mb-5">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 border-none px-4 py-3 my-2 w-full rounded-full text-base"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 border-none px-4 py-3 my-2 w-full rounded-full text-base"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
            required
          />
          <a
            href="#"
            className="text-gray-800 text-sm my-4 no-underline hover:text-[#ff4b2b]"
          >
            Forgot your password?
          </a>
          <button
            type="submit"
            className="rounded-full border border-[#2f2bff] bg-[#4b41ff] text-white font-bold px-[45px] py-3 mt-3 uppercase text-sm tracking-wider transition transform active:scale-95 hover:bg-[#2f2bff] hover:border-[#4b41ff]"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Overlay Container */}
      <div
        className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] ${
          !signIn ? "-translate-x-full" : ""
        }`}
      >
        <div
          className={`bg-gradient-to-r from-[#2f2bff] to-[#4b41ff] text-white absolute left-[-100%] h-full w-[200%] transition-transform duration-700 ease-in-out ${
            !signIn ? "translate-x-1/2" : ""
          }`}
        >
          {/* Left Overlay Panel */}
          <div className="absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center">
            <h1 className="font-bold">Welcome Back!</h1>
            <p className="text-sm font-light leading-5 tracking-wide my-6">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => toggle(true)}
              className="rounded-full border border-white text-white font-bold px-[45px] py-3 mt-3 uppercase text-sm tracking-wider hover:bg-white/10"
            >
              Sign In
            </button>
          </div>

          {/* Right Overlay Panel */}
          <div className="absolute top-0 right-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center">
            <h1 className="font-bold">Hello, Friend!</h1>
            <p className="text-sm font-light leading-5 tracking-wide my-6">
              Enter Your personal details and start journey with us
            </p>
            <button
              onClick={() => toggle(false)}
              className="rounded-full border border-white text-white font-bold px-[45px] py-3 mt-3 uppercase text-sm tracking-wider hover:bg-white/10"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;