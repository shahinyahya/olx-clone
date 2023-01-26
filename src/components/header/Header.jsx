import "./header.css";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Signin from "../signin/Signin";

const Header = () => {
  const [data, setData] = useState({});

  const [modal, setModal] = useState(false);

  const handleInput = (e) => {
    let inputData = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputData });
  };

  const login = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.style.overflow = "hidden";
  }

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
            <p>Login</p>
            <div className="underline"></div>
          </div>
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
