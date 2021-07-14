import React, {Component} from 'react';
import profilePic from '../../assets/placeholder-image.png';
import profilePic2 from '../../assets/placeholder-image-2.png';
import ProfileCard from '../common/profileCard';
import {bindActionCreators} from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from 'react-redux';

class StaffBook extends Component {
    render() {
        console.log(this.props.profile);
        return (
            <>
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


                <ProfileCard
                    isHighlighted={true}
                    profilePic={profilePic}
                    name="Leslie Alexandar"
                    profileRating={4.5}
                    recommendation={4}
                    wage="$20 /hr"
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
            </>
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
)(StaffBook)
