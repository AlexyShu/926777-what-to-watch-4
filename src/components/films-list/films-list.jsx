import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const TIMEOUT = 1000;

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilmId: null,
      isPlaying: false
    };

    this.movieCardMouseOverHandler = this.movieCardMouseOverHandler.bind(this);
    this.movieCardMouseOutHandler = this.movieCardMouseOutHandler.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(selectedFilmId) {
    setTimeout(() => {
      if (this.state.selectedFilmId === selectedFilmId) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, TIMEOUT);
  }

  movieCardMouseOverHandler(selectedFilmId) {
    this.setState(
        () => ({
          selectedFilmId
        }),
        () => this.togglePlay(selectedFilmId)
    );
  }

  movieCardMouseOutHandler() {
    this.setState(() => ({
      selectedFilmId: null,
      isPlaying: false
    }));
  }

  render() {
    const {films, onFilmCardClick, filmsCount} = this.props;
    return <div className="catalog__movies-list">
      {films.map((film, i) =>
        <FilmCard
          key = {film.name + i}
          film = {film}
          onFilmCardClick = {onFilmCardClick}
          onMovieCardMouseOver={() => this.movieCardMouseOverHandler(i)}
          onMovieCardMouseOut={this.movieCardMouseOutHandler}
          isPlaying={
            this.state.selectedFilmId === i && this.state.isPlaying
          }
        />
      ).slice(0, filmsCount)}
    </div>;
  }
}

const mapStateToProps = (state) => ({
  films: state.films
});

FilmsList.propTypes = {
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
  onFilmCardClick: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
};


export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
