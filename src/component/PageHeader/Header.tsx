import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom';
import logo from "/src/images/logo1.png"

const Header = () => {
  const [openNav, setopenNav] = useState(false);
  const [delayEffect, setdelayEffect] = useState(true);

  if(openNav === true) {
    document.body.style.overflow = "hidden"
  }  else {
    document.body.style.overflow = "auto"

  }



  return (
    <div className='header-w'>
        <header className='bg-dark header flex justify-between' id='header-menu'>
          <div className='logo-c' >
          <Link to="/">
            <img src="images/aishatLogo1.png" alt="" />
            </Link>
          </div>

      <div className='freelance'>
        <div className="circle"></div>
        <a href='mailto:waheedaishat@gmail.com'>Available for freelance</a>
      </div>
      <div className='menu ml-auto flex md:hidden' data-aos="fade-down" onClick={() => {
        setopenNav(!openNav)
      }}>
        {
          openNav === false ?

          (
            <span>
                 <div></div>
          <div></div>
          <div></div>
            </span>
          )

          :
          <span><AiOutlineClose className="closeIcon" onClick={() => setopenNav(false)}/></span>

        }
     
      </div>

      <div className='hidden md:block '>
      <ul className='flex flex-row items-center justify-center gap-5'>
          {/* <li className='home'><a href="#home">Home</a></li> */}
          <li><a href="#about" >About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>

          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>


    </header>

    {
      openNav === true && (
        <>
        <nav className='md:hidden nav'>
        <ul className='flex flex-col items-center justify-center gap-5'>
        {/* <li onClick={() => setopenNav(false)}><a href="/">Home</a></li> */}
        <li onClick={() => setopenNav(false)}><a href="#about">About</a></li>
          <li onClick={() => setopenNav(false)}><a href="#works">Works</a></li>
          <li onClick={() => setopenNav(false)}><a href="#contact">Contact</a></li>

        </ul>

      </nav>

      <div className="nav-overlay"></div>
      <div className="nav-overlay1"></div>

      </>
      
      )
    }


    </div>

  )
}

export default Header
