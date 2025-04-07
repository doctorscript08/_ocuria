import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Index.jsx"
import Login from "../../pages/Login/Index.jsx"
import RegisterClients from "../../pages/Client/RegisterClients/Index.jsx";
import ClientProfile from "../../pages/Client/ClientProfile/Index.jsx";
import ResgisterRestaurants from "../../pages/Restaurants/RegisterRestaurants/Index.jsx";
import NextStep from "../../pages/Restaurants/RegisterRestaurants/NextStep.jsx";
import RestaurantProfile from "../../pages/Restaurants/RestaurantProfile/Index.jsx";
import Settings from '../../pages/SettingPage/Settings/Settings.jsx';
import EditProfile from '../../pages/SettingPage/EditProfile/EditProfile.jsx';
import AlterPassword from '../../pages/SettingPage/AlterPassword/AlterPassword.jsx';
import Dashboard from "../../pages/Admin/DashBoard/Dashboard.jsx";
import Menu from '../../pages/Restaurants/Menu/Menu.jsx';
import ItemMenu from '../../pages/Restaurants/ItemMenu/ItemMenu.jsx';
import DashboardClient from "../../pages/Client/DashboardClient/DashboardClient.jsx";
import DashboardRestaurant from '../../pages/Restaurants/DashboardRestaurant/DashboardRestaurant.jsx'
import EmployeeCategory from '../../pages/Employee/EmployeeCategory/EmployeeCategory.jsx'
import Employee from '../../pages/Employee/Employee/Employee.jsx';

const Routs = () => {

    return(

        <div>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register-clients" element={<RegisterClients/>}/>
                    <Route path="/register-restaurants" element={<ResgisterRestaurants/>}/>
                    <Route path="/admin-dashboard" element={<Dashboard/>} />
                    <Route path="/next" element={<NextStep/>}/>
                    <Route path="/restaurant-dashboard" element={<DashboardRestaurant/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="/item-menu" element={<ItemMenu/>} />
                    <Route path="/client-dashboard" element={<DashboardClient/>} />
                    <Route path="/restaurant-profile" element={<RestaurantProfile/>}/>
                    <Route path="/client-profile" element={<ClientProfile/>}/>
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/alter-password" element={<AlterPassword />} />
                    <Route path="/employee" element={<EmployeeCategory />} />
                    <Route path="/employee-category" element={<Employee />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default Routs