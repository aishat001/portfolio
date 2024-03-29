import React from 'react'
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs'
import "./contact.scss";

const Contact = () => {
  return (
    <div className='w-[100vw]' id='contact'>

{/* Contact */}
    <div className='contact-wrapper px-5 sm:px-24 lg:px-48 pb-20 lg:py-32' id="contact">
      <div className="contact">
        <div className="title-wrapper">
        
            <h1 
            data-aos="fade-left"
            //   data-aos-offset="300"
              data-aos-easing="ease-in-sine" 
            className='contactbg'>Contact Me </h1>


            <h4 className='mt-7'>Have a project  in mind?</h4>

        </div>
   
          <h5>Reach out to me, <br/>we can make something awesome together</h5> 

          <div className="flex flex-col gap-5 mt-10">
          <a href='mailto:waheedaishat@gmail.com' target="blank"><button><span className='flex flex-row items-center gap-2'> <AiFillMail/>Send a mail</span></button></a>
          <a href='https://wa.me/2348140308878' target="_blank"><button><span className='flex flex-row items-center gap-2'><BsWhatsapp/>08140308878</span></button></a>

          </div>
      </div>
      {/* <h1 className='contactbg'>CONTACT</h1> */}
    </div>

    {/* <VerticalNav /> */}

    </div>
  )
}

export default Contact
