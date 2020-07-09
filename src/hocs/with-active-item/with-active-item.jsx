import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TIMEOUT = 1000;

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedFilmId: null,
        isPlaying: false
      };
      this.onMovieCardMouseOverHandler = this.onMovieCardMouseOverHandler.bind(this);
      this.onMovieCardMouseOutHandler = this.onMovieCardMouseOutHandler.bind(this);
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

    onMovieCardMouseOverHandler(selectedFilmId) {
      this.setState(
          () => ({
            selectedFilmId
          }),
          () => this.togglePlay(selectedFilmId)
      );
    }

    onMovieCardMouseOutHandler() {
      this.setState(() => ({
        selectedFilmId: null,
        isPlaying: false
      }));
    }

    render() {
      const {selectedFilmId, isPlaying} = this.state;
      return <Component
        {...this.props}
        selectedFilmId={selectedFilmId}
        isPlaying={isPlaying}
        onMovieCardMouseOver={this.onMovieCardMouseOverHandler}
        onMovieCardMouseOut={this.onMovieCardMouseOutHandler}
      />;

    }
  }
  WithActiveItem.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          posterSrc: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
          year: PropTypes.number.isRequired,
          ratingScore: PropTypes.string.isRequired,
          ratingLevel: PropTypes.string.isRequired,
          ratingCount: PropTypes.string.isRequired,
          descriptionPartOne: PropTypes.string.isRequired,
          descriptionPartTwo: PropTypes.string.isRequired,
          filmDirector: PropTypes.string.isRequired,
          filmStarring: PropTypes.string.isRequired,
        })
    ).isRequired,
    onFilmCardClick: PropTypes.func.isRequired,
    filmsCount: PropTypes.number.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
