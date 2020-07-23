import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.submitFormRef = createRef();
    this.commentRef = createRef();
    this.sendCommentButtonRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFormDisability = this.toggleFormDisability.bind(this);

    this.state = {
      commentAdded: false,
      isFormInvalid: true
    };
  }

  toggleFormDisability() {
    this.commentRef.current.disabled = !this.commentRef.current.disabled;
    this.sendCommentButtonRef.current.disabled = !this.sendCommentButtonRef
      .current.disabled;
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();
    this.toggleFormDisability();

    onSubmit(
        {
          rating: this.submitFormRef.current.rating.value,
          comment: this.commentRef.current.value
        },
        () => {
          this.toggleFormDisability();
          this.setState({commentAdded: true});
        }
    );
  }

  handleChange(evt) {
    this.setState({
      isFormInvalid:
        evt.target.value.length < MIN_REVIEW_LENGTH ||
        evt.target.value.length > MAX_REVIEW_LENGTH
    });
  }

  render() {
    const {filmCard} = this.props;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">
                    {filmCard.name}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={filmCard.posterSrc}
              alt={filmCard.name}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={this.handleSubmit}
            ref={this.submitFormRef}
          >
            <div className="rating">
              <div className="rating__stars">
                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  name="rating"
                  value="1"
                />
                <label className="rating__label" htmlFor="star-1">
                    Rating 1
                </label>

                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  name="rating"
                  value="2"
                />
                <label className="rating__label" htmlFor="star-2">
                    Rating 2
                </label>

                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  name="rating"
                  value="3"
                  defaultChecked
                />
                <label className="rating__label" htmlFor="star-3">
                    Rating 3
                </label>

                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  name="rating"
                  value="4"
                />
                <label className="rating__label" htmlFor="star-4">
                    Rating 4
                </label>

                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  name="rating"
                  value="5"
                />
                <label className="rating__label" htmlFor="star-5">
                    Rating 5
                </label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                ref={this.commentRef}
                minLength={MIN_REVIEW_LENGTH}
                maxLength={MAX_REVIEW_LENGTH}
                onChange={this.handleChange}
              />
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  ref={this.sendCommentButtonRef}
                  disabled={this.state.isFormInvalid}
                >
                    Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(Operation.addComment(commentData));
  }
});

AddReview.propTypes = {
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
  onSubmit: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(AddReview);