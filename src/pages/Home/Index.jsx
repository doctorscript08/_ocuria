import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import CoverEffect from "../../components/SwiperCoverEffect/SwiperCoverEffect.jsx"
import SwiperFreeMode from "../../components/SwiperFreeMode/SwiperFreeMode.jsx"
import "./home.css"

function Home() {
    return (
        <>
            <Header />
            <main className="principal">

                <h2>Os mais famosos</h2>

                <CoverEffect />

                <section className="slider-restaurantes">
                    <h2>Gourmet</h2>
                    <SwiperFreeMode />
                </section>
                <section className="slider-restaurantes">
                    <h2>Casuais</h2>
                    <SwiperFreeMode />
                </section>
                <section className="slider-restaurantes">
                    <h2>Temáticos</h2>
                    <SwiperFreeMode />
                </section>
                <section className="slider-restaurantes">
                    <h2>Fast Food</h2>
                    <SwiperFreeMode />
                </section>
                <section className="slider-restaurantes">
                    <h2>Étnicos</h2>
                    <SwiperFreeMode />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home