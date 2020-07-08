import React, {createRef, PureComponent} from "react";
// import PropTypes from "prop-types";

const withPlayer = (Component) => {
  return class WithPlayer extends PureComponent {
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
        ref={this._videoRef}
      />;
    }
  };
};


//   WithAudio.propTypes = {
//     isPlaying: PropTypes.bool.isRequired,
//     onPlayButtonClick: PropTypes.func.isRequired,
//     src: PropTypes.string.isRequired,
//   };

//   return WithAudio;
// };

export default withPlayer;
