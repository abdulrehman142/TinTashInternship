import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Pagination from "./components/Pagination";
import Hero from "./components/Hero";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col">
        {/* Main content takes top space */}
        {/*<main className="flex-grow">
          <Main />
        </main>*/}
        
{/*<div>
  <Pagination />
</div>*/}
<div>
  <Hero />
</div>

        {/* Footer stays at bottom */}
       {/* <footer className="h-[88%] xl:h-[64%]">
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </footer>
        */}
      </div>
    </div>
  );
}
