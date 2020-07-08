import React, {PureComponent} from "react";

const TIMEOUT = 1000;

const withFilmsList = (Component) => {
  return class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedFilmId: null,
        isPlaying: false
      };

      this.movieCardMouseOverHandler = this.movieCardMouseOverHandler.bind(this);
      this.movieCardMouseOutHandler = this.movieCardMouseOutHandler.bind(this);
      this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(selectedFilmId) {
      setTimeout(() => {
        if (this.state.selectedFilmId === selectedFilmId) {
          this.setState((prevState) => ({
            isPlaying: !prevState.isPlaying
          }));
        }
      }, TIMEOUT);
    }

    movieCardMouseOverHandler(selectedFilmId) {
      this.setState(
          () => ({
            selectedFilmId
          }),
          () => this.togglePlay(selectedFilmId)
      );
    }

    movieCardMouseOutHandler() {
      this.setState(() => ({
        selectedFilmId: null,
        isPlaying: false
      }));
    }

    render() {

      return <Component
        onMovieCardMouseOver={() => this.movieCardMouseOverHandler(i)}
        onMovieCardMouseOut={this.movieCardMouseOutHandler}
        isPlaying={
          this.state.selectedFilmId === i && this.state.isPlaying
        }
      />;

    }
  };
};


