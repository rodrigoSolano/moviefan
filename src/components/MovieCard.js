import { Link } from "react-router-dom";

export const MovieCard = ({movie}) => {
  return (
    <div className="column" key={movie.id}>
      <div className="card movie-card">
        <div className="card-image">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="content">
            <Link
              to={`/movie/${movie.id}`}
              className="is-size-6 has-text-weight-bold"
            >
              {movie.title}
            </Link>
            <p className="is-size-7">{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
