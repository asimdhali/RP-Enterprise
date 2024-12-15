import AuthorCarousel from "../AuthorCarousel/AuthorCarousel";
import ProductCarousel from "../AuthorCarousel/ProductCarousel2";
import ProductCarousel3 from "../AuthorCarousel/ProductCarousel3";
import PopularPacks from "../PopularPackage/PopularPacks";


const Home = () => {

  return (
    <div className="container mx-auto">
      <ProductCarousel3></ProductCarousel3>
      <AuthorCarousel></AuthorCarousel>
      <ProductCarousel></ProductCarousel>
      <PopularPacks></PopularPacks>
    </div>
  );
};

export default Home;
