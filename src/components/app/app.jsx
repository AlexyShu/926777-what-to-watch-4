import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: `main`,
    };
  }

  _renderPage() {
    const {filmCard, films} = this.props;
    const {page} = this.state;

    switch (page) {
      case `main`:
        return (
          <Main
            filmCard = {filmCard}
            films = {films}
            onFilmCardClick={(e) => {
              e.preventDefault();
              this.setState({
                page: `film-page`,
              });
            }}
          />
        );
      case `film-page`:
        return (
          <FilmPage
            filmCard = {filmCard}
            films = {films}
          />
        );
      default:
        return null;
    }

  }

  render() {
    const {filmCard, films} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderPage()}
          </Route>
          <Route exact path="/film-page">
            <FilmPage
              filmCard = {filmCard}
              films = {films}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  filmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
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
    time: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterSrc: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        ratingScore: PropTypes.string.isRequired,
        ratingLevel: PropTypes.string.isRequired,
        ratingCount: PropTypes.string.isRequired,
        descriptionPartOne: PropTypes.string.isRequired,
        descriptionPartTwo: PropTypes.string.isRequired,
        filmDirector: PropTypes.string.isRequired,
        filmStarring: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default App;

