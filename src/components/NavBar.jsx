import React from 'react'

const NavBar = () => {

  return (

    <nav className="bg-gray-800 px-4 flex justify-between ml-68" >
      
        <div className="flex items-center text-xl">

            <span className="text-white font-semibold"> Ocuria </span>

        </div>

        <div className="flex items-center gap-x-5">

            <div className="relative md:w66">
                
                <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">

                    <button className=" p-1 focus:outline-none text-white md:text-black "> Colocar icon de Search aqui </button>   
                    <input type="text" placeholder="Encontre o seu restaurante favorito aqui..."
                    className='w-full px-4 py-1 pl-12 rounded shadow outline-none' /> 

                </span>
            
            </div>

            <div className=' text-white '> Icone de notificacao aqui com 6px de altura e largura </div>

            <div className=' relative '>

                <button className=' text-white group-[]:'>

                    icone de perfil do usuario aqui com 6px de altura e largura.

                    <div className=' z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>

                        <ul className=' py-2 text-sm text-gray-950 '>
                            <li> <link  href="" /> Perfil </li>
                            <li> <link  href="" /> Definicoes </li>
                            <li> <link  href="" /> Sair </li>
                        </ul>

                    </div>

                </button>

            </div>

        </div>

    </nav>
  )
}

export default NavBar
