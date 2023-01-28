import "./signup.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [show, setShow] = useState(true);

  const handleClick = (e) => {
    let inputData = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputData });
  };

  const toggleOff = () => {
    setShow(!show);
    navigate("/");
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
    <div className={"signin-container overlay"}>
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
        <h4>SignUp Form</h4>
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
          <div className="password__input">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleClick}
            />
          </div>
          <button className="signin-btn">Sign Up</button>
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

export default Signup;
