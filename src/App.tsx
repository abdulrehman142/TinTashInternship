import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Pagination from "./components/Pagination";
import Hero from "./components/Hero";
import Crafts from "./components/Crafts";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col">
        {/* Main content takes top space */}
        {/*<main className="flex-grow">
          <Main />
        </main>*/}
        
{/*<div>
  <Pagination />
</div>*/}
<div>
  <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
</div>
<div >
<Crafts darkMode={darkMode} setDarkMode={setDarkMode} />
</div>
        {/* Footer stays at bottom */}
        <footer>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </footer>
        
      </div>
    </div>
  );
}
