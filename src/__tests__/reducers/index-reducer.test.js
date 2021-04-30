import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      kegList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, { type: null }));
  });
});