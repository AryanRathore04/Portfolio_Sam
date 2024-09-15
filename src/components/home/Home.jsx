import React from 'react'
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocias from './HeaderSocials'
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home__img" />
      <h1 className="home__name">Aryan Rathore</h1>
      <span className="home__education">I'm a Full Stack developer</span>

      <HeaderSocias />

      <a href="#contanct" className="btn">Hire Me</a>

      <ScrollDown />
    </div>

    <Shapes />
   </section>
  )
}

export default Home
