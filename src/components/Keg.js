import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

export default function Keg({
  name,
  quantity,
  id,
  whenKegClicked
}){
  
  return (
    <>
      <div style={{display: "flex"}}onClick = { () => whenKegClicked(id) }>
        <h3>{name} -- </h3>
        {quantity > 0 ? <h3>Active</h3> : <h3>Empty</h3>}
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};