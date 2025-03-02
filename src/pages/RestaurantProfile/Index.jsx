import Input from "../../components/Input.jsx"
import Galeria from "../../components/Galeria.jsx"
import TextArea from "../../components/TextArea.jsx"
import Submit from "../../components/Submit.jsx"
import "./restaurantProfile.css"

function RestaurantProfile() {
    return (
        <>
            <header className="cabecalho-restaurante">
                <div className="sobreposicao"></div>
                <div className="foto-perfil">
                    <img src="src/assets/images/foto-perfil.jpg" />
                </div>
            </header>
            <main className="corpo">
                <section className="content">
                    <h1 className="nome-restaurante">Nome</h1>
                    <p className="bio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus laborum, voluptatem perspiciatis cupiditate ipsam totam repellat inventore assumenda modi dignissimos beatae! Atque a repellendus laudantium neque eaque? Dolorem, odio!
                    </p>

                    <Galeria/>

                    <div className="contactos">
                        <h2>Contactos</h2>
                        <form className="form">
                            <fieldset>
                                <legend>Dê-nos um feedback</legend>
                                <Input type={"text"} name={"nome"} id={"nome"} placeholder={"Nome completo"} icone={"fa-solid fa-user"} />
                                <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />
                                <TextArea nome={"mensagem"} id={"mensagem"} rows={"5"} columns={"37"} placeholder={"Escreva aqui a sua mensagem"}/>
                                <Submit value={"Enviar"} name={"sendMsg"} id={"sendMsg"}/>
                            </fieldset>
                        </form>

                        <div className="redes-sociais">
                            <ul>
                                <li className="whatsapp"><a href="#"><i className="fa-brands fa-square-whatsapp"></i></a></li>
                                <li className="instagram"><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
                                <li className="tiktok"><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                                <li className="linkedin"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li className="youtube"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                <li className="facebook"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
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