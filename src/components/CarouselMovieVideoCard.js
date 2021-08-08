import Carousel from "react-multi-carousel";
import MovieVideoCard from "../components/MovieVideoCard";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: linear-gradient(
    to right,
    rgba(3, 37, 65, 0.75) 0%,
    rgba(3, 37, 65, 0.75) 100%
  );
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const CarouselMovieVideoCard = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 4,
      partialVisibilityGutter: 0,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 500 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const changeBackground = () => {
    console.log("mouseEnter");
  };
  return (
    <CarouselContainer>
      <p className="title has-text-white">Ultimos avances</p>
      <Carousel responsive={responsive} partialVisible={true}>
        {movies.map((movie) => (
          <MovieVideoCard
            movie={movie}
            key={movie.id}
            onMouseEnter={changeBackground}
          />
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselMovieVideoCard;
