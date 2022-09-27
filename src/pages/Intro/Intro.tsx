import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import "./Intro.scss"

const Intro = () => {
  const [effect, setEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);


  }, []);

  return (
  
       <section className="section1" id='home'>

      <div className="hero mx-auto">
        <h2 className="title mt-2" data-aos="fade-right">Web Designer <br/> Front End Developer</h2>
        <h4 className="subtitle" data-aos="fade-right">Hi! I am Aeeshah, a creative frontend developer & Web designer. Glad to have you here! you can call me aeesh</h4>
        <div className='freelance mt-5'>
          <div className="circle"></div>
          <a href='mailto:waheedaishat@gmail.com'>Available for freelance</a>
        </div>
        {/* <div>
          <h1>Front end</h1>
          <h1>Front end</h1>
        </div> */}
        {/* <button className="theme-btn mt-5" data-aos="flip-left"><a href="https://wa.me/2348140308878" target={"_blank"}><span>contact me</span></a></button> */}
  
        <div className="flex justify-start relative  top-10 scroll-down">
        <HiOutlineChevronDoubleDown/>
      </div>
      </div>
  
  
  
      <div className="space">
        {/* <Confetti/> */}
        <div>
          
        </div>
        {/* <img src={Spacewoman} /> */}
      </div>
  
  {
    effect && (<div className="overlay">

    </div>)
  }
  
    </section>
  )
}

export default Intro
