import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
