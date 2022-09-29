import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import Header from "../../component/PageHeader/Header";
import Socials from "../../component/Socials/Socials";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import { Progress } from 'rsuite';

import "./About.scss";

const About = () => {
  const [showOverlay, setshowOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowOverlay(false);
    }, 2000);
  }, []);

  const style = {
    width: 80,
    display: 'inline-block',
    marginRight: 10

  };

  return (
    <div className="about-wrapper">
      <Header />
      <VerticalNav />
      {showOverlay && (
        <div
          className="about-Overlay"
          data-aos="fade-left"
          data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          // data-aos-anchor-placement="top-center"
        ></div>
      )}
      {/*ABout page  */}

    
        <section className="about-C puffIn" id="about">
        {!showOverlay && ( <div className="about-me">
            <div className="title-wrapper">
              <h2
                data-aos="fade-left"
                //   data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                About Me
              </h2>
            </div>

            <div className="content-wrapper">
              <span
                className="title inline-flex gap-2"
                data-aos="fade-right"
                //   data-aos-offset="300"
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

              <h3>
                We believe innovation happens when the Perfect Idea meets the
                Perfect Design...
              </h3>
              <p data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                hic dolores architecto amet ut? Adipisci sunt natus soluta,
                debitis, eos consequatur.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                hic dolores architecto amet ut? Adipisci sunt natus soluta,
                debitis.
              </p>

              <a href="https://www.canva.com/design/DAEur8jptC0/c8ptjPm_f9mfRl409vdy0w/view?utm_content=DAEur8jptC0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                <button className="theme-btn" data-aos="flip-left">
                  <span>My Resume</span>
                </button>
              </a>
            </div>

     
          </div>
         )}

      
        </section>

        {/* progress */}
        <div className="skills" >
        <div className="title-wrapper">
              <h2
                data-aos="fade-left"
                //   data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                SkillSet
              </h2>
            </div>
            <div className="progress" >

         <div style={style}>Html
      <Progress.Circle percent={90} className="p-circle"/>
    </div>
    <div style={style}>CSS
      <Progress.Circle percent={80} strokeColor="#ffc107" className="p-circle"/>
    </div>
    <div style={style}>React
      <Progress.Circle percent={90} className="p-circle"/>
    </div>
    <div style={style}>Javascript
      <Progress.Circle percent={60}  className="p-circle"/>
    </div>
    <div style={style}>Gatsby
      <Progress.Circle percent={50}  className="p-circle"/>
          </div>
          </div>
         </div>
      <Socials />
    </div>
  );
};

export default About;
