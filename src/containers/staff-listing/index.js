import React from 'react';

import Sidebar from './sidebar';

import './styles.scss';
import profilePic2 from '../../assets/placeholder-image-2.png';
import SearchProfileCard from '../common/searchProfileCard';

class StaffListing extends React.Component {
  render() {
    return (
      <div className="container-fluid search-profiles">
        <div className="row header">
          <div className="col-12">
            <div className="staff-on-call-wrapper p-0">
              <div className="row staff-head-wrapper">
                <div className="col-md-4 p-0">
                  <h1 className="heading-1">Book Staff On Call</h1>
                  <p className="staff-breadcrumb">Dashboard / Staff on Call / Book Staff-on call</p>
                </div>
                <div className="col-md-8">
                  <input placeholder="Search" className="float-right vertical-center"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <SearchProfileCard
                toLink="/recommended-profiles"
                profilePic={profilePic2}
                name="Marvin McKinney"
                profileRating={4.3}
                recommendation={8}
                wage="$12000 /yr"
                location="Philadelphia"
                currentJob="Salon Manager"
                experience="6yr 2m"
                keySkills="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
                fitnessVertical="Beauty / Fitness / Spa Services"
                jobsCompleted="98%"
                budgetPerc="85%"
                hireRate="60%"
                profileViews={10}
                profileDownloads={2}
                lastActive="11 Mar 2020"
                lastModified="28 Feb 2020"
                reviewCount={25}
            />
            <SearchProfileCard
                toLink="/recommended-profiles"
                profilePic={profilePic2}
                name="Marvin McKinney"
                profileRating={4.3}
                recommendation={8}
                wage="$12000 /yr"
                location="Philadelphia"
                currentJob="Salon Manager"
                experience="6yr 2m"
                keySkills="Beauty, Salon Managerstong, Back end operations, Client coordination Customer service, Team handling, Client servicing, Hair spa, Good communication skills, Safety regulations"
                fitnessVertical="Beauty / Fitness / Spa Services"
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

export default StaffListing;
