import React from 'react';

import ShortProfileCard from './shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

const BookedStaffOnCallWidget = props => {
  const { profiles } = props;

  return (
    <DashboardWidget
      title="Booked Staff on Call"
      toLink="#"
      badgeText="20 Bookings"
    >
      <ShortProfileCard {...profiles[4]} />
      <ShortProfileCard {...profiles[5]} />
      <ShortProfileCard {...profiles[6]} />
    </DashboardWidget>
  );
};

export default BookedStaffOnCallWidget;
