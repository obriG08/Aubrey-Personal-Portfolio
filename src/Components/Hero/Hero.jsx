import React from 'react'
import './Hero.css'
import profile_img from '../../assets/heroo-modifiedd.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CV from '../../assets/mycv.pdf';

const Hero = () => {
  return (
    <div id='hero' className ='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anne Aubrey Gripon,</span> UI/UX Designer</h1>
        <p>I am 22 years old & currently living at Bacoor Cavite, studying Bachelor of Science in Computer Science at Cavite State University - Bacoor</p>
        <div className="hero-mes">
            <div className="hero-me">
                <h1>About Me</h1>
                <p>I am a passionate student with a deep interest in UI/UX Designing. 
                    I believe in continuous learning, hard work, and the power of collaboration. 
                    I enjoy designing and using technology to create solutions that help people. Besides this, I have a huge passion for Photography.</p>
            </div>
            <hr />
            <div className="hero-me">
                <h1>My Family</h1>
                <p>I come from a supportive and loving family that values education and personal growth. 
                    My parents have always encouraged me to pursue my dreams and have taught me the importance of perseverance and integrity. 
                    I have 2 older siblings who inspire me in different ways.</p>
            </div>
            <hr />
        </div>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href={CV} download>
            <div className="hero-resume">My resume</div>
            </a>
        </div>
    </div>
  )
}

export default Hero