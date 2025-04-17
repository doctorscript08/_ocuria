import Input from '../../../../components/Input/Input'
import './personalInformation.css'
import '../../../../index.css'

const PersonalInformation = () => {
    return (
        <>
            <main className="corpo">
                <section className="information">
                    <h1 className='text_c'>Conte-nos sobre você</h1>
                    <Input/>
                    <Input/>

                    <h2 className='text_c'>Endereço</h2>
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