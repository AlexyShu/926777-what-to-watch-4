import {reducer, ActionType, ActionCreator} from "./reducer.js";
import films from "./mocks/films.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films
  });
});

it(`Reducer should change current film list by genre`, () => {
  expect(reducer({
    films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Fantastic`,
  })).toEqual({
    films: films.filter((film) => film.genre === `Fantastic`)
  });

  expect(reducer({
    films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Biography`,
  })).toEqual({
    films: films.filter((film) => film.genre === `Biography`)
  });

  expect(reducer({
    films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Drama`,
  })).toEqual({
    films: films.filter((film) => film.genre === `Drama`)
  });

  expect(reducer({
    films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Comedy`,
  })).toEqual({
    films: films.filter((film) => film.genre === `Comedy`)
  });

  expect(reducer({
    films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Action`,
  })).toEqual({
    films: films.filter((film) => film.genre === `Action`)
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.changeGenre(`All genres`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `All genres`
    });
  });
});


