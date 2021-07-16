import React from 'react';

import ShortProfileCard from '../shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget';

const StaffWaitlistWidget = props => {
  const { profiles } = props;

  return (
    <DashboardWidget
      title="Staff Waitlist"
      toLink="#"
      badgeText="10 Profiles"
    >
      <ShortProfileCard {...profiles[4]} showMatchingScore={true} />
      <ShortProfileCard {...profiles[5]} showMatchingScore={true} />
      <ShortProfileCard {...profiles[6]} showMatchingScore={true} />
    </DashboardWidget>
  );
};

export default StaffWaitlistWidget;
