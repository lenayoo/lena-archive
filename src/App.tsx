import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
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
            </ul>
          </div>
          <div className="content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
