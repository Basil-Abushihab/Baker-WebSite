import React from "react";
// import DishCard from "./pages/distCard";
import CheckoutComponent from "./components/checkout";
import { Routes, Route } from "react-router-dom";
import "./pages/chef-pages/animations.css"


import DishCard from "./pages/distCard";
import CheckoutComponent from "./components/checkout";


import Chef_home_page from "./pages/chef-pages/home";
import Recipe_dish_creation from "./pages/chef-pages/recpie-dish";
import Recipe_dish_management from "./pages/chef-pages/recpie-dish-management";
import Catalog_chef from "./pages/chef-pages/Catalog_chef";
import Chef_profile from "./pages/chef-pages/profile";
import Contactus_chef from "./pages/chef-pages/chef-contact";

import RecipeDishList from "./pages/recipeList";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


import UserReg from './components/userReg'; // Update the path as per your file structure


function App() {
  return (
    <>


    <Header/>
     
      <Routes>

        <Route path="/RecipeDishList" element={<RecipeDishList/>} />

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<UserReg />} />
        <Route path="/UserReg" element={<userReg/>} />
        <Route path="/DishCard" element={<DishCard/>} />
      </Routes>
      <Footer/>


    </>
  );
}

export default App;
