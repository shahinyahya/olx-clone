import "./create.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { AuthContext } from "../../store/Contexts";
import { db } from "../../firebase-backend/config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [data, setData] = useState({});
  const [photo, setPhoto] = useState({});

  const handleClick = (e) => {
    let handleInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...handleInput });
  };

  const storage = getStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${photo.name}`);
    const uploadFiles = uploadBytesResumable(imageRef, photo);

    uploadFiles.on(
      "state_changed",
      (snapshot) => {
        const progress = Number(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(`Upload is ${Number(progress)}% done`);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadFiles.snapshot.ref).then((downloadLink) => {
          addDoc(collection(db, "products"), {
            name: data.name,
            category: data.category,
            price: data.price,
            url: downloadLink,
            userId: user.uid,
            id: new Date().toUTCString(),
            createdAt: new Date().toDateString(),
          });
        });
      }
    );
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="create-container">
        <div className="create-main_box">
          <form className="create-form__container" onSubmit={handleSubmit}>
            <div className="create-inputs">
              <label htmlFor="name">
                <small>Name</small>
              </label>
              <input type="text" name="name" onChange={handleClick} />
            </div>
            <div className="create-inputs">
              <label htmlFor="category">
                <small>Category</small>
              </label>
              <input type="text" name="category" onChange={handleClick} />
            </div>
            <div className="create-inputs">
              <label htmlFor="price">
                <small>Price</small>
              </label>
              <input type="text" name="price" onChange={handleClick} />
            </div>
            <div className="upload-file__container">
              <img
                src={photo ? photo : ""}
                alt="posts"
                width="130"
                height="130"
              />
              <input
                type="file"
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                }}
              />
            </div>
            <div className="submit-btn__fill">
              <button onClick={handleSubmit}>Upload And Submit</button>
            </div>
          </form>
        </div>
        <span className="home-page-link">
          or go back to &nbsp;
          <Link to="/" className="home-link">
            Home Page
          </Link>
        </span>
      </div>
    </>
  );
};

export default Create;
