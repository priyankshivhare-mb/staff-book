import React, {Component} from 'react';
import profilePic from '../../assets/placeholder-image.png';
import profilePic2 from '../../assets/placeholder-image-2.png';
import twitter from '../../assets/icons/twitter.png';
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
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { getStaffGallery } from '../../modules/staffGalleryImages';
import { connect } from 'react-redux';

class StaffOnCall extends Component {
    render() {
        const imageMap = this.props.staffGalleryImages;
        const handleShortlist = (shortListData) => {
            console.log(shortListData);
        }

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
                                name="Marvin McKinney"
                                profileRating={4.3}
                                recommendation={8}
                                wage="$12000 /yr"
                                location="Philadelphia"
                                currentJob="Salon Manager"
                                email="courtney@gmail.com"
                                mobile="+1 (234) 234 567"
                                whatsapp="+1 (234) 234 567"
                                jobsCompleted="98%"
                                budgetPerc="85%"
                                hireRate="60%"
                                bio="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
                                profileViews={10}
                                profileDownloads={2}
                                lastActive="11 Mar 2020"
                                lastModified="28 Feb 2020"
                                reviewCount={25}
                                isConcise={false}
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
                            <Skills skillSet={['Beauty', 'Salon', 'Social Media', 'Beauty', 'Salon', 'Social Media']}/>
                        </div>
                        <div className="col-md-12">
                            <ProfileBio
                                role="Personal Fitness Trainer, Yoga Instructor"
                                fitnessVertical="Yoga"
                                wage="$25 - $30"
                                negotiable={true}
                            />
                        </div>
                        <div className="col-md-12">
                            <AcademicsCard
                                graduation="Ph.D (Yoga)"
                                certification={
                                    ['National Academy of Sports Medicine',
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
                                icon={twitter}
                                username="courtney_henry"
                                attr1="200 posts"
                                attr2="200 followers"
                                attr3="20 following"
                            />
                            <SocialCard
                                icon={twitter}
                                username="courtney_henry"
                                attr1="200 posts"
                                attr2="200 followers"
                                attr3="20 following"
                            />
                            <SocialCard
                                icon={twitter}
                                username="courtney_henry"
                                attr1="200 posts"
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
                            profilePic={profilePic2}
                            name="Marvin McKinney"
                            profileRating={4.3}
                            recommendation={8}
                            wage="$12000 /yr"
                            location="Philadelphia"
                            currentJob="Salon Manager"
                            jobsCompleted="98%"
                            budgetPerc="85%"
                            hireRate="60%"
                            profileViews={10}
                            profileDownloads={2}
                            lastActive="11 Mar 2020"
                            lastModified="28 Feb 2020"
                            reviewCount={25}
                        />
                    </div>
                    <div className="col-md-6">
                        <ConciseProfileCard
                            profilePic={profilePic2}
                            name="Marvin McKinney"
                            profileRating={4.3}
                            recommendation={8}
                            wage="$12000 /yr"
                            location="Philadelphia"
                            currentJob="Salon Manager"
                            jobsCompleted="98%"
                            budgetPerc="85%"
                            hireRate="60%"
                            profileViews={10}
                            profileDownloads={2}
                            lastActive="11 Mar 2020"
                            lastModified="28 Feb 2020"
                            reviewCount={25}
                        />
                    </div>
                </div>
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
