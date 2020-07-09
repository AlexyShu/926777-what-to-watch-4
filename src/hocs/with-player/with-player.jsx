import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
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
      return <Component
        {...this.props}
        videoRef={this._videoRef}
      />;
    }
  }

  WithPlayer.propTypes = {
    muted: PropTypes.bool.isRequired,
    autoPlay: PropTypes.bool.isRequired,
  };

  return WithPlayer;
};


export default withPlayer;
