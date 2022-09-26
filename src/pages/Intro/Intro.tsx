import React from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import Confetti from "../../component/Particles/Confetti";
import Spacewoman from "../../images/spacewoman2.png"
import "./Intro.scss"

const Intro = () => {
  return (
    <section className="section1" id='home'>

    <div className="hero mx-auto">
      <h4 className="subtitle" data-aos="fade-right">I am Aeeshah</h4>
      <h2 className="title mt-2" data-aos="fade-right">Front End Developer</h2>
      
      {/* <div>
        <h1>Front end</h1>
        <h1>Front end</h1>
      </div> */}
      <button className="theme-btn mt-5" data-aos="flip-left"><a href="https://wa.me/2348140308878" target={"_blank"}><span>contact me</span></a></button>

      <div className="flex justify-center relative mx-auto top-40 scroll-down">
      <HiOutlineChevronDoubleDown/>
    </div>
    </div>



    <div className="space">
      {/* <Confetti/> */}
      <div>
        
      </div>
      {/* <img src={Spacewoman} /> */}
    </div>

  </section>
  )
}

export default Intro
