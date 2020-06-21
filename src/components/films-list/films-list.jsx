import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const FilmsList = (props) => {
  const {films, onFilmTitleClick} = props;
  return <div className="catalog__movies-list">
    {films.map((film, i) =>
      <FilmCard
        key = {Math.random + i}
        film = {film}
        onFilmTitleClick = {onFilmTitleClick}
      />
    )};
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pictureSrc: PropTypes.string.isRequired,
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
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default FilmsList;
