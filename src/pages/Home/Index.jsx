import Header from "../../components/Header/Header.jsx"
import CoverEffect from "../../components/SwiperCoverEffect/SwiperCoverEffect.jsx"
import SwiperFreeMode from "../../components/SwiperFreeMode/SwiperFreeMode.jsx"
import "./home.css"

function Home() {
    return (
        <>
            <main className="principal">
                <Header />

                <h2>Os mais famosos</h2>

                <CoverEffect />

                <section className="slider-restaurantes">
                    <SwiperFreeMode/>
                </section>
                <section className="slider-restaurantes">
                    <SwiperFreeMode/>
                </section>
                <section className="slider-restaurantes">
                    <SwiperFreeMode/>
                </section>
                <section className="slider-restaurantes">
                    <SwiperFreeMode/>
                </section>
                <section className="slider-restaurantes">
                    <SwiperFreeMode/>
                </section>
            </main>
        </>
    )
}

export default Home