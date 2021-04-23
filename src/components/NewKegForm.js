import React from "react";
import { v4 } from 'uuid';
import FormTemplate from "./FormTemplate";
import PropTypes from "prop-types";

export default function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ 
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      quantity: 124,
      id: v4()
    });
  }
  return (
    <>
      <FormTemplate
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};