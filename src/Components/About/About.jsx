import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
    return (
        <div className='about'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo harum asperiores, voluptas similique qui rem error recusandae, possimus dolor architecto ab id at voluptate ut vero, laboriosam autem culpa?
                            Nemo recusandae facilis fugit delectus unde aperiam eius repudiandae assumenda aliquid necessitatibus nobis optio maiores excepturi minus quas eum modi possimus earum explicabo omnis architecto ut, iure sequi. Consequuntur, eligendi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias magnam tempore. Optio non maxime, distinctio sint delectus quod doloribus ab quibusdam necessitatibus molestias accusantium voluptatem totam, libero in vel?
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML && CSS</p><hr style={{ width: "50%" }} />  </div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1> 1+ </h1>
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
                    <p> HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About