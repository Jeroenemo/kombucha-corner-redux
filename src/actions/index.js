import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, flavor, id } = keg
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    id: id
  }
}