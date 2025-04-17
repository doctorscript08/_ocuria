import Input from "../../../components/Input/Input.jsx"
import "./resgisterRestaurants.css"
import "../../../index.css"


function ResgisterRestaurants() {
    return (
        <>
            <main className="body_form">
                <section className="conteiner_form bg-white text-center p-4">
                    <h1 className="text-black font-extrabold text-3xl uppercase">Cadastrar Restaurante</h1>
                    <p className="font-semibold">Já tem um? <span><a href="/login">Login</a></span></p>
                    <form className="form">
                        <Input type={"text"} name={"nome_restaurante"} id={"nome_restaurante"} placeholder={"Nome do restaurante"} icone={"fa-solid fa-utensils"} />
                        <Input type={"text"} name={"nome_proprietario"} id={"nome_proprietario"} placeholder={"Nome do proprietário"} icone={"fa-regular fa-user"} />
                        <div className="categorias">
                            <select name="categoria" id="categoria">
                                <option value="1">Categoria 1</option>
                                <option value="2">Categoria 2</option>
                                <option value="3">Categoria 3</option>
                                <option value="4">Categoria 4</option>
                                <option value="5">Categoria 5</option>
                            </select>
                        </div>
                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email do restaurante"} icone={"fa-solid fa-envelope"} />
                        <Input type={"text"} name={"telefone"} id={"telefone"} placeholder={"Contacto do restaurante"} icone={"fa-solid fa-phone"} />
                        <Input type={"password"} name={"password"} id={"password"} placeholder={"Password"} icone={"fa-solid fa-lock"} />
                        <Input type={"password"} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} />
                        <a href="/register-restaurants-finaly" className="btn btn-sec">Seguinte</a>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ResgisterRestaurants