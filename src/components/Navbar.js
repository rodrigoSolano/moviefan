import { Link } from "react-router-dom";
import logo from "../resources/logoTMDB.svg";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item logo" to="/">
          <img src={logo} width="154" height="20" alt="logo" />
        </Link>

        <div
          role="button"
          className={click ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => setClick(!click)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="navbar"
        className={click ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          <Link
            to="/categories/popular"
            className="navbar-item has-text-weight-semibold"
          >
            Popular
          </Link>
          <Link
            to="/categories/top_rated"
            className="navbar-item has-text-weight-semibold"
          >
            En cartelera hoy
          </Link>
          <Link
            to="/categories/upcoming"
            className="navbar-item has-text-weight-semibold"
          >
            Proximamente
          </Link>
          <Link
            to="/categories/top_rated"
            className="navbar-item has-text-weight-semibold"
          >
            Mejor valoradas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
