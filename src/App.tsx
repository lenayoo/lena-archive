import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "./Pages/React";
import Typescript from "./Pages/Typescript";
import Javascript from "./Pages/Javascript";
import Nodejs from "./Pages/Nodejs";
import Github from "./Pages/Github";
import Library from "./Pages/Library";
import Tailwind from "./Pages/Tailwind";
import "./App.css";
import "./output.css";

function App() {
  return (
    <Router>
      <div className="header">
        <h1>☁️ FE TECH BLOG ☁️</h1>
      </div>
      <div className="main">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/react">React (4)</Link>
            </li>
            <li>
              <Link to="/typescript">TypeScript (1)</Link>
            </li>
            <li>
              <Link to="/javascript">JavaScript (1)</Link>
            </li>
            <li>
              <Link to="/nodejs">Node.js (0)</Link>
            </li>
            <li>
              <Link to="/github">GitHub (3)</Link>
            </li>
            <li>
              <Link to="/library">Library (1)</Link>
            </li>
            <li>
              <Link to="/tailwind">Tailwind (1)</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/react" element={<React />} />
            <Route path="/typescript" element={<Typescript />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/nodejs" element={<Nodejs />} />
            <Route path="/github" element={<Github />} />
            <Route path="/library" element={<Library />} />
            <Route path="/tailwind" element={<Tailwind />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
