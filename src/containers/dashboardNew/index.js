import React from 'react';

import ShortProfileCard from '../common/shortProfileCard.js';
import DashboardWidget from '../../containers/dashboard/dashboardWidget.js';

import staffProfiles from '../../fixtures/staffProfiles.json';

const Dashboard = () => (
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

    <div className="row">
      <div className="col-sm">
        <DashboardWidget
          title="Request Staff On Call"
          toLink="#"
          badgeText="20 Profiles"
        >
          <ShortProfileCard {...staffProfiles[1]} />
        </DashboardWidget>
      </div>
      <div className="col-sm">
        <DashboardWidget
          title="Booked Staff on Call"
          toLink="#"
          badgeText="20 Bookings"
        >
          <div>ASD</div>
        </DashboardWidget>
      </div>
      <div className="col-sm">
        <DashboardWidget
          title="Staff Waitlist"
          toLink="#"
          badgeText="10 Profiles"
        >
          <div>ASD</div>
        </DashboardWidget>
      </div>
    </div>
  </div>
);

export default Dashboard;
