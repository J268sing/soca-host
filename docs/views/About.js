import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const aboutOfficials = [{position: 'CEO', name: 'Parveen Sharma', infoo: 'He tookover SOCA in 1989 and since then, he has taken it to new heights. His mission is to grow the popularity of the great game of cricket in southern Ontario and all over Canada. His hardwork and dedication throughout the years has helped a number of domestic and international students build a career in cricket.',
     imagelink: 'gagandeepsingh.jpeg'},
    {position: 'President', name: 'Hariharan Krithivasan', infoo: 'He joined in 2019 and now is the president of SOCA. His work in association is taking the league to the next level.', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Vice-President', name: 'Ayaz Karim', infoo: '', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Secretary', name: 'Shakil Patel', infoo: '', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Coach', name: 'Gagandeep Singh', infoo: 'He is an Indian cricketer. He played for Punjab, and Kings XI Punjab in the Indian Premier League. Over a ten-year first-class career, from 1999–00 to 2009–10, he took 266 wickets at the exceptional average of 20.84, with 16 five wicket hauls, and three times took ten wickets in a match. He is currently coaching at SOCA and is open to coach in Canada.', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Director of Youth Development', name: 'Parmod Shetty', infoo: 'He is a Senior Business Analyst in a reputed food company and is a passionate cricketer. He has big plans for kids who wants to grow in cricket. Parmod takes care of marketing and also public relations at SOCA.', imagelink: 'gagandeepsingh.jpeg'}] 

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        
        <FeaturesSplit position={aboutOfficials[0].position} name={aboutOfficials[0].name} infoo={aboutOfficials[0].infoo} imag={aboutOfficials[0].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[1].position} name={aboutOfficials[1].name} infoo={aboutOfficials[1].infoo} imag={aboutOfficials[1].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[2].position} name={aboutOfficials[2].name} infoo={aboutOfficials[2].infoo} imag={aboutOfficials[2].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[3].position} name={aboutOfficials[3].name} infoo={aboutOfficials[3].infoo} imag={aboutOfficials[3].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[4].position} name={aboutOfficials[4].name} infoo={aboutOfficials[4].infoo} imag={aboutOfficials[4].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[5].position} name={aboutOfficials[5].name} infoo={aboutOfficials[5].infoo} imag={aboutOfficials[5].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;