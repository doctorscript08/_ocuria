import "./clientProfile.css"

const back = () => {
    window.history.go(-1)
}

function ClientProfile() {
    return (
        <>
            <div className="back-bar"><span className="cursor-pointer" onClick={back}><i className="fa-solid fa-arrow-left"></i></span></div>
            <section className="content-cliente">
                <div className="foto-perfil-cliente">
                    <img src="src/assets/images/foto-clientProfile.jpg" />
                </div>

                <div className="data">
                    <span className="icone-perfil">
                        <i className="fa-regular fa-user"></i>
                    </span>
                    <span className="texto">
                        Nome do usuário
                    </span>
                </div>
                <div className="data">
                    <span className="icone-perfil">
                        <i className="fa-regular fa-id-badge"></i>
                    </span>
                    <span className="texto">
                        Nome completo
                    </span>
                </div>
                <div className="data">
                    <span className="icone-perfil">
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="texto">
                        Email
                    </span>
                </div>
                <div className="data">
                    <span className="icone-perfil">
                        <i className="fa-solid fa-phone"></i>
                    </span>
                    <span className="texto">
                        Nº de telefone
                    </span>
                </div>

                <span className="definicoes"><a href="/definicoes-cliente"><i className="fa-solid fa-gear"></i></a></span>
            </section>
        </>
    )
}

export default ClientProfile