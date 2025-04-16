import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Index.jsx"
import Login from "../../pages/Login/Index.jsx"
import RegisterClients from "../../pages/Client/Register/Index.jsx";
import ResgisterRestaurants from "../../pages/Restaurants/Register/Index.jsx";
import NextStep from "../../pages/Restaurants/Register/NextStep.jsx";
import RestaurantProfile from "../../pages/Restaurants/Profile/Index.jsx";
import ClientProfile from "../../pages/Client/Profile/Index.jsx";
import Personal from "../../pages/Client/Details/PersonalDetails/PersonalDetails.jsx";
import PersonalInformation from "../../pages/Client/Details/PersonalInformation/PersonalInformation.jsx";

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
                    <Route path="/personal-details" element={<Personal/>}/>
                    <Route path="/personal-information" element={<PersonalInformation/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routs