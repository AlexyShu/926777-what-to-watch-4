import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {ALL_GENRES} from "../../constants.js";

const GenresList = (props) => {
  const {films, onFilterClick, activeFilter} = props;
  const filters = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  return (
    <ul className="catalog__genres-list">
      {filters.map((filter, i) => (
        <li
          onClick={() => onFilterClick(filter)}
          key={filter + i}
          className={
            `catalog__genres-item ${filter === activeFilter ? `catalog__genres-item--active` : ``}`}
        >
          <a href="#" className="catalog__genres-link">
            {filter}
          </a>
        </li>)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeFilter: state.activeFilter
});

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
  activeFilter: PropTypes.string,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
