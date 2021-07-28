import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { getUserProfiles } from '../../modules/profile';
import { getCurrentUser } from '../../modules/businessCurrentUser';
import { getNotification } from '../../modules/notificationStore';
import SentModal from '../common/sentModal';
import AppointmentModal from '../common/appointmentModal';
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
  const { profiles, businessCurrentUser: currentUser } = props;
  const [ showModal, handleModal ] = useState(false);
  const [ showConfirmationModal, handleConfirmationModal ] = useState(false);
  const [ showUpdatedStaffOnCall, updateStaffOnCall ] = useState(false);
  const showNotification = (window.location.search).includes('true');

  const handleCancel = () => {
    handleModal(false);
  };

  const showAppointmentModal = () => {
    handleModal(true);
  };

  const handleSend = () => {
    handleModal(false);
    handleConfirmationModal(true);
  };

  const handleSentModal = () => {
    handleConfirmationModal(false);
    //Enable this if we want to enable dynamic name change of jennifer in upcoming staff
    //updateStaffOnCall(true);
  }

  return(
    <div className="container-fluid">

      {
        showNotification && (
          <div className="row notification">
            <div className="col-2" />
            <div className="col-8">
              <div className="accepted-notification">
                <div className="row">
                  <div className="col-1 pr-0">
                    <img src={profiles[0].img_url} className="rounded-circle"/>
                  </div>
                  <div className="col-6">
                    <div className="notification-title">
                      {profiles[0].name} accepted staff on-call request.
                    </div>
                    <div className="notification-description">
                      for Monday, August 2, 2021 at 2:00 - 3:00 PM
                    </div>

                  </div>
                  <div className="col-5">
                    <div className="button-cont float-right notification-cta">
                      <button className="btn btn-primary book-appointment d-inline-block" onClick={showAppointmentModal}>
                        Book Appointment
                      </button>
                      <i className="fa fa-times cancel"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 more-notifications"><span className="font-weight-bold">+ 2</span> Notifications</div>
            <div className="col-1"/>
          </div>
        )}

      <div className="row dashboard-heading">
        <div className="col-sm-6">
          <div className="welcome">
            <img src={currentUser.company_logo} height="50px" /> Welcome {currentUser.company}!
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
        <DashboardSmallWidget title="10K" copy="Active Staff Profiles" icon={ThreeUsers} />
        <DashboardSmallWidget title="300" copy="New profile in last 30 days" icon={GraphUp} />
        <DashboardSmallWidget title="29" copy="Staff on-call services availed" icon={UserScan} />
        <DashboardSmallWidget title="$4,600" copy="Staff on-call savings" icon={UserBag} />
        <DashboardSmallWidget title="$3,800" copy="Permanent hiring savings" icon={InvoiceDollar} />
      </div>

      <div className="row widgets">
        <div className="col-sm-4">
          <DashboardWidget
            title="Staff Recommendations"
            toLink="#"
            badgeText="21 Profiles"
          >
            <ShortProfileCard
              {...profiles[6]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
              description={true}
            />
            <ShortProfileCard
              {...profiles[5]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
              description={true}
            />
            <ShortProfileCard
              {...profiles[3]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
              description={true}
            />
          </DashboardWidget>
        </div>
        <div className="col-sm">
          <DashboardWidget
            title="Book Staff On-Call"
            toLink="/search-profiles"
            badgeText="20 Profiles"
          >
            {
              showUpdatedStaffOnCall ? <ShortProfileCard
                  {...profiles[3]}
                  showRating={true}
                  footerIcons={['wallet', 'location', 'reviews']}
              /> : <ShortProfileCard
                  {...profiles[0]}
                  showRating={true}
                  footerIcons={['wallet', 'location', 'reviews']}
              />
            }
            <ShortProfileCard
              {...profiles[1]}
              showRating={true}
              footerIcons={['wallet', 'location', 'reviews']}
            />
            <ShortProfileCard
              {...profiles[2]}
              showRating={true}
              footerIcons={['wallet', 'location', 'reviews']}
            />
          </DashboardWidget>
        </div>
        <div className="col-sm-4">
          <DashboardWidget
            title="Staff Waitlist"
            toLink="#"
            badgeText="11 Profiles"
          >
            <ShortProfileCard
              {...profiles[8]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
            />
            <ShortProfileCard
              {...profiles[4]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
            />
            <ShortProfileCard
              {...profiles[7]}
              showMatchingScore={true}
              footerIcons={['briefcase', 'wallet', 'location']}
            />
          </DashboardWidget>
        </div>

        <div className="col-sm-8">
          <FunnelWidget />
        </div>

        <div className="col-sm-4">
          <DashboardWidget
            title="Upcoming Staff On-Call"
            toLink="#"
            badgeText="4 Profiles"
          >
            {
              showUpdatedStaffOnCall ? <ShortProfileCard
                  {...profiles[0]}
                  showRating={true}
                  showVerified={true}
                  footerIcons={['wallet', 'calendar', 'time']}
              /> : <ShortProfileCard
                  {...profiles[9]}
                  showRating={true}
                  showVerified={true}
                  footerIcons={['wallet', 'calendar', 'time']}
              />
            }

            <ShortProfileCard
              {...profiles[10]}
              showRating={true}
              showVerified={true}
              footerIcons={['wallet', 'calendar', 'time']}
            />
            <ShortProfileCard
              {...profiles[11]}
              showRating={true}
              showVerified={true}
              footerIcons={['wallet', 'calendar', 'time']}
            />
          </DashboardWidget>
        </div>
      </div>
      { showModal && <AppointmentModal
          from="Eva Longbottom <eva.longbottom@power_fitness.com>"
          to="Jennifer Long <jennifer_long@gmail.com>"
          subject="Invite from Power Fitness Gym for staff booking"
          startDate="02 Aug 2021"
          time="2:00 PM - 3:00 PM"
          handleCancel={handleCancel}
          handleSend={handleSend}
          zoomLink="https://mindbodyonline.zoom.us/j/9486000"
      /> }
      { showConfirmationModal && <SentModal
          handleClose={handleSentModal}
          primaryMessage="Appointment invite sent successfully!"
      />
      }
    </div>
  );
};

const mapStateToProps = ({profile, businessCurrentUser, notification}) => ({
  profiles: profile,
  businessCurrentUser,
  notification
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          getUserProfiles,
          getCurrentUser,
          getNotification,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
