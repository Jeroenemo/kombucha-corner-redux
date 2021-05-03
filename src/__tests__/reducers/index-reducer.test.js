import rootReducer from './../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import kegListReducer from './../../reducers/keg-list-reducer';
import editFormReducer from './../../reducers/edit-form-reducer';
import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  
  const keg = {
    1: {name: "Yum",
    brand: "Booch",
    price: 5.00,
    flavor: "Tasty",
    quantity: 124,
    id: 1}
  };
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      kegList: {},
      formVisibleOnPage: false,
      edit: false,
      selectedKeg: null,
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that DELETE_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: c.DELETE_KEG,
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer',() => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_EDIT action works for editFormReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_EDIT
    }
    store.dispatch(action);
    expect(store.getState().edit).toEqual(editFormReducer(undefined, action));
  });
  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
    const action = {
      type: c.SELECT_KEG,
      keg: keg
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });
});