import React, { useEffect } from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  useEffect(() => {
    // Select all the skill percentage bars
    const bars = document.querySelectorAll('.skills__percentage');
    
    bars.forEach(bar => {
      // Get the width from the data-width attribute
      const width = bar.getAttribute('data-width');
      // Set the width after a slight delay for smooth animation
      setTimeout(() => {
        bar.style.width = width;
      }, 100);  // Slight delay to ensure smoothness on page load
    });
  }, []);

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am a digital marketer,  Skilled in SEO, social media marketing, email marketing, and paid advertising. I have my expertise in Graphic designing, Video Editing, Photoshop, Appointment Setting, and Web development
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development" data-width="90%"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design" data-width="80%"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography" data-width="60%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
