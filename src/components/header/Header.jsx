import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/FotoOsvelPerfilProfesional1-removebg.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header id='home'>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Osvel Rios</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="Osvel Rios" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}
