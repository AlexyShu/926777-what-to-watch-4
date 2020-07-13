import React from "react";
import PropTypes from "prop-types";

const FullScreenPlayer = (props) => {
  const {
    filmCard,
    videoRef,
    isPlaying,
    getToggleProgress,
    getTimeDuration,
    onLoadedMetadata,
    onTimeUpdate,
    onFullscreenButtonClick,
    onPlayButtonClick,
    onExitButtonClick,
    onExitClick
  } = props;
  return (
    <div className="player">
      <video
        ref={videoRef}
        width="100%"
        className="player__video"
        poster={filmCard.posterSrc}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      >
        <source src={filmCard.video} />
      </video>
      <button
        onClick={() => {
          onExitButtonClick();
          onExitClick();
        }}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getToggleProgress()}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${getToggleProgress()}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getTimeDuration()}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            {!isPlaying && (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>
            )}
            {isPlaying && (
            <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
            <span>Pause</span>
              </>
            )}
          </button>
          <div className="player__name">Transpotting</div>

          <button
            onClick={onFullscreenButtonClick}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
};

FullScreenPlayer.propTypes = {
  filmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    descriptionPartOne: PropTypes.string.isRequired,
    descriptionPartTwo: PropTypes.string.isRequired,
    filmDirector: PropTypes.string.isRequired,
    filmStarring: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  getToggleProgress: PropTypes.func.isRequired,
  getTimeDuration: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitClick: PropTypes.func.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ])
};

export default FullScreenPlayer;

