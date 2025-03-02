import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Index.jsx"
import Login from "../../pages/Login/Index.jsx"
import RegisterClients from "../../pages/RegisterClients/Index.jsx";
import ResgisterRestaurants from "../../pages/RegisterRestaurants/Index.jsx";
import NextStep from "../../pages/RegisterRestaurants/NextStep.jsx";
import RestaurantProfile from "../../pages/RestaurantProfile/Index.jsx";
import ClientProfile from "../../pages/ClientProfile/Index.jsx";

function Routs() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register-clients" element={<RegisterClients/>}/>
                    <Route path="/register-restaurants" element={<ResgisterRestaurants/>}/>
                    <Route path="/next" element={<NextStep/>}/>
                    <Route path="/restaurant-profile" element={<RestaurantProfile/>}/>
                    <Route path="/client-profile" element={<ClientProfile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routs