import React from 'react'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'
import {Portfolio} from './components/portfolio/Portfolio'
//import {Testimonials} from './components/testimonials/Testimonials'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/*<Testimonials />*/}
        <Contact />
        <Footer />
    </>
  )
}

/*var newWnd = window.open(); Esto es para cerrar los _blank creados
console.log("🚀 ~ file: App.jsx ~ line 29 ~ newWnd", newWnd)
newWnd.opener = null;*/

/*
============== Funcion de fechas y dias ==============
function subtractDays(numOfDays, date = new Date()) {
  date.setDate(date.getDate() - numOfDays);
  return date;
}
const date = subtractDays(5);
subtractDays(numOfDays, date = new Date())
const date = subtractDays(5, new Date());
const date = subtractDays(5, subtractDays(10) );
 */
