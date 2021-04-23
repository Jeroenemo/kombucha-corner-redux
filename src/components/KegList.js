import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

export default function KegList(props){
  return (
    <>
      <hr />
      { props.kegList.map((keg) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          name = { keg.name }
          brand = { keg.brand }
          price = { keg.price }
          flavor = { keg.flavor }
          quantity = { keg.quantity }
          id = { keg.id }
          key = { keg.id } />
          )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};