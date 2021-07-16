import React from 'react';
import { bindActionCreators } from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from 'react-redux';

import RequestStaffOnCallWidget from './widgets/requestStaffOnCallWidget';
import BookedStaffOnCallWidget from './widgets/bookedStaffOnCallWidget';
import StaffWaitlistWidget from './widgets/staffWaitlistWidget';


const Home = props => {
  const { profiles, getUserProfiles } = props;

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
        <div className="col-md-12">
          <div className="row">
            <div className="col"><div className="box-shadow">im content</div></div>
            <div className="col"><div className="box-shadow">im content</div></div>
            <div className="col"><div className="box-shadow">im content</div></div>
            <div className="col"><div className="box-shadow">im content</div></div>
            <div className="col"><div className="box-shadow">im content</div></div>
          </div>
        </div>
      </div>

      <div className="row widgets">
        <div className="col-sm">
          <RequestStaffOnCallWidget profiles={profiles} />
        </div>
        <div className="col-sm">
          <BookedStaffOnCallWidget profiles={profiles} />
        </div>
        <div className="col-sm">
          <StaffWaitlistWidget profiles={profiles} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({profile}) => ({
    profiles: profile,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUserProfiles
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
