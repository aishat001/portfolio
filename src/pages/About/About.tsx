import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import Header from "../../component/PageHeader/Header";
import Socials from "../../component/Socials/Socials";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import { Progress } from "rsuite";

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
    <>
      {effect && <div className="overlay"></div>}

      <Header />

      <div className="about-wrapper">
        {/*ABout page  */}

        <section className="about-C puffIn" id="about">
          <div className="about-me">
            <div className="title-wrapper">
              <h2
                data-aos="fade-left"
                data-aos-delay="2000"
                data-aos-easing="ease-in-sine"
              >
                About Me
              </h2>
            </div>

            <div className="content-wrapper">
              <span
                className="title inline-flex gap-2"
                data-aos="fade-right"
                data-aos-delay="2500"
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

              <h5 data-aos="fade-right" data-aos-delay="3000">
                HELPING BRANDS AND BUSINESSES COMMUNICATE WITH THEIR AUDIENCE IN
                A MEANINGFUL WAY
              </h5>
              <p data-aos="fade-left" data-aos-delay="3000">
                I love creating digital solutions to simplify people's everyday
                lives, make them more exciting and help them achieve their
                goals.
                <br />
                <br />
                My skillset are React, Gatsby, JavaScript, Html, Css, Scss,
                Tailwind, Typescript, Api integration, version control, Trello,
              </p>
              <div className="download-R py-5 ml-3" data-aos="zoom-in" data-aos-delay="3000">
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

        {/* progress */}
        {/* <div className="skills">
        <div className="title-wrapper">
          <h2
            data-aos="fade-left"
            //   data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            SkillSet
          </h2>
        </div>
        <div className="progress-C">
          <div className="progress">
            <span>REACT</span>
            <div style={style}>
              <Progress.Circle percent={80} className="p-circle" />
            </div>
          </div>

          <div className="progress">
            <span>GATSBY</span>
            <div style={style}>
              <Progress.Circle percent={70} className="p-circle" />
            </div>
          </div>

            <div className="progress">
            <span>JAVASCRIPT</span>
            <div style={style}>
              <Progress.Circle percent={80} className="p-circle" />
            </div>
          </div>

           <div className="progress">
            <span>HTML</span>
            <div style={style}>
              <Progress.Circle percent={90} className="p-circle" />
            </div>
          </div>

         <div className="progress">
            <span>CSS</span>
            <div style={style}>
              <Progress.Circle percent={90} className="p-circle" />
            </div>
          </div>
        </div>
      </div> */}
        <Footer />
      </div>
      <Socials />
    </>
  );
};

export default About;
