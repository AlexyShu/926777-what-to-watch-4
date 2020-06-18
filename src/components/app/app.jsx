import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {movieCard, films} = props;
  return <div>
    <Main
      movieCard = {movieCard}
      films = {films}
    />
  </div>;
};

App.propTypes = {
  movieCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pictureSrc: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default App;
