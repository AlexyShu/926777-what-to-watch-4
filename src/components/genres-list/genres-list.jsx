import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const ALL_GENRES = `All genres`;

const GenresList = (props) => {
  const {films, onFilterClick} = props;
  const filters = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  return (
    <ul className="catalog__genres-list">
      {filters.map((filter, i) => (
        <li onClick={() => onFilterClick(filter)} key={filter + i} className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">
            {filter}
          </a>
        </li>)
      )}
    </ul>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

GenresList.propTypes = {
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
  onFilterClick: PropTypes.func.isRequired,
};


export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
