import "boxicons";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const { query } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  useEffect(() => {
    getSearchTerm();
    // eslint-disable-next-line
  }, [query]);

  const getSearchTerm = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=1&include_adult=false`;
    const response = await fetch(url);
    const movies = await response.json();
    setMovies(movies.results);
  };

  //handle onchange event
  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //handle click on search button
  const handleSubmit = () => {
    history.push(`/search/${searchTerm}`);
  };
  return (
    <>
      {movies.length === 0 ||
        (query === "" && (
          <section className="section">
            <p className="title">Ninguna película coincide con tu búsqueda.</p>
          </section>
        ))}
      <section className="">
        <form className="" onSubmit={handleSubmit}>
          <div class="field ">
            <p class="control has-icons-left ">
              <input
                onChange={onSearchTermChange}
                value={searchTerm}
                class="input text-black "
                type="text"
                placeholder="Buscar una pelicula, programa de television, persona"
              />
              <span className="icon is-small is-left">
                <box-icon name="search-alt-2"></box-icon>
              </span>
            </p>
          </div>
        </form>
      </section>
      <section class="section">
        <p className="title">Resultados de la busqueda</p>
      </section>
      <div className="section">
        <div className="columns is-multiline">
          {movies.map((movie) => (
            <div className="column is-2" key={movie.id}>
              <div className="card movie-card">
                <div className="card-image">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="is-size-6 has-text-weight-bold"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
                    />
                  </Link>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
