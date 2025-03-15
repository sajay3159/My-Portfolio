import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleShowMore = () => {
        setVisibleProjects(visibleProjects + 3);
    };

    const handleShowLess = () => {
        setVisibleProjects(3);
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
