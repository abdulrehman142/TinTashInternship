import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col bg-[#FFFFFF] dark:bg-[#101011]">
        {/* Main content takes top space */}
        <div className="flex-grow">
          <Main darkMode={darkMode} />
        </div>

        {/* Footer stays at bottom */}
        <footer className="h-[88%] xl:h-[64%]">
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </footer>
      </div>
    </div>
  );
}
