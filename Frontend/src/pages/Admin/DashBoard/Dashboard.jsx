import React, { useState, useEffect } from 'react'

const Dashboard = () => {

    const [restaurantes, setRestaurantes] = useState([]);

    const [clientes, setClientes] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/api/restaurantes')
      .then(res => res.json())
      .then(data => setRestaurantes(data))
      .catch(err => console.error(err));

    fetch('http://localhost:3000/api/clientes')
      .then(res => res.json())
      .then(data => setClientes(data))
      .catch(err => console.error(err));
  }, []);

  return (

    <div>

    <h2> Admin Dashboard </h2>

    <div className="row">

        <div className="col-md-4">

          <div className="card text-white bg-primary mb-3">

            <div className="card-header">Restaurantes</div>

            <div className="card-body">

              <h5 className="card-title">{restaurantes.length}</h5>

              <p className="card-text">Restaurantes cadastrados.</p>

            </div>
            
        </div>

    </div>

    <div className="col-md-4">

        <div className="card text-white bg-success mb-3">

            <div className="card-header">Clientes</div>

            <div className="card-body">

                <h5 className="card-title">{clientes.length}</h5>

                <p className="card-text">Clientes registrados.</p>

            </div>

        </div>

    </div>

        {/* Adicionar outros card aqui se necessario! */}
      </div>
      
    </div>
  )
}

export default Dashboard
