import Input from "../../../components/Input/Input.jsx"
import Submit from "../../../components/Submit/Submit.jsx"
import TextArea from "../../../components/TextArea/TextArea.jsx"
import "./resgisterRestaurants.css"
import "../../../index.css"

function NextStep() {
    return (
        <>
            <main className="body_form">
                <section className="conteiner_form bg-white text-center p-4">
                    <h1 className="text-black font-extrabold text-3xl uppercase mb-5">Quase lá!</h1>
                    <form className="form">
                        <div className="foto-perfil mb-6">
                            <span><i className="fa-solid fa-utensils"></i></span>
                        </div>
                        <div className="apresentacao">
                            <label htmlFor="slogan">Crie um slogan para o seu restaurante</label>
                            <Input type={"text"} name={"slogan"} id={"slogan"} placeholder={'Slogan...'} className="mt-0" />
                            <br />
                            <label htmlFor="biografia">Conte sobre o seu restaurante</label>
                            <TextArea nome={"biografia"} id={"biografia"} rows={"5"} columns={0} placeholder={"Escreva aqui"}/>
                        </div>
                        <Submit value={"Finalizar"} name={"cadastrar"} id={"cadastrar"} />
                    </form>
                </section>
            </main>
        </>
    )
}

export default NextStep