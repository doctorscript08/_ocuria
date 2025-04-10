import React from 'react'
import './EditProfile.css'
import Input from "../../../components/Input/Input.jsx"

const EditProfile = () => {

    const editarPerfil = () => {

        const nome = document.getElementById('nome').value;

        const email = document.getElementById('email').value;

        fetch('/editar-perfil', {

            method: 'POST',

            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email })

        }).then(response => response.json())

          .then(data => alert(data.message));
    }

  return (

    <div>

        <div className="container">
            
            <h2>Editar Perfil</h2>
                
                <div className="form-group">

                    <Input type={"text"} name={"nome"} id={"nome"} placeholder={"Digite o seu Nome"} icone={"fa-solid fa-envelope"} />

                </div>

                <div className="form-group">

                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Digite o seu Email"} icone={"fa-solid fa-envelope"} />

                </div>

                <div className="form-group">

                        <button onClick={editarPerfil}>Salvar Alterações</button>
                        
                </div>

        </div>
      
    </div>
  )
}

export default EditProfile
