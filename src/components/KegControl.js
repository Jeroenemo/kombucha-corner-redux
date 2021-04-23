import React, { Component } from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

export default class TicketControl extends Component {

  constructor(props) {
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
      currentlyVisibleState = <KegList
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