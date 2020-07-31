import React from "react";
import renderer from "react-test-renderer";
import FullScreenPlayer from "./full-screen-player.jsx";
import {mockFilms, mokcFunction, mockBool, mockFilm, MOCK_FILMS_COUNT, mockString} from "../../mocks-for-tests.js";
import {MemoryRouter} from "react-router-dom";
import Namespace from "../../reducer/namespace.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const match = {
  params: {
    id: 1,
  }
};

describe(`Render correct FullScreenPlayer`, () => {
  it(`Render FullScreenPlayer`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
        promoFilm: mockFilm
      },
      [Namespace.STATE]: {
        filmsCount: MOCK_FILMS_COUNT
      },
      [Namespace.USER]: {
        authorizationStatus: mockString
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <FullScreenPlayer
              match = {match}
              films = {mockFilms}
              videoRef = {mokcFunction}
              isPlaying = {mockBool}
              getToggleProgress = {mokcFunction}
              getTimeDuration = {mokcFunction}
              onLoadedMetadata = {mokcFunction}
              onTimeUpdate = {mokcFunction}
              onFullscreenButtonClick = {mokcFunction}
              onPlayButtonClick = {mokcFunction}
              onExitButtonClick = {mokcFunction}
              history = {mokcFunction}
            />
          </MemoryRouter>
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
