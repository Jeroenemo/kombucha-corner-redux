import React, { Component } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import EditKegForm from "./EditKegForm";
import KegList from "./KegList";
import KegOverview from "./KegOverview";
import NewKegForm from "./NewKegForm";

export default class KegControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
      kegList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const newKegList = this.state.kegList.filter(keg => keg.id !== id);
    this.setState({
      kegList: newKegList,
      selectedKeg: null
    });
  }

  handleDecrementingKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.quantity > 0) selectedKeg.quantity --;
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleEditingKeg = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.kegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      kegList: editedKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
        currentlyVisibleState = <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
        buttonText = "Return to Keg List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState = <KegList
        handleEditingKeg={this.handleEditingKeg}
        handleDecrementingKeg={this.handleDecrementingKeg}
        handleDeletingKeg={this.handleDeletingKeg}
        kegList={this.state.kegList}
        onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return (
      <>
        <Container>
          <KegOverview kegList={this.state.kegList} />
          <Jumbotron>
            { currentlyVisibleState }
            <br />
            <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
          </Jumbotron>
        </Container>
      </>
    );
  }
}