import React, { Component } from "react";
import {connect} from 'react-redux';
import { Button, Container, Jumbotron } from "react-bootstrap";
import EditKegForm from "./EditKegForm";
import KegList from "./KegList";
import KegOverview from "./KegOverview";
import NewKegForm from "./NewKegForm";
import PropTypes from "prop-types";
import * as a from './../actions';

export default class KegControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id]
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleDecrementingKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
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

  handleEditingKegInList = (editKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(editKeg);
    dispatch(action)
    this.setState({
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

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState = <KegList
        handleEditingKeg={this.handleEditingKeg}
        handleDecrementingKeg={this.handleDecrementingKeg}
        handleDeletingKeg={this.handleDeletingKeg}
        kegList={this.props.kegList}
        onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return (
      <>
        <Container>
          <KegOverview kegList={this.props.kegList} />
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

KegControl.propTypes = {
  kegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStatetoProps = (state) => {
  return {
    kegList: state.kegList,
  formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStatetoProps)(KegControl);