import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getShowMoreFilms} from "../../reducer/state/selectors.js";
import {getFilms} from "../../reducer/data/selectors.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withPlayer from "../../hocs/with-player/with-player.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";


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
    const {filmCard, films, filmsCount, showMoreFilms, authorizationStatus} = this.props;
    const {page} = this.state;

    switch (page) {
      case `main`:
        return (
          <Main
            filmCard = {filmCard}
            films = {films}
            filmsCount = {filmsCount}
            showMoreFilms = {showMoreFilms}
            authorizationStatus = {authorizationStatus}
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
            authorizationStatus = {authorizationStatus}
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
    const {filmCard, films, login, authorizationStatus} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
              <SignIn onSubmit={login} />
            ) : (
              this._renderPage()
            )}
          </Route>
          <Route exact path="/dev-review">
            <AddReview
              filmCard = {filmCard}
            />
          </Route>
          <Route exact path="/film-page">
            <FilmPage
              filmCard = {filmCard}
              films = {films}
              authorizationStatus = {authorizationStatus}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => ({
  filmsCount: getShowMoreFilms(state),
  films: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
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
        runTime: PropTypes.string,
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
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

