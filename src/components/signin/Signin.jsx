import "./signin.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Signup from "../signup/Signup";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [show, setShow] = useState(true);
  const [showReg, setShowReg] = useState(false);

  const handleClick = (e) => {
    let inputData = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputData });
  };

  const toggleOff = () => {
    setShow(!show);
    navigate("/");
  };

  const toggleSignUp = () => {
    setShowReg(!showReg);
    navigate("#signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  if (!show) {
    document.querySelector(".signin-container").style.display = "none";
    document.body.style.overflow = "scroll";
  }

  return (
    <div className="signin-container overlay">
      {showReg && <Signup />}
      <div className="signin__box">
        <div className="close-btn" onClick={toggleOff}>
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
        <form className="form" onSubmit={handleSubmit}>
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
          <div className="sign-up-container">
            <div className="sign-up-info">
              <p>If You're new to OLX, click</p>
            </div>
            <div className="sign-up-button">
              <button onClick={toggleSignUp}>Create An Account</button>
            </div>
          </div>
          <div className="message">
            <small>
              Your email is never shared with external parties nor do we use it
              to spam you in any way.
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
