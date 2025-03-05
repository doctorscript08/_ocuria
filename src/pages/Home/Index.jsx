import Header from "../../components/Header/Header.jsx"
import Swiper from "../../components/Swiper/Swiper.jsx"
import "./home.css"

function Home() {
    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Swiper/>
            </div>
        </>
    )
}

export default Home