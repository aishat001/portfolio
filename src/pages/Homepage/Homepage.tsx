import "./Homepage.scss";
import Header from "../../component/PageHeader/Header";
import { Link } from "react-router-dom";
import Intro from "../Intro/Intro";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import { useState, useEffect } from "react";
import Works from "../Works/Works";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Socials from "../../component/Socials/Socials";

const Homepage = () => {

  
  return (
    
  
    <div className="home">
      <Header />
      {/* <VerticalNav/> */}
      <Intro/>
      <About/>
      <Works/>
      <Contact/>
      
   <Socials/>
   <Footer/>
    </div>
  );
};

export default Homepage;
