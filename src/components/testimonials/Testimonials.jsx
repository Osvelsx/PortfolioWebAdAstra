import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/FotosParaPortafolioWeb/Amigos_Y_Mascotas/Ami1.jpg'

// import Swiper core and required modules
// Link of Swiper https://swiperjs.com/ 
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facere cumque aspernatur non perferendis molestiae optio harum quas placeat. Velit temporibus ducimus fugit molestiae ad earum quibusdam delectus repudiandae odio!'
  },
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facere cumque aspernatur non perferendis molestiae optio harum quas placeat. Velit temporibus ducimus fugit molestiae ad earum quibusdam delectus repudiandae odio!'
  },
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facere cumque aspernatur non perferendis molestiae optio harum quas placeat. Velit temporibus ducimus fugit molestiae ad earum quibusdam delectus repudiandae odio!'
  }
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="name" />
          </div>

          <h5 className='client_name'>{name}</h5>
            <small className="client_review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
