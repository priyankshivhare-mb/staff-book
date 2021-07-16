import React from 'react';

import ShortProfileCard from '../shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

const BookedStaffOnCallWidget = props => {
  const { profiles } = props;

  return (
    <DashboardWidget
      title="Active Staff on Call"
      toLink="#"
      badgeText="20 Bookings"
    >
      <ShortProfileCard {...profiles[4]} showRating={true} showVerified={true} />
      <ShortProfileCard {...profiles[5]} showRating={true} showVerified={true} />
      <ShortProfileCard {...profiles[6]} showRating={true} showVerified={true} />
    </DashboardWidget>
  );
};

export default BookedStaffOnCallWidget;
