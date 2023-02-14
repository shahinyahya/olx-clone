import Header from "../components/header/Header";
import Category from "../components/categories/Category";
import TopBanner from "../components/topbanner/Topbanner";
import Posts from "../components/posts/Posts";
import Footer from "../components/footer/Footer";
import { useState } from "react";

const Home = () => {
  const [toggleLike, setToggleLike] = useState(false);

  return (
    <>
      <Header />
      <Category />
      <TopBanner />
      <Posts toggleLike={toggleLike} setToggleLike={setToggleLike} />
      <Footer />
    </>
  );
};

export default Home;
