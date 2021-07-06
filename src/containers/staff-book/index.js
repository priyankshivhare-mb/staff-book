import React, {Component} from 'react'
import profilePic from '../../assets/placeholder-image.png';
import ProfileCard from '../common/profileCard';

class StaffBook extends Component {
    render() {
        return (
            <>

                <ProfileCard
                    profilePic={profilePic}
                    name="Marvin McKinney"
                    profileScore={90}
                    employmentScore={70}
                    experience="6y 2m"
                    wage="$12000 /yr"
                    location="Philadelphia"
                    currentJob="Salon Manager - Beauty and Spa @ Chenz Salons and Spa Studio"
                    keySkills="Beauty / Fitness / Spa Services"
                    secondarySkills="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
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
                    profileScore={90}
                    employmentScore={70}
                    experience="6y 2m"
                    wage="$20 /hr"
                    location="Philadelphia"
                    currentJob="Salon Manager - Beauty and Spa @ Chenz Salons and Spa Studio"
                    keySkills="Beauty / Fitness / Spa Services"
                    secondarySkills="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
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

export default StaffBook;
