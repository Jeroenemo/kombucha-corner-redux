import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Keg from "./Keg";
import KegDetails from "./KegDetails"
import PropTypes from "prop-types";

export default function KegList({
  kegList,
  onKegSelection,
  handleDecrementingKeg,
  handleDeletingKeg,
  handleEditingKeg
}){

  return (
    <>
      {kegList.map((keg) =>
        <Accordion key = {keg.id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="text" eventKey="0">
                <Keg
                  whenKegClicked={onKegSelection}
                  name={keg.name}
                  brand={keg.brand}
                  price={keg.price}
                  flavor={keg.flavor}
                  quantity={keg.quantity}
                  id={keg.id} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <KegDetails
                  keg={keg}
                  onClickingDelete={handleDeletingKeg}
                  onClickingEdit={handleEditingKeg}
                  onClickingDecrement={handleDecrementingKeg} />  
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  handleDeletingKeg: PropTypes.func,
  handleEditingKeg: PropTypes.func,
  handleDecrementingKeg: PropTypes.func
};