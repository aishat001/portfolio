import TypewriterComponent from "typewriter-effect";
import "./About.scss";

const About = () => {


  return (
    <section className="about-wrapper" id="about">
      <div className="about-me">
        <div className="title-wrapper">
          <span className="title inline-flex gap-2"
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
          <h2
              data-aos="fade-left"
            //   data-aos-offset="300"
              data-aos-easing="ease-in-sine"
          >About Me</h2>
        </div>
        <p data-aos="zoom-in">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere hic
          dolores architecto amet ut? Adipisci sunt natus soluta, debitis, eos
          consequatur.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere hic
          dolores architecto amet ut? Adipisci sunt natus soluta, debitis.
        </p>

          <a href="https://www.canva.com/design/DAEur8jptC0/c8ptjPm_f9mfRl409vdy0w/view?utm_content=DAEur8jptC0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
          <button className="theme-btn" data-aos="flip-left">
              <span>
         My Resume</span>
         </button>
          </a>
      </div>
    </section>
  );
};

export default About;
