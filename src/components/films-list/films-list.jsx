import React from "react";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/data/selectors.js";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const TIMEOUT = 1000;

const FilmsList = (props) => {
  const {films, onFilmCardClick, filmsCount, handleChange, activeItem} = props;
  return <div className="catalog__movies-list">
    {films.map((film) =>
      <FilmCard
        key = {film.id}
        film = {film}
        onFilmCardClick = {onFilmCardClick}
        onMovieCardMouseOver={() => {
          setTimeout(() => {
            handleChange(film.id);
          }, TIMEOUT);
        }}
        onMovieCardMouseOut={() => handleChange(null)}
        isPlaying={film.id === activeItem}
      />
    ).slice(0, filmsCount)}
  </div>;
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

FilmsList.propTypes = {
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
  onFilmCardClick: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  activeItem: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
