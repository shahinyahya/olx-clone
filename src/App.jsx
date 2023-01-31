import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import SingleProduct from "./components/single product/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./store/Contexts";
import { useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import Poster from "./store/PostContext";

const App = () => {
  const { setUser } = useContext(AuthContext);

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Poster>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<SingleProduct />} />
      </Routes>
    </Poster>
  );
};

export default App;
