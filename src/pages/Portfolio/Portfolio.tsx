// @ts-nocheck 
import { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../../component/PageHeader/Header";
import Socials from "../../component/Socials/Socials";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import {
  AllPortfolio,
  DashboardPorfolio,
  FormPortfolio,
  LandingPagePOrtfolio,
} from "../../Data";
import PortfolioList from "../PortfolioList/PortfolioList";
import projectImg from "../../images/work02.png";
import "./Portfolio.scss";
import Footer from "../../component/Footer/Footer";

const Portfolio = () => {
  const [selected, setselected] = useState("all");
  const [data, setData] = useState(AllPortfolio);
  const [effect, setEffect] = useState(true);

  const lists = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "dashboards",
      title: "Dashboards",
    },
    {
      id: "landingPage",
      title: "Landing-Page",
    },
    {
      id: "forms",
      title: "Forms",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(AllPortfolio);
        break;
      case "dashboards":
        setData(DashboardPorfolio);
        break;
      case "landingPage":
        setData(LandingPagePOrtfolio);
        break;
      case "forms":
        setData(FormPortfolio);
        break;
      default:
        break;
    }
  }, [selected]);


  return (
    <div>
      {effect && <div className="about-overlay"></div>}

      <Header />

      {/* Worrks ****************** */}
      <div className="portfolio-wrapper" id="portfolio">
        <div className="portfolio">
          <h2 className="port-title"    data-aos="fade-right"
                data-aos-delay="2500"
                data-aos-easing="ease-in-sine">Portfolio</h2>

          {/* titles */}
          <ul className="flex flex-wrap gap-10 my-10 work-header items-center"    data-aos="fade-right"
                data-aos-delay="2500"
                data-aos-easing="ease-in-sine">
            {lists.map((item, id) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setselected}
                id={item.id}
              />
            ))}
          </ul>

          {/* projects */}
          <div className="projects">
            {data.map((item) => {
                return (
                  <div className="project flex flex-col" 
                  data-aos-duration={item.duration}
                     data-aos={item.aos}
                  data-aos-delay={item.delay}
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
      <Socials />
      <Footer/>
    </div>
  );
};

export default Portfolio;
