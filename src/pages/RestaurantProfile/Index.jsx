import Input from "../../components/Input.jsx"
import Galeria from "../../components/Galeria.jsx"
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

                    <h2>Contactos</h2>
                    <form className="form">
                        <Input type={"text"} name={"nome"} id={"nome"} placeholder={"Nome completo"} icone={"fa-solid fa-user"} />

                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />
                    </form>
                </section>
            </main>
        </>
    )
}

export default RestaurantProfile