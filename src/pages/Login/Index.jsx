import Input from "../../components/Input.jsx"
import Submit from "../../components/Submit.jsx"
import "./login.css"

function Login() {
    return (
        <>
            <section className="conteiner bg-white text-center p-4">
                <h1 className="text-black font-extrabold text-3xl uppercase">Login</h1>
                <p className="font-semibold">
                    Não tem uma conta? <span><a href="/cadastro_clientes">Cadastrar</a></span>
                </p>

                <form className="form w-full">
                    <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />

                    <Input type={"password"} name={"password"} id={"password"} placeholder={"Palavra Passe"} icone={"fa-solid fa-lock"} />

                    <Input type={"password"} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} />

                    <Submit value={"Login"} name={"login"} id={"login"} />
                </form>
            </section>
        </>
    )
}

export default Login