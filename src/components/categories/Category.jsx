import "./category.css";
import { IoIosArrowDown } from "react-icons/io";

const Category = () => {
  return (
    <div className="categories">
      <div className="category-head">
        <h5>ALL CATEGORIES</h5>
        <IoIosArrowDown className="arrow" />
      </div>
      <div className="category-list">
        <ul>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Mobile Phones</li>
          <li>For Sale: Houses & Apartments</li>
          <li>Scooters</li>
          <li>Commercial & Other Vehicles</li>
          <li>For Rent: Houses & Apartments</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
