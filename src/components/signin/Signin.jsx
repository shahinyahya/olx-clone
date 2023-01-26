import "./signin.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Signin = () => {
  const [data, setData] = useState({});

  const handleClick = (e) => {
    let inputData = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputData });
  };

  return (
    <div className="signin-container overlay">
      <div className="signin__box">
        <div className="close-btn">
          <AiOutlineClose className="close" />
        </div>
        <div className="logo">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
            alt="logo"
            width="50"
          />
        </div>
        <h4>Enter Your Email And Password To Login</h4>
        <div className="form">
          <div className="email__input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleClick}
            />
          </div>
          <div className="password__input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleClick}
            />
          </div>
          <button className="signin-btn">Sign In</button>
          <div className="message">
            <small>
              Your email is never shared with external parties nor do we use it
              to spam you in any way.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
