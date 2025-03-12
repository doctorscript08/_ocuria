import { useState, useEffect } from "react"
import "./header.css"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const manipularScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", manipularScroll);

        return () => {
            window.removeEventListener("scroll", manipularScroll);
        };
    }, []);

    return (
        <>
            <header className="cabecalho w-full">
                <div className="sobrepor"></div>
                <section className="sup-bar">
                    <div className="logo rounded-xl p-1 z-20">
                        <h1><a href="/">Ocuria</a></h1>
                    </div>
                    <button className="show-menu btn-menu bg-transparent z-20" onClick={() => setIsOpen(!isOpen)}>
                        <span className="icone"><i className="fa-solid fa-bars-staggered"></i></span>
                    </button>
                    <nav className={`nav-bar w-full text-center p-2 list-none hidden z-50 ${isScrolled ? 'rolagem' : ''}`}>
                        <section className="nav-bar__conteiner">
                            <div className="scale"><a href="/" className="text-white font-extrabold uppercase">Home</a></div>
                            <div className="scale"><a href="/client-profile" className="text-white font-extrabold uppercase">Perfil</a></div>
                            <div className="scale"><a href="/login" className="text-white font-extrabold uppercase">Entrar</a></div>
                            <div className="scale dropdown">
                                <span className="text-white font-extrabold uppercase cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Cadastrar</span>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'block' : 'hidden'}`}>
                                    <a href="/register-clients" className="text-white font-extrabold uppercase block">Cliente</a>
                                    <a href="/register-restaurants" className="text-white font-extrabold uppercase block">Restaurante</a>
                                </div>
                            </div>
                            <div className="scale"><a href="/definicoes" className="text-white font-extrabold uppercase">Definições</a></div>
                        </section>
                    </nav>
                </section>

                <div className="search-bar bg-white rounded-3xl flex justify-between items-center hidden">
                    <input type="search" name="search" id="search" className="font-semibold tracking-wide" />
                    <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer text-white"></i></span>
                </div>

                <h1 className="uppercase text-white font-extrabold z-20">Tu és o que comes</h1>
            </header>
            <nav className={`nav-bar-mobile w-full text-center p-2 list-none z-20 ${isOpen ? "open" : ""}`}>
                <section className="nav-bar-mobile__conteiner">
                    <button className="close-menu btn-menu bg-transparent" onClick={() => setIsOpen(!isOpen)}>
                        <span className="icone"><i className="fa-solid fa-xmark"></i></span>
                    </button>
                    <div className="scale"><a href="/" className="text-white font-extrabold uppercase">Home</a></div>
                    <div className="scale"><a href="/client-profile" className="text-white font-extrabold uppercase">Perfil</a></div>
                    <div className="scale"><a href="/login" className="text-white font-extrabold uppercase">Entrar</a></div>
                    <div className="scale dropdown">
                        <span className="text-white font-extrabold uppercase cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Cadastrar</span>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'block' : 'hidden'}`}>
                            <a href="/register-clients" className="text-white font-extrabold uppercase block">Cliente</a>
                            <a href="/register-restaurants" className="text-white font-extrabold uppercase block">Restaurante</a>
                        </div>
                    </div>
                    <div className="scale"><a href="/definicoes" className="text-white font-extrabold uppercase">Definições</a></div>

                    <div className="search-bar-mobile bg-white rounded-3xl flex justify-between items-center">
                        <input type="search" name="search" id="search" className="w-4/5 font-semibold tracking-wide" />
                        <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer"></i></span>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Header