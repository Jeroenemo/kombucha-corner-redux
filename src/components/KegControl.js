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

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.ticketList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation = { this.handleAddingNewKegToList } />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList
        kegList = { this.state.kegList }
        onKegSelection = { this.handleChangingSelectedKeg } />
      buttonText = "Add Keg";
    }
    return (
      <>
        { currentlyVisibleState }
        <button onClick = { this.handleClick }>{ buttonText }</button>
      </>
    );
  }
}