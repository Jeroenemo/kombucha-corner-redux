import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

export default function KegList({
  name,
  brand, 
  price,
  flavor,
  quantity,
  id,
  kegList,
  onKegSelection
}){
  return (
    <>
      <hr />
      { kegList.map((keg) =>
        <Keg
          whenKegClicked = { onKegSelection }
          name = { name }
          brand = { brand }
          price = { price }
          flavor = { flavor }
          quantity = { quantity }
          id = { id }
          key = { id } />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};