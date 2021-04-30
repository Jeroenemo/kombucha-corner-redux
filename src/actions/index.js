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

export const toggleForm =() => ({
  type: c.TOGGLE_FORM
});