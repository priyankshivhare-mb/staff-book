import React from 'react';

import Sidebar from './sidebar';

import './styles.scss';
import SearchProfileCard from '../common/searchProfileCard';
import { bindActionCreators } from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from "react-redux";

class StaffListing extends React.Component {
  render() {
    const { profile } = this.props;
    console.log(profile);

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
            {
              profile.map(profileData => (
                  <SearchProfileCard
                      toLink="/recommended-profiles"
                      profileScore={90}
                      profilePic={profileData.img_url}
                      name={profileData.name}
                      profileRating={profileData.rating}
                      recommendation={8}
                      wage={profileData.salary + '/yr'}
                      location={profileData.location}
                      currentJob={profileData.recommended_for}
                      experience={profileData.experience}
                      keySkills={profileData.key_skills}
                      fitnessVertical="Beauty / Fitness / Spa Services"
                      jobsCompleted="98%"
                      budgetPerc="85%"
                      hireRate="60%"
                      profileViews={profileData.views}
                      profileDownloads={2}
                      lastActive={profileData.active_date}
                      lastModified="28 Feb 2020"
                      reviewCount={profileData.reviews}
                  />
              ))
            }
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
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffListing);
