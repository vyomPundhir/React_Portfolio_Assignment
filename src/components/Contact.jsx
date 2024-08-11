import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from "react";
import mail from "../assets/mail.gif";

const Contact = () => {

  const ref = useRef();
  const [success, setSuccces] = useState(null)

  const handleSubmit = e =>{
    e.preventDefault();

  emailjs.sendForm('service_fydcpbh', 'template_0qlpy8k', ref.current, 'G8VQ-uLEYUkAFlB6e')
      .then((result) => {
          console.log(result.text);
          setSuccces(true)
      }, (error) => {
          console.log(error.text);
          setSuccces(false)
      });

};

  return (
    <div id='contactus' className='py-[50px] bg-gradient-to-t from-[#000000] to-[#616161] bg-black px-[50px]'>
      <section className='w-full h-full flex justify-center gap-[120px]'>

        <div className="left basis-1/2 flex justify-end items-center">

          <form ref={ref} className="form w-[500px] flex flex-col gap-[25px] justify-center items-start" onSubmit={handleSubmit}>
            <div className="title font-[800] vyom text-[74px] text-[#000000]">Contact Us</div>

            <input placeholder='Name' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[10px] text-[white] font-[700]' name="name"/>

            <input placeholder='Email' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[10px] text-[white] font-[700]' name="email"/>

            <textarea placeholder='Write your message' className='w-full h-[180px] p-[20px] bg-transparent border-[3px] border-[white] rounded-[10px] text-[white] font-[700]' name="message"/>

            <button className='w-full bg-[white] text-[black] text-[22px] font-[700] border-[3px] border-[black] cursor-pointer rounded-[10px] p-[20px] hover:shadow-[0px_0px_30px_5px_#c2c2c2] transition ease-in-out duration-500' type='submit'>Send</button>
            {success &&
              "Your Message has been sent. We will get back to you soon..."
            }
          </form>
        </div>

        <div className="mail right basis-1/2 flex justify-center items-center">
          <img src={mail} alt="mail" className='rounded-full w-[350px] h-[350px]' />
        </div>
      </section>
    </div>
  )
}

export default Contact