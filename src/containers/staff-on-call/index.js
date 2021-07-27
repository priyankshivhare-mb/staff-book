import React, { Component } from 'react';
import profilePic from '../../assets/jennifer-profile-pic.jpg';
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
import SentModal from '../common/sentModal';
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { getStaffGallery } from '../../modules/staffGalleryImages';
import { connect } from 'react-redux';

class StaffOnCall extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, shortListData: {} };
        window.scrollTo(0, 0);
    };

    handleCancel = () => {
        this.setState({ showModal: false });
    }

    handleSend = () => {
        this.setState(({ showModal: false }));
    }

    render() {
        // Change slice max limit to display more images
        const imageMap = this.props.staffGalleryImages.filter(img => img.includes('yoga')).slice(0,10);
        const handleShortlist = (shortListData) => {
            this.setState({ showModal: true, shortListData });
        }
        const { profile } = this.props;
        const activeProfile = profile[0];


        return (
            <div className="staff-on-call-wrapper">
                <div className="row staff-head-wrapper">
                    <div className="col-md-8">
                        <h1 className="heading-1">Book Staff On-Call</h1>
                        <p className="staff-breadcrumb">Dashboard/Staff on-call/Request Staff on-call</p>
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
                                { label: 'Humble', value: true},
                                { label: 'Helpful', value: true},
                                { label: 'Energetic', value: true},
                                { label: 'Empathetic', value: true},
                                { label: 'Consciously Evolving', value: true},
                                { label: 'Service-oriented', value: true},
                                { label: 'Team-player', value: true},
                                { label: 'Creative', value: false},
                                { label: 'Innovative', value: false},
                                { label: 'Fun', value: false},
                            ]}/>
                        </div>
                        <div className="col-md-12">
                            <Skills skillSet={['Yoga', 'Vikram Yoga', 'Karma Yoga', 'Swara Yoga', 'Wellness', 'Studio Manager', 'Social Media Manager']}/>
                        </div>
                        <div className="col-md-12">
                            <ProfileBio
                                role={activeProfile.key_skills}
                                fitnessVertical="Yoga / Fitness / Wellness"
                                wage="$25 - $30"
                                negotiable={true}
                            />
                        </div>
                        <div className="col-md-12">
                            <AcademicsCard
                                graduation="Ph.D (Yoga)"
                                certification={
                                    [
                                        'National Academy of Sports Medicine',
                                        '(ISSA) International Sports Science Association'
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
                                attr1="180 posts"
                                attr2="20K followers"
                                attr3="168 following"
                            />
                            <SocialCard
                                icon={facebook}
                                username="jennifer_long"
                                attr1="1.8K Likes"
                                attr2="1K Followers"
                                attr3="118 Posts"
                            />
                            <SocialCard
                                icon={twitter}
                                username="@jennifer_long"
                                attr1="112 Tweets"
                                attr2="981 followers"
                                attr3="65 following"
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
                { this.state.showModal && <SentModal
                handleClose={this.handleSend}
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
