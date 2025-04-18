import Input from "../../../components/Input/Input.jsx"
import Submit from "../../../components/Submit/Submit.jsx"
import "./registerClients.css"
import "../../../index.css"
import { useState } from "react"

function RegisterClients() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <main className="body_form">
                <section className="conteiner_form bg-white text-center">
                    <h1 className="text-black font-extrabold text-3xl uppercase">Criar Conta</h1>
                    <p className="font-semibold">Já tem uma conta? <span><a href="/login">Login</a></span></p>

                    <form className="form">
                        <Input type={"text"} name={"username"} id={"username"} placeholder={"Nome de usuário"} icone={"fa-regular fa-user"} />

                        <div className="genero w_f">
                            <p className="text-xl genero-text">Género</p>      
                            <section>
                                <input type="radio" name="genero" id="masculino" /> &nbsp;
                                <label htmlFor="masculino">Masculino</label> &nbsp;&nbsp;

                                <input type="radio" name="genero" id="feminino" /> &nbsp;
                                <label htmlFor="feminino">Feminino</label> 
                            </section>
                        </div>

                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />

                        <Input type={"tel"} name={"telefone"} id={"telefone"} placeholder={"Nº de telefone"} icone={"fa-solid fa-phone"} />

                        <Input type={showPassword ? 'text' : 'password'} name={"password"} id={"password"} placeholder={"Password"} icone={"fa-solid fa-lock"} />

                        <Input type={showPassword ? 'text' : 'password'} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} />

                        <div className="show_password">
                            <input type="checkbox" name="show_password" id="show_password" onInput={() => setShowPassword(!showPassword)}/>
                            <label htmlFor="show_password">Monstrar password</label>
                        </div>

                        <Submit value={"Cadastrar"} name={"cadastrar"} id={"cadastrar"}/>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterClients