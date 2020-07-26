import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getShowMoreFilms} from "../../reducer/state/selectors.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withPlayer from "../../hocs/with-player/with-player.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
// import {AuthorizationStatus} from "../../reducer/user/user.js";
// import history from "../../history.js";
import {AppRoute} from "../../constants.js";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

const MoviePage = withRouter(FilmPage);
const MainPage = withRouter(Main);
const FullScreenVideoPlayer = withPlayer(FullScreenPlayer);
const FullScreenVideoPlayerPage = withRouter(FullScreenVideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, promoFilm, login, authorizationStatus, filmsCount, showMoreFilms} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN}
            render = {(props) => (
              <MainPage
                {...props}
                films = {films}
                filmsCount = {filmsCount}
                showMoreFilms = {showMoreFilms}
                authorizationStatus = {authorizationStatus}
                promoFilm = {promoFilm}
                // onFilmCardClick={(e) => {
                //   e.preventDefault();
                //   this.setState({
                //     page: `film-page`,
                //   });
                // }}
              />
            )}>
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.LOGIN}
            render={() => {
              return (
                <SignIn onSubmit={login} />
              );
            }}
          />
          <Route exact path={AppRoute.MY_LIST}>
            <MyList
              films={films}
            />
          </Route>
          <Route exact path='/films/:id/player'>
            <FullScreenVideoPlayerPage
              films = {films}
              muted = {true}
              autoPlay = {true}
            />
          </Route>
          <Route exact path={AppRoute.ADD_REVIEW}>
            <AddReview
              // filmCard = {filmCard}
            />
          </Route>
          <Route exact path={AppRoute.FILM_PAGE}
            render = {(props) => (
              <MoviePage
                {...props}
                films = {films}
                authorizationStatus = {authorizationStatus}
              />
            )}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  filmsCount: getShowMoreFilms(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


App.propTypes = {
  promoFilm: PropTypes.shape({
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
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  history: PropTypes.func,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

