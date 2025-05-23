import { useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`app-container ${theme}`}>
      <BrowserRouter>
        <header>
          <h1>React.js Lessons</h1>
          <nav>
            <Link to="/">App1</Link>
            <Link to="/app2">App2</Link>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </nav>
        </header>
        <hr />
        <main>
          <Routes>
            <Route index element={<App1 />} />
            <Route path="/" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
          </Routes>
        </main>
        <hr />
        <footer>
          &copy; Marella Gagan Hari Kiran, 2025; All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
