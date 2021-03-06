import React from 'react';
import star from '../../assets/icons/star.png';
import wallet from '../../assets/icons/wallet.png';
import location from '../../assets/icons/location.png';
import heart from '../../assets/icons/heart.png';
import eye from '../../assets/icons/eye.png';
import download from '../../assets/icons/download.png';
import comment from '../../assets/icons/comment.png';
import Moment from 'react-moment';

const ConciseProfileCard = (props) => {
    return (
        <div className="col-md-12 profile-view-wrapper concise-wrapper">
            <div className="row profile-main">
                <div className="col-md-2">
                    <div className="row concise-pic-wrapper">
                        <img src={props.profilePic} className="mx-auto d-block img-responsive img-round"/>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>{props.name}</h3>
                            <h4>{props.currentJob}</h4>
                        </div>
                        <div className="col-md-6 profile-score-wrapper concise-wrapper">
                                <span className="profile-rating">
                                    <span className="highlight-rating">
                                        <img className="star-icon" src={star} alt="star-icon"/>
                                        {props.profileRating}
                                    </span>/5</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 candidate-specifics">
                                <span className="col bold">
                                    <img src={wallet}/>
                                    {props.wage}</span>
                            <span className="col">
                                    <img src={location}/>
                                {props.location}</span>
                            <span className="col">
                                    <img src={heart}/>
                                    <span className="bold">{props.recommendation}</span> Recommendations</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 candidate-highlight">
                                <span className="col bullet">
                                    <span className="highlight">{props.jobsCompleted}</span> Jobs Completed
                                </span>
                    <span className="col bullet">
                                    <span className="highlight">{props.budgetPerc}</span> On Budget
                                </span>
                    <span className="col bullet">
                                    <span className="highlight">{props.hireRate}</span> Repeat Hire Rate
                                </span>
                </div>
            </div>
            <div className="row profile-footer">
                <div className="col-md-12">
                        <span className="label-emp footer-col">
                            <img src={eye}/>
                            {props.profileViews}
                        </span>
                    <span className="label-emp footer-col">
                            <img src={download}/>
                        {props.profileDownloads}
                        </span>
                    <span className="footer-col">
                            <span className="label-emp">Active:</span> {<Moment date={props.lastActive} format={'DD MMM YYYY'}/>}
                        </span>
                    <span className="footer-col">
                            <span className="label-emp">Modified: </span>{<Moment date={props.lastModified} format={'DD MMM YYYY'}/>}
                        </span>
                    <span className="pull-right review">
                            {props.reviewCount} Review
                            <img src={comment}/>
                        </span>
                </div>
            </div>
        </div>
    );
}

export default ConciseProfileCard;
