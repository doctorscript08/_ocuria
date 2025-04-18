import "./phoneNumber.css"
import "../../../../index.css"
import Input from "../../../../components/Input/Input"

const PhoneNumber = () => {
    return (
        <>
        <main className="corpo w_f p_15">
            <section className="w_f">
                <h1 className="text_c">Alterar número de telemóvel</h1>
                <Input type={'tel'} name={'phone_number'} id={'phone_number'} placeholder={'Número de telemóvel do usuário'} icone={'fa-solid fa-phone'}/>
                <div className="w_f d_flex"><button className="btn">Salvar</button></div>
            </section>
        </main>
        </>
    )
}

export default PhoneNumber