import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer'

const reducers = combineReducers({
  agenda: contactsReducer
})

export default reducers;
