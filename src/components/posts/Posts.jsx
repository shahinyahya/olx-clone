import "./posts.css";
// import post from "../../postDataRaw";
import { AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-backend/config";

const Posts = () => {
  const [toggleLike, setToggleLike] = useState(false);
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setToggleLike(!toggleLike);
  };

  useEffect(() => {
    getDocs(collection(db, "products")).then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(allPost);
    });
  }, []);

  return (
    <div className="posts__container">
      <p className="posts-head">Fresh Reccomendations</p>
      <div className="card__container">
        {products.map((data) => {
          return (
            <div className="post__card" key={data.userId}>
              <div className="top-post__container">
                <img src={data.url} alt="post" width="200" height="150" />
                <AiOutlineHeart
                  onClick={handleClick}
                  className={toggleLike ? "heart-active" : "heart-icon"}
                />
              </div>
              <div className="bottom-post__container">
                <div className="price-details">
                  <strong>{data.price}</strong>
                </div>
                <div className="year-mileage">
                  <p>{data.category}</p>
                </div>
                <div className="product-name">
                  <p>{data.name}</p>
                </div>
                <div className="location">
                  <div className="place">
                    <small>{}</small>
                  </div>
                  <div className="date">
                    <small>{data.createdAt}</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="load-btn">
        <button className="load-more-btn__outline">Load more</button>
      </div>
    </div>
  );
};

export default Posts;
