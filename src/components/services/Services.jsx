import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id= "services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/*========== 1st Web Development ========*/}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Look & Feel Web</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>MockUp Web</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>A/B Testing</p>
            </li>
          </ul>
        </article>

        {/*========== 2nd Web Development ========*/}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Data Migration</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Code Optimization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Databases Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>API design and integration</p>
            </li>
          </ul>
        </article>

        {/*========== 3rd Content Creation ========*/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Beat Maker</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video Maker</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Image Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Social Media Content</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
