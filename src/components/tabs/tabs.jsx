import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TabName} from "../../constants.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedTab: TabName.OVERVIEW};
    this.getActiveTab = this.getActiveTab.bind(this);
  }

  getActiveTab(tabName) {
    return this.state.selectedTab === tabName ? `movie-nav__item--active` : ``;
  }

  render() {
    const {filmCard} = this.props;
    const {selectedTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.getActiveTab(TabName.OVERVIEW)}`}>
              <a
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabName.OVERVIEW})}
              >
                Overview
              </a>
            </li>
            <li className={`movie-nav__item ${this.getActiveTab(TabName.DETAILS)}`}>
              <a
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabName.DETAILS})}
              >
                Details
              </a>
            </li>
            <li className={`movie-nav__item ${this.getActiveTab(TabName.REVIEWS)}`}>
              <a
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabName.REVIEWS})}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        {selectedTab === TabName.OVERVIEW && (
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{filmCard.ratingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{filmCard.ratingLevel}</span>
                <span className="movie-rating__count">{filmCard.ratingCount}</span>
              </p>
            </div>
            <div className="movie-card__text">
              <p>{filmCard.descriptionPartOne}</p>
              <p>{filmCard.descriptionPartTwo}</p>
              <p className="movie-card__director"><strong>{filmCard.filmDirector}</strong></p>
              <p className="movie-card__starring"><strong>{filmCard.filmStarring}</strong></p>
            </div>
          </>
        )}
        {selectedTab === TabName.DETAILS && (
          <>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">
                    {filmCard.filmDirector}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {filmCard.filmStarring}
                  </span>
                </p>
              </div>
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">
                    {filmCard.time}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">
                    {filmCard.genre}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">
                    {filmCard.year}
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
        {selectedTab === TabName.REVIEWS && (
          <>
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">

                {filmCard.reviews.map((review, index) => (
                  <div className="review" key={index + review.author}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.text}</p>
                      <footer className="review__details">
                        <cite className="review__author">{review.author}</cite>
                        <time className="review__date" dateTime="2019-12-15">
                          {review.date}
                        </time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
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
};


export default Tabs;
