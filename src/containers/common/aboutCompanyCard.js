import React from 'react';

const AboutCompanyCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 about-company-wrapper">
                <h3>About {props.studioName}</h3>
                <div className="row">
                    <div className="col-md-12">
                        <p>{props.aboutStudio}</p>
                    </div>
                    <div className="col-md-12 company-highlight">
                                <span className="col bullet">
                                    <span className="highlight">{props.workLifeBalance}</span> Work/Life Balance
                                </span>
                        <span className="col bullet">
                                    <span className="highlight">{props.compensation}</span> Compensation/Benefits
                                </span>
                        <span className="col bullet">
                                    <span className="highlight">{props.jobSecurity}</span> Job Security
                                </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutCompanyCard;
