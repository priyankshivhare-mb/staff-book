import React, {Component} from 'react';
import profilePic from '../../assets/placeholder-image.png';
import ProfileCard from '../common/profileCard';
import Gallery from '../common/gallery';
import Skills from '../common/skills';
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from 'react-redux';

class StaffOnCall extends Component {
    render() {
        const imageMap = this.props.profile.map(profile => profile['img_url']);

        return (
            <div className="staff-on-call-wrapper">
                <div className="row staff-head-wrapper">
                    <div className="col-md-8">
                        <h1 className="heading-1">Request Staff On Call</h1>
                        <p className="staff-breadcrumb">Dashboard/Staff on Call/Request Staff on Call</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-light pull-right">Download Resume</button>
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
                            />
                        </div>
                        <div className="col-md-12">
                            <Skills skillSet={['Beauty', 'Salon', 'Social Media', 'Beauty', 'Salon', 'Social Media']}/>
                        </div>
                        <div className="col-md-12">
                            <h3>Profile</h3>
                        </div>
                        <div className="col-md-12">
                            <h3>Education and Certification</h3>
                        </div>
                        <div className="col-md-12">
                            <Gallery imageData={imageMap}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <h3>Booking Request</h3>
                        </div>
                        <div className="col-md-12">
                            <h3>Social Profile</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    Profiles
                </div>
            </div>
        );
    }
};


const mapStateToProps = ({profile}) => ({
    profile: profile,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUserProfiles
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffOnCall)
