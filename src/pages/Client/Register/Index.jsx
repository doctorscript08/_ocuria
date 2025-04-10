import Input from "../../../components/Input/Input.jsx"
import Submit from "../../../components/Submit/Submit.jsx"
import "./registerClients.css"

function RegisterClients() {
    return (
        <>
            <main className="body">
                <section className="conteiner bg-white text-center">
                    <h1 className="text-black font-extrabold text-3xl uppercase">Criar Conta</h1>
                    <p className="font-semibold">Já tem uma conta? <span><a href="/login">Login</a></span></p>

                    <form className="form">
                        <Input type={"text"} name={"username"} id={"username"} placeholder={"Nome de usuário"} icone={"fa-regular fa-user"} />

                        <div className="genero">
                            <p className="text-xl genero-text">Género</p>      
                            <section>
                                <input type="radio" name="genero" id="masculino" /> &nbsp;
                                <label htmlFor="masculino">Masculino</label> &nbsp;&nbsp;

                                <input type="radio" name="genero" id="feminino" /> &nbsp;
                                <label htmlFor="feminino">Feminino</label> 
                            </section>
                        </div>

                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />

                        <Input type={"text"} name={"telefone"} id={"telefone"} placeholder={"Nº de telefone"} icone={"fa-solid fa-phone"} />

                        <Input type={"password"} name={"password"} id={"password"} placeholder={"Password"} icone={"fa-solid fa-lock"} />

                        <Input type={"password"} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} />

                        <Submit value={"Cadastrar"} name={"cadastrar"} id={"cadastrar"}/>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterClients