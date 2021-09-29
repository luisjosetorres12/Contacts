import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useHistory } from "react-router-dom";

const ListContacts = () => {
  const agenda = useSelector((state) => state.agenda);
  console.log('Estado Inicial',agenda)
  const dispatch = useDispatch();
  const { deleteContact, setContactToEdit } = bindActionCreators(actionCreators, dispatch);

  const handleClickToEdit = (contact, index) => {
    setContactToEdit(contact, index)
  }
  const contactsList = () => {
    return agenda.contacts.map((contact, index) => {
      return (
        <tr key={index}>
          <td>{contact.name}</td>
          <td>{contact.number}</td>
          <td>
            <button 
              className="List-Button__Delete"
              onClick={() => deleteContact(index)}  
            >
              Eliminar
            </button>
            <Link
              to="/register"
              className="List-Button__Edit"
              style={{textDecoration:'none'}}
              onClick={() => handleClickToEdit(contact, index)}  
            >
              Editar
            </Link>
            </td>
        </tr>
      )
    })
  }
  return(
    <div>
      <h1>Lista de contactos</h1>
      <table className="List-Table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Numero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactsList()}
        </tbody>
      </table>
      <Link to="/">Volver atras</Link>
    </div>
  )
}

export default ListContacts;