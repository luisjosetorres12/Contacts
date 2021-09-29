export const addContact = (contact) => {
  return(dispatch) => {
    console.log('Recibi el dispatch');
    console.log(contact)
    dispatch({
      type: "ADD",
      payload: contact
    })    
  }
}

export const deleteContact = (pos) => {
  return(dispatch) => {
    dispatch({
      type:"DESTROY",
      payload: {pos}
    })
  }
}

export const setContactToEdit = (contact, id) => {
  return(dispatch) => {
    dispatch({
      type: "ADD_CONTANT_TO_EDIT",
      payload: {contact, id}
    })  
  }
}

export const editContact = (contact, id)  => {
  return(dispatch) => {
    dispatch({
      type: "EDIT",
      payload: {contact, id}
    })  
  }
}