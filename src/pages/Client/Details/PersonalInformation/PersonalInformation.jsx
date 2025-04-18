import Input from '../../../../components/Input/Input'
import './personalInformation.css'
import '../../../../index.css'

const PersonalInformation = () => {
    return (
        <>
            <main className="corpo w_f p_15">
                <section className="information">
                    <h1>Conte-nos sobre você</h1>
                    <Input type={'text'} name={'nome'} id={'nome'} placeholder={'Nome do usuário'} icone={'fa-regular fa-user'}/>
                    <Input type={'email'} name={'email'} id={'email'} placeholder={'Email do usuário'} icone={'fa-solid fa-envelope'}/>

                    <h2>Endereço</h2>
                    <Input type={'text'} name={'provincia'} id={'provincia'} placeholder={'Província'} icone={'fa-solid fa-location-dot'}/>
                    <Input type={'text'} name={'cidade'} id={'cidade'} placeholder={'Cidade'} icone={'fa-solid fa-location-dot'}/>
                    <Input type={'text'} name={'bairro'} id={'bairro'} placeholder={'Bairro'} icone={'fa-solid fa-location-dot'}/>
                    <div className='w_f d_flex'><button className='btn'>Salvar</button></div>
                </section>
            </main>
        </>
    )
}

export default PersonalInformation