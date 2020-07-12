import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// const TIMEOUT = 1000;

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };
      this.setActiveItemHandler = this.setActiveItemHandler.bind(this);
    }

    setActiveItemHandler(item) {
      this.setState(() => ({
        activeItem: item
      }));
    }


    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        handleChange={this.setActiveItemHandler}
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
    onFilmCardClick: PropTypes.func,
    filmsCount: PropTypes.number,
  };

  return WithActiveItem;
};

export default withActiveItem;

