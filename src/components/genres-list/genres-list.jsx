import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {ALL_GENRES} from "../../constants.js";

const GenresList = (props) => {
  const {films, onFilterClick, activeFilter, handleChange} = props;
  const filters = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  return (
    <ul className="catalog__genres-list">
      {filters.map((filter, i) => (
        <li
          onClick={()=> {
            handleChange(filter);
            onFilterClick(filter);
          }}
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
        runTime: PropTypes.number,
        genre: PropTypes.string,
        releaseYear: PropTypes.number,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        videoUrl: PropTypes.string,
        trailerUrl: PropTypes.string
      })
  ).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

