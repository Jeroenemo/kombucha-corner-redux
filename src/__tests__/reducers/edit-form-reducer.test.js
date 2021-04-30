import editFormReducer from "../../reducers/edit-form-reducer";
import * as c from "./../../actions/ActionTypes";

describe('editFormReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editFormReducer(false, {type: null})).toEqual(false);
  });

  test('Should toggle edit state to true', () => {
    expect(editFormReducer(false, {type: c.TOGGLE_EDIT})).toEqual(true);
  });
});