import "./clientProfile.css"

function ClientProfile() {
    return (
        <>
            <section className="content">
                <div className="foto-perfil">
                    <div className="foto"><img src="src/assets/images/foto-clientProfile.jpg" /></div>
                    <div className="mudar-foto"><i className="fa-solid fa-pen"></i></div>
                </div>

                <div className="user-data">
                    <div className="nome">
                        <span className="data">Nome do usuário</span>
                        <span className="icone"><i className="fa-solid fa-pen"></i></span>
                    </div>
                    <div className="endereço">
                        <span className="data">Localização</span>
                        <span className="icone"><i className="fa-solid fa-pen"></i></span>
                    </div>
                    <div className="numero">
                        <span className="data">Nº de Telefone</span>
                        <span className="icone"><i className="fa-solid fa-pen"></i></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientProfile