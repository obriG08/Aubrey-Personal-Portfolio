import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>Skills</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-right">
                <div className="about-para">
                    <p>I am an aspiring UI/UX Designer currently pursuing a Bachelor of Science in Computer Science at Cavite State University – Bacoor. As a student, I have developed a strong foundation in user interface design and user experience principles through both academic projects and self-driven creative work.</p>
                    <p>My passion for design is evident in the attention to detail, empathy for users, and dedication I bring to each project. I enjoy crafting intuitive and aesthetically pleasing interfaces that not only look good but also solve real problems. I am continuously learning and refining my skills, excited to grow in the field of UI/UX and contribute meaningfully to future design-driven innovations.</p>
                </div>
            <div className="about-skills">
                <div className="about-skill"><p>Canva</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Figma</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Inkscape</p><hr style={{width:"30%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About