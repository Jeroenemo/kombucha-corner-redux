import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList({
  name,
  brand, 
  price,
  flavor,
  quantity
}) {
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
          quantity = { quantity } />
      )}
    </>
  );
}

KegList.PropTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};