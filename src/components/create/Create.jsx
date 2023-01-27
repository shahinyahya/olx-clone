import "./create.css";
import { useState } from "react";
import Header from "../header/Header";

const Create = () => {
  const [data, setData] = useState({});

  const handleClick = (e) => {
    let handleInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...handleInput });
  };

  return (
    <>
      <Header />
      <div className="create-container">
        <div className="create-main_box">
          <div className="create-form__container">
            <div className="create-inputs">
              <label htmlFor="name">
                {" "}
                <small>Name</small>{" "}
              </label>
              <input type="text" name="name" onChange={handleClick} />
            </div>
            <div className="create-inputs">
              <label htmlFor="category">
                {" "}
                <small>Category</small>{" "}
              </label>
              <input type="text" name="category" onChange={handleClick} />
            </div>
            <div className="create-inputs">
              <label htmlFor="price">
                {" "}
                <small>Price</small>{" "}
              </label>
              <input type="text" name="price" onChange={handleClick} />
            </div>
          </div>
          <div className="upload-file__container">
            <img src="" alt="posts" width="50" height="50" />
            <input type="file" name="file" onChange={handleClick} />
          </div>
          <div className="submit-btn__fill">
            <button>Upload And Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
