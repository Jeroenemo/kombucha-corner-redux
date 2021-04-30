import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editFormReducer from './edit-form-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  kegList: kegListReducer,
  edit: editFormReducer
})

export default rootReducer;