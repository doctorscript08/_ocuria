import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'


const Menu = () => {

  return (

    <div>

       <header> 

            <nav className='container'>

                <div className='container_itens'>

                    <ul>
                        <li><NavLink to="/"> Itens de Menu </NavLink></li>
                        <li><NavLink to="/"> Prato do dia </NavLink></li>
                        <li><NavLink to="/"> Categorias de Menus  </NavLink></li>
                        <li><NavLink to="/"> Mais  </NavLink></li>
                    </ul>


                </div>
                

            </nav>

       </header>
        
      
    </div>
  )
}

export default Menu

