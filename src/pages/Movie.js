import "react-circular-progressbar/dist/styles.css";
import "boxicons";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CarouselMovieCard from "../components/CarouselMovieCard";
import { CircularProgressbar } from "react-circular-progressbar";
import YouTube from "react-youtube";

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genders, setGenders] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    getDataMovie();
    getRecommendations();
    getTrailers();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [id]);

  const getDataMovie = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
    const response = await fetch(url);
    const movie = await response.json();
    movie.backdrop_path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    movie.year = movie.release_date.split("-")[0];

    setGenders(movie.genres);
    setMovie(movie);
  };

  const getRecommendations = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`;
    const response = await fetch(url);
    const movies = await response.json();
    setRecommendations(movies.results);
  };

  const getTrailers = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
    const response = await fetch(url);
    const videos = await response.json();
    console.log(videos.results[0]);
    setTrailers(videos.results.filter((video) => video.type === "Trailer"));
  };

  return (
    <>
      <div className="hero-image">
        <div className="hero-img overlay-dark">
          <img src={movie.backdrop_path} alt="" />
        </div>
        <div className="hero-overlay">
          <div className="movie">
            <div className="movie-poster">
              <img src={movie.poster_path} alt="" />
            </div>
            <div className="movie-info">
              <div className="movie-info__title">
                {movie.title}{" "}
                <span className="movie-info__title--year">({movie.year})</span>
              </div>
              <div className="facts">
                <div className="certification">R</div>
                <div className="release">{movie.release_date}</div>
                <div className="genders">
                  {genders.map((gender) => (
                    <div className="gender" key={gender.id}>
                      {gender.name}{" "}
                    </div>
                  ))}
                </div>
                <div className="runtime">{movie.runtime}m</div>
              </div>

              <div className="punctuation">
                <CircularProgressbar
                  value={movie.vote_average}
                  maxValue={10}
                  text={`${movie.vote_average * 10}%`}
                />
                <p className="is-primary"> Puntuacion del usuario</p>

                {trailers.length !== 0 && (
                  <button
                    className="button"
                    onClick={() => setShowTrailer(!showTrailer)}
                  >
                    <span className="icon-text">
                      <span className="icon">
                        <i className="bx bx-play" style={{ color: "#000" }}></i>
                      </span>
                      <span>Reproducir trailer</span>
                    </span>
                  </button>
                )}
              </div>

              <div className="tagline">{movie.tagline}</div>
              <div className="movie-info__info">
                <h3>Vista general</h3>
                <div className="movie-info__info__overview">
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <p className="title">Reparto principal</p>
      </section>

      <section className="section">
        <p className="title">Recomendaciones</p>
        <CarouselMovieCard movies={recommendations} />
      </section>

      {showTrailer && (
        <div className="modal is-active">
          <div className="modal-background black-and-white"></div>
          <div className="modal-content">
            <YouTube
              videoId={trailers[0].key}
              className="movie__trailer"
              containerClassName="movie__trailer"
              opts={videoOptions}
            />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowTrailer(!showTrailer)}
          ></button>
        </div>
      )}
    </>
  );
};

export default Movie;
