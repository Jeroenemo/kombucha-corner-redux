import React, { Component } from "react";

export default class TicketControl extends Component {

  constuctor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      kegList: []
    };
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation = { this.handleAddingNewKegToList } />
    } else {
      currentlyVisibleState = <kegList
        kegList = { this.state.kegList }
        onKegSelection = { this.handleChangingSelectedKeg } />
    }
    return (
      <>
        { currentlyVisibleState }
        <button onClick = { this.handleClick }>{ buttonText }</button>
      </>
    );
  }
}