import React from "react";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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