import Action from "../../../components/Action/Action"
import Footer from "../../../components/Footer/Footer"
import "./clientProfile.css"

const ClientProfile = () => {
    return (
        <>
            <main className="corpo">
                <section className="identificate">
                    <div className="photo">
                        <img src="/src/assets/images/foto-clientProfile.jpg" alt="foto de perfil do cliente" />
                    </div>
                    <span>Nome do cliente</span>
                </section>
                <section className="operations">
                    <Action icon={'fa-solid fa-bell'} title={'Notificações'} paragraph={'Customize a forma como recebe notificações'} link={'/client-profile'}/>
                    <Action icon={'fa-regular fa-user'} title={'Informação pessoal'} paragraph={'Customize a forma como recebe notificações'} link={'/personal-details'}/>
                    <Action icon={'fa-solid fa-right-from-bracket'} title={'Log out'} paragraph={'Customize a forma como recebe notificações'} link={'/client-profile'}/>
                </section>
                <Footer/>
            </main>
        </>
    )
}

export default ClientProfile