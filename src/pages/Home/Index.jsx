import Header from "../../components/Header/Header.jsx"
import Swiper from "../../components/Swiper/Swiper.jsx"
import "./home.css"

function Home() {
    return (
        <>
            <main className="principal">
                <Header />
                <h2>Os mais famosos</h2>
                <Swiper />
            </main>
        </>
    )
}

export default Home