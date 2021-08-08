import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Categories from "../pages/Categories";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Navbar from "../components/Navbar";
import Search from "../pages/Search";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:category" component={Categories} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/search/:query" component={Search} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterApp;