import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";

import "./About.scss";
import Footer from "../../component/Footer/Footer";

const About = () => {
  const [effect, setEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  const style = {
    width: 70,
    display: "inline-block",
    marginRight: 10,
  };

  return (
    <div id="about">
      {/* {effect && <div className="about-overlay"></div>} */}

      

      <div  className="about-wrapper  px-5 sm:px-24 lg:px-48 pb-20 lg:py-32 flex flex-col md:flex-row justify-between ">
        {/*ABout page  */}

<div className="about-img max-w-[20rem] max-h-[30rem] md:max-w-[15rem] md:max-h-[15rem] mt-20 sm:mt-0">
<img src="images/woman-coding.jpg" alt="About me"  className=""/>
</div>


        <section className="about-C puffIn " id="about">
          <div className="about-me pt-20 md:pt-0 flex flex-col w-[100vw] md:w-[100%]">
            <div className="title-wrapper">
              <h2
                data-aos="fade-left"
                // data-aos-delay="500"
                data-aos-easing="ease-in"
                className="w-[max-content]"
              >
                About Me
              </h2>
            </div>

            <div className="content-wrapper max-w-[100vw] md:w-[40vw] lg:w-[35vw] xl:w-[40vw]">
              <span
                className="title inline-flex gap-2"
                data-aos="fade-right"
                // data-aos-delay="1000"
                data-aos-easing="ease-in-sine"
              >
                Web{" "}
                <TypewriterComponent
                  options={{
                    strings: ["Developer", "Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>

              <h5 data-aos="fade-right"
              //  data-aos-delay="1000"
               >
                HELPING BRANDS AND BUSINESSES COMMUNICATE WITH THEIR AUDIENCE IN
                A MEANINGFUL WAY.
              </h5>
              <p data-aos="fade-left"
               >
                I am a Front end developer from Nigeria. I love creating digital solutions to simplify people's everyday
                lives, make them more exciting and help them achieve their
                goals.
                </p>
                <p>
                My approach to Front End Development is centered around creating intuitive and engaging user experiences. I take the time to understand the unique needs and goals of each project,
                 and work closely with clients and stakeholders to ensure that the final product meets their expectations.
                </p>
                <p>
                My skillset are React, Gatsby, JavaScript, Html, Css, Scss,
                Tailwind, Typescript, Api integration, version control, Trello,
              </p>
              <div
                className="download-R py-5 ml-3"
                data-aos="zoom-in"
              >
                <div className="click_and_hold flex items-center">
                  <div className="circlehold">
                    <span></span>
                    <svg
                      className="dsn-progress-circle-up"
                      width="100%"
                      height="100%"
                      stroke="#fff"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMinYMin meet"
                      fill="none"
                    >
                      <path
                        className="dsn-progress-path"
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                          strokeDasharray: "307.919, 307.919",
                          strokeDashoffset: "309%",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <i></i>
                  <div className="hold_span border-b-2">
                    <a
                      href="https://www.canva.com/design/DAEur8jptC0/c8ptjPm_f9mfRl409vdy0w/view?utm_content=DAEur8jptC0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                      target="_blank"
                    >
                      Check Resume
                    </a>
                  </div>
                </div>
              </div>

              {/* <a href="https://www.canva.com/design/DAEur8jptC0/c8ptjPm_f9mfRl409vdy0w/view?utm_content=DAEur8jptC0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                <button className="theme-btn" data-aos="flip-left">
                  <span>My Resume</span>
                </button>
              </a> */}
            </div>
          </div>
        </section>

   
      </div>
      
      
    </div>
  );
};

export default About;
