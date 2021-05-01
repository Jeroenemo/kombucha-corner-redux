import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, flavor, quantity, id } = keg
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    quantity: quantity,
    flavor: flavor,
    id: id
  }
};

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg
});

export const nullKeg = () => ({
  type: c.NULL_KEG
})