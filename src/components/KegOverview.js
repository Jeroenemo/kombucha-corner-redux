import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function KegOverview({
  kegList
}) {
    
    const activeKegs = kegList.reduce((counter, keg) => {
      if (keg.quantity > 0) counter ++
      return counter;
    }, 0);
    
    const overHalfKegs = kegList.reduce((counter, keg) => {
      if (keg.quantity >= 62) counter ++
      return counter;
    }, 0);

    const underHalfKegs = kegList.reduce((counter, keg) => {
      if (keg.quantity < 62 && keg.quantity) counter ++
      return counter;
    }, 0);

    const emptyKegs = kegList.reduce((counter, keg) => {
      if (keg.quantity === 0) counter ++
      return counter;
    }, 0);


  return (
    <>
      <Row style={{textAlign: "center"}}>
        <Col>
          <Card bg="dark" text="white" >
            <Card.Header>
              Active Kegs
            </Card.Header>
            <Card.Body>
              <Card.Text style={{fontSize: "50px"}}>
                {activeKegs}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="white" >
            <Card.Header>
              Kegs over 50%
            </Card.Header>
            <Card.Body>
              <Card.Text style={{fontSize: "50px"}}>
                {overHalfKegs}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="white" >
            <Card.Header>
              Kegs under 50%
            </Card.Header>
            <Card.Body>
              <Card.Text style={{fontSize: "50px"}}>
                {underHalfKegs}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="white" >
            <Card.Header>
              Empty Kegs
            </Card.Header>
            <Card.Body>
              <Card.Text style={{fontSize: "50px"}}>
                {emptyKegs}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </>
  );
}

KegOverview.propTypes = {
  kegList: PropTypes.array,
};