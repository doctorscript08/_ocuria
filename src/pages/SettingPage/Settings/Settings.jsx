import React from 'react'
import './Settings.css';

const Settings = () => {

  const terminarSessao = () => {

    fetch('/terminar-sessao', {

        method: 'POST'

    }).then(response => response.json())

      .then(data => {

          alert(data.message);

          window.location.href = '/login';

      });
}

  return (
    <div>

      <div className="container">

          <h2>Definições</h2>

          <ul className="list-group">

              <li className="list-group-item" >
                <Link to='/edit-profile'> Editar Perfil </Link>
              </li>

              <li className="list-group-item" >
              <Link to='/alter-password'> Alterar Senha </Link>
              </li>

              <li className="list-group-item" onClick={terminarSessao}>Terminar Sessão</li>

          </ul>
      </div>
      
    </div>
  )
}

export default Settings
