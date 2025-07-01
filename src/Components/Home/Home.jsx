import React from 'react';
import './Home.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
    return (
        <div id="home" className='home'>
            <img src={profile_img} alt="Profile" />
            <h1><span>I'm Ajay Sahani</span>, Frontend Developer </h1>
            <p>I am a Frontend Developer from Vadodara, Gujarat with 2 years in a Company, Emarket Experts</p>
            <div className="home-action">
                <div className="home-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <a href="/Ajay_resume.pdf" download className="home-resume">My Resume</a>
            </div>
        </div>
    );
}

export default Home;
