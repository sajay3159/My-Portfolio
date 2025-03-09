import React from 'react';
import './Home.css';
import profile_img from '../../assets/profile_img.svg';

const Home = () => {
    return (
        <div className='home'>
            <img src={profile_img} alt="Profile" />
            <h1><span>I'm Ajay Sahani</span>, Frontend Developer based in India</h1>
            <p>I am a Frontend Developer from Vadodara, India with 1 year in a Company, Emarket Experts</p>
            <div className="home-action">
                <div className="home-connect">Connect with me</div>
                <a href="/Ajay_resume.pdf" download className="home-resume">My Resume</a>
            </div>
        </div>
    );
}

export default Home;
