import AuthorCarousel from "../AuthorCarousel/AuthorCarousel";
import PopularPacks from "../PopularPackage/PopularPacks";


const Home = () => {

  return (
    <div className="container mx-auto">
      <AuthorCarousel></AuthorCarousel>
      <PopularPacks></PopularPacks>
    </div>
  );
};

export default Home;
