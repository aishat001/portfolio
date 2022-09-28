import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Header from "../../component/PageHeader/Header";
import Socials from "../../component/Socials/Socials";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import "./Intro.scss";

const Intro = () => {
  const [effect, setEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Header />

      <section className="section1" id="home">
        <div className="hero mx-auto">
          <h2 className="title mt-2" data-aos="fade-right">
            Web Designer <br /> Front End Developer
          </h2>
          <h4 className="subtitle" data-aos="fade-right">
            Hi! I am Aeeshah, a creative frontend developer & Web designer. Glad
            to have you here! you can call me aeesh
          </h4>
          <div className="freelance mt-5">
            <div className="circle"></div>
            <a href="mailto:waheedaishat@gmail.com">Available for freelance</a>
          </div>

          {/* <button className="theme-btn mt-5" data-aos="flip-left"><a href="https://wa.me/2348140308878" target={"_blank"}><span>contact me</span></a></button> */}

          <div className="flex justify-start relative  top-10 scroll-down">
            <Link to="/works"><HiOutlineChevronDoubleRight /></Link>
            
          </div>
        </div>

        <div className="space">
          {/* <Confetti/> */}
          <div></div>
          {/* <img src={Spacewoman} /> */}
        </div>

        {effect && <div className="overlay"></div>}
      </section>
      <Socials />
      <VerticalNav />
    </div>
  );
};

export default Intro;
