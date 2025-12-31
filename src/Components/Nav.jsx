import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Nav(){
const menu=useRef();
const mobile=useRef();

useGSAP(()=>{
  let tl=gsap.timeline();
  tl.from("nav h1",{
    y: -100,
    duration: 1,
    opacity:0
  })
  tl.from("nav ul li",{
    y: -100,
    duration: 1,
    opacity:0,
    stagger:0.5
  })

})

return(
 <nav>
  <h1>PORTFOLIO</h1>
  <ul className='desktopmenu'>
    <Link to="home" spy={true} activeClass='active' smooth={true} duration={500}><li>Home</li></Link>
    <Link to="about" spy={true} activeClass='active' smooth={true} duration={500}><li>About</li></Link>
    <Link to="projects" spy={true} activeClass='active' smooth={true} duration={500}><li>Projects</li></Link>
    <Link to="contact" spy={true} activeClass='active' smooth={true} duration={500}><li>Contact</li></Link>
  </ul>

    <div className="hamburger" ref={menu} onClick={()=>{
       mobile.current.classList.toggle('activemobile')
       menu.current.classList.toggle('activeham')
    }}>
      <div className="ham"></div>
      <div className="ham"></div>
      <div className="ham"></div>
    </div>

    <ul className='mobilemenu' ref={mobile}>
    <Link to="home" spy={true} activeClass='active' smooth={true} duration={500}><li>HOME</li></Link>
    <Link to="about" spy={true} activeClass='active' smooth={true} duration={500}><li>ABOUT</li></Link>
    <Link to="projects" spy={true} activeClass='active' smooth={true} duration={500}><li>PROJECTS</li></Link>
    <Link to="contact" spy={true} activeClass='active' smooth={true} duration={500}><li>CONTACT</li></Link>
  </ul>
 </nav>
) 
}
export default Nav;
//rfce shorthand for react functional component
