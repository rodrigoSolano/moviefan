import "boxicons";

import { useEffect, useState } from "react";

import CollapseCard from "../components/CollapseCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Categories = () => {
  const [title, setTitle] = useState("Peliculas populares");
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(false);
  const [filterSelected, setFilterSelected] = useState("Seleccione");

  useEffect(() => {
    getTitle();
    getMovies();
    //eslint-disable-next-line
  }, [category]);

  const getTitle = () => {
    switch (category) {
      case "popular":
        setTitle("Peliculas Populares");
        break;
      case "now-playing":
        setTitle("Películas en cartelera");
        break;
      case "upcoming":
        setTitle("Próximas películas");
        break;
      case "top_rated":
        setTitle("Películas mejor valoradas");
        break;
      default:
        setTitle("Categoria no valida");
    }
  };

  const getMovies = async () => {
    const api_key = "2322e6e0df2719487f31b85b5c50dd27";
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`;

    console.log(url);
    const response = await fetch(url);
    const movies = await response.json();
    setMovies(movies.results);
  };

  const changeFilter = (e) => {
    setFilterSelected(e.target.innerHTML);
    setFilters(!filters);
  };

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="title is-size-4">{title}</div>

          <CollapseCard title="Ordenar">
            <p>Ordenar resultados por</p>
            <div className={filters ? "dropdown is-active" : "dropdown"}>
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => setFilters(!filters)}
                >
                  <span>{filterSelected}</span>
                  <span className="icon is-small">
                    <box-icon name="chevron-down"></box-icon>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <p className="dropdown-item" href="#" onClick={changeFilter}>
                    Fecha de estreno ascendente
                  </p>
                  <p className="dropdown-item " href="#" onClick={changeFilter}>
                    Fecha de estreno descendente
                  </p>
                  <p className="dropdown-item" href="#" onClick={changeFilter}>
                    Popularidad ascendente
                  </p>
                  <p className="dropdown-item" href="#" onClick={changeFilter}>
                    Popularidad descendente
                  </p>
                </div>
              </div>
            </div>
          </CollapseCard>
        </div>
        <div className="column ">
          <div className="columns is-flex-wrap-wrap">
            {movies.map((movie) => (
              <div className="column is-3" key={movie.id}>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
