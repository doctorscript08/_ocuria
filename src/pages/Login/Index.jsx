import Input from "../../components/Input/Input.jsx"
import Submit from "../../components/Submit/Submit.jsx"
import "../../index.css"

function Login() {
    return (
        <>
            <main className="body_form">
                <section className="conteiner_form bg-white text-center p-4">
                    <h1 className="text-black font-extrabold uppercase">Login</h1>
                    <p className="font-semibold">
                        Não tem uma conta? <span><a href="/register-clients">Cadastrar</a></span>
                    </p>
                    <form className="form w-full">
                        <Input type={"email"} name={"email"} id={"email"} placeholder={"Email"} icone={"fa-solid fa-envelope"} />
                        <Input type={"password"} name={"password"} id={"password"} placeholder={"Password"} icone={"fa-solid fa-lock"} />
                        <Input type={"password"} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} />
                        <Submit value={"Login"} name={"login"} id={"login"} />
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login