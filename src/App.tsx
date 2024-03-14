import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "./output.css";
import InputContainer from "./Pages/InputContainer";
import { Test } from "./Pages/Test";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdParty } from "./Pages/ThirdParty";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="main">
          <div className="navbar">
            <ul>
              <li>
                <Link to="/inputcontainer">Input</Link>
              </li>
              <li>
                <Link to="/test">TEST</Link>
              </li>
              <li>
                <Link to="/thirdparty">Notion</Link>
              </li>
            </ul>
          </div>
          <div className="content w-full bg-[url('/sunset.png')] bg-no-repeat bg-cover">
            <Routes>
              <Route path="/inputcontainer" element={<InputContainer />} />
              <Route path="/test" element={<Test />} />
              <Route path="/thirdparty" element={<ThirdParty />} />
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
