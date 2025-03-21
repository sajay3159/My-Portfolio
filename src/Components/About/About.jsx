import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a Front End Developer, I excel in creating attractive and efficient digital experiences. Proficient in HTML5, CSS3, JavaScript and TypeScript, I have expertise in designing layouts, building dynamic interfaces, and optimizing website performance.</p>
                        <p>I leverage front-end libraries like React to develop robust web applications with a focus on scalability, maintainability, and an exceptional user experience. Committed to staying updated on industry advancements, I continuously refine my skills to deliver cutting-edge solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML && CSS</p><hr style={{ width: "50%" }} />  </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1> 1.5+ </h1>
                    <p> YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> 10+ </h1>
                    <p> PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> 10+ </h1>
                    <p> PROJECT REVIEW</p>
                </div>
            </div>
        </div>
    )
}

export default About