import React from "react";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";

const FilmCard = (props) => {
  const {film, onFilmCardClick, onMovieCardMouseOver, onMovieCardMouseOut, isPlaying} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={onFilmCardClick}
      onMouseOver={onMovieCardMouseOver}
      onMouseOut={onMovieCardMouseOut}
    >
      <div className="small-movie-card__image">
        {!isPlaying && (
          <img
            src={film.posterSrc}
            alt={film.name}
            width="280"
            height="175"
          />
        )}
        {isPlaying && (
          <Player
            film = {film}
            muted={true}
            autoPlay={true}
          />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">{film.name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired,
  onMovieCardMouseOut: PropTypes.func.isRequired
};

export default FilmCard;
