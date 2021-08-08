import Carousel from "react-multi-carousel";
import { MovieCard } from "./MovieCard";
import useWindowSize from "../hooks/useWindowSize";

const CarouselMovieCard = ({ movies }) => {
  const size = useWindowSize();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 5,
      partialVisibilityGutter: 10,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 500 },
      items: size.width > 600 ? 3 : 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} partialVisible={true}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Carousel>
  );
};

export default CarouselMovieCard;
