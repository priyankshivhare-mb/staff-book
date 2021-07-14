import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter'

import DashboardWidget from '../../containers/dashboard/dashboardWidget';

import staffProfiles from '../../fixtures/staffProfiles.json';
import RequestStaffOnCallWidget from './widgets/requestStaffOnCallWidget';
import BookedStaffOnCallWidget from './widgets/bookedStaffOnCallWidget';
import StaffWaitlistWidget from './widgets/staffWaitlistWidget';


const Home = props => {
  return(
    <div className="container-fluid">
      <div className="row dashboard-heading">
        <div className="col-sm-6">
          <div className="welcome">
            Welcome John!
          </div>
        </div>
        <div className="col-sm-6">
          <div className="float-right">
            <button className="btn btn-primary add-post-button">
              Create Job Posting
            </button>
          </div>
        </div>
      </div>

      <div className="row dashboard-metrics">
        <div className="col">a</div>
        <div className="col">a</div>
        <div className="col">a</div>
        <div className="col">a</div>
        <div className="col">a</div>
      </div>

      <div className="row widgets">
        <div className="col-sm">
          <RequestStaffOnCallWidget />
        </div>
        <div className="col-sm">
          <BookedStaffOnCallWidget />
        </div>
        <div className="col-sm">
          <StaffWaitlistWidget />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({counter}) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
      bindActionCreators(
        {
          increment,
          incrementAsync,
          decrement,
          decrementAsync,
          changePage: () => push('/about-us')
        },
        dispatch
      )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
