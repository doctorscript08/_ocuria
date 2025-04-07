import React, { useState } from "react"
import "./header.css"
import { NavLink } from "react-router-dom";


const  Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {

        const term = event.target.value;

        setSearchTerm(term);

        // Mock data for demonstration purposes
        const data = [
            { type: 'restaurant', name: 'Restaurant A' },
            { type: 'menu', name: 'Menu B' },
            { type: 'dish', name: 'Dish of the Day C' },
            { type: 'menuItem', name: 'Menu Item D' },
        ];

        const results = data.filter(item => 

            item.name.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    

    return (
        <>
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

                            {/**
                             * <div className="scale"><NavLink to="/client-profile" className="text-white font-extrabold uppercase">Perfil</NavLink></div>
                             */}

                            <div className="scale dropdown"><NavLink to="/login" className="text-white font-extrabold uppercase">Entrar</NavLink>
                            
                            <div className="dropdown-content">

                                <NavLink to="/Login" className="text-white font-extrabold uppercase">Como Restaurante</NavLink>

                                <NavLink to="Login" className="text-white font-extrabold uppercase">Como Cliente</NavLink>

                            </div>
                            
                            </div>

                            <div className="scale dropdown">

                                <NavLink to="/" className="text-white font-extrabold uppercase">Cadastrar</NavLink>

                                <div className="dropdown-content">

                                    <NavLink to="/register-restaurants" className="text-white font-extrabold uppercase">Como Restaurante</NavLink>

                                    <NavLink to="/register-clients" className="text-white font-extrabold uppercase">Como Cliente</NavLink>

                                </div>

                            </div>

                           { /** <div className="scale"><NavLink to="/settings" className="text-white font-extrabold uppercase">Definições</NavLink></div>

<div className="scale"><NavLink to="/" className="text-white font-extrabold uppercase">Terminar Sessão</NavLink></div>
*/}

                            
                        </section>

                    </nav>

                </section>

                <div className="search-bar bg-white rounded-3xl justify-between items-center hidden">

                    <input type="search" name="search" id="search" className="font-semibold tracking-wide" />

                    <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer text-white"></i></span>

                </div>

                <h1 className="uppercase text-white font-extrabold z-20"> Tu és o que comes </h1>

            </header>

            <nav className={`nav-bar-mobile w-full text-center p-2 list-none z-20 ${isOpen ? "open" : ""}`}>
               
                <section className="nav-bar-mobile__conteiner">
                    
                    <button className="close-menu btn-menu bg-transparent" onClick={() => setIsOpen(!isOpen)}>
                        
                        <span className="icone"><i className="fa-solid fa-xmark"></i></span>
                    
                    </button>

                    <div className="scale"><NavLink to="/" className="text-white font-extrabold uppercase">Home</NavLink></div>

                    <div className="scale"><NavLink to="/client-profile" className="text-white font-extrabold uppercase">Perfil</NavLink></div>

                    <div className="scale"><NavLink to="/login" className="text-white font-extrabold uppercase">Entrar</NavLink></div>

                    <div className="scale"><NavLink to="/register-clients" className="text-white font-extrabold uppercase">Cadastrar</NavLink></div>

                    <div className="scale"><NavLink to="/definicoes" className="text-white font-extrabold uppercase">Definições</NavLink></div>

                    <div className="scale"><NavLink to="/" className="text-white font-extrabold uppercase">Terminar Sessão</NavLink></div>

                    <div className="search-bar-mobile bg-white rounded-3xl flex justify-between items-center">
                        
                        <input type="search" name="search" id="search" className="w-4/5 font-semibold tracking-wide"  value={searchTerm} onChange={handleSearch}/>

                        <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer"></i></span>

                    </div>

                    <div className="search-results">

                        {searchResults.map((result, index) => (

                            <div key={result.name + index} className="search-result-item">

                                {result.type}: {result.name}

                            </div>
                        ))}

                    </div>

                </section>

            </nav>
        </>
    )
}

export default Header