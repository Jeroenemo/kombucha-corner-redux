import kegListReducer from "./../../reducers/keg-list-reducer";
import * as c from "./../../actions/ActionTypes";

describe('kegListReducer', () => {

  let action;
    const kegData = {
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    };

    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(kegListReducer({}, {type: null})).toEqual({});
    });

})