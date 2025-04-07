import React from 'react'
import Header from "../../components/Header/Header.jsx"
import CoverEffect from "../../components/SwiperCoverEffect/SwiperCoverEffect.jsx"
import SwiperFreeMode from "../../components/SwiperFreeMode/SwiperFreeMode.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import "./home.css"

const Home = () => {
    return (
        <div>
            <main className="principal">
                <Header />

                <h2> Os mais famosos </h2>

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

                <section>
                    <Footer />
                </section>
            </main>
        </div>
    )
}

export default Home