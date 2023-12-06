// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'JavaScript',
    'HTML/CSS',
    'React',
    'NodeJS',
    'MongoDB',
    'Github/Git',
    'Tailwind',
    'Bootstrap CSS',
    'Python',
    'Java',
  ];

  const learning = [
    'Svelte',
    'SQL',
    'Android / IOS Development',
    'Machine Learning',
    'Docker',
    'Kubernetes',
  ];

  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About & Skills<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            Hey there! I'm a passionate to become a full stack web developer with a versatile skill set.I am learing to possess a deep understanding of both front-end and back-end development and constantly refining my abilities while seeking opportunities for growth in both domains.
          </p>
          <br />
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;