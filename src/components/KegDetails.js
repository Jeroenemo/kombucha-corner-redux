import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function KegDetails({
  keg,
  onClickingDelete,
  onClickingEdit,
  onClickingDecrement
}){
  return (
    <>
      <h1>Keg Details</h1>
      <h3>{keg.name} by {keg.brand}</h3>
      <h3>${Number(keg.price).toFixed(2)} per pint</h3>
      <h3>Pints left in keg: {keg.quantity}</h3>
      <Button variant="success" onClick={() => onClickingDecrement(keg.id)}>Drink one</Button>{' '}
      <Button variant="warning" onClick={() => onClickingEdit(keg.id)}>Edit Keg</Button>{' '}
      <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Remove Keg</Button>{' '}
    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};