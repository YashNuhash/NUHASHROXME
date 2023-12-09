// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./css/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
// eslint-disable-next-line no-unused-vars
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const githubProfileUrl = "https://github.com/YashNuhash/";
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Computer Science Student @RMSTU",
        "I Love Competitive Programming",
        "I enjoy Contributing to OpenSource Projects",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <nav id="navbar">
      <a href="https://www.linkedin.com/in/ashraful-nuhash-2192871b2/" target="_blank" className="icons" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/YashNuhash/" target="_blank" className="icons" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About & Skills.</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact.</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Hey, I am Ashraful Nuhash</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I am currently Learning Full Stack Development seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
