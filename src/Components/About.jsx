import React from 'react'
import "./About.css"
import Card from './Card'
import mern from '../assets/mern.png'
import java from '../assets/java.png'
import dsa from '../assets/dsa.png'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x: -100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger: ".circle",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 60%",
        end: "top 30%"

      }
    })
    gsap.from(".line",{
      x: -100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger: ".line",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 60%",
        end: "top 30%",


      }
    })

   gsap.from(".aboutdetails h1",{
      x: -100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger: ".personal-info h1",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 60%",
        end: "top 30%",


      }
    })


       gsap.from(".aboutdetails ul",{
      y: 100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger: ".personal-info ul",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 60%",
        end: "top 30%",


      }
    })
    
    gsap.from(".rightAbout",{
      x: 100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger: ".personal-info ul",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 60%",
        end: "top 30%",


      }
    })
    

      
  })
  return (
    <div id="about">
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personal-info">
            <h1>PERSONAL INFO</h1>
            <ul>
              <li>
                <span>NAME</span> : ANIK CHAKRABORTY
              </li>
              <li>
                <span>AGE</span> : 22 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE</span> : BENGALI, HINDI, ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li>
                <span>COLLEGE</span> : NSEC KOLKATA
              </li>
              <li>
                <span>DEGREE</span> : BTECH
              </li>
              <li>
                <span>BRANCH</span> : CSE
              </li>
              <li>
                <span>CGPA</span> : 8.88
              </li>
              
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li>
                MERN STACK DEVELOPMENT
              </li>
              <li>
                JAVA C++ C
              </li>
              <li>
                DSA
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="rightAbout">
      
        <Card title={'MERN Stack Developer'} image={mern}/>
        <Card title="Java Developer" image={java}/>
        <Card title="DSA Specialist" image={dsa}/>
      
      </div>
    </div>
  )
}

export default About
