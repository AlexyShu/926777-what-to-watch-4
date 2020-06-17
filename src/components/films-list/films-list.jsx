import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const filmTitleHandler = () => {};

const FilmsList = (props) => {
  const {films} = props;
  return <div className="catalog__movies-list">
    <FilmCard
      films = {films}
      onFilmTitleClick = {filmTitleHandler}
    />
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pictureSrc: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired
      })
  ).isRequired,
};

export default FilmsList;
