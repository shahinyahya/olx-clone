import "./singleproduct.css";
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdOutlineLocalGasStation,
  MdDateRange,
} from "react-icons/md";
import { SlSpeedometer, SlLocationPin } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../store/PostContext";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase-backend/config";

const SingleProduct = () => {
  const { postDetails } = useContext(PostContext);

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const { userId } = postDetails;
    getDocs(query(collection(db, "users"), where("id", "==", userId))).then(
      (res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      }
    );
  }, [postDetails]);

  return (
    <>
      <Header />
      {
        <div className="singleproduct__whole">
          <div className="product-image">
            <img src={postDetails.url} alt="product" />
            <div className="controls">
              <div className="left_control">
                <MdArrowBackIos />
              </div>
              <div className="right_control">
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
          <div className="product-info__container">
            <div className="product-info__left">
              <div className="product-name_details">
                <h1>{postDetails.name}</h1>
                {/* <p>
                  <MdOutlineLocalGasStation /> &nbsp; Petrol &nbsp; | &nbsp;
                  <SlSpeedometer /> &nbsp; 49,000 km
                </p> */}
              </div>

              <div className="overview-details">
                <div className="top-head_overview">
                  <p>Overview</p>
                </div>
                <div className="bottom-head_overview">
                  <div className="owner">
                    <BiUser className="overview-icon" />
                    <div className="overview-info">
                      <small>{postDetails.category}</small>
                      <p>1st</p>
                    </div>
                  </div>
                  <div className="loc">
                    <SlLocationPin className="overview-icon" />
                    <div className="overview-info">
                      <small>Location</small>
                      <p>{postDetails.createdAt}</p>
                    </div>
                  </div>
                  <div className="date">
                    <MdDateRange className="overview-icon" />
                    <div className="overview-info">
                      <small>Posting Date</small>
                      <p>{postDetails.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-description">
                <div className="top-head_description">
                  <p>Description</p>
                </div>
                <div className="bottom-head_description">
                  <p>
                    {/* ADDITIONAL VEHICLE INFORMATION: Color: White Make Month:
                    December Registration Place: HR */}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-info__right">
              <div className="product-price__container">
                <div className="product-price">
                  <h1>₹ {postDetails.price}</h1>
                </div>
                <div className="btn__fill">
                  <button>Make Offer</button>
                </div>
              </div>
              {userDetails && (
                <div className="product-contact__container">
                  <div className="contact-container">
                    <div className="name-profile">
                      <img
                        src="https://statics.olx.in/external/base/img/avatar_4.png"
                        alt="someone"
                        width="60"
                      />
                      <h4>{userDetails.username}</h4>
                    </div>
                    <div className="more-info">
                      <MdArrowForwardIos />
                    </div>
                  </div>
                  <div className="btn__outline">
                    <button>Chat with Seller</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
};

export default SingleProduct;
