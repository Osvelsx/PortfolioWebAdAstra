import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a1wthev', 'template_ukms0hf', form.current, 'GTaxJDkDy58qPEmnD')

    e.target.reset()
  };

  return (
    <section id= "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>osvel117@gmail.com</h5>
            <a href="mailto:osvel117@gmail.com" target="noopener">Send a message!</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Ad Astra</h5>
            <a href="https://facebook.com" target="noopener">Send a message!</a>
          </article>
          <article className="contact_option"> 
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>332-495-7679</h5>
            <a href="https://wa.me/523324957679?text=I'm%20Interested%20in%20your%20Profile" target="noopener">Send a message!</a>
          </article>
        </div>
        {/* ========= FIN DE CONTACT CARDS ========= */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
