import "./singleproduct.css";
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdOutlineLocalGasStation,
  MdDateRange,
} from "react-icons/md";
import { SlSpeedometer, SlLocationPin } from "react-icons/sl";
import { BiUser } from "react-icons/bi";

const SingleProduct = () => {
  return (
    <div className="singleproduct__whole">
      <div className="product-image">
        <img
          src="https://apollo-singapore.akamaized.net/v1/files/b23ta0l8t3c21-IN/image;s=300x600;q=60"
          alt="product"
        />
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
            <h1>Mercedes Benz E-Class</h1>
            <p>
              <MdOutlineLocalGasStation /> &nbsp; Petrol &nbsp; | &nbsp;
              <SlSpeedometer /> &nbsp; 49,000 km
            </p>
          </div>

          <div className="overview-details">
            <div className="top-head_overview">
              <p>Overview</p>
            </div>
            <div className="bottom-head_overview">
              <div className="owner">
                <BiUser className="overview-icon" />
                <div className="overview-info">
                  <small>Owner</small>
                  <p>1st</p>
                </div>
              </div>
              <div className="loc">
                <SlLocationPin className="overview-icon" />
                <div className="overview-info">
                  <small>Location</small>
                  <p>Delhi</p>
                </div>
              </div>
              <div className="date">
                <MdDateRange className="overview-icon" />
                <div className="overview-info">
                  <small>Posting Date</small>
                  <p>25-JAN-2023</p>
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
                ADDITIONAL VEHICLE INFORMATION: Color: White Make Month:
                December Registration Place: HR
              </p>
            </div>
          </div>
        </div>
        <div className="product-info__right">
          <div className="product-price__container">
            <div className="product-price">
              <h1>₹ 57,75,000</h1>
            </div>
            <div className="btn__fill">
              <button>Make Offer</button>
            </div>
          </div>
          <div className="product-contact__container">
            <div className="contact-container">
              <div className="name-profile">
                <img
                  src="https://statics.olx.in/external/base/img/avatar_4.png"
                  alt="someone"
                  width="60"
                />
                <h4>Kunjapu Althu</h4>
              </div>
              <div className="more-info">
                <MdArrowForwardIos />
              </div>
            </div>
            <div className="btn__outline">
              <button>Chat with Seller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
