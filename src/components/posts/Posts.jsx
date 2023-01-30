import "./posts.css";
import post from "../../postDataRaw";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Posts = () => {
  const [toggleLike, setToggleLike] = useState(false);

  const handleClick = () => {
    setToggleLike(!toggleLike);
  };

  return (
    <div className="posts__container">
      <p className="posts-head">Fresh Reccomendations</p>
      <div className="card__container">
        {post.map((data) => {
          return (
            <div className="post__card" key={data.id}>
              <div className="top-post__container">
                <img src={data.image} alt="post" width="200" height="150" />
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
                  <p>{data.model}</p>
                </div>
                <div className="product-name">
                  <p>{data.name}</p>
                </div>
                <div className="location">
                  <div className="place">
                    <small>{data.place}</small>
                  </div>
                  <div className="date">
                    <small>{data.date}</small>
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
