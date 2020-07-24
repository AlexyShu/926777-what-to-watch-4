import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getShowMoreFilms} from "../../reducer/state/selectors.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
// import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
// import withPlayer from "../../hocs/with-player/with-player.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
// import {AuthorizationStatus} from "../../reducer/user/user.js";
import history from "../../history.js";
import {AppRoute} from "../../constants.js";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

// const FullScreenVideoPlayer = withPlayer(FullScreenPlayer);
const MoviePage = withRouter(FilmPage);


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

  // _renderPage() {
  //   const {filmCard, films, filmsCount, showMoreFilms, authorizationStatus} = this.props;
  //   const {page} = this.state;
  //   switch (page) {
  //     case `main`:
  //       return (
  //         <Main
  //           filmCard = {filmCard}
  //           films = {films}
  //           filmsCount = {filmsCount}
  //           showMoreFilms = {showMoreFilms}
  //           authorizationStatus = {authorizationStatus}
  //           onFilmCardClick={(e) => {
  //             e.preventDefault();
  //             this.setState({
  //               page: `film-page`,
  //             });
  //           }}
  //           onPlayBtnClick={this.onPlayBtnClick}
  //         />
  //       );
  //     case `film-page`:
  //       return (
  //         <FilmPage
  //           filmCard = {filmCard}
  //           films = {films}
  //           onPlayBtnClick={this.onPlayBtnClick}
  //           authorizationStatus = {authorizationStatus}
  //         />
  //       );
  //     case `film-player`:
  //       return (
  //         <FullScreenVideoPlayer
  //           filmCard = {filmCard}
  //           muted = {true}
  //           autoPlay = {true}
  //           onExitClick={() => {
  //             this.setState({
  //               page: `main`,
  //             });
  //           }}
  //         />
  //       );
  //     default:
  //       return null;
  //   }

  // }

  render() {
    const {films, promoFilm, login, authorizationStatus, filmsCount, showMoreFilms} = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main
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
              onPlayBtnClick={this.onPlayBtnClick}
            />
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
          <Route exact path={AppRoute.ADD_REVIEW}>
            <AddReview
              // filmCard = {filmCard}
            />
          </Route>
          <Route exact path="/film-page/:id"
            render = {(props) => (
              <MoviePage
                {...props}
                films = {films}
                authorizationStatus = {authorizationStatus}
                // onPlayBtnClick={this.onPlayBtnClick}
              />
            )}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  filmsCount: getShowMoreFilms(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state)
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
  onPlayBtnClick: PropTypes.func,
  onExitClick: PropTypes.func,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

