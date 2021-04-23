import React, { Component } from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
// import KegDetail from './KegDetail';

export default class TicketControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      kegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    console.log(this.state.kegList)
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
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