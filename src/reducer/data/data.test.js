import {reducer, ActionType, Operation} from "../../reducer/data/data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state for films and active filter`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
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
