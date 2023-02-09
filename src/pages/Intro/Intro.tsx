import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Intro.scss";

const Intro = () => {
  const [effect, setEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <Header /> */}

      <div className="section1 w-[100vw]" id="home">
        <div className="w-[100%] px-5 sm:px-24 lg:px-44 pt-32 pb-20 lg:py-32 ">
          <p className="font-bold text-base lg:text-xl">Hi, I'm</p>
          <h1 className=" mt-2 text-5xl lg:text-7xl mb-5 " data-aos="fade-down" data-aos-delay="2000">
           Aishat Waheed
          </h1>
          <p className="subtitle text-base sm:text-xl md:max-w-xl mb-7" data-aos="fade-up" data-aos-delay="2500">
            I am a creative frontend developer & Web designer. Glad
            to have you here! you can call me aeesh
          </p>


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
     
        </div>

        <div className="space">
          <div></div>
        </div>

        {effect && <div className="overlay"></div>}
      </div>
    </>
  );
};

export default Intro;
