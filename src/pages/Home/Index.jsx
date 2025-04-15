import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import FamousRestaurants from "../../components/Swipers/FamousRestaurants/FamousRestaurants.jsx"
import RestaurantsCategories from "../../components/Swipers/RestaurantsCategories/RestaurantsCategories.jsx"
import "./home.css"

function Home() {
    return (
        <>
            <Header />
            <main className="principal">

                <h2>Os mais famosos</h2>

                <FamousRestaurants />

                <section className="slider-restaurantes">
                    <h2>Gourmet</h2>
                    <RestaurantsCategories foto1={"src/assets/images/galeria-1.jpg"} foto2={"src/assets/images/galeria-2.jpg"} foto3={"src/assets/images/galeria-3.jpg"} foto4={"src/assets/images/galeria-4.jpg"} foto5={"src/assets/images/galeria-5.jpg"} foto6={"src/assets/images/galeria-6.jpg"} foto7={"src/assets/images/galeria-7.jpg"} foto8={"src/assets/images/galeria-8.jpg"} foto9={"src/assets/images/galeria-9.jpg"}/>
                </section>
                <section className="slider-restaurantes">
                    <h2>Casuais</h2>
                    <RestaurantsCategories foto1={"src/assets/images/galeria-1.jpg"} foto2={"src/assets/images/galeria-2.jpg"} foto3={"src/assets/images/galeria-3.jpg"} foto4={"src/assets/images/galeria-4.jpg"} foto5={"src/assets/images/galeria-5.jpg"} foto6={"src/assets/images/galeria-6.jpg"} foto7={"src/assets/images/galeria-7.jpg"} foto8={"src/assets/images/galeria-8.jpg"} foto9={"src/assets/images/galeria-9.jpg"}/>
                </section>
                <section className="slider-restaurantes">
                    <h2>Temáticos</h2>
                    <RestaurantsCategories foto1={"src/assets/images/galeria-1.jpg"} foto2={"src/assets/images/galeria-2.jpg"} foto3={"src/assets/images/galeria-3.jpg"} foto4={"src/assets/images/galeria-4.jpg"} foto5={"src/assets/images/galeria-5.jpg"} foto6={"src/assets/images/galeria-6.jpg"} foto7={"src/assets/images/galeria-7.jpg"} foto8={"src/assets/images/galeria-8.jpg"} foto9={"src/assets/images/galeria-9.jpg"}/>
                </section>
                <section className="slider-restaurantes">
                    <h2>Fast Food</h2>
                    <RestaurantsCategories foto1={"src/assets/images/galeria-1.jpg"} foto2={"src/assets/images/galeria-2.jpg"} foto3={"src/assets/images/galeria-3.jpg"} foto4={"src/assets/images/galeria-4.jpg"} foto5={"src/assets/images/galeria-5.jpg"} foto6={"src/assets/images/galeria-6.jpg"} foto7={"src/assets/images/galeria-7.jpg"} foto8={"src/assets/images/galeria-8.jpg"} foto9={"src/assets/images/galeria-9.jpg"}/>
                </section>
                <section className="slider-restaurantes">
                    <h2>Étnicos</h2>
                    <RestaurantsCategories foto1={"src/assets/images/galeria-1.jpg"} foto2={"src/assets/images/galeria-2.jpg"} foto3={"src/assets/images/galeria-3.jpg"} foto4={"src/assets/images/galeria-4.jpg"} foto5={"src/assets/images/galeria-5.jpg"} foto6={"src/assets/images/galeria-6.jpg"} foto7={"src/assets/images/galeria-7.jpg"} foto8={"src/assets/images/galeria-8.jpg"} foto9={"src/assets/images/galeria-9.jpg"}/>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home