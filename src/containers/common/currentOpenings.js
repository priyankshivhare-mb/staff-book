import React from 'react';
import briefcase from "../../assets/icons/briefcase.png";
import wallet from "../../assets/icons/wallet.png";
import location from "../../assets/icons/location.png";

const CurrentOpenings = (props) => {
    return (
        <div className="col-md-12 current-openings-wrapper">
            <h3>
                {props.position}
                <span className="hot-job pull-right">
                    Hot Job
                </span>
            </h3>
            <div className="col-md-12 profile-specifics">
                            <span className="col">
                                    <img src={briefcase}/>
                                {props.experience}</span>
                <span className="col">
                                    <img src={wallet}/>
                    {props.wage}</span>
                <span className="col">
                                    <img src={location}/>
                    {props.location}</span>
            </div>
            <div className="col-md-12 candidate-skills">
                <label>Key Skills</label>
                <p>
                    {props.keySkills}
                </p>
            </div>
        </div>
    );
};

export default CurrentOpenings;
