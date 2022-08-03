import React from 'react'
import './portfolio.css'
import tacbody from '../../assets/tacbody.JPG'
import jetdesign from '../../assets/FotosParaPortafolioWeb/Proyectos/pro10.jpg'
import rhand from '../../assets/FotosParaPortafolioWeb/Proyectos/pro1.jpg'

//DONT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: tacbody,
    title: 'Tac of a Client',
    github: 'https://github.com/Osvelsx',
    demo: ''
  },
  {
    id: 2,
    image: jetdesign,
    title: 'Jet Engine',
    github: 'https://github.com/Osvelsx',
    demo: ''
  },
  {
    id: 3,
    image: rhand,
    title: 'Robotic Hand',
    github: 'https://github.com/Osvelsx',
    demo: ''
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
                <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn' target='_blank'>Live Demo</a>
                </div>
              </article>
              )
            }
           )
        }
      </div>
    </section>
  )
}
