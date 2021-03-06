import React, { Component } from 'react';
import powerFitnessLogo from '../../assets/power-fitness-logo.png';
import instagram from '../../assets/icons/instagram-large.png';
import twitter from '../../assets/icons/twitter-large.png';
import facebook from '../../assets/icons/facebook-large.png';
import thumbsUp from '../../assets/icons/thumbs-up.png';
import thumbsDown from '../../assets/icons/thumbs-down.png';
import ProfileCard from '../common/profileCard';
import AppointmentRequestCard from '../common/appointmentRequestCard';
import Gallery from '../common/gallery';
import AboutCompanyCard from '../common/aboutCompanyCard';
import SocialCard from '../common/socialCard';
import CoreValueMatch from '../common/coreValueMatch';
import CompanySnapshot from '../common/companySnapshot';
import EmployeeBenefitCard from '../common/employeeBenefitCard';
import OtherLocationCards from '../common/otherLocationsCard';
import SentModal from '../common/sentModal';
import CurrentOpenings from '../common/currentOpenings';
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { getStaffGallery } from '../../modules/staffGalleryImages';
import { connect } from 'react-redux';

class StaffDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { showSentEmailModal: false, shortListData: {}, activeLink: 'overview' }
    };

    handleSend = () => {
        this.setState(({ showSentEmailModal: true }));
    }

    handleSentModalClose = () => {
        this.setState(({ showSentEmailModal: false }));
    }

    handleNavClick = (e, link) => {
        e.preventDefault();
        this.setState({ activeLink: link });
        window.location.href = '#'+link;
    }

    render() {
        // Change slice max limit to display more images
        const imageMap = this.props.staffGalleryImages.filter(img => img.includes('gym')).slice(0,10);
        const { activeLink } = this.state;

        return (
            <div className="staff-on-call-wrapper">
                <div className="row staff-head-wrapper">
                    <div className="col-md-8">
                        <h1 className="heading-1">Studio Profile - Power Fitness</h1>
                        <p className="staff-breadcrumb">Dashboard/Employers/Power Fitness</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-light pull-right">Share With Friends</button>
                        <div className="pull-right profile-selection-wrapper">
                            <img src={thumbsUp} className="img-responsive thumbs-up"/>
                            <img src={thumbsDown} className="img-responsive thumbs-down"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="col-md-12">
                            <ProfileCard
                                profilePic={powerFitnessLogo}
                                name="Power Fitness"
                                profileRating={4.3}
                                recommendation={8}
                                isBrand={true}
                                wage="$12000 /yr"
                                location="Holly Street, East Walnut Street, Pasadena, Los Angeles, CA, United States"
                                currentJob="The Fitness Institute"
                                email="power_fitness@gmail.com"
                                emailVerified={true}
                                mobile="+1 (234) 234 567"
                                mobileVerified={true}
                                jobsCompleted="98%"
                                budgetPerc="85%"
                                hireRate="60%"
                                bio="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
                                profileViews={10}
                                profileDownloads={2}
                                lastActive="11 Mar 2020"
                                lastModified="28 Feb 2020"
                                reviewCount={25}
                            />
                        </div>
                        <div className="col-md-12">
                            <div className="row staff-nav-wrapper">
                                <div className="col-md-12">
                                    <ul>
                                        <li className={activeLink === 'overview' ? 'active' : ''}><a href="#" onClick={(e) => this.handleNavClick(e, 'overview')}>Overview</a></li>
                                        <li className={activeLink === 'studio-values' ? 'active' : ''}><a href="#" onClick={(e) => this.handleNavClick(e, 'studio-values')}>Studio Values</a></li>
                                        <li className={activeLink === 'about-studio' ? 'active' : ''}><a href="#" onClick={(e) => this.handleNavClick(e, 'about-studio')}>About Studio</a></li>
                                        <li className={activeLink === 'gallery' ? 'active' : ''}><a href="#" onClick={(e) => this.handleNavClick(e, 'gallery')}>Gallery</a></li>
                                        <li className={activeLink === 'current-openings' ? 'active' : ''}><a href="#" onClick={(e) => this.handleNavClick(e, 'current-openings')}>Current Openings</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" id="overview">
                            <CompanySnapshot
                                studioName="Power Fitness"
                            />
                        </div>
                        <div className="col-md-12" id="studio-values">
                            <CoreValueMatch
                                label="Power Fitness"
                                valueData={[
                                { label: 'Community Driven', value: true},
                                { label: 'Respectful', value: true},
                                { label: 'Proactive', value: true},
                                { label: 'Committed to Wellness', value: true},
                                { label: 'Humble', value: true},
                                { label: 'Helpful', value: true},
                                { label: 'Empathetic', value: true},
                                { label: 'Consciously Evolving', value: true},
                                { label: 'Service-oriented', value: true},
                                { label: 'Team-player', value: true},
                                { label: 'Creative', value: false},
                                { label: 'Innovative', value: false},
                                { label: 'Fun', value: false},
                                { label: 'Energetic', value: false}
                            ]}/>
                        </div>
                        <div className="col-md-12" id="about-studio">
                            <AboutCompanyCard
                                studioName="Power Fitness"
                                aboutStudio="Power Fitness International, Inc. is an American chain of international co-ed fitness centers originally started by Joe Paul in Venice Beach, California. Each gym offers a variety of cardio and strength training equipment as well as group exercise programs. Its headquarters have since relocated to Dallas."
                                workLifeBalance="82%"
                                compensation="89%"
                                jobSecurity="99%"
                            />
                        </div>
                        <div className="col-md-12" id="gallery">
                            <Gallery imageData={imageMap}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <AppointmentRequestCard
                                studioName="Power Fitness"
                                location="Los Angeles, CA"
                                date="Monday, August 2, 2021"
                                time="2:00 PM - 3:00 PM"
                                onClick={this.handleSend}
                            />
                        </div>
                        <div className="col-md-12">
                            <EmployeeBenefitCard />
                        </div>
                        <div className="col-md-12">
                            <OtherLocationCards />
                        </div>
                        <div className="col-md-12">
                            <h3 className="heading-3">Social Profile</h3>
                            <SocialCard
                                icon={instagram}
                                username="@power_fitness"
                                attr1="1.2K posts"
                                attr2="1M followers"
                                attr3="231 following"
                            />
                            <SocialCard
                                icon={facebook}
                                username="power_fitness"
                                attr1="10M Likes"
                                attr2="1.2M Followers"
                                attr3="681 Posts"
                            />
                            <SocialCard
                                icon={twitter}
                                username="@power_fitness"
                                attr1="125 Tweets"
                                attr2="12K followers"
                                attr3="110 following"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id="current-openings">
                        <h3 className="heading-3">Current Openings <span className="pull-right">View All</span></h3>
                        <div className="row">
                            <div className="col-md-4">
                                <CurrentOpenings
                                    position="Salon Manager"
                                    experience="5-8 Years"
                                    wage="$82,000 PA"
                                    location="L.A."
                                    isHot={false}
                                    keySkills="Beauty, Salon Managerstong, Back end operations, Team handling"
                                />
                            </div>
                            <div className="col-md-4">
                                <CurrentOpenings
                                    position="Salon and Beauty Expert"
                                    experience="5-8 Years"
                                    wage="$75,000 PA"
                                    location="L.A."
                                    isHot={true}
                                    keySkills="Beauty, Salon Managerstong, Client coordination Customer service, Team handling"
                                />
                            </div>
                            <div className="col-md-4">
                                <CurrentOpenings
                                    position="Hair Spa Expert"
                                    experience="5-8 Years"
                                    wage="$50,000 PA"
                                    location="L.A."
                                    isHot={true}
                                    keySkills="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.showSentEmailModal && <SentModal
                    handleClose={this.handleSentModalClose}
                    primaryMessage="Your confirmation has been successfully sent!"
                    secondaryMessage="You will receive meeting invite soon."
                />
                }
            </div>
        );
    }
};


const mapStateToProps = ({ profile, staffGalleryImages }) => ({
    profile,
    staffGalleryImages
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUserProfiles,
            getStaffGallery
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffDashboard)
