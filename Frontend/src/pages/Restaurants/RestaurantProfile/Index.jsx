import React from 'react'
import { NavLink } from "react-router-dom"
import Input from "../../../components/Input/Input.jsx"
import TextArea from "../../../components/TextArea/TextArea.jsx"
import Submit from "../../../components/Submit/Submit.jsx"
import "./restaurantProfile.css"

const back = () => {
    window.history.go(-1)
}

const RestaurantProfile = () => {

    return (
        <>
            <div className="back-bar">

                <span className="cursor-pointer" onClick={back}>

                    <i className="fa-solid fa-arrow-left"></i>

                </span>

            </div>

            <header className="cabecalho-restaurante">

                <div className="sobreposicao"></div>

                <div className="foto-perfil-restaurante">

                    <img src="src/assets/images/foto-perfil.jpg" alt="Imagem do restaurante" />

                </div>

                <span className="definicoes-restaurante">

                    <Link to="/settings">

                    <i className="fa-solid fa-gear"></i>

                    </Link>

                </span>

            </header>

            <main className="corpo">

                <section className="content-restaurante">

                    <h1 className="nome-restaurante">Nome</h1>

                    <p className="bio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus laborum, voluptatem perspiciatis cupiditate ipsam totam repellat inventore assumenda modi dignissimos beatae! Atque a repellendus laudantium neque eaque? Dolorem, odio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores unde magnam eveniet molestiae dolorem nesciunt repellendus assumenda, animi omnis. Non natus maiores quaerat velit minus maxime porro dolor ipsa iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quos impedit aspernatur pariatur. Sapiente sed veniam, voluptas rem voluptates, eos a voluptate aspernatur ab alias, consequatur quae dolor delectus dicta?
                    </p>

                    <section className="galeria flex justify-center flex-wrap">

                        <div className="foto-1"><span className="ofuscar"></span></div>
                        <div className="foto-2"><span className="ofuscar"></span></div>
                        <div className="foto-3"><span className="ofuscar"></span></div>
                        <div className="foto-4"><span className="ofuscar"></span></div>
                        <div className="foto-5"><span className="ofuscar"></span></div>
                        <div className="foto-6"><span className="ofuscar"></span></div>
                        <div className="foto-7"><span className="ofuscar"></span></div>
                        <div className="foto-8"><span className="ofuscar"></span></div>
                        <div className="foto-9"><span className="ofuscar"></span></div>

                    </section>

                    <div className="menus">

                        <h2>Menus</h2>

                        <section className="carrossel-menus">Aqui vão carrosseis com menus</section>

                    </div>

                    <div className="contactos">

                        <h2>Contactos</h2>

                        <form className="form">

                            <fieldset>

                                <legend>Dê-nos um feedback</legend>

                                <Input type={"text"} name={"nome"} id={"nome"} placeholder={"Nome completo"} icone={"fa-solid fa-user"} />

                                <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />

                                <TextArea nome={"mensagem"} id={"mensagem"} rows={"5"} columns={"37"} placeholder={"Escreva aqui a sua mensagem"} />

                                <Submit value={"Enviar"} name={"sendMsg"} id={"sendMsg"} />

                            </fieldset>

                        </form>

                        <div className="redes-sociais">

                            <ul>
                                <li className="whatsapp"><NavLink to="/"><i className="fa-brands fa-square-whatsapp"></i></NavLink></li>

                                <li className="instagram"><NavLink to="/"><i className="fa-brands fa-square-instagram"></i></NavLink></li>

                                <li className="tiktok"><NavLink to="/"><i className="fa-brands fa-tiktok"></i></NavLink></li>

                                <li className="linkedin"><NavLink to="/"><i className="fa-brands fa-linkedin"></i></NavLink></li>

                                <li className="youtube"><NavLink to="/"><i className="fa-brands fa-youtube"></i></NavLink></li>

                                <li className="facebook"><NavLink to="/"><i className="fa-brands fa-facebook"></i></NavLink></li>

                            </ul>

                        </div>

                    </div>

                    <div className="localizacao">

                        <h2>Localização</h2>

                        <section className="map">Conectar com API de Geolocalização</section>
                        
                    </div>

                </section>
            </main>
        </>
    )
}

export default RestaurantProfile