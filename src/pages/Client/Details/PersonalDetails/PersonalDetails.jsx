import Action from '../../../../components/Action/Action'
import Footer from '../../../../components/Footer/Footer'
import './personal.css'
import '../../../../index.css'

const Personal = () => {
    return (
        <>
            <main className="corpo">
                <section className="content w_f p_15">
                    <h1 className='text_c text_up'>Detalhes pessoais</h1>
                    <Action icon={'fa-regular fa-user'} title={'Informação pessoal'} paragraph={'Gerencie a sua informação pessoal'} link={'/personal-information'}/>
                    <Action icon={'fa-solid fa-phone'} title={'Telemóvel'} paragraph={'Altere o seu número de telemóvel'} link={''}/>
                    <Action icon={'fa-solid fa-lock'} title={'Password'} paragraph={'Altere a sua password'} link={''}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Personal