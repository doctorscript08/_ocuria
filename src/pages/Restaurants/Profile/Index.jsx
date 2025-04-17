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
                <section className="cover_photo w_f">
                    <div className="sobrepor w_f transition"></div>
                </section>
                <section className="identification_restaurant w_f p_15 d_flex">
                    <div className="profile_photo_restaurant">
                        <img src="/src/assets/images/foto-perfil.jpg" alt="foto de perfil" />
                    </div>
                    <div className="details">
                        <h2 className="nome">Restaurante</h2>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quae.
                        </p>
                        <div className="location_avaliation d_flex">
                            <p className="localizacao">
                                Huíla Lubango
                            </p>
                            <span className="classificacao">
                                stars
                            </span>
                        </div>
                    </div>
                </section>
                <section className="menus w_f p_15 text_c">
                    <h2>Menus</h2>
                    <MenuCard foto1={"/src/assets/images/galeria-1.jpg"}/>
                </section>
                <section className="testemonials w_f p_15">
                    <h2 className="text_c">O que as pessoas dizem sobre nós?</h2>
                    <Testemonials foto1={"/src/assets/images/galeria-1.jpg"}/>
                </section>
                <section className="location w_f p_15">
                    <div className="maps">
                        conectar com api de geolocalização
                    </div>
                </section>
                <section className="contact w_f p_15">
                    <h2 className="text_c">Envie-nos um feedback</h2>
                    <form className="form w_f">
                        <Input type={"text"} name={"username"} id={"username"} placeholder={"Nome de usuário"} icone={"fa-regular fa-user"} />
                        
                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />

                        <TextArea name={'comentario'} id={'comentario'} placeholder={'Insira aqui o seu comentário'} className="w_f"/>

                        <Submit value={'Enviar'} name={'comentar'} id={'comentar'}/>
                    </form>
                </section>
                <section className="social-media w_f p_15">
                    <div className="redes d_flex">
                        <span><a href=""><i className="fa-brands fa-whatsapp transition"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-instagram transition"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-tiktok transition"></i></a></span>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default RestaurantProfile