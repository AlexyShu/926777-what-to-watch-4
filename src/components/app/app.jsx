import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";

const App = (props) => {
  const {filmCard, films} = props;
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <div>
          <Main
            filmCard = {filmCard}
            films = {films}
          />
        </div>;
      </Route>
      <Route exact path="/film-page">
        <div>
          <FilmPage
            filmCard = {filmCard}
          />
        </div>;
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  filmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    descriptionPartOne: PropTypes.string.isRequired,
    descriptionPartTwo: PropTypes.string.isRequired,
    filmDirector: PropTypes.string.isRequired,
    filmStarring: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pictureSrc: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default App;
