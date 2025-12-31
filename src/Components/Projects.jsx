import React from 'react';
import './Projects.css';
import Card from './Card';
import va from '../assets/va.png';
import ch from '../assets/ch.png';
import med from '../assets/med.png';
import ise from '../assets/ise.png';
import tti from '../assets/tti.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Projects(){
  useGSAP(()=>{
    gsap.from(".overview",{
      y: 100,
      duration: 1,
      opacity:0,
      scrollTrigger:{
        trigger: ".overview",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 80%",
        end: "top 30%",
      }
    })
    
        gsap.from(".slider",{
          y: 100,
          opacity:0,
          duration:1,
          stagger:1,
          scrollTrigger:{
            trigger: ".slider",
            scroller: "body",
            scrub: 2,
            markers: false,
            start: "top 80%",
            end: "top 30%",
    
    
          }
        })
  })
  return(
    <div id="projects">
      <h1 className="overview">OVERVIEW OF SOME PRODUCTION LEVEL PROJECTS</h1>
      <div className="slider">
        <Card title={'VIRTUAL ASSISTANT'} image={va}/>
        <Card title={'AI POWERED CHATBOT'} image={ch}/>
        <Card title={'MEDICO'} image={med}/>
        <Card title={'IMAGE SEARCH ENGINE'} image={ise}/>
        <Card title={'AI TEXT TO IMAGE'} image={tti}/>
      </div>
    </div>
  )
}
export default Projects;