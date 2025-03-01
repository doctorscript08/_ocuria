import React from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'


const App = () => {

  return (
    
    <>

      <div className="flex h-screen">

        <SideBar />

      </div>

      <div className="flex-1 flex flex-col">

        <Header />

        <main className="p-4">

          <h2 className="text-2xl">Conteúdo Principal</h2>

          <p>Este é o conteúdo principal da página.</p>

        </main>

      </div>
      
    </>

  )
}

export default App
