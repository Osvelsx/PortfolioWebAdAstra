import React from 'react'
import './about.css'
import ME from '../../assets/SanFran_Me.jpeg'
import {RiMedalLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {BsTrophy} from 'react-icons/bs'

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <div className='about_icon'><RiMedalLine/></div>
              <small>+1 Year Working</small>
            </article>

            <article className="about_card">
              <h5>Clients</h5>
              <div className='about_icon'><FiUsers/></div>
              <small>From Mexico & Colombia</small>
            </article>

            <article className="about_card">
              <h5>Projects</h5>
              <div className='about_icon'><BsTrophy/></div>
              <small>+7 Completed</small>
            </article>
          </div>

          <p>
            I love being in places where people like to work as a team, I'm all ears if someone give me their best advice that will help me to grow up professionally along with my soft skills, I also like to understand what the needs of our clients are so I take projects in a personal level.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
