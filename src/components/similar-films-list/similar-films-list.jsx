import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {TIMEOUT} from "../../constants.js";


const SimilarFilmsList = (props) => {
  const {films, handleChange, activeItem, film} = props;
  return <div className="catalog__movies-list">
    {films.filter((movie) => movie.genre === film.genre)
  .map((movie) => (
    <FilmCard
      key = {movie.id}
      film = {movie}
      onMovieCardMouseOver={() => {
        setTimeout(() => {
          handleChange(movie.id);
        }, TIMEOUT);
      }}
      onMovieCardMouseOut={() => handleChange(null)}
      isPlaying={movie.id === activeItem}
    />)
  ).slice(0, 4)}
  </div>;
};

SimilarFilmsList.propTypes = {
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
  activeItem: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  film: PropTypes.shape({
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
  }).isRequired
};

export default SimilarFilmsList;
