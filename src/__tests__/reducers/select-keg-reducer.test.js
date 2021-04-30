import selectedKegReducer from "./../../reducers/selected-keg-reducer";
import * as c from "./../../actions/ActionTypes";

describe('selectedTicketReducer', () => {

  let action;
  const currentState = {
    1: {
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    },
    2: {
      name: "Yummy",
    brand: "Boochy",
    price: 7.00,
    flavor: "Supa Tasty",
    quantity: 124,
    id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });
});