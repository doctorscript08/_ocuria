import React from 'react'
import './AlterPassword.css'

const AlterPassword = () => {

  const alterarSenha = () => {
    const newPassword = document.getElementById('new-password').value;
    fetch('/alterar-senha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    }).then(response => response.json())
      .then(data => alert(data.message));
}

  return (
    <div>

      <div className="container">
          
        <h2>Alterar Senha</h2>
        
        <div className="form-group">
          
          <label htmlfor="new-password">Nova Senha:</label>
          
          <input type="password" id="new-password" placeholder="Digite a nova senha" />
          
          <button onclick={alterarSenha}>Alterar Senha</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default AlterPassword
