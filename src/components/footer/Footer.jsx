import React from 'react'
import './footer.css'
import {SiInstagram} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
import {SiTiktok} from 'react-icons/si'
import {SiYoutube} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">AD ASTRA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/adastra.sx/" target="_blank"><SiInstagram/></a>
        <a href="https://www.facebook.com/AdAstraSX/" target="_blank"><SiFacebook/></a>
        <a href="https://www.tiktok.com/@adastraoficial?lang=es" target="_blank"><SiTiktok/></a>
        <a href="https://www.youtube.com/channel/UCdHArCqfandw-HQP8QaWmGA" target="_blank"><SiYoutube/></a>
        <a href="https://www.linkedin.com/in/osvel-chegizay-r%C3%ADos-rodr%C3%ADguez" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/Osvelsx" target="_blank"><SiGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ad Astra</small>
      </div>
    </footer>
  )
}
