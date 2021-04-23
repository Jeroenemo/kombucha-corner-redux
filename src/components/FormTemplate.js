import React from "react";
import PropTypes from "prop-types";

export default function FormTemplate(props) {
  return (
    <>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' 
          required />
        <input
          type='text'
          name='brand'
          placeholder='Brand' 
          required />
        <input
          type='number'
          name='price'
          placeholder='Price' 
          step="0.01"
          required />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' 
          required />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

FormTemplate.propTypes = {
  formSumbissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};