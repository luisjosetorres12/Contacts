export const initialState = {

}

const reducer = (state = {  contacts: [],
  contact: {}, id: NaN}, action) => {
  switch(action.type) {
    case "ADD":
      state.contacts.push(action.payload)
      return state;
    case "EDIT":
      state.contacts[action.payload.id] = action.payload.contact
      return state
    case "SHOW":
      return state.contacts[action.payload.pos]
    case "DESTROY":
      return {
        ...state,
        contacts: state.contacts.filter((element, index) => index !== action.payload.pos)
      }
    case "ADD_CONTANT_TO_EDIT":
      return {
        ...state,
        contact: action.payload.contact,
        id: action.payload.id
      }
    default:
      return state;
  }
}

export default reducer;
