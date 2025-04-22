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
import PhoneNumber from "../../pages/Client/Details/PhoneNumber/PhoneNumber.jsx";
import Password from "../../pages/Client/Details/Password/Password.jsx";
import Cart from "../../pages/Client/Cart/Cart.jsx";

function Routs() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register-clients" element={<RegisterClients/>}/>
                    <Route path="/register-restaurants" element={<ResgisterRestaurants/>}/>
                    <Route path="/register-restaurants-finaly" element={<NextStep/>}/>
                    <Route path="/restaurant-profile" element={<RestaurantProfile/>}/>
                    <Route path="/client-profile" element={<ClientProfile/>}/>
                    <Route path="/personal-details" element={<Personal/>}/>
                    <Route path="/personal-information" element={<PersonalInformation/>}/>
                    <Route path="/change-phone-number" element={<PhoneNumber/>}/>
                    <Route path="/change-password" element={<Password/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routs