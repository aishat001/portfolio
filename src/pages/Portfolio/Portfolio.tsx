import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../../component/PageHeader/Header";
import Socials from "../../component/Socials/Socials";
import VerticalNav from "../../component/VerticalNav/VerticalNav";
import { dashboards } from "../../Data";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";

const Portfolio = () => {
    const [selected, setselected] = useState("all");

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
    ]


  return (
<div>
    <Header/>
    {/* <VerticalNav /> */}

{/* Worrks ****************** */}
    <div className="portfolio-wrapper" id="portfolio">

      <div className="portfolio">
        <h2 className="port-title">Portfolio</h2>

        <ul className="flex flex-wrap gap-10 my-10 header items-center">
            {
                lists.map((item, id) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setselected} id={item.id}/>
                )
                )
            }
        </ul>


<div className="projects">
  {
    dashboards.map((item) => {
      return (<div
      className="project flex flex-col"
    >
        <div className="img" 
          style={{
        background: item.img,
      }} >
          <Link to=""><h2 className="title">{item.title}</h2></Link>
        </div>
        <div className="content flex flex-col gap-4">
          <h2 className="title">{item.title}</h2>
          <p className="subtitle">{item.subtitle}</p>
          <div className="tag flex gap-4">
            {
              item.library.map((lib) => <span>{lib}</span>)
            }
        </div>

        <div className="flex flex-row justify-between items-center mt-3">
            <Link to="" className="theme-btn capitalize">Visit</Link>
            <Link to=""><AiOutlineGithub className="gitIcon"/></Link>
        </div>
        </div>
    </div>)
    })
  }
  
  
        <div
          className="project flex flex-col gap-3"
        >
            <div className="img" 
              style={{
            background:
              "url('http://react.tumho.iamubaidah.com/static/media/3.741cffd5.jpg')",
          }} >
              <Link to=""><h2 className="title">Landing Page</h2></Link>
            </div>
            <div className="content flex flex-col gap-4">
              <h2 className="title">Landing Page</h2>
              <p className="subtitle">Lorem ipsum lorem ipsum lorem, ipsum</p>
              <div className="tag flex gap-4">
              <span>React</span>
              <span>Saas</span>
              <span>Aos</span>
            </div>

            <div className="flex flex-row justify-between items-center mt-3">
                <Link to="" className="theme-btn capitalize">Visit</Link>
                <Link to=""><AiOutlineGithub className="gitIcon"/></Link>
            </div>
            </div>
        </div>

        <div
          className="project flex flex-col gap-3"
        >
            <div className="img" 
              style={{
            background:
              "url('http://react.tumho.iamubaidah.com/static/media/3.741cffd5.jpg')",
          }} >
              <Link to=""><h2 className="title">Landing Page</h2></Link>
            </div>
            <div className="content flex flex-col gap-4">
              <h2 className="title">Landing Page</h2>
              <p className="subtitle">Lorem ipsum lorem ipsum lorem, ipsum</p>
              <div className="tag flex gap-4">
              <span>React</span>
              <span>Saas</span>
              <span>Aos</span>
            </div>

            <div className="flex flex-row justify-between items-center mt-3">
                <Link to="" className="theme-btn capitalize">Visit</Link>
                <Link to=""><AiOutlineGithub className="gitIcon"/></Link>
            </div>
            </div>
        </div>

        <div
          className="project flex flex-col gap-3"
        >
            <div className="img" 
              style={{
            background:
              "url('http://react.tumho.iamubaidah.com/static/media/3.741cffd5.jpg')",
          }} >
              <Link to=""><h2 className="title">Landing Page</h2></Link>
            </div>
            <div className="content flex flex-col gap-4">
              <h2 className="title">Landing Page</h2>
              <p className="subtitle">Lorem ipsum lorem ipsum lorem, ipsum</p>
              <div className="tag flex gap-4">
              <span>React</span>
              <span>Saas</span>
              <span>Aos</span>
            </div>

            <div className="flex flex-row justify-between items-center mt-3">
                <Link to="" className="theme-btn capitalize">Visit</Link>
                <Link to=""><AiOutlineGithub className="gitIcon"/></Link>
            </div>
            </div>
        </div>

  </div>
      </div>
    </div>
    <Socials/>
</div>


  );
};

export default Portfolio;
