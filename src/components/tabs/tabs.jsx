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
    const {film} = this.props;
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
              <div className="movie-rating__score">{film.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">
                  {`ТУТ ДОЛЖНА БЫТЬ ФУНКЦИЯ`}
                </span>
                <span className="movie-rating__count">{film.votes}</span>
              </p>
            </div>
            <div className="movie-card__text">
              <p>{film.description}</p>
              <p className="movie-card__director"><strong>{film.director}</strong></p>
              <p className="movie-card__starring"><strong>{film.starring}</strong></p>
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
                    {film.director}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {film.starring}
                  </span>
                </p>
              </div>
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">
                    {film.runTime}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">
                    {film.genre}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">
                    {film.releaseYear}
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

                {/* {filmCard.reviews.map((review, index) => (
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
                ))} */}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    posterUrl: PropTypes.string,
    previewUrl: PropTypes.string,
    bigPosterUrl: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    votes: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.string,
    genre: PropTypes.string,
    releaseYear: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoUrl: PropTypes.string,
    trailerUrl: PropTypes.string
  }).isRequired,
};


export default Tabs;
