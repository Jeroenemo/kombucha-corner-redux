import * as a from '../../actions';
import * as c from './../../actions/ActionTypes';

describe('kombucha corner actions', () => {

  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: "Yum",
      brand: "Booch",
      price: 5.00,
      flavor: "Tasty",
      quantity: 124,
      id: 1
    })
  })
})