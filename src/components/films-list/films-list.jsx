import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {TIMEOUT, ARRAY_START} from "../../constants.js";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const FilmsList = (props) => {
  const {filteredFilms, filmsCount, handleChange, activeItem, showMoreFilms} = props;
  return <React.Fragment>
    <div className="catalog__movies-list">
      {filteredFilms.map((film) => {
        let timeoutId;
        return (
          <FilmCard
            key = {film.id}
            film = {film}
            onMovieCardMouseOver={() => {
              timeoutId = setTimeout(() => {
                handleChange(film.id);
              }, TIMEOUT);
            }}
            onMovieCardMouseOut={() => {
              clearTimeout(timeoutId);
              handleChange(null);
            }
            }
            isPlaying={film.id === activeItem}
          />);
      }).slice(ARRAY_START, filmsCount)}
    </div>
    {filmsCount >= filteredFilms.length ? null :
      <ShowMoreButton
        showMoreFilms = {showMoreFilms}
      />
    }
  </React.Fragment>;
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
  handleChange: PropTypes.func,
  showMoreFilms: PropTypes.func.isRequired,
};

export default FilmsList;
