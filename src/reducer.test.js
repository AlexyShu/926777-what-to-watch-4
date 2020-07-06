import {reducer, ActionType, ActionCreator} from "./reducer.js";
import films from "./mocks/films.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films,
    filmsCount: 8,
    activeFilter: `All genres`
  });
});

describe(`Reducer return current value`, () => {
  it(`Reducer should change current film list by genre`, () => {
    expect(reducer({
      films,
      activeFilter: `Fantastic`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Fantastic`,
    })).toEqual({
      films: films.filter((film) => film.genre === `Fantastic`),
      activeFilter: `Fantastic`
    });
    expect(reducer({
      films,
      activeFilter: `Biography`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Biography`,
    })).toEqual({
      films: films.filter((film) => film.genre === `Biography`),
      activeFilter: `Biography`
    });
    expect(reducer({
      films,
      activeFilter: `Drama`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    })).toEqual({
      films: films.filter((film) => film.genre === `Drama`),
      activeFilter: `Drama`
    });
    expect(reducer({
      films,
      activeFilter: `Comedy`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    })).toEqual({
      films: films.filter((film) => film.genre === `Comedy`),
      activeFilter: `Comedy`
    });
    expect(reducer({
      films,
      activeFilter: `Action`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Action`,
    })).toEqual({
      films: films.filter((film) => film.genre === `Action`),
      activeFilter: `Action`
    });
  });

  it(`Reducer should change films count`, () => {
    expect(reducer({
      filmsCount: 8
    }, {
      type: ActionType.SHOW_MORE_FILMS,
      payload: null,
    })).toEqual({
      filmsCount: 8 + 8
    });
    expect(reducer({
      filmsCount: 16
    }, {
      type: ActionType.SHOW_MORE_FILMS,
      payload: null,
    })).toEqual({
      filmsCount: 16 + 8
    });
    expect(reducer({
      filmsCount: 24
    }, {
      type: ActionType.SHOW_MORE_FILMS,
      payload: null,
    })).toEqual({
      filmsCount: 24 + 8
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`All genres`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `All genres`
    });
  });
  it(`Action creator for show more films returns correct action`, () => {
    expect(ActionCreator.showMoreFilms()).toEqual({
      type: ActionType.SHOW_MORE_FILMS,
      payload: null
    });
  });
});


