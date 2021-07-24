import React from 'react'
import star from '../../assets/icons/star.png';
import wallet from '../../assets/icons/wallet.png';
import location from '../../assets/icons/location.png';
import heart from '../../assets/icons/heart.png';
import eye from '../../assets/icons/eye.png';
import download from '../../assets/icons/download.png';
import comment from '../../assets/icons/comment.png';
import email from '../../assets/icons/email.png';
import mobile from '../../assets/icons/mobile.png';
import verified from '../../assets/icons/verified.png';
import employees from '../../assets/icons/employees.png';
import Moment from 'react-moment';

const ProfileCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 profile-view-wrapper">
                <div className="row profile-main">
                    <div className="col-md-2">
                        <div className="row">
                            <img src={props.profilePic} className="img-responsive"/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>{props.name}</h3>
                                <h4>{props.currentJob}</h4>
                            </div>
                            {!props.isBrand && <div className="col-md-6 profile-score-wrapper">
                                <span className="profile-rating">
                                    <span className="highlight-rating">
                                        <img className="star-icon" src={star} alt="star-icon"/>
                                        {props.profileRating}
                                    </span>/5</span>
                                <span className="profile-rating-sub-details">
                                    Based on 200 ratings <br/> 20 times rated 5 stars</span>
                            </div>}
                        </div>
                        <div className="row">
                            <div className={`col-md-12 candidate-specifics ${props.isBrand ? 'brand-details' : ''}`}>
                                {!props.isBrand && <span className="col bold">
                                    <img src={wallet} />
                                    {props.wage}</span> }
                                <span className="col">
                                    <img src={location} />
                                    {props.location}</span>
                                {!props.isBrand && <span className="col">
                                    <img src={heart} />
                                    <span className="bold">{props.recommendation}</span> Recommendations</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-md-12 candidate-specifics ${props.isBrand ? 'brand-details' : ''}`}>
                                <span className="col">
                                    <img src={email} />
                                    {props.email}</span>
                                { props.emailVerified && <span>
                                    <img className="verified-icon" src={verified} />
                                </span> }
                                <span className="col">
                                    <img src={mobile} />
                                    {props.mobile}</span>
                                {props.mobileVerified && <span>
                                    <img className="verified-icon" src={verified} />
                                </span> }
                            </div>
                        </div>
                        {!props.isBrand && <div className="row">
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
                        </div>}
                    </div>
                </div>
                {!props.isBrand && <div className="row">
                    <div className="col-md-12 bio-wrapper">
                        {props.bio}
                    </div>
                </div>}
                <div className="row profile-footer">
                    <div className="col-md-12">
                        {props.isBrand && <span className="footer-col">
                            <img src={employees} />
                            300+ employees
                        </span>}
                        <span className="label-emp footer-col">
                            <img src={eye} />
                            {props.profileViews}
                        </span>
                        {!props.isBrand && <span className="label-emp footer-col">
                            <img src={download} />
                            {props.profileDownloads}
                        </span>}
                        <span className="footer-col">
                            <span className="label-emp">Active:</span> {<Moment date={props.lastActive} format={'ddd, Do MMM'}/>}
                        </span>
                        {!props.isBrand && <span className="footer-col">
                            <span className="label-emp">Modified: </span>{<Moment date={props.lastModified} format={'ddd, Do MMM'}/>}
                        </span>}
                        <span className="pull-right review">
                            {props.reviewCount} Review
                            <img src={comment} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
