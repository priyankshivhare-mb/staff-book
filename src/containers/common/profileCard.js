import React from 'react'

const ProfileCard = (props) => {
    return (
      <div className="row">
            <div className={`col-md-12 profile-view-wrapper ${props.isHighlighted && 'highlighted'}`}>
                <div className="row profile-main">
                    <div className="col-md-2">
                        <img src={props.profilePic} className="img-responsive rounded-circle profile-img"/>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>{props.name}</h3>
                            </div>
                            <div className="col-md-6 profile-score-wrapper">
                                <button type="button" className="btn primary-orange">
                                    Profile Score {props.profileScore}%
                                </button>
                                <button type="button" className="btn primary-blue">
                                    Employment Score {props.employmentScore}%
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 candidate-specifics">
                                <span className="col"><i className="fa-solid fa-suitcase" /> {props.experience}</span>
                                <span className="col"><i className="fa-solid fa-wallet" /> ${props.wagePerHr} /hrs</span>
                                <span className="col"><i className="fa-solid fa-location-dot" /> {props.location}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                Current
                            </div>
                            <div className="col-md-10">
                                {props.currentJob}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                Key Skills
                            </div>
                            <div className="col-md-10">
                                {props.keySkills}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                May also know
                            </div>
                            <div className="col-md-10">
                                {props.secondarySkills}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row profile-footer">
                    <div className="col-md-12">
                        <span className="label-emp footer-col">
                            {props.profileViews}
                        </span>
                        <span className="label-emp footer-col">
                            {props.profileDownloads}
                        </span>
                        <span className="footer-col">
                            <span className="label-emp">Active:</span> {props.lastActive}
                        </span>
                        <span className="footer-col">
                            <span className="label-emp">Modified: </span>{props.lastModified}
                        </span>
                        <span className="pull-right review">
                            {props.reviewCount} Review
                        </span>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default ProfileCard;
