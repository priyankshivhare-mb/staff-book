import React from 'react';

import Sidebar from './sidebar';
import SortByDropdown from '../../containers/common/sortByDropdown';
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
                <div className="col-md-2" />
                <div className="col-md-6 p-0">
                  <div className="float-right d-inline-block pt-3">

                    <div className="form-inline">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-search"/></span>
                        </div>
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                      </div>

                      <SortByDropdown />
                    </div>
                  </div>
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
                      profileScore={profileData.profile_score}
                      profilePic={profileData.img_url}
                      name={profileData.name}
                      profileRating={profileData.rating}
                      recommendation={8}
                      wage={'$'+profileData.hourly_rate + '/hr'}
                      location={profileData.location}
                      currentJob={profileData.recommended_for}
                      experience={profileData.experience}
                      keySkills={profileData.key_skills}
                      fitnessVertical="Yoga / Fitness / Wellness"
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
