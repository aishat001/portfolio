import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
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
          <h2 className="title mt-2" data-aos="fade-down" data-aos-delay="2000">
            Web Designer <br /> Front End Developer
          </h2>
          <h4 className="subtitle" data-aos="fade-up" data-aos-delay="2500">
            Hi! I am Aeeshah, a creative frontend developer & Web designer. Glad
            to have you here! you can call me aeesh
          </h4>
          {/* <div className="freelance mt-5">
            <div className="circle"></div>
            <a href="mailto:waheedaishat@gmail.com">Available for freelance</a>
          </div> */}

          {/* <button className="theme-btn mt-5" data-aos="flip-left"><a href="https://wa.me/2348140308878" target={"_blank"}><span>contact me</span></a></button> */}
          <div className="download-R my-5 ml-3" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="3000"><div className="click_and_hold flex items-center">
                        <div className="circlehold">
                            <span></span>
                            <svg className="dsn-progress-circle-up" width="100%" height="100%" stroke="#fff" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">
                                <path className="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{strokeDasharray: '307.919, 307.919', strokeDashoffset: "309%" }}></path>
                            </svg>
                        </div>
                        <i></i>
                        <div className="hold_span border-b-2">
                        <a href="https://www.canva.com/design/DAEur8jptC0/c8ptjPm_f9mfRl409vdy0w/view?utm_content=DAEur8jptC0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">
                            View my work</a>
                        </div>
                    </div></div>
          {/* <div className="flex justify-start relative  top-10 scroll-down">
            
            <Link to="/works" className="inline-flex">View my work<HiOutlineChevronDoubleRight /></Link>
            
          </div> */}
        </div>

        <div className="space">
          <div></div>
        </div>

        {effect && <div className="overlay"></div>}
      </section>
      <Socials />
      <Footer/>
    </div>
  );
};

export default Intro;
