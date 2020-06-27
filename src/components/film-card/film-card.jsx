import React from "react";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";

const FilmCard = (props) => {
  const {film, onFilmCardClick, isPlaying} = props;
  return <article onClick={onFilmCardClick} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      {!isPlaying && (
        <img src={film.posterSrc} alt={film.name} width="280" height="175" />
      )}
      {isPlaying && (
        <Player
          film = {film}
          muted={true}
        />
      )}
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  isPlaying: PropTypes.bool
};

export default FilmCard;
