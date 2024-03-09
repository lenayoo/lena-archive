import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "./output.css";
import InputContainer from "./Pages/InputContainer";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/inputcontainer">Input</Link>
            </li>
          </ul>
        </div>
        <div className="content w-full bg-[url('/spring.png')] bg-no-repeat bg-cover">
          <Routes>
            <Route path="/inputcontainer" element={<InputContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
