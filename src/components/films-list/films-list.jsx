import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const TIMEOUT = 1000;

const FilmsList = (props) => {
  const {films, onFilmCardClick, filmsCount, handleChange, activeItem} = props;
  return <div className="catalog__movies-list">
    {films.map((film, i) =>
      <FilmCard
        key = {film.name + i}
        film = {film}
        onFilmCardClick = {onFilmCardClick}
        onMovieCardMouseOver={() => {
          setTimeout(() => {
            handleChange(i);
          }, TIMEOUT);
        }}
        onMovieCardMouseOut={() => handleChange(null)}
        isPlaying={i === activeItem}
      />
    ).slice(0, filmsCount)}
  </div>;
};


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
  activeItem: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
