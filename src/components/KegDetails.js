import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

export default function KegDetails({
  keg,
  onClickingDelete,
  onClickingEdit,
  onClickingDecrement
}){

  
  const color = keg.quantity > 62 ? "success" 
              : keg.quantity > 31 ? "warning"
              : "danger";

  return (
    <>
      <h1><u>Keg Details</u></h1>
      <h3>{keg.name} by {keg.brand}</h3>
      <h3>Flavor: {keg.flavor}</h3>
      <h3>${Number(keg.price).toFixed(2)} per pint</h3>
      <h3>Pints left in keg: {keg.quantity}</h3>
      <Button variant="success" onClick={() => onClickingDecrement(keg.id)}>Drink one</Button>{' '}
      <Button variant="warning" onClick={() => onClickingEdit(keg.id)}>Edit Keg</Button>{' '}
      <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Remove Keg</Button>{' '}
      <ProgressBar
        style={{marginTop: "25px"}} 
        striped variant={color} 
        now={keg.quantity * (100 / 124)} />
    </>
  );

}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};