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

  handleClick = () => {
    const {dispatch} = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.nullKeg();
      dispatch(action)
    } else if  (this.props.edit) {
      const action = a.toggleEdit();
      dispatch(action)
    } else {
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
    const {dispatch} = this.props;
    const action = a.selectKeg(selectedKeg)
    dispatch(action)
    const action2 = a.nullKeg();
    dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.nullKeg();
    dispatch(action2)
  }

  handleDecrementingKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    if (selectedKeg.quantity > 0) selectedKeg.quantity --;
    const {dispatch} = this.props;
    const action = a.selectKeg(selectedKeg);
    dispatch(action)
    const action2 = a.addKeg(selectedKeg)
    dispatch(action2)
  }

  handleEditingKeg = () => {
    const {dispatch} = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleEditingKegInList = (editKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(editKeg);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    const action3 = a.nullKeg();
    dispatch(action3)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.edit) {
        currentlyVisibleState = <EditKegForm
          keg={this.props.selectedKeg}
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
  formVisibleOnPage: PropTypes.bool,
  edit: PropTypes.bool
};

const mapStatetoProps = (state) => {
  return {
    kegList: state.kegList,
    formVisibleOnPage: state.formVisibleOnPage,
    edit: state.edit,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStatetoProps)(KegControl);