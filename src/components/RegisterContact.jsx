import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './../state/index';
import { Link } from 'react-router-dom'

const RegisterContact = () => {

  const agenda = useSelector((state) => state.agenda);
  const [contact, setContact] = useState( !isNaN(agenda.id) ? agenda.contact : {name: '', number: ''})
  const dispatch = useDispatch();
  const { addContact, editContact, setContactToEdit } = bindActionCreators(actionCreators, dispatch);
  
  const handleClick = (e) => {
    e.preventDefault();

    if (!isNaN(agenda.id)) {
      editContact(contact, agenda.id)
      setContactToEdit({}, NaN)
    }else {
      addContact(contact)
    }
    setContact({
      name: '',
      number: ''
    })
  }

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name] : e.target.value 
    })
  }

  console.log('Estado Inicial',agenda)
  return(
    <div>
      <h1>Registrar Contacto</h1>
      <form action="" className="Register-Form">
        <input 
          type="text" 
          name="name" 
          id="" 
          placeholder="Nombre de contacto" 
          value={contact.name}
          onChange={handleChange}  />
        <input 
          type="text"
          name="number"
          id="" 
          placeholder="Telefono" 
          value={contact.number}
          onChange={handleChange}/>
        <button 
          className="Register-Form__btn"
          onClick={handleClick}
        >
          Guardar Contacto
        </button>
        <Link to="/">Volver atras</Link>
      </form>
    </div>
  )
}

export default RegisterContact;
