import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Home = () => {
  const agenda = useSelector((state) => state.agenda);
  return (
    <div>
      <h1>Libreta de contactos</h1>
      <h3>Contactos registrados {agenda.contacts.length}</h3>
      <div className="Home">
        <div className="Home-Elements" style={{backgroundColor:"#FF5733"}}>
          <Link to="/contacts" style={{textDecoration:'none', color:'#FFFFFF'}}>
            <div className="Home-Elements__Text">
              Ver contactos
            </div>
          </Link>
        </div>
        <div className="Home-Elements" style={{backgroundColor:"#FF5733"}}>
          <Link to="/register" style={{textDecoration:'none', color:'#FFFFFF'}}>
            <div className="Home-Elements__Text">
              Registrar contacto
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
