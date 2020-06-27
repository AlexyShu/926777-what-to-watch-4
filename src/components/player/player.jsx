import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false
    };

    this.handleVideoPlay = this.handleVideoPlay.bind(this);
  }

  handleVideoPlay() {
    const video = this._videoRef.current;
    if (video.onMouseOver) {
      setTimeout(video.play(), 1000);
      this.setState({isPlaying: true});
    } else if (video.onMouseUp) {
      video.pause();
      this.setState({isPlaying: false});
    }
  }

  componentDidMount() {
    this.setState({isPlaying: this.props.autoPlay});
  }

  render() {
    const {film, muted, autoPlay} = this.props;

    return (
      <video className="player__video"
        poster={film.posterSrc}
        muted={muted}
        autoPlay={autoPlay}
        onClick={this.handleVideoPlay()}
        ref={this._videoRef}
        controls
      >
        <source src={film.video} />
      </video>
    );
  }
}


Player.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};


export default Player;


