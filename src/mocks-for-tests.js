export const mockFilmCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  year: 2014,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  descriptionPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes).
  Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  descriptionPartTwo: `Gustave prides himself on providing first-class service to the hotel's guests,
  including satisfying the sexual needs of the many elderly women who stay there.
  When one of Gustave's lovers dies mysteriously,
  Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  filmDirector: `Director: Wes Andreson`,
  filmStarring: `Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  time: `1h 39m`,
  reviews: [
    {
      rating: 2,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    },
    {
      rating: 3,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    },
    {
      rating: 9,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    }
  ]
};

export const mockFilms = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
    previewUrl: `img/the-grand-budapest-hotel.jpg`,
    bigPosterUrl: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoUrl: `https://some-link`,
    trailerUrl: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: `99`,
    genre: `Comedy`,
    releaseYear: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: `The Grand Budapest Hotel`,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
    previewUrl: `img/the-grand-budapest-hotel.jpg`,
    bigPosterUrl: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoUrl: `https://some-link`,
    trailerUrl: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: `99`,
    genre: `Drama`,
    releaseYear: 2014,
    isFavorite: false
  },
  {
    id: 3,
    name: `The Grand Budapest Hotel`,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
    previewUrl: `img/the-grand-budapest-hotel.jpg`,
    bigPosterUrl: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoUrl: `https://some-link`,
    trailerUrl: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: `99`,
    genre: `Action`,
    releaseYear: 2014,
    isFavorite: false
  }
];

export const mokcFunction = () => {};

export const MOCK_FILMS_COUNT = 8;

export const MOCK_ACTIVE_FILTER = `All genres`;

export const mockBool = false;
