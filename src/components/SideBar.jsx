import React from 'react'


const SideBar = () => {

  return (

    <aside className="bg-teal-800 fixed text-justify text-white w-64 h-full px-4 py-2">

      <div className="my-2 mb-4">

        <h1 className='text-2xl text-white font-bold'> Menu Ocuria </h1>

      </div>

      <hr />

      <nav>

        <ul className="mt-3 text-white font-bold">

          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2 "><link href="#">  Home </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Restaurantes </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Login </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Registe-se </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Ajuda </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Sobre Nos </link></li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 text-lg py-2"><link href="#" className="px-3"> Meu Perfil </link></li>
        
        </ul>

      </nav>

    </aside>
   
  )
}

export default SideBar
