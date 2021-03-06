import * as a from '../../actions';
import * as c from './../../actions/ActionTypes';

describe('kombucha corner actions', () => {
  const keg = {
    name: "Yum",
    brand: "Booch",
    price: 5.00,
    flavor: "Tasty",
    quantity: 124,
    id: 1
  };
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
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('toggleEdit should create a TOGGLE_EDIT action', () => {
    expect(a.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT
    });
  });

  it('selectKeg should create a SELECT_KEG action', () => {
    expect(a.selectKeg(keg)).toEqual({
      type: c.SELECT_KEG,
      keg: keg
    });
  });
  it('nullKeg should create a NULL_KEG action', () => {
    expect(a.nullKeg()).toEqual({
      type: c.NULL_KEG
    });
  });
});