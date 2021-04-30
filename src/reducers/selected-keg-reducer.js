import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case c.SELECT_KEG:
      let newState = state[id];
      return newState;
    default:
      return state;
  }
}