import React from 'react'
import './nav.css'
import {IoHome} from 'react-icons/io5'
import {FaUserTie} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'
import {VscFileSubmodule} from 'react-icons/vsc'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('home')} className= {activeNav === 'home' ? 'active' : ''}><IoHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')} className= {activeNav === 'about' ? 'active' : ''}><FaUserTie/></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className= {activeNav === 'experience' ? 'active' : ''}><MdLibraryBooks/></a>
      <a href="#services" onClick={() => setActiveNav('services')} className= {activeNav === 'services' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className= {activeNav === 'portfolio' ? 'active' : ''}><VscFileSubmodule/></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className= {activeNav === 'contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}
