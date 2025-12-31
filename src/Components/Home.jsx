import React from 'react'
import './Home.css'
import man from '../assets/man.png'
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
function Home() {
  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line3",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    gsap.from(".rightHome img",{
    x: 200,
    duration: 2,
    opacity:0
  })
 
  })
  return (
    <div id="home">
      <div className="leftHome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">ANIK CHAKRABORTY</div>
          <div className="line3">
            <Typewriter
              words={["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER"]}
              loop={0}
              cursor={true}
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </div>
         <button>HIRE ME</button>
        </div>
      </div>
      <div className="rightHome">
        <img src={man} alt="Profile Image" />
      </div>

    </div>
  )
}

export default Home
