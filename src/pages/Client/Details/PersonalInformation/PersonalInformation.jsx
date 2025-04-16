import Input from '../../../../components/Input/Input'
import './personalInformation.css'

const PersonalInformation = () => {
    return (
        <>
            <main className="corpo">
                <section className="information">
                    <h1>Conte-nos sobre você</h1>
                    <Input/>
                    <Input/>

                    <h2>Endereço</h2>
                    <Input/>
                    <Input/>
                    <Input/>
                    <button className='btn'>Salvar</button>
                </section>
            </main>
        </>
    )
}

export default PersonalInformation