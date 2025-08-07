import React from 'react'
import './About.css'
import image from '../assets/images/applying_serum.jpg' 

const About = () => {
  return (
    <section className='about-body'>
        <img className="about-img" src={image} alt="beauty products" />
        <div className="about-heading">
            <h1>About Us</h1>
           <p className="about-content">
            At <span className="bold">LollyBeauty</span>, we believe that every woman deserves to feel radiant and confident. <span className="bold">Our mission</span> is to provide a thoughtfully curated selection of high-quality beauty essentials that not only enhance your natural features but also embrace your individuality.<br /><br />

            LollyBeauty is more than just an e-commerce store — it’s a sanctuary where elegance meets authenticity. Our dedicated team is committed to offering personalized beauty advice, fast and secure delivery, and exceptional customer care every step of the way.<br /><br />

            Whether you're perfecting your everyday glow or preparing for a special occasion, we’re here to support your journey to timeless beauty. At LollyBeauty, beauty isn't just a routine, it’s a refined experience.
           </p>


        </div>
    </section>
  )
}

export default About