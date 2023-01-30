import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top_footer">
        <div className="popular-locations">
          <h5>POPULAR LOCATIONS</h5>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="trending-locations">
          <h5>TRENDING LOCATIONS</h5>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        <div className="about-us">
          <h5>ABOUT US</h5>
          <ul>
            <li>About OLX Group</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>OLXPeople</li>
            <li>Wash Jobs</li>
          </ul>
        </div>
        <div className="olx">
          <h5>OLX</h5>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy Information</li>
            <li>Blog</li>
            <li>OLX Auto Sell Car</li>
          </ul>
        </div>
        <div className="follow-us">
          <h5>FOLLOW US</h5>
          <div className="icons">
            <CiFacebook />
            <TiSocialTwitterCircular />
            <AiOutlinePlayCircle />
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="bottom_footer__left">
          <p>Other Countries</p>
          <ul>
            <li>Pakistan-</li>
            <li>South Africa-</li>
            <li>Indonesia</li>
          </ul>
        </div>
        <div className="bottom_footer__right">
          <small>All rights reserved &copy; 2006-2023 OLX</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
