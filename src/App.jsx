import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
