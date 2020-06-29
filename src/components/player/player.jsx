import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    this.setState({isPlaying: this.props.autoPlay});

    const video = this._videoRef.current;
    if (video) {
      video.muted = this.props.muted;
      video.play();
    }
  }

  render() {
    const {film} = this.props;
    return (
      <video
        ref={this._videoRef}
        poster={film.posterSrc}
        controls
        width="100%"
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
  autoPlay: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
};


export default Player;


