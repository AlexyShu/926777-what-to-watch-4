import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {TIMEOUT} from "../../constants.js";


const FilmsList = (props) => {
  const {filteredFilms, filmsCount, handleChange, activeItem} = props;
  return <div className="catalog__movies-list">
    {filteredFilms.map((film) => (
      <FilmCard
        key = {film.id}
        film = {film}
        onMovieCardMouseOver={() => {
          setTimeout(() => {
            handleChange(film.id);
          }, TIMEOUT);
        }}
        onMovieCardMouseOut={() => handleChange(null)}
        isPlaying={film.id === activeItem}
      />)).slice(0, filmsCount)}
  </div>;
};

FilmsList.propTypes = {
  filteredFilms: PropTypes.arrayOf(
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
  activeItem: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

export default FilmsList;
