import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, onFilmTitleClick} = props;
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={film.pictureSrc} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onFilmTitleClick}>
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pictureSrc: PropTypes.string.isRequired,
  }).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default FilmCard;
