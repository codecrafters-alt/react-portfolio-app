import React from 'react'
import './Contact.css'
import contactImage from '../assets/contact.png'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 80%",
        end: "top 30%",
      }
    })
    
    gsap.from(".rightcontact", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightcontact",
        scroller: "body",
        scrub: 2,
        markers: false,
        start: "top 80%",
        end: "top 30%",
      }
    })
    
  })
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contactImage} alt="Contact" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/mzdblrry" method="POST">
          <input name="Username" type="text" placeholder='Name' />
          <input name="Email" type="email" placeholder='Email' />
          <textarea name="Message" cols="30" rows="3" id="textarea" placeholder='message me...'></textarea>
          <input type="submit" id='btn' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact;
