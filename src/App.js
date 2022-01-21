import React from "react";
import './App.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Footer from "./Components/Footer/Footer";
const App = () =>{
    return(
        <>
         <Header/>
        
            <HeroBanner/>
         <Section/>

         <Footer/>
        </>
    )
}

export default App;

