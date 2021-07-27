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

    return (
      <div className="container-fluid search-profiles">
        <div className="row header">
          <div className="col-12">
            <div className="staff-on-call-wrapper p-0">
              <div className="row staff-head-wrapper">
                <div className="col-md-4 p-0">
                  <h1 className="heading-1">Book Staff On-Call</h1>
                  <p className="staff-breadcrumb">Dashboard / Book Staff on Call / Book Staff on-call</p>
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
                          placeholder="Search by Name, Skills"
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
              profile.map(profileData => {
                const {
                  profile_score, img_url, name, rating, hourly_rate,
                  elocation, recommended_for, experience, key_skills,
                  views, active_date, reviews, location,
                  modified_date = "28 Feb 2020",
                  jobs_completed = "98",
                  budget_perc = "82",
                  hire_rate = "79",
                  core_values = "93",
                } = profileData;
                return (
                  <SearchProfileCard
                    toLink="/recommended-profiles"
                    profileScore={profile_score}
                    profilePic={img_url}
                    name={name}
                    profileRating={rating}
                    recommendation={8}
                    wage={'$'+hourly_rate + '/hr'}
                    location={location}
                    currentJob={recommended_for}
                    experience={experience}
                    keySkills={key_skills}
                    fitnessVertical="Yoga / Fitness / Wellness"
                    jobsCompleted={`${jobs_completed}%`}
                    budgetPerc={`${budget_perc}%`}
                    hireRate={`${hire_rate}%`}
                    coreValues={`${core_values}%`}
                    profileViews={views}
                    profileDownloads={2}
                    lastActive={active_date}
                    lastModified={modified_date}
                    reviewCount={reviews}
                  />
                );
              })
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
