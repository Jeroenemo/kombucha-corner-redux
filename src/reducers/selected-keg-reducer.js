import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const {keg} = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return Object.assign(keg)
    case c.NULL_KEG:
      return null
    default:
      return state;
  }
}