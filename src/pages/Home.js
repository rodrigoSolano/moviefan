import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";

import CarouselMovieCard from "../components/CarouselMovieCard";
import CarouselMovieVideoCard from "../components/CarouselMovieVideoCard";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [latestCinemaMovies, setLatestCinemaMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
    getLatestCinemaMovies();
    if (localStorage.getItem("ok") === "true") {
      Swal.fire(
        "Esta aplicacion usa la API de 'https://www.themoviedb.org'"
      ).then((result) => {
        localStorage.setItem("ok", JSON.stringify(false));
      });
    }

    //eslint-disable-next-line
  }, []);

  const getPopularMovies = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
    const response = await fetch(url);
    const movies = await response.json();
    setPopularMovies(movies.results);
  };

  const getTrendingMovies = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
    const response = await fetch(url);
    const movies = await response.json();
    setTrendingMovies(movies.results);
  };

  const getLatestCinemaMovies = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;
    const response = await fetch(url);
    const movies = await response.json();
    setLatestCinemaMovies(movies.results);
  };

  //handle onchange event
  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //handle click on search button
  const handleSearch = () => {
    history.push(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className="hero hero-home">
        <div className="hero-body">
          <p className="title is-size-1 has-text-white has-text-weight-bold">
            Bienvenidos
          </p>
          <p className="subtitle is-size-3 has-text-white has-text-weight-semibold">
            Millones de películas por descubrir. Explora ahora.
          </p>
          <form className="is-flex ">
            <input
              className="input is-rounded"
              type="text"
              onChange={onSearchTermChange}
              value={searchTerm}
              placeholder="Buscar una pelicula, programa de television, persona"
            ></input>
            <button
              className="button is-rounded gradient-green has-text-weight-semibold has-text-white button-gradient-green"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="section">
        <p className="title">Peliculas populares</p>
        <CarouselMovieCard movies={popularMovies} />
      </div>

      <CarouselMovieVideoCard movies={latestCinemaMovies} />

      <div className="section">
        <p className="title">Tendencias</p>
        <CarouselMovieCard movies={trendingMovies} />
      </div>
    </>
  );
};

export default Home;
