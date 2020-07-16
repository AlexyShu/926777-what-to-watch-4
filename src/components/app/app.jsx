import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withPlayer from "../../hocs/with-player/with-player.jsx";

const FullScreenVideoPlayer = withPlayer(FullScreenPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: `main`,
    };
    this.onPlayBtnClick = this.onPlayBtnClick.bind(this);
  }

  onPlayBtnClick(e) {
    e.preventDefault();
    this.setState({
      page: `film-player`,
    });
  }

  _renderPage() {
    const {filmCard, films, filmsCount, showMoreFilms} = this.props;
    const {page} = this.state;

    switch (page) {
      case `main`:
        return (
          <Main
            filmCard = {filmCard}
            films = {films}
            filmsCount = {filmsCount}
            showMoreFilms = {showMoreFilms}
            onFilmCardClick={(e) => {
              e.preventDefault();
              this.setState({
                page: `film-page`,
              });
            }}
            onPlayBtnClick={this.onPlayBtnClick}
          />
        );
      case `film-page`:
        return (
          <FilmPage
            filmCard = {filmCard}
            films = {films}
            onPlayBtnClick={this.onPlayBtnClick}
          />
        );
      case `film-player`:
        return (
          <FullScreenVideoPlayer
            filmCard = {filmCard}
            muted = {true}
            autoPlay = {true}
            onExitClick={() => {
              this.setState({
                page: `main`,
              });
            }}
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


const mapStateToProps = (state) => ({
  filmsCount: state.filmsCount,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

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
        name: PropTypes.string,
        posterUrl: PropTypes.string,
        previewUrl: PropTypes.string,
        bigPosterUrl: PropTypes.string,
        backgroundColor: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        votes: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number,
        genre: PropTypes.string,
        releaseYear: PropTypes.number,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        videoUrl: PropTypes.string,
        trailerUrl: PropTypes.string
      })
  ).isRequired,
  filmsCount: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
  onPlayBtnClick: PropTypes.func,
  onExitClick: PropTypes.func,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

