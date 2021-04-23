import React from "react";
import PropTypes from "prop-types";

export default function FormTemplate({
  formSumbissionHandler,
  buttonText
}){
  return (
    <>
      <form onSubmit = { formSumbissionHandler }>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Name' />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Brand' />
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price' />
        <input
          type = 'text'
          name = 'flavor'
          placeholder = 'Flavor' />
        <button type = 'submit'>{ buttonText }</button>
      </form>
    </>
  );
}

FormTemplate.propTypes = {
  formSumbissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};