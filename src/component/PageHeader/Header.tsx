import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom';

const Header = () => {
  const [openNav, setopenNav] = useState(false);

  if(openNav === true) {
    document.body.style.overflow = "hidden"
  }  else {
    document.body.style.overflow = "auto"

  }
  // useEffect(() => {
  //   if(openNav === true) {
  //     const headerMenu = document.getElementById('header-menu')
  //     headerMenu.style.backgroundColor = "black"

  //   }
  // })

  return (
    <>
        <header className='bg-dark header-wrapper flex justify-between' id='header-menu'>
          <div className='logo-c' >
            <img src="src/images/logo1.png" alt="" />
          </div>
      {/* <h1 className='mt-0' >aeesh</h1> */}

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
          <li className='active'><a href="#about">About</a></li>
          <li><a href="#portfolio">Works</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>


    </header>

    {
      openNav === true && (
        <>
        <div className='md:hidden nav'>
        <ul className='flex flex-col items-center justify-center gap-5'>
        <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Portfolio</Link></li>
          <li><Link to="">Contact</Link></li>

        </ul>
      </div>
      <div className="nav-overlay"></div>

      </>
      )
    }
    </>

  )
}

export default Header
