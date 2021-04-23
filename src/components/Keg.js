import React from "react";
import PropTypes from "prop-types";

export default function Keg({
  name,
  brand,
  price,
  flavor,
  quantity,
  id,
  whenKegClicked
}){
  return (
    <>
      <div onClick = { () => whenKegClicked(id) }>
        <h3>{ name }</h3>
        <ul>
          <li>{ brand }</li>
          <li>{ price }</li>
          <li>{ flavor }</li>
          <li>{ quantity }</li>
        </ul>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};