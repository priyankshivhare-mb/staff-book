import React from 'react';

import Sidebar from './sidebar';
import SortByDropdown from '../../containers/common/sortByDropdown';
import './styles.scss';
import SearchProfileCard from '../common/searchProfileCard';
import { bindActionCreators } from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from "react-redux";

const filterOptions = {
  vertical: [
    { value: 'fitness', label: 'Fitness' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'beauty', label: 'Beauty' }
  ],
  role: [
    { value: 'yoga trainer', label: 'Yoga Instructor' },
    { value: 'physiotherapist', label: 'Physiotherapist' },
    { value: 'sales specialist', label: 'Sales Specialist' },
    { value: 'gym trainer', label: 'Gym Trainer' }
  ],
  hourlyRate: [
    { value: '0-10', label: '$0-10' },
    { value: '10-20', label: '$10-20' },
    { value: '20-30', label: '$20-30' },
  ],
  keySkills: [
    {value: 'vikram yoga', label: 'Vikram Yoga'},
    {value: 'raja yoga', label: 'Raja Yoga'},
    {value: 'triathlete', label: 'Triathlete'},
    {value: 'fitness trainer', label: 'Fitness Trainer'},
  ],
  distance: [
    {value: '<5', label: 'Less than 5'},
    {value: '5-10', label: '5 - 10'},
    {value: '10+', label: '10+'},
  ],
  activeFrom: [
    {value: '<30', label: 'Less than 30 days'},
    {value: '30-60', label: '30 - 60 days'},
    {value: '60+', label: '60+ days'},
  ],
  timeSlot: [
  ]
};

class StaffListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterValues: {
        vertical: 'Wellness',
        role: 'Yoga Instructor',
        hourlyRate: '$20-30',
        keySkills: '',
        activeFrom: '30 - 60 days',
        timeSlot: '',
        distance: '5 - 10'
      },
      currentListing: props.profiles.filter((profile, idx) => {
        if(idx !== 0){
          return profile;
        }
      })
    };

    window.scrollTo(0, 0);
  }

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });

    this.filterProfiles();
  }

  filterProfiles = () => {
    const { profiles } = this.props;
    const { searchTerm, filterValues } = this.state;

    // let filteredProfiles = profiles.filter(profileData => (
    //   profileData['key_skills'].toLowerCase().includes(searchTerm.toLowerCase())
    // ));
    // this.setState({currentListing: filteredProfiles});

    // const filterMap = {
    //   vertical: 'vertical',
    //   role: 'recommended_for',
    //   keySkills: 'key_skills'
    // };


    // for (let [filterName, value] of Object.entries(filterValues)) {
    //   filterName = filterMap[filterName] || '';

    //   if (!filterName) {
    //     continue;
    //   }

    //   filteredProfiles = filteredProfiles.filter(profileData => (
    //     profileData[filterName].toLowerCase().includes(value.toLowerCase())
    //   ));
    // }

    this.setState({currentListing: profiles});
  }

  handleFilterChange = (filterValue, e) => {
    const { filterValues } = this.state;

    this.setState({
      filterValues: {
        ...filterValues,
        [filterValue]: e.value
      }
    });

    this.filterProfiles();
  }

  render() {
    const { profiles } = this.props;
    const { searchTerm, filterValues, currentListing } = this.state;

    return (
      <div className="container-fluid search-profiles">
        <div className="row header">
          <div className="col-12">
            <div className="staff-on-call-wrapper p-0">
              <div className="row staff-head-wrapper">
                <div className="col-md-4 p-0">
                  <h1 className="heading-1">Book Staff On-Call</h1>
                  <p className="staff-breadcrumb">Dashboard / Book Staff on-call / Book Staff on-call</p>
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
                            value={searchTerm}
                            onChange={this.handleSearch}
                            type="text"
                            placeholder="Search by Skills"
                            className="form-control search-input"
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
            <Sidebar
              onChange={this.handleFilterChange}
              filterValues={filterValues}
              filterOptions={filterOptions}
            />
          </div>
          <div className="col-9">
            {
              currentListing.map(profileData => {
                const {
                  profile_score, img_url, name, rating, hourly_rate,
                  recommended_for, experience, key_skills,
                  views, active_date, reviews, location, downloads,
                  recommendations = 8,
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
                    recommendation={recommendations}
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
                    profileDownloads={downloads}
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

const mapStateToProps = ({ profile: profiles, staffGalleryImages }) => ({
  profiles,
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
