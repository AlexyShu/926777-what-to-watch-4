import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";

const FilmPage = (props) => {
  const {filmCard, films, onPlayBtnClick} = props;
  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title"> {filmCard.name} </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{filmCard.genre}</span>
              <span className="movie-card__year">{filmCard.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                onClick={onPlayBtnClick}
                type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={filmCard.posterSrc} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <Tabs
              filmCard={filmCard}
            />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {films.filter((film) => film.genre === filmCard.genre)
          .map((film, i) => (
            <article key={film.name + i} className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src={film.posterSrc} alt={film.name} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="#">{film.name}</a>
              </h3>
            </article>)
          )}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  </React.Fragment>;
};

FilmPage.propTypes = {
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
  onPlayBtnClick: PropTypes.func,
};

export default FilmPage;
