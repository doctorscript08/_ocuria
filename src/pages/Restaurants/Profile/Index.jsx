import Input from "../../../components/Input/Input.jsx"
import TextArea from "../../../components/TextArea/TextArea.jsx"
import Submit from "../../../components/Submit/Submit.jsx"
import Footer from "../../../components/Footer/Footer.jsx"
import MenuCard from "../../../components/Swipers/MenuCards/MenuCard.jsx"
import Testemonials from "../../../components/Swipers/Testemonials/Testemonials.jsx"
import "./restaurantProfile.css"
import "../../../index.css"

const RestaurantProfile = () => {
    return (
        <>
            <main className="corpo">
                <section className="cover-photo">
                    <div className="sobrepor"></div>
                </section>
                <section className="identification">
                    <div className="profile-photo">
                        <img src="/src/assets/images/foto-perfil.jpg" alt="foto de perfil" />
                    </div>
                    <div className="details">
                        <h2 className="nome">Restaurante</h2>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quae.
                        </p>
                        <div className="location-avaliation">
                            <p className="localizacao">
                                Huíla Lubango
                            </p>
                            <span className="classificacao">
                                stars
                            </span>
                        </div>
                    </div>
                </section>
                <section className="menus">
                    <h2>Menus</h2>
                    <MenuCard foto1={"/src/assets/images/galeria-1.jpg"}/>
                </section>
                <section className="testemonials">
                    <h2>O que as pessoas dizem sobre nós?</h2>
                    <Testemonials foto1={"/src/assets/images/galeria-1.jpg"}/>
                </section>
                <section className="location">
                    <div className="maps">
                        conectar com api de geolocalização
                    </div>
                </section>
                <section className="social-media">
                    <div className="redes">
                        <span><a href=""><i className="fa-brands fa-whatsapp"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-instagram"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-tiktok"></i></a></span>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default RestaurantProfile