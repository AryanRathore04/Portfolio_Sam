import React from 'react';
import CountUp from 'react-countup';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about__title">
            <CountUp start={0} end={198} duration={2.5} />
          </h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about_icon icon-cup"></i>
        <div>
          <h3 className="about__title">
            <CountUp start={0} end={5670} duration={3} />
          </h3>
          <span className="about__subtitle">Cups of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about_icon icon-people"></i>
        <div>
          <h3 className="about__title">
            <CountUp start={0} end={427} duration={2.5} />
          </h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about_icon icon-badge"></i>
        <div>
          <h3 className="about__title">
            <CountUp start={0} end={35} duration={2} />
          </h3>
          <span className="about__subtitle">Nominees Winner</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
