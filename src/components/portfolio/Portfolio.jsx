import React from 'react'
import './portfolio.css'
import tacbody from '../../assets/tacbody.JPG'
import jetdesign from '../../assets/FotosParaPortafolioWeb/Proyectos/pro10.jpg'
import rhand from '../../assets/FotosParaPortafolioWeb/Proyectos/pro1.jpg'
import avocadosite from '../../assets/FotosParaPortafolioWeb/Proyectos/avocadosite.png'
import holo from '../../assets/FotosParaPortafolioWeb/Proyectos/holosite.png'
import tribal from '../../assets/FotosParaPortafolioWeb/Proyectos/tribalsite.png'
import rockpprscr from '../../assets/FotosParaPortafolioWeb/Proyectos/Rock-Paper-Scissor.png'

// import Swiper core and required modules
// Link of Swiper https://swiperjs.com/ 
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//DONT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: avocadosite,
    title: 'Avocado Site',
    github: 'https://github.com/Osvelsx/Platzi_DOM-Manipulation',
    demo: 'https://osvelsx.github.io/Platzi_DOM-Manipulation/'
  },
  {
    id: 2,
    image: holo,
    title: 'Honey Load',
    github: 'https://github.com/Osvelsx',
    demo: 'https://copec-digitalsalesportal-fr-dv.herokuapp.com/'
  },
  {
    id: 3,
    image: tribal,
    title: 'Tribal',
    github: 'https://github.com/Osvelsx',
    demo: 'https://cloud.hello.tribal.credit/CP_Smart_Capture_Training'
  },
  {
    id: 4,
    image: jetdesign,
    title: 'Jet Engine',
    github: 'https://github.com/Osvelsx',
    demo: 'https://www.youtube.com/watch?v=xu4YkFpX37I&t=51s'
  },
  {
    id: 5,
    image: rhand,
    title: 'Robotic Hand',
    github: 'https://github.com/Osvelsx',
    demo: 'https://www.youtube.com/channel/UCdHArCqfandw-HQP8QaWmGA/featured'
  },
  {
    id: 6,
    image: tacbody,
    title: 'Tac of a Client',
    github: 'https://github.com/Osvelsx',
    demo: 'https://www.youtube.com/watch?v=q1IZU95PF8U&t=257s'
  },
  {
    id: 7,
    image: rockpprscr,
    title: 'Rock - Paper - Scissor',
    github: 'https://github.com/Osvelsx/Rock-Paper-Scissor',
    demo: 'https://github.com/Osvelsx/Rock-Paper-Scissor'
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <Swiper className="container portfolio_container"
       // install Swiper modules
       modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({id, image, title, github, demo}, index) => {
            return (
              <SwiperSlide key={index} className="portfolio_item">
                <article key={id} className="none">
                <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="noopener">Github</a>
                  <a href={demo} className='btn' target="noopener">Live Demo</a>
                </div>
              </article>
              </SwiperSlide>
              )
            }
           )
        }
        </Swiper>
      </div>
    </section>
  )
}
