import React from 'react';
import { bindActionCreators } from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { connect } from 'react-redux';

import DashboardWidget from './dashboardWidget';
import ShortProfileCard from './shortProfileCard';
import DashboardSmallWidget from './dashboardSmallWdiget';
import FunnelWidget from './funnelWidget';

// Icons
import { ReactComponent as ThreeUsers } from '../../assets/icons/users-three.svg';
import { ReactComponent as GraphUp } from '../../assets/icons/graph-up.svg';
import { ReactComponent as UserScan } from '../../assets/icons/user-scan.svg';
import { ReactComponent as UserBag } from '../../assets/icons/user-bag.svg';
import { ReactComponent as InvoiceDollar } from '../../assets/icons/file-invoice-dollar.svg';


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
        <DashboardSmallWidget title="200K" copy="Active Staff Profiles" icon={ThreeUsers} />
        <DashboardSmallWidget title="300" copy="New profile in last 30 days" icon={GraphUp} />
        <DashboardSmallWidget title="500" copy="Recommended staff profiles" icon={UserScan} />
        <DashboardSmallWidget title="$20,000" copy="Saved on staff-on-call" icon={UserBag} />
        <DashboardSmallWidget title="$6,000" copy="Saved on hiring staff" icon={InvoiceDollar} />
      </div>

      <div className="row widgets">
        <div className="col-sm-4">
          <DashboardWidget
            title="Recommended Staff"
            toLink="#"
            badgeText="20 Profiles"
          >
            <ShortProfileCard {...profiles[4]} showMatchingScore={true} />
            <ShortProfileCard {...profiles[5]} showMatchingScore={true} />
            <ShortProfileCard {...profiles[6]} showMatchingScore={true} />
          </DashboardWidget>
        </div>
        <div className="col-sm">
          <DashboardWidget
            title="Book Staff-On-Call"
            toLink="#"
            badgeText="20 Profiles"
          >
            <ShortProfileCard {...profiles[4]} showRating={true} />
            <ShortProfileCard {...profiles[5]} showRating={true} />
            <ShortProfileCard {...profiles[6]} showRating={true} />
          </DashboardWidget>
        </div>
        <div className="col-sm-4">
          <DashboardWidget
            title="Staff Waitlist"
            toLink="#"
            badgeText="20 Profiles"
          >
            <ShortProfileCard {...profiles[4]} showMatchingScore={true} />
            <ShortProfileCard {...profiles[5]} showMatchingScore={true} />
            <ShortProfileCard {...profiles[6]} showMatchingScore={true} />
          </DashboardWidget>
        </div>

        <div className="col-sm-8">
          <FunnelWidget />
        </div>

        <div className="col-sm-4">
          <DashboardWidget
            title="Booked Staff-On-Call"
            toLink="#"
            badgeText="20 Profiles"
          >
            <ShortProfileCard {...profiles[4]} showRating={true} showVerified={true} />
            <ShortProfileCard {...profiles[5]} showRating={true} showVerified={true} />
            <ShortProfileCard {...profiles[6]} showRating={true} showVerified={true} />
          </DashboardWidget>
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
