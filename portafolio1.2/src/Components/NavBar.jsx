import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo2.png';



import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import git from '../assets/icons/github.svg'

export const NavBar = () => {

  function ScrollToTopButton() {
    useEffect(() => {
      // Get the button
      const myButton = document.getElementById("myBtn");

      // Show the button when the user scrolls down 20px from the top of the document
      const handleScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myButton.style.display = "block";
        } else {
          myButton.style.display = "none";
        }
      };
      window.addEventListener("scroll", handleScroll);

      // When the user clicks on the button, scroll to the top of the document
      const handleButtonClick = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      };
      myButton.addEventListener("click", handleButtonClick);

      // Clean up the event listeners when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        myButton.removeEventListener("click", handleButtonClick);
      };
    }, []);}


  const handleClick = () => {
    window.open("https://www.linkedin.com/in/carlosmartinezrdz");
  };

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} id="myBtn" title="Go to top">Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">

            <div className="social-icon">
                <a href="https://github.com/CarlosMtz1281" target="_blank"><img src={git} alt="" /></a>

              </div>

              <HashLink to='#connect'>
                <button className="vvd" onClick={handleClick} style={{borderRadius: '0px'}}><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}


