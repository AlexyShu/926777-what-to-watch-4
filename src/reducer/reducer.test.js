import {reducer, ActionType, ActionCreator, Operation} from "./reducer.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../api.js";
import {mockFilms} from "../mocks-for-tests.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    filmsCount: 8,
    activeFilter: `All genres`
  });
});

describe(`Reducer return current value`, () => {
  it(`Reducer should change current film list by genre`, () => {
    expect(reducer({
      ilms: mockFilms,
      activeFilter: `Drama`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    })).toEqual({
      films: mockFilms.filter((film) => film.genre === `Drama`),
      activeFilter: `Drama`
    });
    expect(reducer({
      ilms: mockFilms,
      activeFilter: `Comedy`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    })).toEqual({
      films: mockFilms.filter((film) => film.genre === `Comedy`),
      activeFilter: `Comedy`
    });
    expect(reducer({
      films: mockFilms,
      activeFilter: `Action`
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Action`,
    })).toEqual({
      films: mockFilms.filter((film) => film.genre === `Action`),
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

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsData = Operation.getFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, []);

    return filmsData(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FILMS,
          payload: [],
        });
      });
  });
});


