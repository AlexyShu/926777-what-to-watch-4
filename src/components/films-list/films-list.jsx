import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const filmTitleHandler = () => {};

const FilmsList = (props) => {
  const {films} = props;
  return <div className="catalog__movies-list">
    {films.map((film, i) =>
      <FilmCard
        key = {Math.random + i}
        film = {film}
        onFilmTitleClick = {filmTitleHandler}
      />
    )};
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pictureSrc: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default FilmsList;
