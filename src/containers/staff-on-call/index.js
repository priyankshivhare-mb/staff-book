import React, { Component } from 'react';
import profilePic from '../../assets/jennifer-profile-pic.jpg';
import profilePic2 from '../../assets/placeholder-image-2.png';
import instagram from '../../assets/icons/instagram-large.png';
import facebook from '../../assets/icons/facebook-large.png';
import twitter from '../../assets/icons/twitter-large.png';
import thumbsUp from '../../assets/icons/thumbs-up.png';
import thumbsDown from '../../assets/icons/thumbs-down.png';
import ProfileCard from '../common/profileCard';
import ConciseProfileCard from '../common/conciseProfileCard';
import Gallery from '../common/gallery';
import Skills from '../common/skills';
import SocialCard from '../common/socialCard';
import CoreValueMatch from '../common/coreValueMatch';
import AppointmentCard from '../common/appointmentCard';
import ProfileBio from '../common/profileBio';
import AcademicsCard from '../common/academicsCard';
import AppointmentModal from './appointmentModal';
import SentModal from '../common/sentModal';
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { getStaffGallery } from '../../modules/staffGalleryImages';
import { connect } from 'react-redux';

class StaffOnCall extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, showSentEmailModal: false, shortListData: {} }
    };

    handleCancel = () => {
        this.setState({ showModal: false });
    }

    handleSend = () => {
        this.setState(({ showModal: false, showSentEmailModal: true }));
    }

    handleSentModalClose = () => {
        this.setState(({ showSentEmailModal: false }));
    }

    render() {
        const imageMap = this.props.staffGalleryImages;
        const handleShortlist = (shortListData) => {
            this.setState({ showModal: true, shortListData });
        }
        const { profile } = this.props;
        const activeProfile = profile[0];


        return (
            <div className="staff-on-call-wrapper">
                <div className="row staff-head-wrapper">
                    <div className="col-md-8">
                        <h1 className="heading-1">Request Staff On Call</h1>
                        <p className="staff-breadcrumb">Dashboard/Staff on Call/Request Staff on Call</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-light pull-right">Download Resume</button>
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
                                profilePic={profilePic}
                                name={activeProfile.name}
                                profileRating={activeProfile.rating}
                                recommendation={8}
                                wage={'$'+activeProfile.hourly_rate + '/hr'}
                                location={activeProfile.location}
                                currentJob={activeProfile.recommended_for}
                                email="jennifer_long@gmail.com"
                                emailVerified={true}
                                mobile="+1 (234) 234 567"
                                mobileVerified={true}
                                jobsCompleted="98%"
                                budgetPerc="85%"
                                hireRate="60%"
                                bio={activeProfile.about_me}
                                profileViews={activeProfile.views}
                                profileDownloads={2}
                                lastActive={activeProfile.active_date}
                                lastModified="28 Feb 2020"
                                reviewCount={25}
                            />
                        </div>
                        <div className="col-md-12">
                            <CoreValueMatch valueData={[
                                { label: 'Community Driven', value: true},
                                { label: 'Respectful', value: true},
                                { label: 'Proactive', value: true},
                                { label: 'Committed to Wellness', value: true},
                                { label: 'Humble', value: false},
                                { label: 'Helpful', value: true},
                                { label: 'Empathetic', value: false},
                                { label: 'Consciously Evolving', value: true},
                                { label: 'Service-oriented', value: true},
                                { label: 'Team-player', value: true},
                                { label: 'Creative', value: false},
                                { label: 'Innovative', value: true},
                                { label: 'Fun', value: true},
                                { label: 'Energetic', value: true}
                            ]}/>
                        </div>
                        <div className="col-md-12">
                            <Skills skillSet={['Beauty', 'Salon', 'Pedicure', 'Salon Manager']}/>
                        </div>
                        <div className="col-md-12">
                            <ProfileBio
                                role={activeProfile.key_skills}
                                fitnessVertical="Beauty / Fitness / Spa Services"
                                wage="$25 - $30"
                                negotiable={true}
                            />
                        </div>
                        <div className="col-md-12">
                            <AcademicsCard
                                graduation="BA (Fashion)"
                                certification={
                                    ['(FIDM) Fashion Institute of Design and Merchandising'
                                    ]}
                            />
                        </div>
                        <div className="col-md-12">
                            <Gallery imageData={imageMap}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <AppointmentCard handleShortlist={handleShortlist}/>
                        </div>
                        <div className="col-md-12">
                            <h3 className="heading-3">Social Profile</h3>
                            <SocialCard
                                icon={instagram}
                                username="@jennifer_long"
                                attr1="200 posts"
                                attr2="200 followers"
                                attr3="20 following"
                            />
                            <SocialCard
                                icon={facebook}
                                username="jennifer_long"
                                attr1="20M Likes"
                                attr2="200 Followers"
                                attr3="20 Posts"
                            />
                            <SocialCard
                                icon={twitter}
                                username="@jennifer_long"
                                attr1="20 Tweets"
                                attr2="200 followers"
                                attr3="20 following"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="heading-3">Similar Profiles <span className="pull-right">View All</span></h3>
                    </div>
                    <div className="col-md-6">
                        <ConciseProfileCard
                            profilePic={profile[1].img_url}
                            name={profile[1].name}
                            profileRating={profile[1].rating}
                            recommendation={8}
                            wage={'$'+profile[1].hourly_rate+'/hr'}
                            location={profile[1].location}
                            currentJob={profile[1].recommended_for}
                            jobsCompleted="98%"
                            budgetPerc="85%"
                            hireRate="60%"
                            profileViews={profile[1].views}
                            profileDownloads={profile[1].downloads}
                            lastActive={profile[1].active_date}
                            lastModified="28 Feb 2020"
                            reviewCount={profile[1].reviews}
                        />
                    </div>
                    <div className="col-md-6">
                        <ConciseProfileCard
                            profilePic={profile[2].img_url}
                            name={profile[2].name}
                            profileRating={profile[2].rating}
                            recommendation={8}
                            wage={'$'+profile[2].hourly_rate+'/hr'}
                            location={profile[2].location}
                            currentJob={profile[2].recommended_for}
                            jobsCompleted="98%"
                            budgetPerc="85%"
                            hireRate="60%"
                            profileViews={profile[2].views}
                            profileDownloads={profile[2].downloads}
                            lastActive={profile[2].active_date}
                            lastModified="28 Feb 2020"
                            reviewCount={profile[2].reviews}
                        />
                    </div>
                </div>
                { this.state.showModal && <AppointmentModal
                    from="Ganesh Borse <ganesh.borse@mindbodyonline.com"
                    to="Palak Shivhare <palak.shivhare@mindbodyonline.com"
                    subject="Some subject"
                    body="email body"
                    startDate="12/07/2021"
                    endDate="12/07/2021"
                    handleCancel={this.handleCancel}
                    handleSend={this.handleSend}
                    shortListData={this.state.shortListData}
                /> }
                { this.state.showSentEmailModal && <SentModal
                handleClose={this.handleSentModalClose}
                primaryMessage="Your request has been sent successfully"
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
)(StaffOnCall)
