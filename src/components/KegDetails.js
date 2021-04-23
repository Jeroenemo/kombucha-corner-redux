import React from "react";
import PropTypes from "prop-types";

export default function KegDetails({
  keg,
  onClickingDelete,
  onClickingEdit
}){
  return (
    <>
      <h1>Keg Details</h1>
      <h3>{keg.name} by {keg.brand}</h3>
      <h3>${keg.price} per pint</h3>
      <h3>Pints left in keg: {keg.quantity}</h3>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick={() => onClickingEdit(keg.id)}>Edit Keg</button>
    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};