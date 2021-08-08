import "boxicons";

import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieVideoCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;

const MovieVideoCardImage = styled.div`
  max-width: 100%;
  max-height: 170px;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-position: top center;
    object-fit: cover;
  }
`;

const MovieVideoCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const MovieTitle = styled.p`
  color: #ffffff;
  font-size: 19px;
  font-weight: 600;
  text-transform: capitalize;
`;

const MovieVideoCard = ({ movie }) => {
  return (
    <MovieVideoCardContainer>
      <MovieVideoCardImage>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
        </Link>
      </MovieVideoCardImage>
      <MovieVideoCardContent>
        <Link to={`/movie/${movie.id}`}>
          <MovieTitle>{movie.title}</MovieTitle>
        </Link>
      </MovieVideoCardContent>
    </MovieVideoCardContainer>
  );
};

export default MovieVideoCard;
