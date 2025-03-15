import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    // State to track how many projects are visible
    const [visibleProjects, setVisibleProjects] = useState(3);

    // Function to handle "Show More" click
    const handleShowMore = () => {
        setVisibleProjects(visibleProjects + 3); // Increase the number of visible projects by 3
    };

    // Function to handle "Show Less" click (reset to 3 visible projects)
    const handleShowLess = () => {
        setVisibleProjects(3); // Reset to show only 3 projects
    };

    return (
        <div id="mywork" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.slice(0, visibleProjects).map((work, index) => (
                    <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                        <img src={work.w_img} alt={work.w_name} />
                    </a>
                ))}
            </div>
            <div className="mywork-buttons">
                {visibleProjects < mywork_data.length && (
                    <div className="mywork-showbutton" onClick={handleShowMore}>
                        <p>Show More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                )}

                {visibleProjects > 3 && (
                    <div className="mywork-showbutton" onClick={handleShowLess}>
                        <p>Show Less</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWork;
