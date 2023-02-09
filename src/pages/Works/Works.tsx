// @ts-nocheck 
import { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  AllPortfolio,
  DashboardPorfolio,
  FormPortfolio,
  LandingPagePOrtfolio,
} from "../../Data";
import PortfolioList from "../PortfolioList/PortfolioList";
import projectImg from "../../images/work02.png";
import "./Works.scss";
import Footer from "../../component/Footer/Footer";

const Works = () => {
  const [selected, setselected] = useState("all");
  const [data, setData] = useState(AllPortfolio);
  const [effect, setEffect] = useState(true);



  return (
    <div id="works" className="">
      {/* {effect && <div className="about-overlay"></div>} */}

      

      {/* Worrks ****************** */}
      <div className="portfolio-wrapper w-[100vw] px-5 sm:px-24 lg:px-48 pb-20 lg:py-32" id="portfolio">
        <div className="portfolio pt-20">
          <h2 className="port-title"    data-aos="fade-right"
                data-aos-easing="ease-in-sine">Portfolio</h2>


          {/* projects */}
          <div className="projects pt-20">
            {data.map((item) => {
                return (
                  <div className="project flex flex-col" 
                  data-aos-duration={item.duration}
                     data-aos={item.aos}
                  data-aos-easing={item.easing}>
                    <div className="img">
                      <Link to="#" target="_blank">
                        {" "}
                        <img src={item.img} alt="" width="720px" />{" "}
                      </Link>
                    </div>
                    <div className="content flex flex-col gap-4">
                      <h5 className="title">{item.title}</h5>
                      <p className="subtitle">{item.subtitle}</p>
                      <div className="tag flex gap-4">
                        {item.library.map((lib) => (
                          <span>{lib}</span>
                        ))}
                      </div>
                      <div className="flex flex-row justify-start items-center mt-3">
                        <Link to="" className="theme-btn capitalize">
                          Visit Site
                        </Link>
                        <Link to="" className="inline-flex ml-5 items-center">
                          <AiOutlineGithub className="gitIcon mr-1" />
                          Source Code
                        </Link>
                      </div>
                    </div>
                  </div>
                )

                        })
                        }
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Works;
