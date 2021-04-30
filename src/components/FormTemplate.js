import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function FormTemplate({
  formSubmissionHandler,
  buttonText
}) {
  return (
    <>
      <Form onSubmit = {formSubmissionHandler}>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Name" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="brand">
          <Form.Label column sm={2}>
            Brand
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Brand" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="price">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" placeholder="Price" step="0.01" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="flavor">
          <Form.Label column sm={2}>
            Flavor
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Flavor" required />
          </Col>
        </Form.Group>
        <Button type='submit'>{buttonText}</Button>
      </Form>
    </>
  );
}

FormTemplate.propTypes = {
  formSumbissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};