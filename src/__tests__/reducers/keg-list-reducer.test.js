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
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add a keg to the keg list', () => {
    const {name, brand, price, flavor, quantity, id} = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    }
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: "Yummy",
        brand: "Boochy",
        price: 7.00,
        flavor: "Supa Tasty",
        quantity: 124,
        id: 2
      }
    });
  });
});