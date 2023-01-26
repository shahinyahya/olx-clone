import Header from "../components/header/Header";
import Category from "../components/categories/Category";
import TopBanner from "../components/topbanner/Topbanner";
import Posts from "../components/posts/Posts";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <TopBanner />
      <Posts />
      <Footer />
    </>
  );
};

export default Home;
