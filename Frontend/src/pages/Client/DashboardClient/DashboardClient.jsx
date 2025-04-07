import React from 'react'
import '../../../components/Header/header.css';

const DashboardClient = () => {

  return (

    <div>

        <header className="cabecalho w-full">

        <div className="sobrepor"></div>

        <section className="sup-bar">

            <div className="logo rounded-xl p-1 z-20">

                {/*<img src="" alt="logo-ocuria"/>*/}

                <h1><NavLink to="/">Ocuria</NavLink></h1>

            </div>

            <button className="show-menu btn-menu bg-transparent z-20" onClick={() => setIsOpen(!isOpen)}>

                <span className="icone"><i className="fa-solid fa-bars-staggered"></i></span>

            </button>

            <nav className="nav-bar w-full text-center p-2 list-none hidden z-20">
                
                <section className="nav-bar__conteiner">

                    <div className="scale"><NavLink to="/" className="text-white font-extrabold uppercase">Home</NavLink></div>

                    <div className="scale"><NavLink to="/client-profile" className="text-white font-extrabold uppercase">Perfil</NavLink></div>

                    <div className="scale dropdown"><NavLink to="/restaurant-dashboard" className="text-white font-extrabold uppercase">Restaurantes</NavLink>
                    
                    </div>

                    <div className="scale"><NavLink to="/settings" className="text-white font-extrabold uppercase">Definições</NavLink></div>

                    <div className="scale"><NavLink to="/" className="text-white font-extrabold uppercase">Terminar Sessão</NavLink></div>

                </section>

            </nav>

        </section>

        <div className="search-bar bg-white rounded-3xl justify-between items-center hidden">

            <input type="search" name="search" id="search" className="font-semibold tracking-wide" />

            <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer text-white"></i></span>

        </div>

        <h1 className="uppercase text-white font-extrabold z-20"> Tu és o que comes </h1>

        </header>

      
    </div>
  )
}

export default DashboardClient
