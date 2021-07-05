import React from 'react'
import profilePic from '../../assets/placeholder-image.png';

const ProfileCard = () => {
    return (
      <>
            <div className="col-md-12 profile-view-wrapper">
                <div className="row profile-main">
                    <div className="col-md-2">
                        <img src={profilePic} className="img-responsive rounded-circle profile-img"/>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Marvin McKinney</h3>
                            </div>
                            <div className="col-md-6 profile-score-wrapper">
                                <button type="button" className="btn primary-orange">
                                    Profile Score 90%
                                </button>
                                <button type="button" className="btn primary-blue">
                                    Employment Score 70%
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 candidate-specifics">
                                <span className="col"><i className="fa-solid fa-suitcase" /> 6yr 3m</span>
                                <span className="col"><i className="fa-solid fa-wallet" /> $20 /hrs</span>
                                <span className="col"><i className="fa-solid fa-location-dot" /> Philadelphia</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                Current
                            </div>
                            <div className="col-md-10">
                                Salon Manager - Beauty and Spa @ Chenz
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                Key Skills
                            </div>
                            <div className="col-md-10">
                                Beauty / Fitness / Spa
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 candidate-label">
                                May also know
                            </div>
                            <div className="col-md-10">
                                Beauty, Salon Managerstrong, Backend
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row profile-footer">
                    <div className="col-md-12">
                        <span className="label-emp footer-col">
                            7
                        </span>
                        <span className="label-emp footer-col">
                            3
                        </span>
                        <span className="footer-col">
                            <span className="label-emp">Active:</span> 11 Mar 2021
                        </span>
                        <span className="footer-col">
                            <span className="label-emp">Modified: </span>28 Feb 2021
                        </span>
                        <span className="pull-right review">
                            15 Review
                        </span>
                    </div>
                </div>
            </div>
      </>
    );
};

export default ProfileCard;
