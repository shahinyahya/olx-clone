import "./header.css";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useContext } from "react";
import Signin from "../signin/Signin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Contexts";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { user } = useContext(AuthContext);

  const auth = getAuth();

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [modal, setModal] = useState(false);

  const handleInput = (e) => {
    let inputData = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputData });
  };

  const login = () => {
    setModal((modal) => !modal);
    navigate("/signin");
  };

  if (modal) {
    document.body.style.overflow = "hidden";
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate("/signin"))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
              alt="olx logo"
              width="50"
            />
          </div>
          <div className="location__input">
            <AiOutlineSearch />
            <input
              type="text"
              name="city"
              placeholder="Search City, Area or loc..."
              onChange={handleInput}
            />
            <IoIosArrowDown className="arrow-down" />
          </div>
          <div className="search__input">
            <input
              type="text"
              name="search"
              placeholder="Find Cars, Mobile Phones, and more..."
              onChange={handleInput}
            />
            <div className="search-btn">
              <button>
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div className="language">
            <p>
              ENGLISH <IoIosArrowDown className="arrow-down" />
            </p>
          </div>
          <div className="login" onClick={() => login()}>
            <p>{user ? "Hello " + user.displayName : "Login"}</p>
            <div className="underline"></div>
          </div>

          {user && (
            <div className="logout__btn">
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          )}

          <div className="sell__btn">
            <button>
              <AiOutlinePlus className="plus" /> SELL
            </button>
          </div>
        </nav>
      </header>
      {modal && <Signin />}
    </>
  );
};

export default Header;
