import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editFormReducer from './edit-form-reducer';
import {combineReducers} from 'redux';
import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  kegList: kegListReducer,
  edit: editFormReducer,
  selectedKeg: selectedKegReducer
})

export default rootReducer;