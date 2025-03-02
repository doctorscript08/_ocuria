function Header() {
  return (
      <>
          <header className="cabecalho w-full">
              <section className="w-full flex justify-between items-center">
                  <div className="logo rounded-xl p-1">
                      {/*<img src="" alt="logo-ocuria"/>*/}
                      <h1 className="font-bold text-white uppercase">Ocuria</h1>
                  </div>
                  <button className="show-menu bg-transparent">
                      <span className="icone"><i className="fa-solid fa-bars"></i></span>
                  </button>
              </section>

              <nav className="nav-bar w-full text-center p-2 list-none">
                  <section>
                      <div className="user">
                          <span><i className="fa-solid fa-user text-white w-12 text-center rounded-3xl"></i></span>

                          <section className="accoes">
                              <div className="scale"><a href="/restaurant-profile" className="text-white font-extrabold uppercase">Perfil</a></div>
                              <div className="scale"><a href="/login" className="text-white font-extrabold uppercase">Entrar</a></div>
                              <div className="scale"><a href="/register-clients" className="text-white font-extrabold uppercase">Cadastrar</a></div>
                              <div className="scale"><a href="/register-restaurants" className="text-white font-extrabold uppercase">Cadastrar Restaurantes</a></div>
                              <div className="scale"><a href="/definicoes" className="text-white font-extrabold uppercase">Definições</a></div>
                          </section>
                      </div>
                      <div className="scale"><a href="/" className="text-white font-extrabold uppercase">Home</a></div>
                      <div className="scale"><a href="/restaurantes" className="text-white font-extrabold uppercase tracking-wide">Restaurantes</a></div>
                      <div className="scale"><a href="" className="text-white font-extrabold uppercase">Terminar Sessão</a></div>
                  </section>
              </nav>
              <div className="search-bar bg-white rounded-3xl flex justify-between items-center">
                  <input type="search" name="search" id="search" className="w-4/5 font-semibold tracking-wide" />
                  <span><i className="fa-solid fa-magnifying-glass text-2xl cursor-pointer text-black"></i></span>
              </div>

              <h1 className="uppercase text-white font-extrabold">Tu és o que comes</h1>
          </header>
      </>
  )
}

export default Header