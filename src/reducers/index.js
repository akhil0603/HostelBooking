  
import { combineReducers } from 'redux';
const selectedUserReducer = (selectedUser = null, action) => {
  if (action.type === "USER_SELECTED") {
    return action.payload;
  }
  return selectedUser
}
const bookedReducer = (booked = null, action) => {
  if (action.type === "SET_BOOKED") {
    return action.payload;
  }
  return booked
}
export default combineReducers({
  selectedUser: selectedUserReducer,
  booked: bookedReducer,
})
